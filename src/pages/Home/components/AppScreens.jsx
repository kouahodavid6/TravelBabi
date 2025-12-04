import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { screens } from '../../../data/data';

const AppScreens = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isSmallMobile, setIsSmallMobile] = useState(false);

    // Détection du responsive
    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
            setIsSmallMobile(width < 480); // Pour les très petits écrans
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const nextSlide = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % screens.length);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating]);

    const prevSlide = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + screens.length) % screens.length);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating]);

    // Auto-play optionnel
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [nextSlide]);

    const getVisibleScreens = useCallback(() => {
        if (isSmallMobile) {
            // Sur très petit mobile, afficher seulement l'écran actuel
            return [currentIndex];
        } else if (isMobile) {
            // Sur mobile normal, afficher l'écran actuel et le suivant
            const nextIndex = (currentIndex + 1) % screens.length;
            return [currentIndex, nextIndex];
        } else {
            // Sur desktop, afficher 3 écrans
            const prevIndex = (currentIndex - 1 + screens.length) % screens.length;
            const nextIndex = (currentIndex + 1) % screens.length;
            return [prevIndex, currentIndex, nextIndex];
        }
    }, [currentIndex, isMobile, isSmallMobile]);

    const goToSlide = useCallback((index) => {
        if (isAnimating || index === currentIndex) return;
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating, currentIndex]);

    return (
        <section id="screens" className="py-8 sm:py-12 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
                {/* En-tête */}
                <div className="text-center mb-6 sm:mb-8 md:mb-16 space-y-3 sm:space-y-4">
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full shadow-sm border border-orange-100">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FF7122] rounded-full animate-pulse"></div>
                        <span className="text-[#FF7122] font-semibold text-xs sm:text-sm">Capture d'écrans</span>
                    </div>
                    
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 leading-tight px-2 sm:px-4">
                        Découvrez l'expérience <span className="text-[#FF7122]">TravelBabi</span>
                    </h2>
                    
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-4">
                        Parcourez les différentes interfaces conçues pour simplifier vos trajets à Abidjan
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    {/* Navigation - disposition différente pour très petits écrans */}
                    <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                        <button
                            onClick={prevSlide}
                            disabled={isAnimating}
                            className={`bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 
                                     transition-all hover:scale-110 active:scale-95 border border-gray-200 
                                     disabled:opacity-50 disabled:cursor-not-allowed z-20 shrink-0
                                     ${isSmallMobile ? 'w-8 h-8' : 'w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12'}`}
                            aria-label="Écran précédent"
                        >
                            <ChevronLeft className={`text-[#FF7122] ${isSmallMobile ? 'w-4 h-4' : 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'}`} />
                        </button>

                        {/* Téléphones - container amélioré */}
                        <div className="flex-1 flex items-center justify-center overflow-visible px-1 sm:px-2">
                            <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-8 w-full">
                                {getVisibleScreens().map((screenIndex, positionIndex) => {
                                    const screen = screens[screenIndex];
                                    const isCenter = screenIndex === currentIndex;
                                    const isMobileView = (isMobile || isSmallMobile) && positionIndex === 0;
                                    const isLeft = !isMobile && !isSmallMobile && positionIndex === 0;
                                    const isRight = !isMobile && !isSmallMobile && positionIndex === 2;

                                    return (
                                        <div
                                            key={`${screenIndex}-${positionIndex}`}
                                            className={`transition-all duration-500 ease-out ${
                                                isCenter || isMobileView
                                                    ? 'z-30 scale-100 opacity-100 translate-y-0' 
                                                    : 'z-10 scale-90 opacity-60 translate-y-3 sm:translate-y-4'
                                            } ${isLeft ? '-translate-x-1 sm:-translate-x-2 md:-translate-x-4 lg:-translate-x-8' : ''} 
                                              ${isRight ? 'translate-x-1 sm:translate-x-2 md:translate-x-4 lg:translate-x-8' : ''}`}
                                            style={{ 
                                                minWidth: isSmallMobile 
                                                    ? (isCenter || isMobileView ? '180px' : '160px')
                                                    : isMobile
                                                    ? (isCenter || isMobileView ? '200px' : '180px')
                                                    : (isCenter || isMobileView ? '240px' : '200px'),
                                                maxWidth: isSmallMobile 
                                                    ? (isCenter || isMobileView ? '180px' : '160px')
                                                    : isMobile
                                                    ? (isCenter || isMobileView ? '200px' : '180px')
                                                    : (isCenter || isMobileView ? '240px' : '200px'),
                                                display: (isMobile || isSmallMobile) && positionIndex === 1 && !isCenter ? 'none' : 'block'
                                            }}
                                        >
                                            <div className="relative group">
                                                {/* Effet de lueur */}
                                                <div className={`absolute inset-0 bg-gradient-to-r ${
                                                    isCenter || isMobileView
                                                        ? 'from-[#FF7122]/20 to-orange-500/20' 
                                                        : 'from-[#FF7122]/10 to-orange-500/10'
                                                } rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] blur-lg sm:blur-xl transform -translate-y-1 scale-105 -z-10`}></div>
                                                
                                                {/* Cadre du téléphone */}
                                                <div className={`relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] p-1 sm:p-1.5 md:p-2 
                                                            shadow-lg sm:shadow-xl ${isCenter || isMobileView ? 'shadow-gray-900/30' : 'shadow-gray-900/20'} 
                                                            transition-all duration-300 ${isCenter ? 'group-hover:shadow-2xl' : ''}`}>
                                                    {/* Encoche */}
                                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-3 w-16 sm:h-3.5 sm:w-20 md:h-4 md:w-24 lg:h-5 lg:w-32 bg-gray-900 rounded-b-lg sm:rounded-b-xl"></div>
                                                    
                                                    {/* Écran */}
                                                    <div className={`relative bg-white w-full rounded-[1.3rem] sm:rounded-[1.6rem] md:rounded-[2.2rem] lg:rounded-[2.5rem] 
                                                                overflow-hidden border-4 sm:border-5 md:border-6 lg:border-8 border-gray-900
                                                                ${isSmallMobile ? 'h-[280px]' : 'h-[320px] sm:h-[360px] md:h-[420px] lg:h-[500px]'}`}>
                                                        <img 
                                                            src={screen.image} 
                                                            alt={`${screen.title} - TravelBabi`}
                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                            loading="lazy"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
                                                    </div>
                                                    
                                                    {/* Boutons latéraux */}
                                                    <div className="absolute right-0 top-1/4 w-0.5 h-6 sm:h-7 md:h-8 lg:h-10 bg-gray-700/80 rounded-l"></div>
                                                    <div className="absolute right-0 top-2/3 w-0.5 h-4 sm:h-4 md:h-5 lg:h-6 bg-gray-700/80 rounded-l"></div>
                                                </div>

                                                {/* Badge écran central */}
                                                {(isCenter || isMobileView) && (
                                                    <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-5 left-1/2 transform -translate-x-1/2 
                                                                bg-gradient-to-r from-[#FF7122] to-orange-500 text-white text-xs sm:text-sm 
                                                                font-bold px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full shadow-lg whitespace-nowrap 
                                                                animate-[pulse-subtle_2s_ease-in-out_infinite]">
                                                        {screen.title}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <button
                            onClick={nextSlide}
                            disabled={isAnimating}
                            className={`bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 
                                     transition-all hover:scale-110 active:scale-95 border border-gray-200 
                                     disabled:opacity-50 disabled:cursor-not-allowed z-20 shrink-0
                                     ${isSmallMobile ? 'w-8 h-8' : 'w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12'}`}
                            aria-label="Écran suivant"
                        >
                            <ChevronRight className={`text-[#FF7122] ${isSmallMobile ? 'w-4 h-4' : 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'}`} />
                        </button>
                    </div>

                    {/* Pagination et info */}
                    <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                        {/* Points de navigation */}
                        <div className="flex justify-center items-center gap-1.5 sm:gap-2 md:gap-3 flex-wrap px-1">
                            {screens.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    disabled={isAnimating}
                                    className={`transition-all duration-300 rounded-full ${
                                        index === currentIndex 
                                            ? 'bg-gradient-to-r from-[#FF7122] to-orange-500' 
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    } ${index === currentIndex 
                                        ? 'w-5 h-1 sm:w-6 sm:h-1.5 md:w-8 md:h-2' 
                                        : 'w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2 md:h-2'}`}
                                    aria-label={`Aller à l'écran ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Description écran actuel */}
                        <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 max-w-2xl mx-auto px-2 sm:px-3 md:px-4">
                            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 bg-gray-100 rounded-full">
                                <span className="text-xs sm:text-sm font-medium text-[#FF7122]">
                                    {currentIndex + 1} / {screens.length}
                                </span>
                            </div>
                            
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                                {screens[currentIndex].title}
                            </h3>
                            
                            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed px-1 sm:px-2">
                                {screens[currentIndex].description}
                            </p>
                        </div>

                        {/* Indicateur de navigation */}
                        <div className="text-center text-xs sm:text-sm text-gray-500 px-2">
                            <p>Utilisez les flèches ou cliquez sur les points pour naviguer</p>
                        </div>
                    </div>
                </div>

                {/* Effets décoratifs - réduits sur mobile */}
                <div className="absolute -top-12 -right-12 sm:-top-16 sm:-right-16 md:-top-40 md:-right-40 w-24 h-24 sm:w-32 sm:h-32 md:w-80 md:h-80 bg-gradient-to-r from-[#FF7122]/5 to-orange-500/5 rounded-full blur-xl sm:blur-2xl md:blur-3xl"></div>
                <div className="absolute -bottom-12 -left-12 sm:-bottom-16 sm:-left-16 md:-bottom-40 md:-left-40 w-24 h-24 sm:w-32 sm:h-32 md:w-80 md:h-80 bg-gradient-to-r from-blue-500/5 to-[#FF7122]/5 rounded-full blur-xl sm:blur-2xl md:blur-3xl"></div>
            </div>
        </section>
    );
};

export default AppScreens;