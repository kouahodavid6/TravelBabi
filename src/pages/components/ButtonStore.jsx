/* eslint-disable no-unused-vars */
import { Smartphone } from 'lucide-react';

const ButtonStore = ({ 
    store, 
    url, 
    className = "",
    icon: Icon = Smartphone,
    variant = "primary" 
}) => {
    const baseClasses = "flex items-center justify-center gap-1 px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto";
    
    const variants = {
        primary: "bg-[#FF7122]/80 text-black hover:bg-[#ff9500]",
        secondary: "bg-gray-800 text-white hover:bg-gray-700",
        outline: "border-2 border-[#FF7122]/80 text-[#FF7122]/80 hover:bg-[#FF7122]/80 hover:text-white"
    };

    return (
        <button 
            onClick={() => window.open(url, '_blank')}
            className={`${baseClasses} ${variants[variant]} ${className}`}
        >
            <Icon className="w-5 h-5" />
            {store}
        </button>
    );
};

export default ButtonStore;