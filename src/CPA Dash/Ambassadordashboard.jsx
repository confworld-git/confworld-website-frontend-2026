import React, { useState, useEffect } from "react";
import axios from "axios";
import { toaster } from "evergreen-ui";
import { useNavigate } from "react-router-dom";
import CreditPointDisplay from "./creditsDisplay";

// NEW: Country code to name mapping
const COUNTRY_NAMES = {
  "PH": "Philippines",
  "ID": "Indonesia",
  "US": "United States",
  "GB": "United Kingdom",
  "CA": "Canada",
  "AU": "Australia",
  "IN": "India",
  "SG": "Singapore",
  "MY": "Malaysia",
  "TH": "Thailand",
  "VN": "Vietnam",
  "JP": "Japan",
  "KR": "South Korea",
  "CN": "China",
  "DE": "Germany",
  "FR": "France",
  "IT": "Italy",
  "ES": "Spain",
  "NL": "Netherlands",
  "BE": "Belgium",
  "CH": "Switzerland",
  "AT": "Austria",
  "SE": "Sweden",
  "NO": "Norway",
  "DK": "Denmark",
  "FI": "Finland",
  "PL": "Poland",
  "CZ": "Czech Republic",
  "HU": "Hungary",
  "RO": "Romania",
  "BG": "Bulgaria",
  "GR": "Greece",
  "PT": "Portugal",
  "IE": "Ireland",
  "NZ": "New Zealand",
  "ZA": "South Africa",
  "BR": "Brazil",
  "AR": "Argentina",
  "MX": "Mexico",
  "CL": "Chile",
  "CO": "Colombia",
  "PE": "Peru",
  "AE": "United Arab Emirates",
  "SA": "Saudi Arabia",
  "QA": "Qatar",
  "KW": "Kuwait",
  "BH": "Bahrain",
  "OM": "Oman",
  "EG": "Egypt",
  "TR": "Turkey",
  "IL": "Israel",
  "PK": "Pakistan",
  "BD": "Bangladesh",
  "LK": "Sri Lanka",
  "NP": "Nepal",
  "MM": "Myanmar",
  "KH": "Cambodia",
  "LA": "Laos",
  "BN": "Brunei",
  "TW": "Taiwan",
  "HK": "Hong Kong",
  "MO": "Macau",
  "RU": "Russia",
  "UA": "Ukraine",
  "KZ": "Kazakhstan",
  "UZ": "Uzbekistan",
  "NG": "Nigeria",
  "KE": "Kenya",
  "GH": "Ghana",
  "ET": "Ethiopia",
  "TZ": "Tanzania",
  "UG": "Uganda",
  "ZW": "Zimbabwe",
  "ZM": "Zambia",
  "MW": "Malawi",
  "MZ": "Mozambique",
  "AO": "Angola",
  "CM": "Cameroon",
  "CI": "Côte d'Ivoire",
  "SN": "Senegal",
  "MA": "Morocco",
  "DZ": "Algeria",
  "TN": "Tunisia",
  "LY": "Libya",
  "SD": "Sudan",
  "JO": "Jordan",
  "LB": "Lebanon",
  "IQ": "Iraq",
  "IR": "Iran",
  "AF": "Afghanistan"
};

// NEW: Helper function to get full country name
const getCountryName = (countryCode) => {
  if (!countryCode) return "";
  return COUNTRY_NAMES[countryCode] || countryCode;
};

const AmbassadorDashboard = () => {
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pointsToRedeem, setPointsToRedeem] = useState("");
  const [redeeming, setRedeeming] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    const token = localStorage.getItem("ambassadorToken");

    if (!token) {
      navigate("/ambassador/login");
      return;
    }

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/ambassador/dashboard`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setDashboardData(response.data);
    } catch (error) {
      console.error("Dashboard error:", error);
      if (error.response?.status === 401) {
        localStorage.removeItem("ambassadorToken");
        localStorage.removeItem("ambassadorData");
        navigate("/ambassador/login");
        toaster.danger("Session expired. Please login again.");
      } else {
        toaster.danger("Error loading dashboard");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("ambassadorToken");
    localStorage.removeItem("ambassadorData");
    navigate("/ambassador/login");
    toaster.success("Logged out successfully");
  };

  const handleRedeemPoints = async () => {
    const points = parseInt(pointsToRedeem);

    if (!points || points < 250) {
      toaster.danger("Minimum 250 points required for redemption");
      return;
    }

    if (points > dashboardData.totalPoints) {
      toaster.danger("Insufficient points");
      return;
    }

    setRedeeming(true);
    const token = localStorage.getItem("ambassadorToken");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/ambassador/redeem-points`,
        { pointsToRedeem: points },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      // TEMPORARY: Log the response to see what's happening
      console.log("✅ SUCCESS Response:", response);
      console.log("Status:", response.status);
      console.log("Data:", response.data);

      // Success message
      toaster.success(response.data.message || "Points redeemed successfully!");

      // Reset input
      setPointsToRedeem("");

      // Refresh dashboard data
      await fetchDashboardData();

      // Show celebration
      setShowCelebration(true);

      // Hide celebration after 4 seconds
      setTimeout(() => {
        setShowCelebration(false);
      }, 4000);
    } catch (error) {
      console.error("Redemption error:", error);
      toaster.danger(
        error.response?.data?.message || "Error processing redemption",
      );
    } finally {
      setRedeeming(false);
    }
  };

  const handleRedeemAll = () => {
    setPointsToRedeem(dashboardData.totalPoints.toString());
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-purple-50 to-white">
        <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 font-medium">Loading dashboard...</p>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-purple-50 to-white">
        <div className="text-center">
          <svg
            className="w-20 h-20 mx-auto mb-4 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-xl text-gray-700 font-semibold">
            Error loading dashboard
          </p>
        </div>
      </div>
    );
  }

  // Calculate if user can redeem (at least 250 points)
  const canRedeem = dashboardData.totalPoints >= 250;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto p-5 font-sans">
        {/* Header */}
<div className="relative mb-8 bg-teal-500 rounded-2xl shadow-xl overflow-hidden">
  {/* Subtle top accent */}
 
  
  {/* Subtle background pattern */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0" style={{
      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
      backgroundSize: '32px 32px'
    }}></div>
  </div>
  
  
  <div className="relative z-10 p-6 md:p-8">
    {/* Top Section - Logo & Logout */}
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
          <div className="relative bg-white p-2.5 rounded-xl shadow-lg">
            <img 
              src="/logo.png" 
              alt="CERADA Logo" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
          </div>
        </div>
        
        {/* Organization Name */}
        <div>
          
          <p className="text-md md:text-xl text-white  mt-0.5 font-bold">
            CONFWORLD EDUCATIONAL RESEARCH AND DEVELOPMENT ASSOCIATION
          </p>
        </div>
      </div>
      
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-white hover:bg-cyan-700 text-cyan-800 hover:text-white  px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 border border-slate-700 hover:border-slate-600 cursor-pointer group"
      >
        <svg 
          className="w-4 h-4 transition-transform group-hover:translate-x-0.5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        Logout
      </button>
    </div>

    {/* Bottom Section - Dashboard Title & Welcome */}
    <div className="space-y-3">
      <div className="text-2xl text-center md:text-3xl lg:text-4xl font-bold m-0 leading-tight text-amber-400 pb-8">
        CERADA Professional Ambassador Dashboard
      </div>
      <div className="flex items-center gap-2">
        <div className="h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent"></div>
        <p className="text-white text-base md:text-xl font-medium m-0">
          CERADA welcomes you! {" "}
          <span className="font-bold text-transparent bg-clip-text bg-white">
            {dashboardData.title}. {dashboardData.name.split(" ")[0]}
          </span>
          {" "}👋
        </p>
        <div className="h-px flex-1 bg-gradient-to-l from-slate-700 to-transparent"></div>
      </div>
    </div>
  </div>
</div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
  {/* Profile Section */}
  <div
    className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative overflow-hidden"
    data-aos="fade-up"
  >
    {/* Subtle background decoration */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-50 to-purple-50 rounded-full -mr-32 -mt-32 opacity-50"></div>
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-50 to-cyan-50 rounded-full -ml-24 -mb-24 opacity-50"></div>
    
    <div className="relative z-10">
      {/* Header with avatar and name */}
      <div className="flex gap-5 items-center mb-6 pb-5 border-b border-gray-100">
        <div className="flex-shrink-0 relative">
          {/* Glow effect behind avatar */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full blur-xl opacity-30 scale-110"></div>
          <img
            src={dashboardData.profilePhoto}
            alt={dashboardData.name}
            className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-2xl ring-4 ring-cyan-100"
          />
          <div className="absolute -bottom-1 -right-1 bg-gradient-to-br from-cyan-600 to-cyan-800 text-white rounded-full p-2 shadow-xl ring-4 ring-white">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 truncate">
            {dashboardData.title}. {dashboardData.name}
          </h2>
          <p className="text-sm text-gray-500 font-medium">Professional Ambassador</p>
        </div>
      </div>

      {/* Contact Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Email */}
        <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-cyan-50 to-white rounded-xl border border-cyan-100 hover:border-cyan-200 transition-all group">
          <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-2.5 rounded-lg shadow-md group-hover:scale-110 transition-transform">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-gray-500 mb-1">Email Address</p>
            <p className="text-sm font-medium text-gray-800 truncate">{dashboardData.email}</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100 hover:border-purple-200 transition-all group">
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-2.5 rounded-lg shadow-md group-hover:scale-110 transition-transform">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-gray-500 mb-1">Phone Number</p>
            <p className="text-sm font-medium text-gray-800">{dashboardData.phoneNumber}</p>
          </div>
        </div>

        {/* Country - CHANGED: Display full country name */}
        <div className={`flex items-start gap-3 p-4 bg-gradient-to-br from-emerald-50 to-white rounded-xl border border-emerald-100 hover:border-emerald-200 transition-all group ${dashboardData.region ? '' : 'md:col-span-2'}`}>
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-2.5 rounded-lg shadow-md group-hover:scale-110 transition-transform">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-gray-500 mb-1">Country</p>
            <p className="text-sm font-medium text-gray-800">{getCountryName(dashboardData.country)}</p>
          </div>
        </div>

        {/* Region - Only shown if region exists */}
        {dashboardData.region && (
          <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-indigo-50 to-white rounded-xl border border-indigo-100 hover:border-indigo-200 transition-all group">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-2.5 rounded-lg shadow-md group-hover:scale-110 transition-transform">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-500 mb-1">Region</p>
              <p className="text-sm font-medium text-gray-800">{dashboardData.region}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>

  {/* Points Summary Card */}
  <div
    className="bg-gradient-to-br from-teal-700 via-teal-800 to-teal-700 rounded-2xl p-8 shadow-2xl text-white relative overflow-hidden"
    data-aos="fade-up"
  >
    {/* Decorative elements */}
    <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -ml-16 -mb-16"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl"></div>
    
    {/* Sparkle decorations */}
    <div className="absolute top-6 right-6 w-2 h-2 bg-white rounded-full opacity-40 animate-pulse"></div>
    <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-white rounded-full opacity-30 animate-pulse delay-100"></div>
    <div className="absolute top-20 left-12 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse delay-200"></div>
    
    <div className="relative z-10 text-center h-full flex flex-col justify-center">
      <div className="mb-6">
        {/* Icon with glow */}
        <div className="relative inline-block mb-4">
          <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-40"></div>
          <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
            <svg
              className="w-12 h-12 mx-auto text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
        
        <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider text-cyan-100">
          Total Credit Points
        </h3>
        
        {/* Points display */}
        <div className="mb-4">
          <div className="text-6xl md:text-7xl font-black mb-2 bg-gradient-to-br from-white via-cyan-50 to-cyan-100 bg-clip-text text-transparent drop-shadow-lg">
            {dashboardData.totalPoints}
          </div>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-transparent via-white to-transparent opacity-30 rounded-full"></div>
        </div>
        
        {/* USD equivalent */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5 inline-block">
          <p className="text-cyan-50 text-base font-semibold m-0">
            ≈ <span className="text-white font-bold">${dashboardData.totalPoints}</span> USD
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<style jsx>{`
  .delay-100 {
    animation-delay: 0.1s;
  }
  .delay-200 {
    animation-delay: 0.2s;
  }
`}</style>

<style jsx>{`
  .delay-100 {
    animation-delay: 0.1s;
  }
  .delay-200 {
    animation-delay: 0.2s;
  }
`}</style>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
  {/* Redeem Section */}
  <div
    className="bg-gradient-to-br from-teal-700 via-teal-800 to-teal-700 rounded-2xl p-8 shadow-2xl border border-cyan-600 relative overflow-hidden"
    data-aos="fade-up"
  >
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-400/20 to-transparent rounded-full blur-3xl"></div>
    
    {/* Sparkles */}
    <div className="absolute top-6 right-8 w-2 h-2 bg-purple-300 rounded-full opacity-60 animate-pulse"></div>
    <div className="absolute bottom-12 right-16 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-40 animate-pulse delay-100"></div>
    
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-2.5 rounded-xl shadow-lg">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        Redeem Your Points
      </h3>

      {canRedeem ? (
        <div>
          <p className="text-cyan-50 mb-6 text-sm">
            Convert your points to rewards and benefits
          </p>

          {/* Available Points Card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 mb-5 shadow-lg">
            <p className="text-white text-base flex items-center gap-2 justify-center">
              <svg
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Available Points:{" "}
              <strong className="font-bold text-yellow-300 text-lg ml-1">
                {dashboardData.totalPoints}
              </strong>
            </p>
          </div>

          {/* Info Card */}
          <div className="bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-xl p-4 mb-6 shadow-lg">
            <p className="text-amber-50 text-sm font-medium flex items-center gap-2 justify-center">
              <svg
                className="w-5 h-5 text-amber-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              Minimum 250 points required
            </p>
          </div>

          {/* Points Selector */}
<div className="mb-6">
  <p className="block mb-3 text-white font-semibold text-sm">
    Points to Redeem:
  </p>
  <select
    value={pointsToRedeem}
    onChange={(e) => setPointsToRedeem(e.target.value)}
    className="w-full p-4 bg-cyan-900/50 border-2 border-cyan-600 rounded-xl text-white font-medium focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all backdrop-blur-sm"
  >
    <option value="">Select points to redeem</option>
    {Array.from({ length: Math.floor((dashboardData.totalPoints - 250) / 50) + 1 }, (_, i) => {
      const points = 250 + (i * 50);
      return points <= dashboardData.totalPoints ? (
        <option key={points} value={points} className="bg-cyan-900">
          {points} points (${points} USD)
        </option>
      ) : null;
    })}
    <option value={dashboardData.totalPoints} className="bg-cyan-900">
      {dashboardData.totalPoints} points - Redeem All (${dashboardData.totalPoints} USD)
    </option>
  </select>
</div>

          {/* Redeem All Button */}
          <button
            onClick={handleRedeemAll}
            className="w-full mb-4 p-4 bg-white/10 backdrop-blur-sm border-2 border-purple-400 text-purple-100 rounded-xl cursor-pointer font-semibold text-base transition-all duration-200 hover:bg-purple-500 hover:text-white hover:border-purple-400 shadow-lg"
          >
            Redeem All {dashboardData.totalPoints} Points
          </button>

          {/* Confirm Button */}
          <button
            onClick={handleRedeemPoints}
            className="w-full px-8 py-4 bg-gradient-to-br from-purple-600 to-purple-700 border-none rounded-xl cursor-pointer font-bold text-base text-white transition-all duration-200 hover:from-purple-700 hover:to-purple-800 hover:shadow-2xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:from-cyan-600 disabled:to-cyan-700 flex items-center justify-center gap-2 shadow-lg"
            disabled={redeeming}
          >
            {redeeming ? (
              <>
                <svg
                  className="animate-spin w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Confirm Redemption
              </>
            )}
          </button>
        </div>
      ) : (
        <div className="text-center flex flex-col items-center">
          <div className="bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-xl p-5 mb-5 inline-block shadow-lg">
            <p className="text-red-100 font-semibold flex items-center gap-2 justify-center">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              You need {250 - dashboardData.totalPoints} more points to redeem
            </p>
          </div>
          <button
            className="px-10 py-4 text-base font-semibold border-none rounded-xl bg-cyan-900/50 text-cyan-300 cursor-not-allowed backdrop-blur-sm"
            disabled
          >
            Redeem Points (Min 250)
          </button>
        </div>
      )}
    </div>
  </div>

  {/* Coupon Code Section */}
  <div
    className="bg-gradient-to-br from-teal-700 via-teal-800 to-teal-700 rounded-2xl p-8 shadow-2xl border border-cyan-600 relative overflow-hidden"
    data-aos="fade-up"
  >
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-400/20 to-transparent rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-400/20 to-transparent rounded-full blur-3xl"></div>
    
    {/* Sparkles */}
    <div className="absolute top-8 left-8 w-2 h-2 bg-green-300 rounded-full opacity-60 animate-pulse"></div>
    <div className="absolute bottom-16 left-12 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-40 animate-pulse delay-200"></div>
    
    <div className="relative z-10 h-full flex flex-col">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <div className="bg-gradient-to-br from-green-500 to-green-600 p-2.5 rounded-xl shadow-lg">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        Referral Coupon Code
      </h3>
      
      {dashboardData.couponCode ? (
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          {/* Coupon Display */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl blur-xl opacity-40"></div>
            <div className="relative text-4xl md:text-5xl font-black text-white px-8 py-6 border-4 border-dashed border-white/40 rounded-xl bg-white/10 backdrop-blur-sm tracking-widest shadow-2xl">
              {dashboardData.couponCode}
            </div>
            <div className="absolute -top-3 -right-3 bg-gradient-to-br from-green-500 to-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg ring-4 ring-cyan-700">
              ACTIVE
            </div>
          </div>
          
          {/* Copy Button */}
          <button
            onClick={() => {
              navigator.clipboard.writeText(dashboardData.couponCode);
              toaster.success("Coupon code copied!");
            }}
            className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-br from-green-500 to-green-600 text-white border-none rounded-xl cursor-pointer font-semibold transition-all duration-200 hover:from-green-600 hover:to-green-700 hover:-translate-y-1 hover:shadow-2xl group shadow-lg"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Copy Code
          </button>
          
          {/* Info text */}
          <p className="text-cyan-100 text-sm text-center">
            Share this code with new users to earn referral points
          </p>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-center bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg">
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-2xl opacity-20"></div>
            <svg
              className="relative w-20 h-20 text-cyan-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-cyan-100 text-base">
            Your coupon code will be assigned by admin soon
          </p>
        </div>
      )}
    </div>
  </div>
</div>

<style jsx>{`
  .delay-100 {
    animation-delay: 0.1s;
  }
  .delay-200 {
    animation-delay: 0.2s;
  }
`}</style>
        <CreditPointDisplay/>

       

        {/* Points History */}
<div
  className="mb-8 bg-gradient-to-br from-teal-700 via-teal-800 to-teal-700 rounded-2xl p-8 shadow-2xl border border-cyan-600 relative overflow-hidden"
  data-aos="fade-up"
>
  {/* Background decoration */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-400/20 to-transparent rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-400/20 to-transparent rounded-full blur-3xl"></div>
  
  {/* Sparkles */}
  <div className="absolute top-6 right-8 w-2 h-2 bg-green-300 rounded-full opacity-60 animate-pulse"></div>
  <div className="absolute bottom-12 left-12 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-40 animate-pulse delay-100"></div>
  
  <div className="relative z-10">
    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <div className="bg-gradient-to-br from-green-500 to-green-600 p-2.5 rounded-xl shadow-lg">
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      Points History
    </h3>
    
    {dashboardData.pointsHistory.length > 0 ? (
      <div className="overflow-x-auto rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-sm shadow-lg">
        <table className="w-full border-collapse">
          <thead className="bg-white/10 backdrop-blur-sm">
            <tr>
              <th className="p-4 text-left font-bold text-white border-b-2 border-white/20">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-cyan-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Date
                </div>
              </th>
              <th className="p-4 text-left font-bold text-white border-b-2 border-white/20">
                Category
              </th>
              <th className="p-4 text-left font-bold text-white border-b-2 border-white/20">
                People
              </th>
              <th className="p-4 text-left font-bold text-white border-b-2 border-white/20">
                Per Person
              </th>
              <th className="p-4 text-left font-bold text-white border-b-2 border-white/20">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {dashboardData.pointsHistory.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-white/10 transition-colors border-b border-white/10"
              >
                <td className="p-4 text-cyan-100 font-medium">
                  {new Date(item.date).toLocaleDateString()}
                </td>
                <td className="p-4 text-white font-medium">
                  {item.category}
                </td>
                <td className="p-4 text-cyan-100 text-center font-medium">
                  {item.numberOfPeople}
                </td>
                <td className="p-4 text-cyan-100 text-center font-medium">
                  {item.pointsPerPerson}
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-500/90 text-white rounded-full font-bold text-base shadow-lg">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    +{item.totalPoints}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <div className="text-center py-12 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg">
        <div className="relative inline-block mb-4">
          <div className="absolute inset-0 bg-cyan-400 rounded-full blur-2xl opacity-20"></div>
          <svg
            className="relative w-20 h-20 text-cyan-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <p className="text-cyan-100 text-lg">
          No points history yet
        </p>
      </div>
    )}
  </div>
</div>

{/* Redemption History */}
<div
  className="mb-8 bg-gradient-to-br from-teal-700 via-teal-800 to-teal-700 rounded-2xl p-8 shadow-2xl border border-cyan-600 relative overflow-hidden"
  data-aos="fade-up"
>
  {/* Background decoration */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-400/20 to-transparent rounded-full blur-3xl"></div>
  
  {/* Sparkles */}
  <div className="absolute top-6 right-8 w-2 h-2 bg-purple-300 rounded-full opacity-60 animate-pulse"></div>
  <div className="absolute bottom-12 left-12 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-40 animate-pulse delay-200"></div>
  
  <div className="relative z-10">
    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-2.5 rounded-xl shadow-lg">
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      Redemption History
    </h3>

    {dashboardData.redemptionHistory.length > 0 ? (
      <div className="overflow-x-auto rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-sm shadow-lg">
        <table className="w-full border-collapse">
          <colgroup>
            <col className="w-2/3" />
            <col className="w-1/3" />
          </colgroup>
          <thead className="bg-white/10 backdrop-blur-sm">
            <tr>
              <th className="p-4 text-left font-bold text-white border-b-2 border-white/20">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-cyan-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Date
                </div>
              </th>

              <th className="p-4 text-left font-bold text-white border-b-2 border-white/20">
                Points Redeemed
              </th>
            </tr>
          </thead>

          <tbody>
            {dashboardData.redemptionHistory.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-white/10 transition-colors border-b border-white/10"
              >
                <td className="p-4 text-cyan-100 font-medium">
                  {new Date(item.redemptionDate).toLocaleDateString()}
                </td>

                <td className="p-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-500/90 text-white rounded-full font-bold text-base shadow-lg">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    -{item.pointsRedeemed}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <div className="text-center py-12 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg">
        <div className="relative inline-block mb-4">
          <div className="absolute inset-0 bg-cyan-400 rounded-full blur-2xl opacity-20"></div>
          <svg
            className="relative w-20 h-20 text-cyan-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
        <p className="text-cyan-100 text-lg">
          No redemption history yet
        </p>
      </div>
    )}
  </div>
</div>

<style jsx>{`
  .delay-100 {
    animation-delay: 0.1s;
  }
  .delay-200 {
    animation-delay: 0.2s;
  }
`}</style>


        {/* Celebration Modal */}
        {showCelebration && (
          <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-fadeIn">
            <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-3xl p-8 md:p-12 shadow-2xl transform animate-scaleIn max-w-lg w-full text-center relative overflow-hidden">
              {/* Animated background circles */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full animate-ping"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full animate-pulse"></div>

              <div className="relative z-10">
                {/* Success Icon with animation */}
                <div className="mb-6 relative">
                  <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-xl animate-bounce">
                    <svg
                      className="w-14 h-14 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {/* Confetti elements */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-confetti-1"></div>
                  </div>
                  <div className="absolute top-4 left-1/4">
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-confetti-2"></div>
                  </div>
                  <div className="absolute top-4 right-1/4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-confetti-3"></div>
                  </div>
                  <div className="absolute top-8 left-1/3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-confetti-4"></div>
                  </div>
                  <div className="absolute top-8 right-1/3">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-confetti-5"></div>
                  </div>
                </div>

                {/* Success Message */}
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                  🎉 Congratulations! 🎉
                </h2>
                <p className="text-xl md:text-2xl text-purple-100 font-semibold mb-2">
                  Points Redeemed Successfully!
                </p>
                <p className="text-purple-200 text-base md:text-lg mb-6">
                  Your redemption request has been submitted and is being
                  processed.
                </p>

                {/* Decorative star */}
                <div className="flex justify-center gap-2 mb-8">
                  <svg
                    className="w-8 h-8 text-yellow-300 animate-spin-slow"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="w-6 h-6 text-yellow-300 animate-pulse"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="w-8 h-8 text-yellow-300 animate-spin-slow"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <button
                  onClick={() => setShowCelebration(false)}
                  className="bg-white text-purple-700 px-8 py-3 rounded-xl font-bold text-lg border-none cursor-pointer transition-all duration-200 hover:bg-purple-50 hover:scale-105 shadow-lg"
                >
                  Awesome!
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add custom CSS for animations */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes scaleIn {
            from {
              transform: scale(0.8);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes confetti-1 {
            0% {
              transform: translate(0, 0) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translate(-30px, 100px) rotate(180deg);
              opacity: 0;
            }
          }

          @keyframes confetti-2 {
            0% {
              transform: translate(0, 0) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translate(-50px, 120px) rotate(-180deg);
              opacity: 0;
            }
          }

          @keyframes confetti-3 {
            0% {
              transform: translate(0, 0) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translate(50px, 120px) rotate(180deg);
              opacity: 0;
            }
          }

          @keyframes confetti-4 {
            0% {
              transform: translate(0, 0) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translate(-40px, 130px) rotate(-270deg);
              opacity: 0;
            }
          }

          @keyframes confetti-5 {
            0% {
              transform: translate(0, 0) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translate(30px, 100px) rotate(270deg);
              opacity: 0;
            }
          }

          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }

          .animate-scaleIn {
            animation: scaleIn 0.4s ease-out;
          }

          .animate-confetti-1 {
            animation: confetti-1 1.5s ease-out infinite;
          }

          .animate-confetti-2 {
            animation: confetti-2 1.7s ease-out infinite;
          }

          .animate-confetti-3 {
            animation: confetti-3 1.6s ease-out infinite;
          }

          .animate-confetti-4 {
            animation: confetti-4 1.8s ease-out infinite;
          }

          .animate-confetti-5 {
            animation: confetti-5 1.4s ease-out infinite;
          }

          .animate-spin-slow {
            animation: spin-slow 3s linear infinite;
          }
        `}</style>
      </div>
      
    </div>
  );
};

export default AmbassadorDashboard;