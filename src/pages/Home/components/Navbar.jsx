import { navItems } from '../../../data/data';
import { useState, useEffect, useRef } from 'react';
import { Link, Events, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState(0);
    const navbarRef = useRef(null);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        // Mesurer la hauteur réelle de la navbar
        const updateNavbarHeight = () => {
            const nav = document.querySelector('nav');
            if (nav) {
                setNavbarHeight(nav.offsetHeight);
            }
        };

        updateNavbarHeight();
        window.addEventListener('resize', updateNavbarHeight);

        // Initialiser les événements de react-scroll
        Events.scrollEvent.register('begin', () => {
            // Optionnel: action au début du scroll
        });

        Events.scrollEvent.register('end', () => {
            // Optionnel: action à la fin du scroll
        });

        // Gestion du scroll pour le background de la navbar
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateNavbarHeight);
        };
    }, []);

    // Fermer le menu mobile lorsqu'on clique en dehors
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Si le menu mobile est ouvert ET que le clic est en dehors du menu ET en dehors du bouton hamburger
            if (isMobileMenuOpen && 
                mobileMenuRef.current && 
                !mobileMenuRef.current.contains(event.target) &&
                navbarRef.current &&
                !navbarRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        // Ajouter l'event listener
        document.addEventListener('mousedown', handleClickOutside);
        
        // Nettoyer l'event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]); // Re-exécuter quand isMobileMenuOpen change

    // Fonction pour mettre à jour la section active
    const handleSetActive = (to) => {
        setActiveSection(to);
    };

    const handleLogoClick = () => {
        scroll.scrollToTop();
        setActiveSection('accueil');
    };

    // Calculer l'offset dynamiquement
    const getScrollOffset = () => {
        // Si la navbarHeight est connue, utilisez-la
        // Sinon, utilisez une valeur par défaut (ajustez selon votre design)
        return navbarHeight > 0 ? -navbarHeight - 30 : -90; // -90 par défaut
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav 
            ref={navbarRef}
            className={`
                fixed top-0 left-0 w-full py-3 z-50 transition-all duration-300
                ${isScrolled 
                    ? 'bg-white/95 backdrop-blur-xl shadow-lg' 
                    : 'bg-white backdrop-blur-lg'
                }
            `}
        >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img 
                            onClick={handleLogoClick}
                            src="/LogoTravelBabi.jpg" 
                            alt="Logo TravelBabi"
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 rounded-xl object-contain transition-transform duration-500 cursor-pointer hover:scale-105"
                        />
                        <h1 className='text-gray-900 font-bold text-lg sm:text-xl'>Travel<span className='text-[#ff7122]'>Babi</span></h1>
                    </div>

                    {/* Navigation desktop avec react-scroll */}
                    <div className="hidden lg:block">
                        <div className="ml-6 xl:ml-10 flex items-baseline space-x-4 xl:space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.id}
                                    spy={true}
                                    smooth={true}
                                    offset={getScrollOffset()} // Offset dynamique
                                    duration={500}
                                    onSetActive={handleSetActive}
                                    className={`
                                        relative text-gray-700 font-medium px-2 xl:px-3 py-2 transition-all duration-300
                                        hover:text-[#FF7122] group text-sm xl:text-base cursor-pointer
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
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navigation tablette avec react-scroll */}
                    <div className="hidden md:block lg:hidden">
                        <div className="flex items-center space-x-3">
                            {navItems.slice(0, 4).map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.id}
                                    spy={true}
                                    smooth={true}
                                    offset={getScrollOffset()}
                                    duration={500}
                                    onSetActive={handleSetActive}
                                    className={`
                                        relative text-gray-700 font-medium px-2 py-2 transition-all duration-300
                                        hover:text-[#FF7122] group text-xs cursor-pointer
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
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Bouton menu mobile */}
                    <div className="md:hidden">
                        <button 
                            ref={navbarRef}
                            onClick={toggleMobileMenu}
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

                {/* Menu mobile avec react-scroll */}
                {isMobileMenuOpen && (
                    <div 
                        ref={mobileMenuRef}
                        className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4"
                    >
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.id}
                                    spy={true}
                                    smooth={true}
                                    offset={getScrollOffset()}
                                    duration={500}
                                    onSetActive={handleSetActive}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`
                                        w-full text-gray-700 font-medium px-4 py-3 text-left transition-all duration-300
                                        hover:text-[#FF7122] hover:bg-gray-50 rounded-lg cursor-pointer
                                        ${activeSection === item.id ? 'text-[#FF7122] bg-gray-50 font-semibold' : ''}
                                        flex items-center justify-between
                                    `}
                                >
                                    <span className="flex-1">{item.label}</span>
                                    {activeSection === item.id && (
                                        <div className="w-2 h-2 bg-[#FF7122] rounded-full ml-2" />
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;