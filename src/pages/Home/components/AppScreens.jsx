import { useState, useEffect } from 'react';
import { Eye, CheckCircle, BarChart3 } from 'lucide-react';

// Les écrans fixes
const fixedScreens = [
    {
        image: 'List.png',
        title: 'Liste des Trajets',
        description: 'Consultez tous les itinéraires disponibles avec leurs détails complets',
        icon: <Eye className="w-5 h-5" />
    },
    {
        image: 'Map.png',
        title: 'Visualisation Cartographique',
        description: 'Suivez votre trajet en temps réel sur une carte interactive',
        icon: <BarChart3 className="w-5 h-5" />
    },
    {
        image: 'Details.png',
        title: 'Détails Complets',
        description: 'Analysez les coûts, durée et confort de chaque option',
        icon: <CheckCircle className="w-5 h-5" />
    }
];

const AppScreens = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isSmallMobile, setIsSmallMobile] = useState(false);
    const [isLargeDesktop, setIsLargeDesktop] = useState(false);

    // Détection du responsive
    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
            setIsSmallMobile(width < 480);
            setIsLargeDesktop(width >= 1440);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Dimensions des téléphones en format portrait
    const getPhoneDimensions = () => {
        if (isSmallMobile) {
            return { width: '145px', height: '280px' };
        } else if (isMobile) {
            return { width: '160px', height: '320px' };
        } else if (isLargeDesktop) {
            return { width: '200px', height: '400px' };
        } else {
            return { width: '195px', height: '360px' };
        }
    };

    return (
        <section id="screens" className="py-8 sm:py-12 md:py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 2xl:px-16">
                {/* En-tête */}
                <div className="mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4 text-black">
                        Prenez le <span className="text-[#FF7122]">Contrôle Total de</span> vos trajets
                    </h2>

                    <p className="text-base sm:text-lg text-gray-400 text-center max-w-2xl mx-auto">
                        Visualisez TOUS les trajets possibles et choisissez ce qui vous arrange le plus.
                        <br className="hidden md:block" />
                        Comparez, analysez, décidez en toute liberté.
                    </p>
                </div>

                {/* Grille des 3 écrans fixes - format portrait */}
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
                        {fixedScreens.map((screen, index) => {
                            const dimensions = getPhoneDimensions();
                            
                            return (
                                <div 
                                    key={index}
                                    className="relative group flex flex-col items-center"
                                >
                                    {/* Effet de lueur au survol */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF7122]/10 to-orange-500/10 rounded-[2rem] blur-xl transform scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                                    
                                    {/* Cadre du téléphone - format portrait */}
                                    <div className={`relative bg-gradient-to-br from-gray-900 to-gray-800 
                                                rounded-[1.8rem] sm:rounded-[2rem] md:rounded-[2.2rem] lg:rounded-[2.5rem] 
                                                p-1.5 sm:p-2 md:p-2.5 lg:p-3 
                                                shadow-lg sm:shadow-xl lg:shadow-2xl shadow-gray-900/30 
                                                transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-2`}
                                          style={{ 
                                              width: dimensions.width,
                                              minWidth: dimensions.width,
                                              maxWidth: dimensions.width
                                          }}>
                                        {/* Encoche */}
                                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 
                                                  h-3 w-14 sm:h-3.5 sm:w-16 md:h-4 md:w-18 lg:h-4.5 lg:w-20 xl:h-5 xl:w-22 
                                                  bg-gray-900 rounded-b-lg sm:rounded-b-xl"></div>
                                        
                                        {/* Écran - format portrait (environ 2:1 ratio hauteur:largeur) */}
                                        <div className={`relative bg-white w-full 
                                                  rounded-[1.4rem] sm:rounded-[1.6rem] md:rounded-[1.8rem] lg:rounded-[2.1rem] 
                                                  overflow-hidden 
                                                  border-4 sm:border-5 md:border-6 lg:border-7 border-gray-900`}
                                              style={{ 
                                                  height: dimensions.height 
                                              }}>
                                            {/* Container d'image avec alignement en haut */}
                                            <div className="relative w-full h-full py-1 flex items-start justify-center overflow-hidden bg-gray-50">
                                                <img 
                                                    src={screen.image} 
                                                    alt={`${screen.title} - TravelBabi`}
                                                    className="w-full h-auto max-w-full object-contain"
                                                    style={{ 
                                                        objectPosition: 'top center'
                                                    }}
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                                        </div>
                                        
                                        {/* Boutons latéraux */}
                                        <div className="absolute right-0 top-1/4 w-0.5 h-6 sm:h-7 md:h-8 lg:h-9 bg-gray-700/80 rounded-l"></div>
                                        <div className="absolute right-0 top-2/3 w-0.5 h-4 sm:h-4 md:h-5 lg:h-5 bg-gray-700/80 rounded-l"></div>
                                    </div>

                                    {/* Contenu descriptif sous l'écran */}
                                    <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-center space-y-2 sm:space-y-3 md:space-y-4 w-full max-w-sm">
                                        {/* Titre avec icône */}
                                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#FF7122] to-orange-500 rounded-full flex items-center justify-center text-white mb-2 sm:mb-0">
                                                {screen.icon}
                                            </div>
                                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
                                                {screen.title}
                                            </h3>
                                        </div>
                                        
                                        {/* Description */}
                                        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2 sm:px-4">
                                            {screen.description}
                                        </p>
                                        
                                        {/* Indicateur de statut */}
                                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-[#FF7122]/10 to-orange-500/10 rounded-full">
                                            <div className="w-2 h-2 bg-[#FF7122] rounded-full animate-pulse"></div>
                                            <span className="text-xs sm:text-sm font-medium text-[#FF7122]">
                                                Fonctionnalité active
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Call to Action au centre */}
                    <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 text-center">
                        <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 bg-gradient-to-r from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-200 max-w-3xl mx-auto">
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#FF7122] to-orange-500 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                                        Liberté de choix absolue
                                    </h4>
                                    <p className="text-sm sm:text-base text-gray-600">
                                        Vous décidez, nous exécutons
                                    </p>
                                </div>
                            </div>
                            
                            <div className="h-px w-full sm:h-12 sm:w-px bg-gradient-to-r sm:bg-gradient-to-b from-[#FF7122]/20 to-orange-500/20"></div>
                            
                            <div className="space-y-2">
                                <p className="text-base sm:text-lg md:text-xl font-medium text-gray-800">
                                    <span className="text-[#FF7122] font-bold">3 interfaces</span> pour un{' '}
                                    <span className="text-[#FF7122] font-bold">contrôle total</span>
                                </p>
                                <p className="text-sm sm:text-base text-gray-600">
                                    Comparez, analysez et choisissez en toute connaissance de cause
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Effets décoratifs */}
                <div className={`absolute bg-gradient-to-r from-[#FF7122]/5 to-orange-500/5 rounded-full 
                               ${isSmallMobile ? '-top-12 -right-12 w-24 h-24 blur-xl' :
                                 isMobile ? '-top-16 -right-16 w-32 h-32 blur-2xl' :
                                 isLargeDesktop ? '-top-60 -right-60 w-[500px] h-[500px] blur-3xl' :
                                 '-top-40 -right-40 w-80 h-80 blur-3xl'}`}></div>
                <div className={`absolute bg-gradient-to-r from-blue-500/5 to-[#FF7122]/5 rounded-full 
                               ${isSmallMobile ? '-bottom-12 -left-12 w-24 h-24 blur-xl' :
                                 isMobile ? '-bottom-16 -left-16 w-32 h-32 blur-2xl' :
                                 isLargeDesktop ? '-bottom-60 -left-60 w-[500px] h-[500px] blur-3xl' :
                                 '-bottom-40 -left-40 w-80 h-80 blur-3xl'}`}></div>
            </div>
        </section>
    );
};

export default AppScreens;