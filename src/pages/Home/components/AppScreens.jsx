import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { screens } from '../../../data/data';

const AppScreens = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % screens.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + screens.length) % screens.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    // Auto-play optionnel
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const getVisibleScreens = () => {
        const prevIndex = (currentIndex - 1 + screens.length) % screens.length;
        const nextIndex = (currentIndex + 1) % screens.length;
        return [prevIndex, currentIndex, nextIndex];
    };

    return (
        <section id="screens" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* En-tête */}
                <div className="text-center mb-12 md:mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-orange-100">
                        <div className="w-2 h-2 bg-[#FF7122] rounded-full animate-pulse"></div>
                        <span className="text-[#FF7122] font-semibold text-sm">Capture d'écrans</span>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                        Découvrez l'expérience <span className="text-[#FF7122]">TravelBabi</span>
                    </h2>
                    
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Parcourez les différentes interfaces conçues pour simplifier vos trajets à Abidjan
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    {/* Navigation */}
                    <div className="flex items-center justify-between md:justify-center gap-6">
                        <button
                            onClick={prevSlide}
                            disabled={isAnimating}
                            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 
                                     transition-all hover:scale-110 active:scale-95 border border-gray-200 
                                     disabled:opacity-50 disabled:cursor-not-allowed z-20"
                            aria-label="Écran précédent"
                        >
                            <ChevronLeft className="w-6 h-6 text-[#FF7122]" />
                        </button>

                        {/* Téléphones */}
                        <div className="flex-1 md:flex-none flex items-center justify-center gap-4 md:gap-8 overflow-visible">
                            {getVisibleScreens().map((screenIndex, positionIndex) => {
                                const screen = screens[screenIndex];
                                const isCenter = screenIndex === currentIndex;
                                const isLeft = positionIndex === 0;
                                const isRight = positionIndex === 2;

                                return (
                                    <div
                                        key={screenIndex}
                                        className={`transition-all duration-500 ease-out ${
                                            isCenter 
                                                ? 'z-30 scale-100 opacity-100 translate-y-0' 
                                                : 'z-10 scale-90 opacity-60 translate-y-4'
                                        } ${isLeft ? '-translate-x-4 md:-translate-x-8' : ''} 
                                          ${isRight ? 'translate-x-4 md:translate-x-8' : ''}`}
                                        style={{ 
                                            minWidth: isCenter ? '280px' : '220px',
                                            maxWidth: isCenter ? '280px' : '220px'
                                        }}
                                    >
                                        <div className="relative group">
                                            {/* Effet de lueur */}
                                            <div className={`absolute inset-0 bg-gradient-to-r ${
                                                isCenter 
                                                    ? 'from-[#FF7122]/20 to-orange-500/20' 
                                                    : 'from-[#FF7122]/10 to-orange-500/10'
                                            } rounded-[3rem] blur-xl transform -translate-y-1 scale-105 -z-10`}></div>
                                            
                                            {/* Cadre du téléphone */}
                                            <div className={`relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-2 
                                                          shadow-xl ${isCenter ? 'shadow-gray-900/30' : 'shadow-gray-900/20'} 
                                                          transition-all duration-300 ${isCenter ? 'group-hover:shadow-2xl' : ''}`}>
                                                {/* Encoche */}
                                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-5 w-32 bg-gray-900 rounded-b-xl z-20"></div>
                                                
                                                {/* Écran */}
                                                <div className="relative bg-white w-full h-[500px] rounded-[2.5rem] overflow-hidden border-8 border-gray-900">
                                                    <img 
                                                        src={screen.image} 
                                                        alt={`${screen.title} - TravelBabi`}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
                                                </div>
                                                
                                                {/* Boutons latéraux */}
                                                <div className="absolute right-0 top-1/4 w-1 h-10 bg-gray-700/80 rounded-l"></div>
                                                <div className="absolute right-0 top-2/3 w-1 h-6 bg-gray-700/80 rounded-l"></div>
                                            </div>

                                            {/* Badge écran central */}
                                            {isCenter && (
                                                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 
                                                            bg-gradient-to-r from-[#FF7122] to-orange-500 text-white text-sm 
                                                            font-bold px-4 py-2 rounded-full shadow-lg whitespace-nowrap 
                                                            animate-pulse-subtle">
                                                    {screen.title}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <button
                            onClick={nextSlide}
                            disabled={isAnimating}
                            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 
                                     transition-all hover:scale-110 active:scale-95 border border-gray-200 
                                     disabled:opacity-50 disabled:cursor-not-allowed z-20"
                            aria-label="Écran suivant"
                        >
                            <ChevronRight className="w-6 h-6 text-[#FF7122]" />
                        </button>
                    </div>

                    {/* Pagination et info */}
                    <div className="mt-12 md:mt-16 space-y-8">
                        {/* Points de navigation */}
                        <div className="flex justify-center items-center gap-3">
                            {screens.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    disabled={isAnimating}
                                    className={`transition-all duration-300 rounded-full ${
                                        index === currentIndex 
                                            ? 'w-8 h-2 bg-gradient-to-r from-[#FF7122] to-orange-500' 
                                            : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                    aria-label={`Aller à l'écran ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Description écran actuel */}
                        <div className="text-center space-y-4 max-w-2xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-1 bg-gray-100 rounded-full">
                                <span className="text-sm font-medium text-[#FF7122]">
                                    {currentIndex + 1} / {screens.length}
                                </span>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-gray-900">
                                {screens[currentIndex].title}
                            </h3>
                            
                            <p className="text-gray-600 leading-relaxed">
                                {screens[currentIndex].description}
                            </p>
                        </div>

                        {/* Indicateur de navigation */}
                        <div className="text-center text-sm text-gray-500">
                            <p>Utilisez les flèches ou cliquez sur les points pour naviguer</p>
                        </div>
                    </div>
                </div>

                {/* Effets décoratifs */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#FF7122]/5 to-orange-500/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-[#FF7122]/5 rounded-full blur-3xl"></div>
            </div>

            {/* CSS pour animation pulse subtile */}
            <style jsx>{`
                @keyframes pulse-subtle {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.8; }
                }
                .animate-pulse-subtle {
                    animation: pulse-subtle 2s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default AppScreens;