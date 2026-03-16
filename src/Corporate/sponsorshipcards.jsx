import React from "react";
import { Check } from "lucide-react";
import logo from "/logo.png";

const SponsorshipCards = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedTier, setSelectedTier] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    organization: "",
    designation: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    phone: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePaymentSuccess = async (response) => {
    try {
      // Verify payment on backend
      const verificationResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/Api/Payment/Sponsorship`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            razorpay_order_id: response.razorpay_order_id,
            sponsorshipData: {
              ...formData,
              price: parseFloat(selectedTier.price.replace('$', '').replace(',', '')),
              tier: selectedTier.title,
            }
          })
        }
      );

      const result = await verificationResponse.json();

      if (result.message === "Payment successful") {
        alert("Sponsorship payment completed successfully!");
        handleClose();
      } else {
        alert("Payment verification failed. Please contact support.");
      }
    } catch (error) {
      console.error("Payment verification error:", error);
      alert("Payment verification failed. Please contact support.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaymentError = async (orderId) => {
    try {
      // Cancel the order on backend
      await fetch(`${import.meta.env.VITE_API_URL}/Api/Request/Sponsorship/Cancel`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order_id: orderId
        })
      });
      alert("Payment was cancelled or failed.");
    } catch (error) {
      console.error("Error cancelling payment:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Step 1: Create sponsorship record and Razorpay order
      const submissionData = {
        ...formData,
        price: parseFloat(selectedTier.price.replace('$', '').replace(',', '')),
        tier: selectedTier.title,
      };

      console.log('Submitting data:', submissionData);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/sponsorship`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData)
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.errorMessage || `HTTP error! status: ${response.status}`);
      }

      const { order_id, Razor_Pay_Order } = responseData;

      // Step 2: Load Razorpay script
      const razorpayLoaded = await loadRazorpayScript();
      
      if (!razorpayLoaded) {
        alert("Razorpay SDK failed to load. Please check your internet connection.");
        setIsLoading(false);
        return;
      }

      // Step 3: Initialize Razorpay payment
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: Razor_Pay_Order.amount,
        currency: Razor_Pay_Order.currency,
        name: "Confworld Educational Research and Development Association",
        image: logo,
        description: `${selectedTier.title} Sponsorship Package`,
        order_id: order_id,
        handler: function (response) {
          handlePaymentSuccess(response);
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone,
        },
        notes: {
          tier: selectedTier.title,
          organization: formData.organization,
        },
        theme: {
          color: "#00C4AC",
        },
        modal: {
          ondismiss: function() {
            handlePaymentError(order_id);
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error) {
      console.error("Error initiating payment:", error);
      if (error.message?.includes("already exists")) {
        alert("A sponsorship with this email already exists. Please use a different email.");
      } else {
        alert(`Error initiating payment: ${error.message}. Please try again.`);
      }
      setIsLoading(false);
    }
  };

  const handleClickOpen = (tier) => {
    setSelectedTier(tier);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTier(null);
    setFormData({
      fullName: "",
      email: "",
      organization: "",
      designation: "",
      address: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      phone: "",
    });
  };

  const sponsorshipTiers = [
    {
      title: "Platinum",
      price: "$5,000",
      color: "from-purple-600 to-purple-800",
      borderColor: "border-purple-500",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      features: [
        "1 VIP can participate in the conference",
        "Complementary registration for 12 Students and 5 Faculties",
        "Stage honor to the Sponsor Party",
        "Full Page add on the conference proceedings",
        "Brand carried in all the websites and promotional activities",
        "Event called by title sponsor",
        "Global networking opportunities",
        "Media Coverage",
        "3 Feedback video bites featured on YouTube channel",
        "A standee of the sponsor side on the registration desk",
      ],
    },
    {
      title: "Diamond",
      price: "$4,000",
      color: "from-blue-600 to-blue-800",
      borderColor: "border-blue-500",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      features: [
        "1 Session Chair opportunity from the sponsor side",
        "Complementary registration for 10 Students and 3 Faculties",
        "Full Page add on the conference proceedings",
        "Brand carried in all the websites and promotional activities",
        "Public announcement recognizing the Sponsor",
        "Global networking opportunities ",
        "Logo used on all website activities and campaigns",
        "5 minutes slot for media Coverage",
        "2 Feedback video featured on the YouTube channel",
        "A standee of the sponsor side on the registration desk",
      ],
    },
    {
      title: "Gold",
      price: "$2,000",
      color: "from-yellow-500 to-yellow-700",
      borderColor: "border-yellow-500",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
      features: [
        "Complementary registration for 8 Students and 2 Faculties",
        "Full page add on conference proceedings",
        "Announcement recognition of the sponsor during valedictory",
        "Logos used in all promotional materials",
        "One anchor/moderator can join from the sponsor side",
        "Global networking opportunities ",
        "A standee of the sponsor side on the registration desk",
      ],
    },
    {
      title: "Silver",
      price: "$1,500",
      color: "from-gray-500 to-gray-700",
      borderColor: "border-gray-500",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
      features: [
        "Complementary registration for 5 Students and 1 Faculty",
        "2 fecilitators at the registration desk from the sponsor side",
        "Half page add on Conference proceedings",
        "Brand carried out in few promotional activities",
        "Global networking opportunities",
        "Print media coverage",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 pb-16 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl text-teal-500 font-bold mb-6 tracking-tight">
            Corporate Membership
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.title}
              className={`relative bg-white rounded-2xl shadow-xl border-2 ${tier.borderColor} hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full`}
            >
              <div
                className={`bg-gradient-to-r ${tier.color} p-8 text-white text-left`}
              >
                <div className="inline-block rounded-xl border-2 border-white/30 px-4 py-2 mb-4 bg-white/10 backdrop-blur-sm">
                  <h3 className="text-xs font-semibold uppercase tracking-widest opacity-90">
                    Sponsorship
                  </h3>
                </div>
                <h2 className="text-3xl font-bold mb-3">{tier.title}</h2>
                <div className="text-4xl font-bold">{tier.price}</div>
              </div>

              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 mr-4 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 leading-relaxed font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <button
                  className={`w-full ${tier.buttonColor} cursor-pointer text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-1 text-sm uppercase tracking-wide`}
                  onClick={() => handleClickOpen(tier)}
                >
                  Choose {tier.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Modal Form */}
      {open && selectedTier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto transform transition-all scale-100 opacity-100">
            <div className={`p-6 text-white text-center bg-gradient-to-r ${selectedTier.color}`}>
              <h3 className="text-3xl font-bold">
                Sponsor {selectedTier.title}
              </h3>
              <p className="text-xl font-semibold opacity-90 mt-2">Price: {selectedTier.price}</p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleForm}
                    required
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleForm}
                    required
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="organization" className="text-sm font-medium text-gray-700 mb-1">Organization *</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleForm}
                    required
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="designation" className="text-sm font-medium text-gray-700 mb-1">Designation *</label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleForm}
                    required
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="flex flex-col col-span-1 md:col-span-2">
                  <label htmlFor="address" className="text-sm font-medium text-gray-700 mb-1">Address *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleForm}
                    required
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="city" className="text-sm font-medium text-gray-700 mb-1">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleForm}
                    required
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="state" className="text-sm font-medium text-gray-700 mb-1">State *</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleForm}
                    required
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="zipCode" className="text-sm font-medium text-gray-700 mb-1">Zip Code *</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleForm}
                    required
                    pattern="[0-9]{4,10}"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="country" className="text-sm font-medium text-gray-700 mb-1">Country *</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleForm}
                    required
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="flex flex-col col-span-1 md:col-span-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleForm}
                    required
                    pattern="^\+?[0-9]{7,15}$"
                    placeholder="+1234567890"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={handleClose}
                  disabled={isLoading}
                  className="px-6 py-3 text-sm font-semibold rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={submitForm}
                  disabled={isLoading}
                  className={`px-6 py-3 text-sm font-bold rounded-lg text-white ${selectedTier.buttonColor} transition-colors hover:shadow-lg disabled:opacity-50`}
                >
                  {isLoading ? "Processing..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SponsorshipCards;