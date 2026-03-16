import React, { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
import { toaster } from "evergreen-ui";

const POINTS_MAPPING = {
  "Physical Presentation + Scopus Publication": 25,
  "Physical presentation only": 10,
  "Virtual Presentation + Scopus Publication": 20,
  "Virtual Presentation only": 5,
  "Physical listener": 3,
  "Virtual listener": 2,
  "Student Membership (10 members)": 10,
  "Professional Membership (10 members)": 15,
  "Institutional Membership (Standard)": 10,
  "Institutional Membership (Elite)": 50,
  "Research Paper": 10, // NEW: Journal Reviewer category
};

// NEW: Country code to name mapping
const COUNTRY_NAMES = {
  PH: "Philippines",
  ID: "Indonesia",
  US: "United States",
  GB: "United Kingdom",
  CA: "Canada",
  AU: "Australia",
  IN: "India",
  SG: "Singapore",
  MY: "Malaysia",
  TH: "Thailand",
  VN: "Vietnam",
  JP: "Japan",
  KR: "South Korea",
  CN: "China",
  DE: "Germany",
  FR: "France",
  IT: "Italy",
  ES: "Spain",
  NL: "Netherlands",
  BE: "Belgium",
  CH: "Switzerland",
  AT: "Austria",
  SE: "Sweden",
  NO: "Norway",
  DK: "Denmark",
  FI: "Finland",
  PL: "Poland",
  CZ: "Czech Republic",
  HU: "Hungary",
  RO: "Romania",
  BG: "Bulgaria",
  GR: "Greece",
  PT: "Portugal",
  IE: "Ireland",
  NZ: "New Zealand",
  ZA: "South Africa",
  BR: "Brazil",
  AR: "Argentina",
  MX: "Mexico",
  CL: "Chile",
  CO: "Colombia",
  PE: "Peru",
  AE: "United Arab Emirates",
  SA: "Saudi Arabia",
  QA: "Qatar",
  KW: "Kuwait",
  BH: "Bahrain",
  OM: "Oman",
  EG: "Egypt",
  TR: "Turkey",
  IL: "Israel",
  PK: "Pakistan",
  BD: "Bangladesh",
  LK: "Sri Lanka",
  NP: "Nepal",
  MM: "Myanmar",
  KH: "Cambodia",
  LA: "Laos",
  BN: "Brunei",
  TW: "Taiwan",
  HK: "Hong Kong",
  MO: "Macau",
  RU: "Russia",
  UA: "Ukraine",
  KZ: "Kazakhstan",
  UZ: "Uzbekistan",
  NG: "Nigeria",
  KE: "Kenya",
  GH: "Ghana",
  ET: "Ethiopia",
  TZ: "Tanzania",
  UG: "Uganda",
  ZW: "Zimbabwe",
  ZM: "Zambia",
  MW: "Malawi",
  MZ: "Mozambique",
  AO: "Angola",
  CM: "Cameroon",
  CI: "Côte d'Ivoire",
  SN: "Senegal",
  MA: "Morocco",
  DZ: "Algeria",
  TN: "Tunisia",
  LY: "Libya",
  SD: "Sudan",
  JO: "Jordan",
  LB: "Lebanon",
  IQ: "Iraq",
  IR: "Iran",
  AF: "Afghanistan",
};

// NEW: Helper function to get full country name
const getCountryName = (countryCode) => {
  if (!countryCode) return "";
  return COUNTRY_NAMES[countryCode] || countryCode;
};

const AdminPanel = () => {
  const [ambassadors, setAmbassadors] = useState([]);
  const [selectedAmbassador, setSelectedAmbassador] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [updatingCoupon, setUpdatingCoupon] = useState(false);

  // NEW: Edit mode state
  const [isEditMode, setIsEditMode] = useState(false);
  const [editForm, setEditForm] = useState({
    title: "",
    name: "",
    email: "",
    phoneNumber: "",
    country: "",
    region: "",
    isActive: true,
    totalPoints: 0,
  });
  const [editingProfilePhoto, setEditingProfilePhoto] = useState(null);
  const [updatingProfile, setUpdatingProfile] = useState(false);

  // NEW: Delete confirmation state
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [pointEntries, setPointEntries] = useState([
    { id: Date.now(), category: "", numberOfPeople: 0 },
  ]);
  const [addingPoints, setAddingPoints] = useState(false);

  const totalPointsToAdd = useMemo(() => {
    let total = 0;
    pointEntries.forEach((entry) => {
      if (entry.category && entry.numberOfPeople > 0) {
        const pointsPerPerson = POINTS_MAPPING[entry.category] || 0;
        total += pointsPerPerson * entry.numberOfPeople;
      }
    });
    return total;
  }, [pointEntries]);

  const newTotalPoints = useMemo(() => {
    return selectedAmbassador
      ? selectedAmbassador.totalPoints + totalPointsToAdd
      : 0;
  }, [selectedAmbassador, totalPointsToAdd]);

  useEffect(() => {
    fetchAmbassadors();
  }, []);

  const fetchAmbassadors = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/ambassadors`,
      );
      const sortedAmbassadors = response.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );
      setAmbassadors(sortedAmbassadors);
    } catch (error) {
      console.error("Error fetching ambassadors:", error);
      toaster.danger("Error loading ambassadors");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectAmbassador = useCallback((ambassador) => {
    setSelectedAmbassador(ambassador);
    setCouponCode(ambassador.couponCode || "");
    setPointEntries([{ id: Date.now(), category: "", numberOfPeople: 0 }]);
    setIsEditMode(false);
    setShowDeleteConfirm(false);

    // Initialize edit form with ambassador data
    setEditForm({
      title: ambassador.title,
      name: ambassador.name,
      email: ambassador.email,
      phoneNumber: ambassador.phoneNumber,
      country: ambassador.country,
      region: ambassador.region || "",
      isActive: ambassador.isActive !== undefined ? ambassador.isActive : true,
      totalPoints: ambassador.totalPoints,
    });
    setEditingProfilePhoto(null);
  }, []);

  // NEW: Handle edit mode toggle
  const handleEditModeToggle = () => {
    if (isEditMode) {
      // Cancel edit - reset form
      setEditForm({
        title: selectedAmbassador.title,
        name: selectedAmbassador.name,
        email: selectedAmbassador.email,
        phoneNumber: selectedAmbassador.phoneNumber,
        country: selectedAmbassador.country,
        region: selectedAmbassador.region || "",
        isActive:
          selectedAmbassador.isActive !== undefined
            ? selectedAmbassador.isActive
            : true,
        totalPoints: selectedAmbassador.totalPoints,
      });
      setEditingProfilePhoto(null);
    }
    setIsEditMode(!isEditMode);
  };

  // NEW: Handle edit form changes
  const handleEditFormChange = (field, value) => {
    setEditForm((prev) => ({ ...prev, [field]: value }));
  };

  // NEW: Handle profile photo change
  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        toaster.danger("File size must be less than 5MB");
        return;
      }
      setEditingProfilePhoto(file);
    }
  };

  // NEW: Handle update profile
  const handleUpdateProfile = async () => {
    if (!editForm.name.trim() || !editForm.email.trim()) {
      toaster.danger("Name and email are required");
      return;
    }

    setUpdatingProfile(true);
    try {
      const formData = new FormData();
      formData.append("title", editForm.title);
      formData.append("name", editForm.name);
      formData.append("email", editForm.email);
      formData.append("phoneNumber", editForm.phoneNumber);
      formData.append("country", editForm.country);
      formData.append("region", editForm.region);
      formData.append("isActive", editForm.isActive);
      formData.append("totalPoints", editForm.totalPoints);

      if (editingProfilePhoto) {
        formData.append("profilePhoto", editingProfilePhoto);
      }

      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/admin/ambassador/${selectedAmbassador._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      toaster.success("Ambassador profile updated successfully");

      // Update local state
      const updatedAmbassador = response.data.ambassador;
      setAmbassadors(
        ambassadors.map((amb) =>
          amb._id === selectedAmbassador._id ? updatedAmbassador : amb,
        ),
      );
      setSelectedAmbassador(updatedAmbassador);
      setIsEditMode(false);
      setEditingProfilePhoto(null);
    } catch (error) {
      console.error("Error updating profile:", error);
      toaster.danger(error.response?.data?.message || "Error updating profile");
    } finally {
      setUpdatingProfile(false);
    }
  };

  // NEW: Handle delete ambassador
  const handleDeleteAmbassador = async () => {
    setDeleting(true);
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/admin/ambassador/${selectedAmbassador._id}`,
      );

      toaster.success("Ambassador deleted successfully");

      // Remove from local state
      setAmbassadors(
        ambassadors.filter((amb) => amb._id !== selectedAmbassador._id),
      );
      setSelectedAmbassador(null);
      setShowDeleteConfirm(false);
    } catch (error) {
      console.error("Error deleting ambassador:", error);
      toaster.danger("Error deleting ambassador");
    } finally {
      setDeleting(false);
    }
  };

  const handleUpdateCoupon = async () => {
    if (!couponCode.trim()) {
      toaster.danger("Please enter a coupon code");
      return;
    }

    setUpdatingCoupon(true);
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/admin/ambassador/${selectedAmbassador._id}/coupon`,
        { couponCode },
      );
      toaster.success("Coupon code updated successfully");
      setAmbassadors(
        ambassadors.map((amb) =>
          amb._id === selectedAmbassador._id ? { ...amb, couponCode } : amb,
        ),
      );
      setSelectedAmbassador({ ...selectedAmbassador, couponCode });
    } catch (error) {
      console.error("Error updating coupon:", error);
      toaster.danger("Error updating coupon code");
    } finally {
      setUpdatingCoupon(false);
    }
  };

  const addPointEntry = useCallback(() => {
    setPointEntries((prev) => [
      ...prev,
      { id: Date.now() + Math.random(), category: "", numberOfPeople: 0 },
    ]);
  }, []);

  const removePointEntry = useCallback((id) => {
    setPointEntries((prev) =>
      prev.length > 1 ? prev.filter((entry) => entry.id !== id) : prev,
    );
  }, []);

  const updatePointEntry = useCallback((id, field, value) => {
    setPointEntries((prev) =>
      prev.map((entry) => {
        if (entry.id !== id) return entry;

        if (field === "numberOfPeople") {
          const numValue = parseInt(value, 10);
          return { ...entry, [field]: isNaN(numValue) ? 0 : numValue };
        }

        return { ...entry, [field]: value };
      }),
    );
  }, []);

  const getEntryPoints = useCallback((entry) => {
    if (!entry.category || !entry.numberOfPeople || entry.numberOfPeople <= 0)
      return 0;
    const pointsPerPerson = POINTS_MAPPING[entry.category] || 0;
    return pointsPerPerson * entry.numberOfPeople;
  }, []);

  const handleAddPoints = async () => {
    const validEntries = pointEntries.filter(
      (entry) => entry.category && entry.numberOfPeople > 0,
    );

    if (validEntries.length === 0) {
      toaster.danger("Please add at least one valid entry");
      return;
    }

    setAddingPoints(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/ambassador/${selectedAmbassador._id}/add-points`,
        {
          entries: validEntries.map((entry) => ({
            category: entry.category,
            numberOfPeople: entry.numberOfPeople,
          })),
        },
      );

      toaster.success(response.data.message);
      await fetchAmbassadors();

      const updatedAmbassador = ambassadors.find(
        (amb) => amb._id === selectedAmbassador._id,
      );
      if (updatedAmbassador) {
        setSelectedAmbassador(updatedAmbassador);
      }

      setPointEntries([{ id: Date.now(), category: "", numberOfPeople: 0 }]);
    } catch (error) {
      console.error("Error adding points:", error);
      toaster.danger("Error adding points");
    } finally {
      setAddingPoints(false);
    }
  };

  const filteredAmbassadors = useMemo(() => {
    return ambassadors.filter((ambassador) => {
      const query = searchQuery.toLowerCase().trim();
      if (!query) return true;

      // NEW: Include full country name in search
      const countryName = getCountryName(ambassador.country).toLowerCase();

      return (
        ambassador.name.toLowerCase().includes(query) ||
        ambassador.email.toLowerCase().includes(query) ||
        ambassador.phoneNumber.includes(query) ||
        ambassador.country.toLowerCase().includes(query) ||
        countryName.includes(query) ||
        (ambassador.couponCode &&
          ambassador.couponCode.toLowerCase().includes(query)) ||
        ambassador.totalPoints.toString().includes(query)
      );
    });
  }, [ambassadors, searchQuery]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[400px]">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-purple-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Loading ambassadors...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto p-5 font-sans bg-gray-50 min-h-screen">
      <div className="p-6 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 rounded-2xl text-white mb-8 shadow-lg">
        <div className="m-0 text-4xl text-center py-8 font-bold text-amber-500">
          Ambassador Management
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-h-[calc(100vh-150px)] overflow-hidden flex flex-col">
          <div className="mb-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="m-0 text-gray-800 text-xl font-bold">
                Ambassadors
                <span className="ml-2 text-sm font-normal text-gray-500">
                  ({filteredAmbassadors.length} of {ambassadors.length})
                </span>
              </h2>
            </div>

            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, email, phone, country, or coupon code..."
                className="w-full p-3 pl-11 pr-10 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
              />
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredAmbassadors.length === 0 ? (
              <div className="text-center text-gray-400 py-10 px-5">
                <svg
                  className="w-16 h-16 mx-auto mb-3 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <p className="italic">
                  {searchQuery
                    ? "No ambassadors match your search"
                    : "No ambassadors registered yet"}
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {filteredAmbassadors.map((ambassador) => (
                  <div
                    key={ambassador._id}
                    className={`flex gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                      selectedAmbassador?._id === ambassador._id
                        ? "border-purple-500 bg-purple-50 shadow-md"
                        : "border-gray-200 hover:border-purple-300 hover:bg-purple-25 hover:shadow-sm"
                    }`}
                    onClick={() => handleSelectAmbassador(ambassador)}
                  >
                    <img
                      src={ambassador.profilePhoto}
                      alt={ambassador.name}
                      className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2 border-white shadow-sm"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="m-0 mb-1 text-base font-semibold text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
                        {ambassador.title}. {ambassador.name}
                      </h3>
                      <p className="m-0 text-sm text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
                        {ambassador.email}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {ambassador.totalPoints} pts
                        </span>
                        {ambassador.couponCode && (
                          <span className="inline-flex items-center px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            {ambassador.couponCode}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {selectedAmbassador ? (
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-h-[calc(100vh-150px)] overflow-y-auto">
            {/* NEW: Action Buttons at the top */}
            <div className="flex gap-3 mb-6 flex-wrap">
              <button
                onClick={handleEditModeToggle}
                className={`flex-1 min-w-[140px] px-4 py-2.5 border-2 rounded-xl cursor-pointer font-semibold text-sm transition-all duration-200 ${
                  isEditMode
                    ? "bg-gray-500 text-white border-gray-500 hover:bg-gray-600"
                    : "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                }`}
              >
                {isEditMode ? "✕ Cancel Edit" : "✏️ Edit Profile"}
              </button>
              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="flex-1 min-w-[140px] px-4 py-2.5 border-2 border-red-600 bg-red-600 text-white rounded-xl cursor-pointer font-semibold text-sm transition-all duration-200 hover:bg-red-700 hover:border-red-700"
              >
                🗑️ Delete Ambassador
              </button>
            </div>

            {/* NEW: Delete Confirmation Modal */}
            {showDeleteConfirm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Delete Ambassador?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Are you sure you want to delete{" "}
                      <strong>{selectedAmbassador.name}</strong>?
                    </p>
                    <p className="text-sm text-red-600 font-semibold">
                      This action cannot be undone. All data including points
                      history and redemption history will be permanently
                      deleted.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowDeleteConfirm(false)}
                      disabled={deleting}
                      className="flex-1 px-4 py-3 border-2 border-gray-300 bg-white text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all disabled:opacity-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleDeleteAmbassador}
                      disabled={deleting}
                      className="flex-1 px-4 py-3 border-none bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {deleting ? "Deleting..." : "Yes, Delete"}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Profile Section - Modified for Edit Mode */}
            <div className="flex gap-5 pb-6 border-b-2 border-gray-100 mb-8 flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
              <div className="relative">
                <img
                  src={
                    editingProfilePhoto
                      ? URL.createObjectURL(editingProfilePhoto)
                      : selectedAmbassador.profilePhoto
                  }
                  alt={selectedAmbassador.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-purple-500 flex-shrink-0 shadow-lg"
                />
                {isEditMode && (
                  <label className="absolute bottom-0 right-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-all shadow-lg">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleProfilePhotoChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
              <div className="flex-1">
                {isEditMode ? (
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <select
                        value={editForm.title}
                        onChange={(e) =>
                          handleEditFormChange("title", e.target.value)
                        }
                        className="p-2 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                      >
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Ms">Ms</option>
                        <option value="Dr">Dr</option>
                        <option value="Prof">Prof</option>
                        <option value="Rev">Rev</option>
                        <option value="Hon">Hon</option>
                      </select>
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) =>
                          handleEditFormChange("name", e.target.value)
                        }
                        placeholder="Full Name"
                        className="flex-1 p-2 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) =>
                        handleEditFormChange("email", e.target.value)
                      }
                      placeholder="Email"
                      className="w-full p-2 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                    />
                    <input
                      type="tel"
                      value={editForm.phoneNumber}
                      onChange={(e) =>
                        handleEditFormChange("phoneNumber", e.target.value)
                      }
                      placeholder="Phone Number"
                      className="w-full p-2 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                    />
                    {/* CHANGED: Display full country name in edit mode (read-only) */}
                    <input
                      type="text"
                      value={getCountryName(editForm.country)}
                      readOnly
                      placeholder="Country"
                      className="w-full p-2 border-2 border-gray-200 rounded-lg text-sm bg-gray-50 cursor-not-allowed"
                      title={`Country cannot be edited. Current code: ${editForm.country}`}
                    />
                    <input
                      type="text"
                      value={editForm.region}
                      onChange={(e) =>
                        handleEditFormChange("region", e.target.value)
                      }
                      placeholder="Region (optional)"
                      className="w-full p-2 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                    />
                    <div className="flex gap-3 items-center">
                      <label className="text-sm font-semibold text-gray-700">
                        Total Points:
                      </label>
                      <input
                        type="number"
                        value={editForm.totalPoints}
                        onChange={(e) =>
                          handleEditFormChange(
                            "totalPoints",
                            parseInt(e.target.value) || 0,
                          )
                        }
                        className="w-32 p-2 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="flex gap-3 items-center">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={editForm.isActive}
                          onChange={(e) =>
                            handleEditFormChange("isActive", e.target.checked)
                          }
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm font-semibold text-gray-700">
                          Account Active
                        </span>
                      </label>
                    </div>
                    <button
                      onClick={handleUpdateProfile}
                      disabled={updatingProfile}
                      className="w-full px-4 py-3 border-none rounded-xl cursor-pointer font-bold text-sm transition-all duration-200 bg-green-600 text-white hover:bg-green-700 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {updatingProfile ? "Updating..." : "💾 Save Changes"}
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="m-0 mb-2 text-gray-800 text-2xl font-bold">
                      {selectedAmbassador.title}. {selectedAmbassador.name}
                    </h2>
                    <div className="space-y-1 mb-3">
                      <p className="my-1 text-gray-600 text-sm flex items-center gap-2 justify-center lg:justify-start">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        {selectedAmbassador.email}
                      </p>
                      <p className="my-1 text-gray-600 text-sm flex items-center gap-2 justify-center lg:justify-start">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        {selectedAmbassador.phoneNumber}
                      </p>
                      {/* CHANGED: Display full country name instead of code */}
                      <p className="my-1 text-gray-600 text-sm flex items-center gap-2 justify-center lg:justify-start">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {getCountryName(selectedAmbassador.country)}
                      </p>
                      {selectedAmbassador.region && (
                        <p className="my-1 text-gray-600 text-sm flex items-center gap-2 justify-center lg:justify-start">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Region: {selectedAmbassador.region}
                        </p>
                      )}
                      <p className="my-1 text-sm flex items-center gap-2 justify-center lg:justify-start">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                            selectedAmbassador.isActive
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {selectedAmbassador.isActive
                            ? "✓ Active"
                            : "✕ Inactive"}
                        </span>
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 py-2.5 px-5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl text-white shadow-md">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-medium">Total Points:</span>
                      <strong className="text-xl font-bold">
                        {selectedAmbassador.totalPoints}
                      </strong>
                    </div>
                  </>
                )}
              </div>
            </div>

            {!isEditMode && (
              <>
                <div className="mb-8 p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                  <h3 className="m-0 mb-4 text-gray-800 text-lg font-bold flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Coupon Code
                  </h3>
                  <div className="flex gap-3 items-center flex-col md:flex-row">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) =>
                        setCouponCode(e.target.value.toUpperCase())
                      }
                      placeholder="Enter coupon code (e.g., AMB2024XYZ)"
                      className="flex-1 w-full md:w-auto p-3.5 border-2 border-gray-300 rounded-xl text-sm uppercase font-semibold tracking-wide focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
                    />
                    <button
                      onClick={handleUpdateCoupon}
                      disabled={updatingCoupon}
                      className="px-6 py-3.5 border-none rounded-xl cursor-pointer font-semibold text-sm transition-all duration-200 bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none w-full md:w-auto"
                    >
                      {updatingCoupon ? "Updating..." : "Update Coupon"}
                    </button>
                  </div>
                </div>

                <div className="mb-8 p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                  <h3 className="m-0 mb-5 text-gray-800 text-lg font-bold flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Add Credit Points
                  </h3>

                  {pointEntries.map((entry) => (
                    <div
                      key={entry.id}
                      className="grid grid-cols-1 lg:grid-cols-[40px_1fr_150px_120px_40px] gap-3 items-center mb-4 p-4 bg-white rounded-xl border-2 border-gray-200 shadow-sm hover:border-purple-200 transition-colors"
                    >
                      <div className="w-9 h-9 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md justify-self-start lg:justify-self-auto">
                        {pointEntries.indexOf(entry) + 1}
                      </div>

                      <select
                        value={entry.category}
                        onChange={(e) =>
                          updatePointEntry(entry.id, "category", e.target.value)
                        }
                        className="w-full p-3 border-2 border-gray-300 rounded-xl text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
                      >
                        <option value="">Select Category</option>
                        <optgroup label="International Conference">
                          <option value="Physical Presentation + Scopus Publication">
                            Physical Presentation + Scopus Publication (25 pts)
                          </option>
                          <option value="Physical presentation only">
                            Physical presentation only (10 pts)
                          </option>
                          <option value="Virtual Presentation + Scopus Publication">
                            Virtual Presentation + Scopus Publication (20 pts)
                          </option>
                          <option value="Virtual Presentation only">
                            Virtual Presentation only (5 pts)
                          </option>
                          <option value="Physical listener">
                            Physical listener (3 pts)
                          </option>
                          <option value="Virtual listener">
                            Virtual listener (2 pts)
                          </option>
                        </optgroup>
                        <optgroup label="Membership">
                          <option value="Student Membership (10 members)">
                            Student Membership - 10 members (10 pts)
                          </option>
                          <option value="Professional Membership (10 members)">
                            Professional Membership - 10 members (15 pts)
                          </option>
                          <option value="Institutional Membership (Standard)">
                            Institutional Membership - Standard (10 pts)
                          </option>
                          <option value="Institutional Membership (Elite)">
                            Institutional Membership - Elite (50 pts)
                          </option>
                        </optgroup>
                        <optgroup label="Journal Reviewer">
                          <option value="Research Paper">
                            Research Paper (10 pts)
                          </option>
                        </optgroup>
                      </select>

                      <select
                        value={entry.numberOfPeople}
                        onChange={(e) =>
                          updatePointEntry(
                            entry.id,
                            "numberOfPeople",
                            e.target.value,
                          )
                        }
                        className="w-full p-3 border-2 border-gray-300 rounded-xl text-sm text-center font-semibold focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
                      >
                        <option value="0">Select Number</option>
                        {[...Array(100)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>

                      <div className="font-bold text-green-600 text-sm text-right lg:text-right text-left">
                        {getEntryPoints(entry) > 0
                          ? `= ${getEntryPoints(entry)} pts`
                          : ""}
                      </div>

                      {pointEntries.length > 1 && (
                        <button
                          onClick={() => removePointEntry(entry.id)}
                          className="w-9 h-9 border-none bg-red-500 text-white rounded-full cursor-pointer text-xl font-bold leading-none transition-all duration-200 hover:bg-red-600 hover:shadow-lg hover:scale-110 justify-self-start lg:justify-self-auto"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}

                  <button
                    onClick={addPointEntry}
                    className="px-5 py-3 border-2 border-purple-600 rounded-xl cursor-pointer font-semibold text-sm transition-all duration-200 bg-white text-purple-600 hover:bg-purple-50 hover:shadow-md"
                  >
                    + Add Another Entry
                  </button>

                  <div className="bg-white p-5 rounded-xl border-2 border-gray-200 mt-5 shadow-sm">
                    <div className="flex justify-between py-2.5 border-b border-gray-200 text-base">
                      <span className="text-gray-600">
                        Current Total Points:
                      </span>
                      <strong className="text-gray-800">
                        {selectedAmbassador.totalPoints}
                      </strong>
                    </div>
                    <div className="flex justify-between py-2.5 border-b border-gray-200 text-base">
                      <span className="text-gray-600">Points to Add:</span>
                      <strong className="text-green-600">
                        +{totalPointsToAdd}
                      </strong>
                    </div>
                    <div className="flex justify-between pt-4 border-t-2 border-purple-600 text-lg font-bold mt-2">
                      <span className="text-gray-800">New Total:</span>
                      <strong className="text-purple-600">
                        {newTotalPoints}
                      </strong>
                    </div>
                  </div>

                  <button
                    onClick={handleAddPoints}
                    disabled={addingPoints || totalPointsToAdd === 0}
                    className="w-full px-6 py-4 border-none rounded-xl cursor-pointer font-bold text-base mt-5 transition-all duration-200 bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:from-gray-400 disabled:to-gray-400"
                  >
                    {addingPoints ? "Adding Points..." : "Confirm & Add Points"}
                  </button>
                </div>

                {selectedAmbassador.pointsHistory &&
                  selectedAmbassador.pointsHistory.length > 0 && (
                    <div className="mb-8 p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                      <h3 className="m-0 mb-5 text-gray-800 text-lg font-bold flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-purple-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Points History
                      </h3>
                      <div className="max-h-96 overflow-y-auto">
                        {selectedAmbassador.pointsHistory
                          .sort((a, b) => new Date(b.date) - new Date(a.date))
                          .map((item, index) => (
                            <div
                              key={index}
                              className="grid grid-cols-1 lg:grid-cols-[120px_1fr_100px] gap-4 p-4 bg-white rounded-xl mb-3 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                            >
                              <div className="text-gray-500 text-sm font-medium">
                                {new Date(item.date).toLocaleDateString()}
                              </div>
                              <div className="flex flex-col gap-1">
                                <strong className="text-gray-800 text-sm font-semibold">
                                  {item.category}
                                </strong>
                                <span className="text-gray-600 text-xs">
                                  {item.numberOfPeople} people ×{" "}
                                  {item.pointsPerPerson} pts
                                </span>
                              </div>
                              <div className="text-right lg:text-right text-left font-bold text-green-600 text-base">
                                +{item.totalPoints}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
              </>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex items-center justify-center min-h-[400px]">
            <div className="text-center text-gray-400">
              <svg
                className="w-24 h-24 mx-auto mb-4 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <p className="text-lg font-medium">Select an ambassador</p>
              <p className="text-sm mt-2">
                Choose an ambassador from the list to view details and manage
                their account
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
