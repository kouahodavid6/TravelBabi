import { navItems } from '../../../data/data';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState(80);

    useEffect(() => {
        // Mettre à jour la hauteur de la navbar
        const updateNavbarHeight = () => {
            const nav = document.querySelector('nav');
            if (nav) {
                setNavbarHeight(nav.offsetHeight);
            }
        };

        updateNavbarHeight();
        window.addEventListener('resize', updateNavbarHeight);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = ['accueil', 'fonctionnalites', 'etoiles', 'abonnements', 'avantages'];
            
            // Trouver la section active
            let currentActiveSection = '';
            let maxVisibility = 0;

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    
                    // Calculer la portion visible de la section
                    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
                    const sectionHeight = rect.height;
                    const visibilityRatio = visibleHeight / sectionHeight;
                    
                    // Si la section est significativement visible (au moins 20%)
                    // et plus visible que la précédente, c'est la section active
                    if (visibilityRatio > 0.2 && visibilityRatio > maxVisibility) {
                        maxVisibility = visibilityRatio;
                        currentActiveSection = section;
                    }
                    
                    // Si la section est en haut de l'écran (à moins de 100px du haut)
                    if (rect.top <= navbarHeight + 50 && rect.top >= 0) {
                        currentActiveSection = section;
                    }
                }
            });

            if (currentActiveSection) {
                setActiveSection(currentActiveSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateNavbarHeight);
        };
    }, [navbarHeight]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Mesurer la position exacte
            const elementRect = element.getBoundingClientRect();
            const elementTop = window.pageYOffset + elementRect.top;
            
            // Calculer la position avec offset pour que la section commence
            // juste en dessous de la navbar + un petit espace
            const scrollToPosition = elementTop - navbarHeight - 20;
            
            // Scroll avec animation fluide
            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false);
    };

    const handleLogoClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setActiveSection('accueil');
    };

    return (
        <nav 
            className={`
                fixed top-0 left-0 w-full py-3 z-50 transition-all duration-300
                ${isScrolled 
                    ? 'bg-white/95 backdrop-blur-xl shadow-lg' 
                    : 'bg-white backdrop-blur-lg'
                }
            `}
            id="navbar"
        >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img 
                            onClick={handleLogoClick}
                            src="/LogoTravelBabi.jpg" 
                            alt="Logo TravelBabi"
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 rounded-xl object-cover transition-transform duration-500 shadow-lg cursor-pointer hover:scale-105"
                        />
                        <h1 className='text-gray-900 font-bold text-lg sm:text-xl'>Travel<span className='text-[#ff7122]'>Babi</span></h1>
                    </div>

                    {/* Navigation desktop */}
                    <div className="hidden lg:block">
                        <div className="ml-6 xl:ml-10 flex items-baseline space-x-4 xl:space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`
                                        relative text-gray-700 font-medium px-2 xl:px-3 py-2 transition-all duration-300
                                        hover:text-[#FF7122] group text-sm xl:text-base
                                        ${activeSection === item.id ? 'text-[#FF7122] font-semibold' : ''}
                                    `}
                                >
                                    {item.label}
                                    <span className={`
                                        absolute bottom-0 left-1/2 h-0.5 bg-[#FF7122] transition-all duration-300
                                        transform -translate-x-1/2
                                        ${activeSection === item.id 
                                            ? 'w-full' 
                                            : 'w-0 group-hover:w-full'
                                        }
                                    `} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Navigation tablette */}
                    <div className="hidden md:block lg:hidden">
                        <div className="flex items-center space-x-3">
                            {navItems.slice(0, 4).map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`
                                        relative text-gray-700 font-medium px-2 py-2 transition-all duration-300
                                        hover:text-[#FF7122] group text-xs
                                        ${activeSection === item.id ? 'text-[#FF7122] font-semibold' : ''}
                                    `}
                                >
                                    {item.label.split(' ')[0]}
                                    <span className={`
                                        absolute bottom-0 left-1/2 h-0.5 bg-[#FF7122] transition-all duration-300
                                        transform -translate-x-1/2
                                        ${activeSection === item.id 
                                            ? 'w-full' 
                                            : 'w-0 group-hover:w-full'
                                        }
                                    `} />
                                </button>
                            ))}
                            {/* Menu déroulant pour les items restants */}
                            <div className="relative group">
                                <button className="text-gray-700 font-medium px-2 py-2 hover:text-[#FF7122] transition-colors duration-300 text-xs">
                                    Plus ▾
                                </button>
                                <div className="absolute top-full right-0 mt-2 w-40 bg-white/95 backdrop-blur-lg rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-200">
                                    {navItems.slice(4).map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`
                                                w-full text-left text-gray-700 font-medium px-4 py-3 transition-all duration-300
                                                hover:text-[#FF7122] hover:bg-gray-50 text-sm
                                                ${activeSection === item.id ? 'text-[#FF7122] bg-gray-50 font-semibold' : ''}
                                                first:rounded-t-lg last:rounded-b-lg
                                            `}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bouton menu mobile */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-700 p-2 hover:text-[#FF7122] transition-colors duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7122] focus:ring-opacity-50"
                            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Menu mobile */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`
                                        w-full text-gray-700 font-medium px-4 py-3 text-left transition-all duration-300
                                        hover:text-[#FF7122] hover:bg-gray-50 rounded-lg
                                        ${activeSection === item.id ? 'text-[#FF7122] bg-gray-50 font-semibold' : ''}
                                        flex items-center justify-between
                                    `}
                                >
                                    <span className="flex-1">{item.label}</span>
                                    {activeSection === item.id && (
                                        <div className="w-2 h-2 bg-[#FF7122] rounded-full ml-2" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;