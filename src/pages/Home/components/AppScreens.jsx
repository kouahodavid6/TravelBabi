import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { screens } from '../../../data/data';

const AppScreens = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Détection du responsive
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
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
        if (isMobile) {
            // Sur mobile, afficher seulement l'écran actuel et le suivant
            const nextIndex = (currentIndex + 1) % screens.length;
            return [currentIndex, nextIndex];
        } else {
            // Sur desktop, afficher 3 écrans
            const prevIndex = (currentIndex - 1 + screens.length) % screens.length;
            const nextIndex = (currentIndex + 1) % screens.length;
            return [prevIndex, currentIndex, nextIndex];
        }
    }, [currentIndex, isMobile]);

    const goToSlide = useCallback((index) => {
        if (isAnimating || index === currentIndex) return;
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating, currentIndex]);

    return (
        <section id="screens" className="py-12 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* En-tête */}
                <div className="text-center mb-8 md:mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-orange-100">
                        <div className="w-2 h-2 bg-[#FF7122] rounded-full animate-pulse"></div>
                        <span className="text-[#FF7122] font-semibold text-sm">Capture d'écrans</span>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight px-4">
                        Découvrez l'expérience <span className="text-[#FF7122]">TravelBabi</span>
                    </h2>
                    
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                        Parcourez les différentes interfaces conçues pour simplifier vos trajets à Abidjan
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    {/* Navigation */}
                    <div className="flex items-center justify-between gap-4 md:gap-6">
                        <button
                            onClick={prevSlide}
                            disabled={isAnimating}
                            className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 
                                     transition-all hover:scale-110 active:scale-95 border border-gray-200 
                                     disabled:opacity-50 disabled:cursor-not-allowed z-20 shrink-0"
                            aria-label="Écran précédent"
                        >
                            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#FF7122]" />
                        </button>

                        {/* Téléphones */}
                        <div className="flex-1 flex items-center justify-center gap-2 md:gap-4 lg:gap-8 overflow-visible px-2">
                            {getVisibleScreens().map((screenIndex, positionIndex) => {
                                const screen = screens[screenIndex];
                                const isCenter = screenIndex === currentIndex;
                                const isMobileView = isMobile && positionIndex === 0;
                                const isLeft = !isMobile && positionIndex === 0;
                                const isRight = !isMobile && positionIndex === 2;

                                return (
                                    <div
                                        key={`${screenIndex}-${positionIndex}`}
                                        className={`transition-all duration-500 ease-out ${
                                            isCenter || isMobileView
                                                ? 'z-30 scale-100 opacity-100 translate-y-0' 
                                                : 'z-10 scale-90 opacity-60 translate-y-4'
                                        } ${isLeft ? '-translate-x-2 md:-translate-x-4 lg:-translate-x-8' : ''} 
                                          ${isRight ? 'translate-x-2 md:translate-x-4 lg:translate-x-8' : ''}`}
                                        style={{ 
                                            minWidth: isCenter || isMobileView ? 
                                                '240px' : '200px',
                                            maxWidth: isCenter || isMobileView ? 
                                                '240px' : '200px',
                                            display: isMobile && positionIndex === 1 && !isCenter ? 'none' : 'block'
                                        }}
                                    >
                                        <div className="relative group">
                                            {/* Effet de lueur */}
                                            <div className={`absolute inset-0 bg-gradient-to-r ${
                                                isCenter || isMobileView
                                                    ? 'from-[#FF7122]/20 to-orange-500/20' 
                                                    : 'from-[#FF7122]/10 to-orange-500/10'
                                            } rounded-[2rem] md:rounded-[3rem] blur-xl transform -translate-y-1 scale-105 -z-10`}></div>
                                            
                                            {/* Cadre du téléphone */}
                                            <div className={`relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2rem] md:rounded-[3rem] p-1.5 md:p-2 
                                                          shadow-xl ${isCenter || isMobileView ? 'shadow-gray-900/30' : 'shadow-gray-900/20'} 
                                                          transition-all duration-300 ${isCenter ? 'group-hover:shadow-2xl' : ''}`}>
                                                {/* Encoche */}
                                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-4 w-24 md:h-5 md:w-32 bg-gray-900 rounded-b-xl z-20"></div>
                                                
                                                {/* Écran */}
                                                <div className="relative bg-white w-full h-[400px] md:h-[500px] rounded-[1.8rem] md:rounded-[2.5rem] overflow-hidden border-6 md:border-8 border-gray-900">
                                                    <img 
                                                        src={screen.image} 
                                                        alt={`${screen.title} - TravelBabi`}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                        loading="lazy"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
                                                </div>
                                                
                                                {/* Boutons latéraux */}
                                                <div className="absolute right-0 top-1/4 w-1 h-8 md:h-10 bg-gray-700/80 rounded-l"></div>
                                                <div className="absolute right-0 top-2/3 w-1 h-5 md:h-6 bg-gray-700/80 rounded-l"></div>
                                            </div>

                                            {/* Badge écran central */}
                                            {(isCenter || isMobileView) && (
                                                <div className="absolute -bottom-4 md:-bottom-5 left-1/2 transform -translate-x-1/2 
                                                            bg-gradient-to-r from-[#FF7122] to-orange-500 text-white text-xs md:text-sm 
                                                            font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg whitespace-nowrap 
                                                            animate-[pulse-subtle_2s_ease-in-out_infinite]">
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
                            className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 
                                     transition-all hover:scale-110 active:scale-95 border border-gray-200 
                                     disabled:opacity-50 disabled:cursor-not-allowed z-20 shrink-0"
                            aria-label="Écran suivant"
                        >
                            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#FF7122]" />
                        </button>
                    </div>

                    {/* Pagination et info */}
                    <div className="mt-8 md:mt-12 lg:mt-16 space-y-6 md:space-y-8">
                        {/* Points de navigation */}
                        <div className="flex justify-center items-center gap-2 md:gap-3 flex-wrap">
                            {screens.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    disabled={isAnimating}
                                    className={`transition-all duration-300 rounded-full ${
                                        index === currentIndex 
                                            ? 'w-6 h-1.5 md:w-8 md:h-2 bg-gradient-to-r from-[#FF7122] to-orange-500' 
                                            : 'w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                    aria-label={`Aller à l'écran ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Description écran actuel */}
                        <div className="text-center space-y-3 md:space-y-4 max-w-2xl mx-auto px-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
                                <span className="text-xs md:text-sm font-medium text-[#FF7122]">
                                    {currentIndex + 1} / {screens.length}
                                </span>
                            </div>
                            
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                {screens[currentIndex].title}
                            </h3>
                            
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                {screens[currentIndex].description}
                            </p>
                        </div>

                        {/* Indicateur de navigation */}
                        <div className="text-center text-xs md:text-sm text-gray-500">
                            <p>Utilisez les flèches ou cliquez sur les points pour naviguer</p>
                        </div>
                    </div>
                </div>

                {/* Effets décoratifs */}
                <div className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-[#FF7122]/5 to-orange-500/5 rounded-full blur-2xl md:blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-blue-500/5 to-[#FF7122]/5 rounded-full blur-2xl md:blur-3xl"></div>
            </div>
        </section>
    );
};

export default AppScreens;