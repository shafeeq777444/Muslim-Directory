import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useAddSkilledPeople } from "@/features/hooks/useSkilledPeople";

export default function MuslimDirectoryForm({ setForm }) {
    const defaultFormData = {
        fullName: "",
        email: "",
        contactNumber: "",
        skills: "",
        experience: "",
        resume: null,
    };

    const { mutate } = useAddSkilledPeople();
    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState(defaultFormData);
    const [isClient, setIsClient] = useState(false);

    // Safe client-side initialization
    useEffect(() => {
        setIsClient(true);
        
        // Only run on client-side after hydration
        const savedData = localStorage.getItem("skilledPersonForm");
        const savedStep = localStorage.getItem("skilledPersonCurrentStep");
        
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                setFormData(prevData => ({ ...defaultFormData, ...parsed }));
            } catch (error) {
                console.error("Error parsing saved form data:", error);
                localStorage.removeItem("skilledPersonForm");
            }
        }
        
        if (savedStep) {
            const stepNumber = parseInt(savedStep);
            if (stepNumber >= 1 && stepNumber <= 4) {
                setCurrentStep(stepNumber);
            }
        }
    }, []);

    // Save data to localStorage whenever formData changes (client-side only)
    useEffect(() => {
        if (isClient) {
            localStorage.setItem("skilledPersonForm", JSON.stringify(formData));
        }
    }, [formData, isClient]);

    // Save current step to localStorage (client-side only)
    useEffect(() => {
        if (isClient) {
            localStorage.setItem("skilledPersonCurrentStep", currentStep.toString());
        }
    }, [currentStep, isClient]);

    const validateStep1 = () => {
        const newErrors = {};

        // Name: required and at least 2 characters
        if (!formData.fullName || formData.fullName.trim().length < 2) {
            newErrors.fullName = "Name must be at least 2 characters";
        }

        // Email: required and must follow valid format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }

        // Phone: required and must be valid format
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        if (!formData.contactNumber) {
            newErrors.contactNumber = "Phone number is required";
        } else if (!phoneRegex.test(formData.contactNumber)) {
            newErrors.contactNumber = "Enter a valid phone number";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors = {};

        if (!formData.skills || formData.skills.trim().length < 2) {
            newErrors.skills = "Skills must be added";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep4 = () => {
        const newErrors = {};

        if (!formData.resume) {
            newErrors.resume = "Resume must be uploaded";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        
        // Clear specific error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!allowedTypes.includes(file.type)) {
                toast.error("Please upload a PDF, DOC, or DOCX file");
                return;
            }
            
            // Validate file size (e.g., 5MB limit)
            if (file.size > 5 * 1024 * 1024) {
                toast.error("File size must be less than 5MB");
                return;
            }
            
            setFormData((prev) => ({
                ...prev,
                resume: file,
            }));
            
            // Clear resume error
            if (errors.resume) {
                setErrors(prev => ({
                    ...prev,
                    resume: undefined
                }));
            }
        }
    };

    const nextStep = () => {
        if (currentStep < 4) {
            let isValid = false;
            
            if (currentStep === 1) {
                isValid = validateStep1();
            } else if (currentStep === 2) {
                isValid = validateStep2();
            } else if (currentStep === 3) {
                isValid = true; // Experience is optional
            }
            
            if (isValid) {
                setCurrentStep(currentStep + 1);
                setErrors({}); // Clear errors when moving to next step
            }
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            setErrors({}); // Clear errors when going back
        }
    };

    const handleSubmit = async () => {
        // Validate all required steps
        const step1Valid = validateStep1();
        const step2Valid = validateStep2();
        const step4Valid = validateStep4();
        
        if (!step1Valid || !step2Valid || !step4Valid) {
            toast.error("Please complete all required fields");
            return;
        }

        try {
            const form = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                if (value !== null && value !== undefined) {
                    form.append(key, value);
                }
            });

            mutate(form, {
                onSuccess: (data) => {
                    toast.success(data.message);
                    
                    // Clear localStorage after successful submission
                    if (isClient) {
                        localStorage.removeItem("skilledPersonForm");
                        localStorage.removeItem("skilledPersonCurrentStep");
                    }
                    
                    // Reset form
                    setFormData(defaultFormData);
                    setCurrentStep(1);
                    setErrors({});
                },
                onError: (error) => {
                    console.error("Submission error:", error);
                    toast.error("Failed to submit form. Please try again.");
                }
            });
        } catch (error) {
            console.error("Form submission error:", error);
            toast.error("An unexpected error occurred");
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-2">Personal Information</h2>
                            <p className="text-blue-200">Let's start with your basic contact information</p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name *"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 bg-blue-800 border rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all ${
                                        errors?.fullName ? 'border-red-500' : 'border-blue-600'
                                    }`}
                                    required
                                />
                                {errors?.fullName && <p className="text-xs pl-1 pt-1 text-red-400">{errors.fullName}</p>}
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address *"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 bg-blue-800 border rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all ${
                                        errors?.email ? 'border-red-500' : 'border-blue-600'
                                    }`}
                                    required
                                />
                                {errors?.email && <p className="text-xs pl-1 pt-1 text-red-400">{errors.email}</p>}
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    placeholder="Contact Number *"
                                    value={formData.contactNumber}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 bg-blue-800 border rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all ${
                                        errors?.contactNumber ? 'border-red-500' : 'border-blue-600'
                                    }`}
                                    required
                                />
                                {errors?.contactNumber && (
                                    <p className="text-xs pl-1 pt-1 text-red-400">{errors.contactNumber}</p>
                                )}
                            </div>
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-2">Professional Skills</h2>
                            <p className="text-blue-200">Tell us about your expertise and skills</p>
                        </div>

                        <div>
                            <textarea
                                name="skills"
                                placeholder="List your professional skills (e.g., Web Development, Graphic Design, Marketing, etc.)"
                                value={formData.skills}
                                onChange={handleInputChange}
                                rows="6"
                                className={`w-full px-4 py-3 bg-blue-800 border rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none ${
                                    errors?.skills ? 'border-red-500' : 'border-blue-600'
                                }`}
                            />
                            {errors?.skills && <p className="text-xs pl-1 pt-1 text-red-400">{errors.skills}</p>}
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-2">Experience</h2>
                            <p className="text-blue-200">Share your professional experience (Optional)</p>
                        </div>

                        <div>
                            <textarea
                                name="experience"
                                placeholder="Describe your work experience, projects, and achievements..."
                                value={formData.experience}
                                onChange={handleInputChange}
                                rows="8"
                                className="w-full px-4 py-3 bg-blue-800 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
                            />
                        </div>
                    </div>
                );

            case 4:
                return (
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-2">Upload Resume</h2>
                            <p className="text-blue-200">Upload your resume to complete your profile</p>
                        </div>

                        <div>
                            <div className={`border-2 border-dashed rounded-lg p-8 text-center hover:border-blue-400 transition-all ${
                                errors?.resume ? 'border-red-500' : 'border-blue-600'
                            }`}>
                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    id="resume-upload"
                                />
                                <label htmlFor="resume-upload" className="cursor-pointer">
                                    <div className="text-blue-300 mb-2">
                                        <svg
                                            className="w-12 h-12 mx-auto mb-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-white font-medium">Click to upload resume</p>
                                    <p className="text-blue-300 text-sm mt-1">PDF, DOC, or DOCX files only (Max 5MB)</p>
                                </label>
                                {formData.resume && (
                                    <div className="mt-4 p-3 bg-blue-800 rounded-lg">
                                        <p className="text-green-300 text-sm">✓ {formData.resume.name}</p>
                                    </div>
                                )}
                            </div>
                            {errors?.resume && <p className="text-xs pl-1 pt-1 text-red-400">{errors.resume}</p>}
                        </div>

                        <div className="bg-blue-800 rounded-lg p-6 border border-blue-600">
                            <h3 className="text-lg font-semibold text-white mb-4">Review Your Information</h3>
                            <div className="space-y-2 text-sm">
                                <p className="text-blue-200">
                                    <span className="text-white font-medium">Name:</span> {formData.fullName}
                                </p>
                                <p className="text-blue-200">
                                    <span className="text-white font-medium">Email:</span> {formData.email}
                                </p>
                                <p className="text-blue-200">
                                    <span className="text-white font-medium">Contact:</span> {formData.contactNumber}
                                </p>
                                {formData.skills && (
                                    <p className="text-blue-200">
                                        <span className="text-white font-medium">Skills:</span>{" "}
                                        {formData.skills.length > 100 ? `${formData.skills.substring(0, 100)}...` : formData.skills}
                                    </p>
                                )}
                                {formData.experience && (
                                    <p className="text-blue-200">
                                        <span className="text-white font-medium">Experience:</span>{" "}
                                        {formData.experience.length > 100 ? `${formData.experience.substring(0, 100)}...` : formData.experience}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-4">
            <div className="flex flex-col md:flex-row justify-center items-center min-h-[100dvh] gap-6">
                {/* Header */}
                <div className="flex-1 flex flex-col gap-4 w-full max-w-2xl mx-auto">
                    <div className="text-center flex flex-col gap-4 md:h-80">
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
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                onClick={() => setForm("buisnessOwner")}
                                className="w-full md:w-auto px-5 py-2 rounded-full bg-blue-600 text-white text-sm shadow-md hover:shadow-lg focus:outline-none"
                            >
                                Business Owner
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                onClick={() => setForm("skilledPerson")}
                                className="w-auto md:w-auto px-5 py-2 rounded-full bg-foregroundExtra text-white text-sm shadow-md hover:shadow-lg focus:outline-none"
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
                            Join Our Network of
                        </motion.h2>
                        <motion.h2
                            className="text-2xl md:text-4xl font-bold text-white"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        >
                            Skilled Professionals
                        </motion.h2>
                    </div>
                    {/* Progress Bar */}
                    <div className="flex scale-75 md:flex-nowrap items-center justify-center md:scale-100 mb-8 gap-2">
                        {[1, 2, 3, 4].map((step) => (
                            <div key={step} className="flex items-center">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                                        step === currentStep
                                            ? "bg-blue-500 text-white border-2 border-blue-300"
                                            : step < currentStep
                                            ? "bg-green-500 text-white"
                                            : "bg-blue-800 text-blue-300 border border-blue-600"
                                    }`}
                                >
                                    {step < currentStep ? "✓" : step}
                                </div>
                                {step < 4 && (
                                    <div
                                        className={`w-10 sm:w-16 h-1 mx-2 ${
                                            step < currentStep ? "bg-green-500" : "bg-blue-800"
                                        }`}
                                    />
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
                >
                    <div>
                        {renderStep()}

                        {/* Navigation Buttons */}
                        <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
                            {currentStep > 1 && (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="w-full sm:w-auto px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all font-medium"
                                >
                                    Previous
                                </button>
                            )}

                            <div className="ml-auto w-full sm:w-auto">
                                {currentStep < 4 ? (
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all font-medium flex items-center justify-center"
                                    >
                                        Next
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        className="w-full sm:w-auto px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-all font-medium"
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
                    </div>

                    <div className="text-center mt-6">
                        <div className="inline-flex items-center px-4 py-2 bg-slate-700 rounded-full border border-slate-600">
                            <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                            <span className="text-white text-sm">Professional team member</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}