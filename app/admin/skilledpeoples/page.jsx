"use client"
import { File } from 'lucide-react';
import { useGetSkilledPeople } from '@/features/hooks/useSkilledPeople'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";

const professionalCategories = [
    "Software Development (Web developers, mobile app developers, software engineers)",
    "Design and Creative (Graphic designers, UI/UX designers, photographers, videographers)",
    "Marketing and Sales (Digital marketers, content creators, social media managers)",
    "Writing and Content (Content writers, copywriters, technical writers, editors)",
    "Business and Finance (Business analysts, financial advisors, accountants, consultants)",
    "Healthcare and Medical (Doctors, nurses, therapists, medical consultants)",
    "Education and Training (Teachers, tutors, trainers, educational consultants)",
    "Engineering (Civil engineers, mechanical engineers, electrical engineers)",
    "Legal Services (Lawyers, legal advisors, paralegals)",
    "Architecture and Construction (Architects, interior designers, construction managers)",
    "Data and Analytics (Data scientists, analysts, researchers)",
    "Project Management (Project managers, scrum masters, operations managers)",
    "Human Resources (HR specialists, recruiters, career coaches)",
    "Translation and Languages (Translators, interpreters, language teachers)",
    "Other (If your profession is not listed, select this option)",
];

const getCategoryIcon = (category) => {
    if (category?.includes('Software') || category?.includes('Development')) return '💻'
    if (category?.includes('Design') || category?.includes('Creative')) return '🎨'
    if (category?.includes('Marketing') || category?.includes('Sales')) return '📊'
    if (category?.includes('Writing') || category?.includes('Content')) return '✍️'
    if (category?.includes('Business') || category?.includes('Finance')) return '💼'
    if (category?.includes('Healthcare') || category?.includes('Medical')) return '🏥'
    if (category?.includes('Education') || category?.includes('Training')) return '📚'
    if (category?.includes('Engineering')) return '⚙️'
    if (category?.includes('Legal')) return '⚖️'
    if (category?.includes('Architecture') || category?.includes('Construction')) return '🏗️'
    if (category?.includes('Data') || category?.includes('Analytics')) return '📈'
    if (category?.includes('Project Management')) return '🎯'
    if (category?.includes('Human Resources')) return '👥'
    if (category?.includes('Translation') || category?.includes('Languages')) return '🌍'
    return '👤'
}

const truncateText = (text, maxLength = 100) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

// Professional Modal Component
const ProfessionalModal = ({ professional, isOpen, onClose }) => {
    if (!isOpen || !professional) return null;

    return (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-hidden flex flex-col">
                {/* Modal Header */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 relative">
                    <div className="flex items-center gap-6">
                        <div className="text-5xl bg-white rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg">
                            {getCategoryIcon(professional.professionalCategory)}
                        </div>
                        <div className="flex-1">
                            <h3 className="text-3xl font-bold text-purple-900 mb-2">{professional.fullName}</h3>
                            <div className="inline-block px-4 py-2 bg-purple-500 text-white rounded-full text-sm font-semibold">
                                {professional.professionalCategory?.split('(')[0]?.trim() || professional.professionalCategory || 'Professional'}
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-900 hover:bg-purple-50 transition-colors text-xl font-bold"
                    >
                        ×
                    </button>
                </div>

                <div className="p-8 flex-1 overflow-auto">
                    {/* Skills Section */}
                    {professional.skills && (
                        <div className="mb-8">
                            <h4 className="text-lg font-semibold text-purple-900 mb-4">Skills & Expertise</h4>
                            <div className="p-4 bg-purple-50 rounded-xl">
                                <p className="text-base text-purple-900 leading-relaxed">
                                    {professional.skills}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Experience Section */}
                    {professional.experience && (
                        <div className="mb-8">
                            <h4 className="text-lg font-semibold text-purple-900 mb-4">Experience</h4>
                            <div className="p-4 bg-purple-50 rounded-xl">
                                <p className="text-base text-purple-900 leading-relaxed">
                                    {professional.experience}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Education Section */}
                    {professional.education && (
                        <div className="mb-8">
                            <h4 className="text-lg font-semibold text-purple-900 mb-4">Education</h4>
                            <div className="p-4 bg-purple-50 rounded-xl">
                                <p className="text-base text-purple-900 leading-relaxed">
                                    {professional.education}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Location Section */}
                    {(professional.city || professional.state || professional.country) && (
                        <div className="mb-8">
                            <h4 className="text-lg font-semibold text-purple-900 mb-4">Location</h4>
                            <div className="flex gap-4 p-4 bg-purple-50 rounded-xl">
                                <div className="text-2xl mt-1">📍</div>
                                <div className="flex-1">
                                    <div className="text-base text-purple-900 leading-relaxed">
                                        {[professional.city, professional.state, professional.country].filter(Boolean).join(', ')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Contact Information */}
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold text-purple-900 mb-4">Contact Information</h4>
                        <div className="grid gap-4">
                            {professional.contactNumber && (
                                <a 
                                    href={`tel:${professional.contactNumber}`} 
                                    className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl transition-all duration-300 hover:bg-purple-100 hover:translate-x-1 no-underline text-inherit"
                                >
                                    <div className="text-2xl w-10 h-10 bg-white rounded-lg flex items-center justify-center">📞</div>
                                    <div className="flex-1">
                                        <div className="text-xs font-semibold text-purple-700 uppercase tracking-wide mb-1">Phone</div>
                                        <div className="text-base text-purple-900 font-medium break-words">{professional.contactNumber}</div>
                                    </div>
                                </a>
                            )}
                            
                            {professional.email && (
                                <a 
                                    href={`mailto:${professional.email}`} 
                                    className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl transition-all duration-300 hover:bg-purple-100 hover:translate-x-1 no-underline text-inherit"
                                >
                                    <div className="text-2xl w-10 h-10 bg-white rounded-lg flex items-center justify-center">✉️</div>
                                    <div className="flex-1">
                                        <div className="text-xs font-semibold text-purple-700 uppercase tracking-wide mb-1">Email</div>
                                        <div className="text-base text-purple-900 font-medium break-words">{professional.email}</div>
                                    </div>
                                </a>
                            )}
                            
                            {professional.resume && (
                                <a 
                                    href={`${process.env.NEXT_PUBLIC_BACKENDBASEURL_WITHOUT_API}${professional.resume}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl transition-all duration-300 hover:bg-purple-100 hover:translate-x-1 no-underline text-inherit"
                                >
                                    <div className="text-2xl w-10 h-10 bg-white rounded-lg flex items-center justify-center"><File/></div>
                                    <div className="flex-1">
                                        <div className="text-xs font-semibold text-purple-700 uppercase tracking-wide mb-1">Resume</div>
                                        {/* <div className="text-base text-purple-900 font-medium break-words">{professional.resume}</div> */}
                                    </div>
                                </a>
                            )}

                            {professional.linkedin && (
                                <a 
                                    href={professional.linkedin.startsWith('http') ? professional.linkedin : `https://${professional.linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl transition-all duration-300 hover:bg-purple-100 hover:translate-x-1 no-underline text-inherit"
                                >
                                    <div className="text-2xl w-10 h-10 bg-white rounded-lg flex items-center justify-center">💼</div>
                                    <div className="flex-1">
                                        <div className="text-xs font-semibold text-purple-700 uppercase tracking-wide mb-1">LinkedIn</div>
                                        <div className="text-base text-purple-900 font-medium break-words">{professional.linkedin}</div>
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

const Page = () => {
    const router=useRouter()
    const [page, setPage] = useState(1)
    const [professionalCategory, setProfessionalCategory] = useState("All")
    const [selectedProfessional, setSelectedProfessional] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { data, error, isLoading } = useGetSkilledPeople({ professionalCategory, page })

    const openModal = (professional) => {
        setSelectedProfessional(professional)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setSelectedProfessional(null)
        setIsModalOpen(false)
    }

    // useEffect(() => {
    //     const authData = JSON.parse(localStorage.getItem("isAuth"));
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
    // }, [data, error])


   

    if (isLoading) {
        return (
            <div className="max-w-7xl mx-auto px-8 font-sans text-purple-900 bg-white min-h-screen">
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                    <div className="w-10 h-10 border-4 border-purple-200 border-t-purple-500 rounded-full animate-spin"></div>
                    <div className="text-xl text-purple-700 font-medium">Loading professionals...</div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="max-w-7xl mx-auto px-8 font-sans text-purple-900 bg-white min-h-screen">
                <div className="text-center py-20 bg-purple-50 rounded-3xl my-8">
                    <div className="text-5xl mb-4">⚠️</div>
                    <div className="text-xl font-semibold text-purple-900 mb-2">Unable to load professionals</div>
                    <div className="text-lg text-purple-700">Please try again later</div>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-7xl mx-auto px-8 font-sans text-purple-900 bg-white min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-purple-900 to-purple-700 rounded-3xl p-12 my-8 text-white relative overflow-hidden">
                <button onClick={()=>{router.push('/admin/business')}} className='px-4 py-2 bg-white/10 rounded-full backdrop-blur-md text-purple-200 scale-75 md:scale-110 font-medium hover:scale-105 duration-100 transition-all ease-in'>Business</button>
                <div className="text-center mb-8">
                    <h1 className="text-xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                        Professional Directory
                    </h1>
                    <p className="md:text-xl opacity-90">Connect with skilled professionals</p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm hidden md:block font-medium text-purple-200">Filter by Category</label>
                        <select 
                            value={professionalCategory} 
                            onChange={(e) => {
                                setProfessionalCategory(e.target.value)
                                setPage(1)
                            }}
                            className="px-6 py-4 border-none rounded-xl bg-white/10 text-white text-base min-w-72 cursor-pointer outline-none backdrop-blur-md transition-all duration-300 hover:bg-white/20 focus:bg-white/20 focus:ring-2 focus:ring-purple-400"
                        >
                            <option value="All" className="bg-purple-900 text-white">All Categories</option>
                            {professionalCategories.map(category => (
                                <option key={category} value={category} className="bg-purple-900 text-white">
                                    {category.split('(')[0].trim()}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                    <div className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-md text-purple-200 font-medium">
                        {data?.totalItemsCount || data?.length || 0} professionals found
                    </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-purple-400/20 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-400/10 rounded-full"></div>
            </div>

            {/* Professional Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12 py-4">
                {(data?.items || data)?.map(professional => (
                    <div 
                        key={professional._id} 
                        onClick={() => openModal(professional)}
                        className="bg-white rounded-3xl overflow-hidden shadow-xl border border-blue-100 transition-all ease-in-out duration-150 hover:-translate-y-2 hover:shadow-2xl  cursor-pointer"
                    >
                        {/* Card Header */}
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 relative">
                            <div className="flex items-center gap-4">
                                {/* <div className="text-5xl bg-white rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg">
                                    {getCategoryIcon(professional.professionalCategory)}
                                </div> */}
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-purple-900 mb-2 capitalize">{professional.fullName}</h3>
                                    {/* <div className="inline-block px-4 py-2 bg-purple-500 text-white rounded-full text-sm font-semibold">
                                        {professional.professionalCategory?.split('(')[0]?.trim() || professional.professionalCategory || 'Professional'}
                                    </div> */}
                                </div>
                            </div>
                            <div className="absolute -top-5 -right-5 w-20 h-20 bg-purple-400/10 rounded-full"></div>
                        </div>

                        {/* Skills Preview */}
                        {professional.skills && (
                            <div className="px-8 py-6 border-b border-purple-100">
                                <div className="flex items-center gap-2 mb-3">
                                    {/* <span className="text-lg">🎯</span> */}
                                    <h4 className="text-sm font-semibold text-purple-700 uppercase tracking-wide">Skills</h4>
                                </div>
                                <p className="text-base text-purple-900 leading-relaxed">
                                    {truncateText(professional.skills,50)}
                                </p>
                                {/*  */}
                            </div>
                        )}

                        {/* Location Preview */}
                        {(professional.city || professional.state || professional.country) && (
                            <div className="px-8 py-6 border-b border-purple-100">
                                <div className="flex items-center gap-3">
                                    <span className="text-xl">📍</span>
                                    <div className="text-base text-purple-900 font-medium">
                                        {[professional.city, professional.state, professional.country].filter(Boolean).join(', ')}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Click for Details */}
                        <div className="px-8 py-6">
                            <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center text-lg font-bold">
                                        {professional.fullName?.charAt(0)?.toUpperCase()}
                                    </div>
                                    <div className="text-base font-medium text-purple-900">
                                        View Full Profile
                                    </div>
                                </div>
                                <div className="text-purple-500 text-sm font-medium">
                                     →
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Enhanced Pagination */}
            {(data?.totalPages > 1) && (
                <div className="flex justify-center pb-12">
                    <div className="flex items-center gap-8 px-8 py-4 bg-white rounded-3xl shadow-xl border border-purple-100">
                        <button
                            disabled={page === 1}
                            onClick={() => setPage(prev => prev - 1)}
                            className={`px-8 py-4 border-none rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 outline-none ${
                                page === 1 
                                    ? 'opacity-50 cursor-not-allowed bg-purple-200 text-purple-900' 
                                    : 'bg-purple-500 text-white hover:bg-purple-900 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/30'
                            }`}
                        >
                            ← Previous
                        </button>
                        
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-purple-900 px-4 py-2 bg-purple-50 rounded-lg">
                                {page}
                            </span>
                            <span className="text-base text-purple-700">of</span>
                            <span className="text-base text-purple-700 font-semibold">{data?.totalPages}</span>
                        </div>
                        
                        <button
                            disabled={page === data?.totalPages}
                            onClick={() => setPage(prev => prev + 1)}
                            className={`px-8 py-4 border-none rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 outline-none ${
                                page === data?.totalPages 
                                    ? 'opacity-50 cursor-not-allowed bg-purple-200 text-purple-900' 
                                    : 'bg-purple-500 text-white hover:bg-purple-900 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/30'
                            }`}
                        >
                            Next →
                        </button>
                    </div>
                </div>
            )}

            {/* Professional Details Modal */}
            <ProfessionalModal 
                professional={selectedProfessional}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </div>
    )
}

export default Page