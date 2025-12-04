import { Mail, Facebook, Instagram, Twitter, Play, Eye, Download  } from 'lucide-react';
import ButtonStore from '../../components/ButtonStore';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-900 py-16 border-t-2 border-[#FF7122]/20 pt-8">
            <div className="container mx-auto px-4">
                {/* Grille principale */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* Carte 1 : Logo et description */}
                    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-[#FF7122]/20">
                                <img 
                                    src="/LogoTravelBabi.jpg" 
                                    alt="Logo TravelBabi"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h1 className='text-2xl font-bold text-[#FF7122]/80'>TravelBabi</h1>
                        </div>
                        <p className="text-gray-600 mb-6">
                            L'application qui révolutionne vos trajets à Abidjan avec des itinéraires intelligents.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="p-2.5 rounded-lg bg-gray-100 hover:bg-[#FF7122] hover:text-white transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2.5 rounded-lg bg-gray-100 hover:bg-[#FF7122] hover:text-white transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2.5 rounded-lg bg-gray-100 hover:bg-[#FF7122] hover:text-white transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Carte 2 : Navigation */}
                    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h4 className="text-lg font-bold text-[#FF7122]/80 mb-6">
                            Navigation rapide
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                            <Link to="accueil" smooth={true} duration={500} className="flex items-center gap-2 text-gray-600 hover:text-[#FF7122]/80 transition-colors duration-300 cursor-pointer">
                                <div className="w-2 h-2 bg-[#FF7122]/80 rounded-full"></div>
                                Accueil
                            </Link>
                            <Link to="fonctionnalites" smooth={true} duration={500} className="flex items-center gap-2 text-gray-600 hover:text-[#FF7122]/80 transition-colors duration-300 cursor-pointer">
                                <div className="w-2 h-2 bg-[#FF7122]/80 rounded-full"></div>
                                Fonctionnalités
                            </Link>
                            <Link to="etoiles" smooth={true} duration={500} className="flex items-center gap-2 text-gray-600 hover:text-[#FF7122]/80 transition-colors duration-300 cursor-pointer">
                                <div className="w-2 h-2 bg-[#FF7122]/80 rounded-full"></div>
                                Étoiles
                            </Link>
                            <Link to="abonnements" smooth={true} duration={500} className="flex items-center gap-2 text-gray-600 hover:text-[#FF7122]/80 transition-colors duration-300 cursor-pointer">
                                <div className="w-2 h-2 bg-[#FF7122]/80 rounded-full"></div>
                                Abonnements
                            </Link>
                            <Link to="avantages" smooth={true} duration={500} className="flex items-center gap-2 text-gray-600 hover:text-[#FF7122]/80 transition-colors duration-300 cursor-pointer">
                                <div className="w-2 h-2 bg-[#FF7122]/80 rounded-full"></div>
                                Avantages
                            </Link>
                        </div>
                    </div>

                    {/* Carte 3 : Téléchargement */}
                    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h4 className="text-lg font-bold text-[#FF7122]/80 mb-6">
                            Actions
                        </h4>
                        <div className="space-y-4">
                            <ButtonStore 
                                store="Voir la démo"
                                url=""
                                icon={Play}
                                variant="primary"
                            />
                            <ButtonStore 
                                store="Voir le prototype"
                                url=""
                                icon={Eye}
                                variant="outline"
                            />
                            {/* <ButtonStore 
                                store="Télécharger"
                                url=""
                                icon={Download}
                                variant="secondary"
                            /> */}
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <div className="flex items-center gap-3 text-gray-600">
                                <Mail className="w-4 h-4 text-[#FF7122]/80" />
                                <span>travelbabi@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Barre du bas */}
                <div className="border-t-2 border-gray-300 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-600 text-center md:text-left">
                            © 2025 TravelBabi. Tous droits réservés.
                        </p>
                        <p className="text-gray-600">
                            Développé avec le ❤️ par{' '}
                            <span 
                                className="text-[#FF7122]/80 hover:text-[#FF7122] hover:underline cursor-pointer font-medium"
                                onClick={() => window.open('', '_blank')}
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