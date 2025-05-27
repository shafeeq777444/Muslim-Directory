import toast from "react-hot-toast";

export const isAuthAdmin=()=>{

    const authData = JSON.parse(localStorage.getItem("isAuth"));
      const currentTime = Date.now();

      if (authData?.status === true && currentTime < authData.expTime) {
        toast.success("Admin access granted");
      } else {
        router.push('/')
        localStorage.removeItem("isAuth");
        // Optional: clear expired auth data
        return (
            <div className="max-w-7xl mx-auto px-8 font-sans text-blue-900 bg-white min-h-screen">
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                    {/* <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
                    <div className="text-xl text-blue-700 font-medium"></div> */}
                </div>
            </div>
        );
        
      }

}
