"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BusinessOwnerForm({setForm}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    businessCategory: "",
    businessDescription: "",
    firstName: "",
    lastName: "",
    position: "",
    streetAddress: "",
    streetAddress2: "",
    city: "",
    state: "",
    postalCode: "",
    contactNumber: "",
    email: "",
    website: ""
  });

  const businessCategories = [
    "Automotive (Car dealerships, auto repair shops, tire shops, car rental services)",
    "Beauty and Wellness (Spas, salons, gyms, massage therapists, wellness coaches)",
    "Education and Training (Schools, tutoring centers, online course providers, training workshops)",
    "Financial Services (Insurance, investment firms, mortgage brokers)",
    "Healthcare Providers (Doctors, dentists, chiropractors, clinics, pharmacies)",
    "Home Improvement (Contractors, electricians, HVAC services, painters, carpenters)",
    "Manufacturers and Distributors (Companies involved in the production or distribution of goods)",
    "Professional Services (Law firms, accounting firms, consultants, architects, financial advisors)",
    "Real Estate (Realtors, property management, property developers)",
    "Religion and Charity (Masjid, religious scholar, charity, non-profit)",
    "Restaurants and Food (Dine-in, fast food, café, food truck)",
    "Retail Stores (clothing, grocery stores)",
    "Service Providers (Plumbing, landscaping, cleaning, repair services)",
    "Tech and IT Services (Software company, app developer, web design agencies, IT support)",
    "Transportation and Logistics (Moving, shipping, delivery services, courier services)",
    "Travel and Tourism (Travel agencies, tour operators, hotels, tourism services)",
    "Other (If you are not listed select this option)"
  ];

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('businessOwnerForm');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData);
      
      // Get saved step
      const savedStep = localStorage.getItem('businessOwnerStep');
      if (savedStep) {
        setCurrentStep(parseInt(savedStep));
      }
    }
  }, []);

  // Save data to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem('businessOwnerForm', JSON.stringify(formData));
  }, [formData]);

  // Save current step to localStorage
  useEffect(() => {
    localStorage.setItem('businessOwnerStep', currentStep.toString());
  }, [currentStep]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategorySelect = (category) => {
    setFormData(prev => ({
      ...prev,
      businessCategory: category
    }));
    setShowCategoryDropdown(false);
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Business Owner Form submitted:', formData);
    // Clear localStorage after successful submission
    localStorage.removeItem('businessOwnerForm');
    localStorage.removeItem('businessOwnerStep');
    alert('Business registration completed successfully!');
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-white mb-2">Business Information</h2>
              <p className="text-blue-200">Tell us about your business</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="businessName"
                  placeholder="Business Name *"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-blue-800 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  required
                />
                <p className="text-blue-300 text-sm mt-1">Business or Brand Name</p>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  name="businessCategory"
                  placeholder="Business Category *"
                  value={formData.businessCategory}
                  onChange={handleInputChange}
                  onFocus={() => setShowCategoryDropdown(true)}
                  className="w-full px-4 py-3 bg-blue-800 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  required
                />
                <p className="text-blue-300 text-sm mt-1">Select the closest category</p>
                
                {showCategoryDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-slate-700 border border-blue-600 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {businessCategories.map((category, index) => (
                      <div
                        key={index}
                        onClick={() => handleCategorySelect(category)}
                        className="px-4 py-3 text-white hover:bg-blue-600 cursor-pointer border-b border-slate-600 last:border-b-0 text-sm"
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div>
                <textarea
                  name="businessDescription"
                  placeholder="Business Description *"
                  value={formData.businessDescription}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-blue-800 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
                  required
                />
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-white mb-2">Personal Information</h2>
              <p className="text-blue-200">Your details as the business representative</p>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-blue-800 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-blue-800 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="text"
                  name="position"
                  placeholder="Position in the Business *"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-blue-800 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  required
                />
                <p className="text-blue-300 text-sm mt-1">Owner, Director, Manager etc</p>
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-white mb-2">Business Address</h2>
              <p className="text-blue-200">Where is your business located?</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="streetAddress"
                  placeholder="Street Address *"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-blue-800 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="streetAddress2"
                  placeholder="Street Address Line 2"
                  value={formData.streetAddress2}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-blue-800 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="city"
                    placeholder="City *"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-blue-800 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="state"
                    placeholder="State / Province *"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-blue-800 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal / Zip Code *"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-blue-800 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-white mb-2">Contact Information</h2>
              <p className="text-blue-200">How can customers reach your business?</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number *"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-blue-800 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  required
                />
                <p className="text-blue-300 text-sm mt-1">Business Phone Number</p>
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail *"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-blue-800 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <input
                  type="url"
                  name="website"
                  placeholder="Website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-blue-800 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                />
                <p className="text-blue-300 text-sm mt-1">Leave blank if you do not have a website</p>
              </div>
            </div>
            
            <div className="bg-blue-800 rounded-lg p-6 border border-blue-600">
              <h3 className="text-lg font-semibold text-white mb-4">Review Your Business Information</h3>
              <div className="space-y-2 text-sm">
                <p className="text-blue-200"><span className="text-white font-medium">Business:</span> {formData.businessName}</p>
                <p className="text-blue-200"><span className="text-white font-medium">Category:</span> {formData.businessCategory}</p>
                <p className="text-blue-200"><span className="text-white font-medium">Owner:</span> {formData.firstName} {formData.lastName}</p>
                <p className="text-blue-200"><span className="text-white font-medium">Position:</span> {formData.position}</p>
                <p className="text-blue-200"><span className="text-white font-medium">Location:</span> {formData.city}, {formData.state}</p>
                <p className="text-blue-200"><span className="text-white font-medium">Contact:</span> {formData.contactNumber}</p>
                <p className="text-blue-200"><span className="text-white font-medium">Email:</span> {formData.email}</p>
                {formData.website && <p className="text-blue-200"><span className="text-white font-medium">Website:</span> {formData.website}</p>}
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
  <div className="min-h-[100dvh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-4">
    <div className="flex flex-col md:flex-row justify-center items-center min-h-[100dvh] gap-6">
      {/* Header */}
      <div className="flex-1 flex flex-col gap-4 w-full max-w-2xl mx-auto">
        <div className="text-center  flex flex-col gap-4 md:h-80">
          <div className="flex flex-col md:flex-row items-center justify-center md:-ml-10">
            <div className="w-20 h-20 rounded-xl p-2 flex items-center justify-center">
              <img src="/logos/whiteLogo.svg" alt="Muslim Directory" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold font-FMBoylar text-white mt-2 md:mt-0 md:ml-3">
              Muslim Directory
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={() => setForm("buisnessOwner")}
              className="w-full md:w-auto px-5 py-2 rounded-full bg-foregroundExtra text-white text-sm shadow-md hover:shadow-lg focus:outline-none"
            >
              Business Owner
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={() => setForm("skilledPerson")}
              className="w-full md:w-auto px-5 py-2 rounded-full bg-blue-600 text-white text-sm shadow-md hover:shadow-lg focus:outline-none"
            >
              Skilled People
            </motion.button>
          </div>

          <motion.h2
            className="text-2xl md:text-4xl font-bold text-white mt-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Register Your Business
          </motion.h2>

          <motion.h2
            className="text-2xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            in our Muslim Directory
          </motion.h2>
        </div>

        {/* Progress Bar */}
        <div className="flex scale-75 md:flex-nowrap items-center justify-center md:scale-100 mb-8 gap-2">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                step === currentStep
                  ? 'bg-blue-500 text-white border-2 border-blue-300'
                  : step < currentStep
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-800 text-blue-300 border border-blue-600'
              }`}>
                {step < currentStep ? '✓' : step}
              </div>
              {step < 4 && (
                <div className={`w-10 md:w-16 h-1 mx-2 ${
                  step < currentStep ? 'bg-green-500' : 'bg-blue-800'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <motion.div
            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="bg-slate-800 flex-1 rounded-2xl w-full max-w-2xl p-4 md:p-8 shadow-2xl border border-slate-700"
        onClick={() => setShowCategoryDropdown(false)}
      >
        <div onClick={(e) => e.stopPropagation()}>
          {renderStep()}

          {/* Navigation Buttons */}
          <div className="flex flex-col md:flex-row justify-between mt-8 gap-4">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="w-full md:w-auto px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all font-medium"
              >
                Previous
              </button>
            )}

            <div className="ml-auto w-full md:w-auto">
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all font-medium flex items-center justify-center"
                >
                  Next
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full md:w-auto px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-all font-medium"
                >
                  Complete Registration
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="text-center mt-6">
          <p className="text-blue-300 text-sm">Step {currentStep} of 4</p>

          <div className="mt-4 inline-flex items-center px-4 py-2 rounded-full border border-slate-600">
            <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
            <span className="text-white text-sm">Verified Business Owner</span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

}