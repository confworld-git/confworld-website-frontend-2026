import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { toaster } from "evergreen-ui";

const CareerForm = ({ handlePopup }) => {
  const CareerFormRef = useRef();
  const [fileName, setFileName] = useState("Choose file");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const HandleCareerForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(CareerFormRef.current);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/Career-Form`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      toaster.success(response.data.message);
    } catch (error) {
      console.error("Error submitting form:", error);
      toaster.danger("Something went wrong. Please try again.");
    } finally {
      CareerFormRef.current?.reset();
      setFileName("Choose file");
      handlePopup(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(13, 43, 78, 0.5)" }}
      onMouseDown={(e) => { if (e.target === e.currentTarget) handlePopup(false); }}
    >
      {/* Modal — scrolls as a whole */}
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-y-auto font-[Poppins,sans-serif]"
        style={{ maxHeight: "90vh" }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Accent bar */}
        <div className="sticky top-0 z-10 h-[3px] w-full bg-gradient-to-r from-[#227bce] via-[#7e22ce] to-[#ed8c24]" />

        {/* Header — sticks to top while scrolling */}
        <div className="sticky top-[3px] z-10 bg-white flex items-center justify-between px-5 pt-4 pb-3 border-b border-gray-100">
          <div>
            <h1 className="text-[15px] font-semibold text-[#0d2b4e] tracking-tight">Apply for a position</h1>
            <p className="text-[11px] text-gray-400 mt-0.5">We'll get back to you shortly.</p>
          </div>
          <button
            type="button"
            onClick={() => handlePopup(false)}
            className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors flex-shrink-0"
          >
            <HiMiniXMark size={15} />
          </button>
        </div>

        {/* Form */}
        <form ref={CareerFormRef} onSubmit={HandleCareerForm}>
          <div className="px-5 pt-4 flex flex-col gap-3">

            {/* Name + Phone row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Full name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text" id="name" name="name" required
                  placeholder="Jane Smith"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-[13px] text-gray-800 placeholder-gray-400 outline-none focus:border-[#7e22ce] focus:bg-white focus:ring-2 focus:ring-[#7e22ce]/10 transition-all"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="number" className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Phone <span className="text-red-400">*</span>
                </label>
                <input
                  type="text" id="number" name="number" required
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-[13px] text-gray-800 placeholder-gray-400 outline-none focus:border-[#7e22ce] focus:bg-white focus:ring-2 focus:ring-[#7e22ce]/10 transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                Email address <span className="text-red-400">*</span>
              </label>
              <input
                type="email" id="email" name="email" required
                placeholder="you@example.com"
                className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-[13px] text-gray-800 placeholder-gray-400 outline-none focus:border-[#7e22ce] focus:bg-white focus:ring-2 focus:ring-[#7e22ce]/10 transition-all"
              />
            </div>

            {/* CV Upload */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                Upload CV (PDF) <span className="text-red-400">*</span>
              </label>
              <label
                htmlFor="cv"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-dashed border-gray-300 bg-gray-50 hover:border-[#7e22ce] cursor-pointer transition-colors"
              >
                <div className="w-7 h-7 rounded-md bg-[#7e22ce]/10 flex items-center justify-center flex-shrink-0">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                    <path d="M9 1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6L9 1Z" stroke="#7e22ce" strokeWidth="1.3" fill="none"/>
                    <path d="M9 1v5h5" stroke="#7e22ce" strokeWidth="1.3" fill="none"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[12px] font-medium text-gray-700 truncate">{fileName}</span>
                  <span className="block text-[11px] text-gray-400">PDF only · max 5MB</span>
                </div>
                <input
                  type="file" id="cv" name="file" accept=".pdf" required
                  className="hidden"
                  onChange={(e) => setFileName(e.target.files[0]?.name || "Choose file")}
                />
              </label>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message" name="message" required rows={3}
                placeholder="Tell us about yourself and the role you're applying for..."
                className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-[13px] text-gray-800 placeholder-gray-400 outline-none focus:border-[#7e22ce] focus:bg-white focus:ring-2 focus:ring-[#7e22ce]/10 transition-all resize-none"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex gap-2 px-5 py-4 mt-3">
            <button
              type="button"
              onClick={() => handlePopup(false)}
              className="flex-1 py-2 rounded-lg border border-gray-200 bg-white text-gray-600 text-[13px] font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-[2] py-2 rounded-lg bg-[#7e22ce] hover:bg-[#6b18b5] text-white text-[13px] font-semibold transition-colors flex items-center justify-center gap-1.5"
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M2 8h12M9 3l5 5-5 5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Submit application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerForm;