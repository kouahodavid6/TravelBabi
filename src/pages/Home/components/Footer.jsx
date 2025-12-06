import { Mail, Facebook, Instagram, Twitter, Play, Eye } from 'lucide-react';
import ButtonStore from '../../components/ButtonStore';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-900 py-12 md:py-16 border-t-2 border-[#FF7122]/20">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Grille principale */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
                    {/* Carte 1 : Logo et description */}
                    <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl overflow-hidden border-2 border-[#FF7122]/20">
                                <img 
                                    src="/LogoTravelBabi.jpg" 
                                    alt="Logo TravelBabi"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h1 className='text-xl md:text-2xl font-bold text-[#FF7122]/80'>TravelBabi</h1>
                        </div>
                        <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                            L'application qui révolutionne vos trajets à Abidjan avec des itinéraires intelligents.
                        </p>
                        <div className="flex gap-2 md:gap-3">
                            <a href="#" className="p-2 md:p-2.5 rounded-lg bg-gray-100 hover:bg-[#FF7122] hover:text-white transition-all duration-300">
                                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                            <a href="#" className="p-2 md:p-2.5 rounded-lg bg-gray-100 hover:bg-[#FF7122] hover:text-white transition-all duration-300">
                                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                            <a href="#" className="p-2 md:p-2.5 rounded-lg bg-gray-100 hover:bg-[#FF7122] hover:text-white transition-all duration-300">
                                <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Carte 2 : Navigation - EN COLONNE SUR MOBILE */}
                    <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm">
                        <h4 className="text-base md:text-lg font-bold text-[#FF7122]/80 mb-4 md:mb-6">
                            Navigation rapide
                        </h4>
                        <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-4">
                            <Link to="accueil" smooth={true} duration={500} className="flex items-center gap-2 text-gray-600 hover:text-[#FF7122]/80 transition-colors duration-300 cursor-pointer text-sm md:text-base">
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF7122]/80 rounded-full flex-shrink-0"></div>
                                Accueil
                            </Link>
                            <Link to="fonctionnalites" smooth={true} duration={500} className="flex items-center gap-2 text-gray-600 hover:text-[#FF7122]/80 transition-colors duration-300 cursor-pointer text-sm md:text-base">
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF7122]/80 rounded-full flex-shrink-0"></div>
                                Fonctionnalités
                            </Link>
                            <Link to="screens" smooth={true} duration={500} className="flex items-center gap-2 text-gray-600 hover:text-[#FF7122]/80 transition-colors duration-300 cursor-pointer text-sm md:text-base">
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF7122]/80 rounded-full flex-shrink-0"></div>
                                Écrans
                            </Link>
                            <Link to="etoiles" smooth={true} duration={500} className="flex items-center gap-2 text-gray-600 hover:text-[#FF7122]/80 transition-colors duration-300 cursor-pointer text-sm md:text-base">
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF7122]/80 rounded-full flex-shrink-0"></div>
                                Étoiles
                            </Link>
                            <Link to="abonnements" smooth={true} duration={500} className="flex items-center gap-2 text-gray-600 hover:text-[#FF7122]/80 transition-colors duration-300 cursor-pointer text-sm md:text-base">
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF7122]/80 rounded-full flex-shrink-0"></div>
                                Abonnements
                            </Link>
                            <Link to="avantages" smooth={true} duration={500} className="flex items-center gap-2 text-gray-600 hover:text-[#FF7122]/80 transition-colors duration-300 cursor-pointer text-sm md:text-base">
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF7122]/80 rounded-full flex-shrink-0"></div>
                                Avantages
                            </Link>
                        </div>
                    </div>

                    {/* Carte 3 : Téléchargement */}
                    <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm">
                        <h4 className="text-base md:text-lg font-bold text-[#FF7122]/80 mb-4 md:mb-6">
                            Actions
                        </h4>
                        <div className="space-y-3 md:space-y-4">
                            <ButtonStore 
                                store="Voir la démo"
                                url="https://www.figma.com/proto/EVahCF5QyBXNyU2tQsk7Eq/TravelBabi?node-id=19-2467&p=f&t=xQvJyOhSx5UngCKB-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                                icon={Play}
                                variant="primary"
                                className="text-sm md:text-base px-4 py-2 md:px-6 md:py-3"
                            />
                            <ButtonStore 
                                store="Voir le prototype"
                                url="https://www.figma.com/proto/EVahCF5QyBXNyU2tQsk7Eq/TravelBabi?node-id=19-2467&p=f&t=xQvJyOhSx5UngCKB-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                                icon={Eye}
                                variant="outline"
                                className="text-sm md:text-base px-4 py-2 md:px-6 md:py-3"
                            />
                        </div>
                        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
                            <div className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-gray-600">
                                <Mail className="w-4 h-4 text-[#FF7122]/80 flex-shrink-0" />
                                <span>travelbabi@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Barre du bas */}
                <div className="border-t-2 border-gray-300 pt-6 md:pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
                        <p className="text-xs md:text-sm text-gray-600 text-center md:text-left">
                            © 2025 TravelBabi. Tous droits réservés.
                        </p>
                        <p className="text-xs md:text-sm text-gray-600 text-center">
                            Développé avec le ❤️ par{' '}
                            <span 
                                className="text-[#FF7122]/80 hover:text-[#FF7122] hover:underline cursor-pointer font-medium"
                                // onClick={() => window.open('', '_blank')}
                            >
                                JEED TECH
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;