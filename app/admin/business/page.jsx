"use client";
import { useGetBusinessDetails } from "@/features/hooks/useBuisness";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";

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
    "Other (If you are not listed select this option)",
];

const getCategoryIcon = (category) => {
    if (category?.includes("Restaurant") || category?.includes("Food")) return "🍽️";
    if (category?.includes("Automotive")) return "🚗";
    if (category?.includes("Beauty") || category?.includes("Wellness")) return "💄";
    if (category?.includes("Healthcare")) return "🏥";
    if (category?.includes("Tech") || category?.includes("IT")) return "💻";
    if (category?.includes("Real Estate")) return "🏠";
    if (category?.includes("Education")) return "📚";
    if (category?.includes("Financial")) return "💰";
    if (category?.includes("Religion") || category?.includes("Charity")) return "🕌";
    return "🏢";
};

const truncateText = (text, maxLength = 120) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
};

// Modal Component
const BusinessModal = ({ business, isOpen, onClose }) => {
    if (!isOpen || !business) return null;

    return (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden">
                {/* Modal Header */}
                <div className=" bg-gradient-to-br from-blue-50 to-blue-100 p-8 relative flex items-center gap-4">
                    <div className="text-5xl bg-white rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg">
                        {getCategoryIcon(business.businessCategory)}
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-blue-900 mb-2">{business.businessName}</h3>
                        <div className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold">
                            {business.businessCategory?.split("(")[0]?.trim() || business.businessCategory}
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-900 hover:bg-blue-50 transition-colors text-xl font-bold"
                    >
                        ×
                    </button>
                </div>

                <div className="p-8 overflow-y-auto flex-1">
                    {/* Full Business Description */}
                    {business.businessDescription && (
                        <div className="mb-8">
                            <h4 className="text-lg font-semibold text-blue-900 mb-4">About This Business</h4>
                            <p className="text-base text-blue-900 leading-relaxed italic pl-4 border-l-4 border-blue-200">
                                "{business.businessDescription}"
                            </p>
                        </div>
                    )}

                    {/* Owner Information */}
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold text-blue-900 mb-4">Owner Information</h4>
                        <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                            <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
                                {business.firstName?.charAt(0)?.toUpperCase()}
                            </div>
                            <div className="flex-1">
                                <div className="text-lg font-semibold text-blue-900">
                                    {business.firstName} {business.lastName}
                                </div>
                                {business.position && <div className="text-base text-blue-700">{business.position}</div>}
                            </div>
                        </div>
                    </div>

                    {/* Address Section */}
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold text-blue-900 mb-4">Business Address</h4>
                        <div className="flex gap-4 p-4 bg-blue-50 rounded-xl">
                            <div className="text-2xl mt-1">📍</div>
                            <div className="flex-1">
                                <div className="text-base text-blue-900 leading-relaxed">
                                    {business.streetAddress}
                                    {business.streetAddress2 && (
                                        <>
                                            <br />
                                            {business.streetAddress2}
                                        </>
                                    )}
                                    <br />
                                    <span className="font-semibold text-blue-700">
                                        {business.city}, {business.state} {business.postalCode}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold text-blue-900 mb-4">Contact Information</h4>
                        <div className="grid gap-4">
                            {business.contactNumber && (
                                <a
                                    href={`tel:${business.contactNumber}`}
                                    className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl transition-all duration-300 hover:bg-blue-100 hover:translate-x-1 no-underline text-inherit"
                                >
                                    <div className="text-2xl w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                        📞
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">
                                            Phone
                                        </div>
                                        <div className="text-base text-blue-900 font-medium break-words">
                                            {business.contactNumber}
                                        </div>
                                    </div>
                                </a>
                            )}

                            {business.email && (
                                <a
                                    href={`mailto:${business.email}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl transition-all duration-300 hover:bg-blue-100 hover:translate-x-1 no-underline text-inherit"
                                >
                                    <div className="text-2xl w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                        ✉️
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">
                                            Email
                                        </div>
                                        <div className="text-base text-blue-900 font-medium break-words">
                                            {business.email}
                                        </div>
                                    </div>
                                </a>
                            )}

                            {business.website && (
                                <a
                                    href={
                                        business.website.startsWith("http")
                                            ? business.website
                                            : `https://${business.website}`
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl transition-all duration-300 hover:bg-blue-100 hover:translate-x-1 no-underline text-inherit"
                                >
                                    <div className="text-2xl w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                        🌐
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">
                                            Website
                                        </div>
                                        <div className="text-base text-blue-900 font-medium break-words">
                                            {business.website}
                                        </div>
                                    </div>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// main component
const Page = () => {
    const router=useRouter()
    const [page, setPage] = useState(1);
    const [businessCategory, setBusinessCategory] = useState("All");
    const [selectedBusiness, setSelectedBusiness] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data, isLoading, error } = useGetBusinessDetails({ businessCategory, page });
   

    const openModal = (business) => {
        setSelectedBusiness(business);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedBusiness(null);
        setIsModalOpen(false);
    };


    // const authData = JSON.parse(localStorage.getItem("isAuth"));
    //   const currentTime = Date.now();

    //   if (authData?.status === true && currentTime < authData.expTime) {
    //     // toast.success("Admin access granted");
    //   } else {
    //     router.push('/')
    //     localStorage.removeItem("isAuth");
    //     // Optional: clear expired auth data
    //     return (
    //         <div className="max-w-7xl mx-auto px-8 font-sans text-blue-900 bg-white min-h-screen">
    //             <div className="flex flex-col items-center justify-center py-20 gap-4">
    //                 {/* <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
    //                 <div className="text-xl text-blue-700 font-medium"></div> */}
    //             </div>
    //         </div>
    //     );
        
    //   }

    if (isLoading) {
        return (
            <div className="max-w-7xl mx-auto px-8 font-sans text-blue-900 bg-white min-h-screen">
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                    <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
                    <div className="text-xl text-blue-700 font-medium">Loading businesses...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-7xl mx-auto px-8 font-sans text-blue-900 bg-white min-h-screen">
                <div className="text-center py-20 bg-blue-50 rounded-3xl my-8">
                    <div className="text-5xl mb-4">⚠️</div>
                    <div className="text-xl font-semibold text-blue-900 mb-2">Unable to load businesses</div>
                    <div className="text-lg text-blue-700">Please try again later</div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-8 font-sans text-blue-900  min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-12 my-8 text-white relative overflow-hidden">
                <button onClick={()=>{router.push('/admin/skilledpeoples')}} className='px-4 scale-75 md:scale-100 py-2 bg-white/10 rounded-full backdrop-blur-md text-purple-200 font-medium hover:scale-105 duration-100 transition-all ease-in'>Professionals</button>
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                        Business Directory
                    </h1>
                    <p className=" md:text-xl  opacity-90">Discover amazing businesses in your area</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium hidden md:block text-blue-200">Filter by Category</label>
                        <select
                            value={businessCategory}
                            onChange={(e) => {
                                setBusinessCategory(e.target.value);
                                setPage(1);
                            }}
                            className="px-6 py-4 border-none rounded-xl bg-white/10 text-white text-base min-w-72 cursor-pointer outline-none backdrop-blur-md transition-all duration-300 hover:bg-white/20 focus:bg-white/20 focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="All" className="bg-blue-900 text-white">
                                All Categories
                            </option>
                            {businessCategories.map((category) => (
                                <option key={category} value={category} className="bg-blue-900 text-white">
                                    {category.split("(")[0].trim()}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-md text-blue-200 font-medium">
                        {data?.totalItemsCount} businesses found
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-blue-400/20 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400/10 rounded-full"></div>
            </div>

            {/* Business Cards Grid - Simplified */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12 py-4">
                {data?.items?.map((business) => (
                    <div
                        key={business._id}
                        onClick={() => openModal(business)}
                        className="bg-white rounded-3xl overflow-hidden shadow-xl border border-blue-100 transition-all ease-in-out duration-150 hover:-translate-y-2 hover:shadow-2xl  cursor-pointer"
                    >
                        {/* Card Header with Gradient */}
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 relative flex items-center gap-4">
                            <div className="text-5xl bg-white rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg">
                                {getCategoryIcon(business.businessCategory)}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-blue-900 mb-2">{business.businessName}</h3>
                                <div className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold">
                                    {business.businessCategory?.split("(")[0]?.trim() || business.businessCategory}
                                </div>
                            </div>
                            <div className="absolute -top-5 -right-5 w-20 h-20 bg-blue-400/10 rounded-full"></div>
                        </div>

                        {/* Truncated Business Description */}
                        {business.businessDescription && (
                            <div className="px-8 py-6 border-b h-24 border-blue-100">
                                <p className="text-base text-blue-900 leading-relaxed italic pl-4 border-l-4 border-blue-200">
                                    "{truncateText(business.businessDescription, 50)}"
                                </p>
                            </div>
                        )}

                        {/* Owner Information - Simplified */}
                        <div className="px-6 py-4">
                            <div className="flex items-center justify-between p-5 bg-blue-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                {/* Avatar */}
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                                        {business.firstName?.charAt(0)?.toUpperCase()}
                                    </div>

                                    {/* Name and position */}
                                    <div>
                                        <div className="text-lg font-semibold text-blue-900">
                                            {business.firstName} {business.lastName}
                                        </div>
                                        {business.position && (
                                            <div className="text-sm text-blue-700">{business.position}</div>
                                        )}
                                    </div>
                                </div>

                                {/* Action */}
                                <div className="text-blue-500 text-sm font-medium cursor-pointer hover:underline">→</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Enhanced Pagination */}
            {data?.totalPages > 1 && (
                <div className="flex justify-center pb-12">
                    <div className="flex items-center gap-8 px-8 py-4 bg-white rounded-3xl shadow-xl border border-blue-100">
                        <button
                            disabled={page === 1}
                            onClick={() => setPage((prev) => prev - 1)}
                            className={`px-8 py-4 border-none rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 outline-none ${
                                page === 1
                                    ? "opacity-50 cursor-not-allowed bg-blue-200 text-blue-900"
                                    : "bg-blue-500 text-white hover:bg-blue-900 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/30"
                            }`}
                        >
                            ← Previous
                        </button>

                        <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-blue-900 px-4 py-2 bg-blue-50 rounded-lg">{page}</span>
                            <span className="text-base text-blue-700">of</span>
                            <span className="text-base text-blue-700 font-semibold">{data?.totalPages}</span>
                        </div>

                        <button
                            disabled={page === data?.totalPages}
                            onClick={() => setPage((prev) => prev + 1)}
                            className={`px-8 py-4 border-none rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 outline-none ${
                                page === data?.totalPages
                                    ? "opacity-50 cursor-not-allowed bg-blue-200 text-blue-900"
                                    : "bg-blue-500 text-white hover:bg-blue-900 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/30"
                            }`}
                        >
                            Next →
                        </button>
                    </div>
                </div>
            )}

            {/* Business Details Modal */}
            <BusinessModal business={selectedBusiness} isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default Page;
