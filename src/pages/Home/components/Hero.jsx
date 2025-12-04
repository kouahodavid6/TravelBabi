import ButtonStore from "../../components/ButtonStore";
import { 
    Play, 
    Eye, 
    Download,
    Star, 
    Car, 
    Footprints, 
    Clock, 
    Navigation, 
    MapPin, 
    List, 
    Map, 
    Repeat,
    Home,
    User
} from 'lucide-react';

const Hero = () => {
    return(
        <header id="accueil" className="relative bg-white text-black min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#FF7122]/10"></div>

            <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Partie texte - centrée sur mobile */}
                    <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gray-100 rounded-full shadow-sm border border-orange-100">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF7122] rounded-full animate-pulse"></div>
                            <span className="text-xs md:text-sm font-medium text-[#FF7122]">Version prototypée disponible</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-black">
                            Maîtrisez le chaos des transports publics.
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Trouvez les itinéraires les plus malins combinant Gbakas, Taxis et marche. Comparez les coûts, le temps et le confort instantanément.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                            <ButtonStore 
                                store="Voir la démo"
                                url=""
                                icon={Play}
                                variant="primary"
                                className="text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3"
                            />
                            <ButtonStore 
                                store="Voir le prototype"
                                url=""
                                icon={Eye}
                                variant="outline"
                                className="text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3"
                            />
                        </div>
                    </div>

                    {/* Partie téléphone - centrée sur mobile */}
                    <div className="relative flex items-center justify-center">
                        <div className="relative w-64 h-[400px] sm:w-72 sm:h-[450px] md:w-80 md:h-[500px] bg-gradient-to-br from-[#FF7122]/80 to-[#ff8c00] rounded-[2.5rem] sm:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl shadow-[#FF7122]/80/50 transform hover:scale-105 transition-transform duration-500 mx-auto">
                            <div className="bg-white h-full rounded-[2rem] sm:rounded-[2.5rem] flex flex-col items-center justify-center relative overflow-hidden">
                                {/* Encoche du téléphone */}
                                <div className="absolute top-0 left-0 right-0 h-5 sm:h-6 bg-white flex items-center justify-center">
                                    <div className="w-16 h-3 sm:w-20 sm:h-4 bg-gray-100 rounded-full"></div>
                                </div>

                                {/* Contenu principal de l'app */}
                                <div className="flex-1 w-full flex flex-col px-2.5 sm:px-3 pt-12 sm:pt-14">
                                    {/* En-tête avec bonjour et étoiles */}
                                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                                        <div className="flex items-center gap-1.5 sm:gap-2">
                                            {/* Logo TravelBabi */}
                                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[#FF7122] to-orange-500 rounded-lg flex items-center justify-center">
                                                <img 
                                                    src="/LogoTravelBabi.jpg" 
                                                    alt="Logo TravelBabi"
                                                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-xl object-contain"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-xs sm:text-sm font-bold text-gray-900">Bonjour David</h3>
                                            </div>
                                        </div>
                                        
                                        {/* Étoiles */}
                                        <div className="flex items-center gap-0.5 sm:gap-1 bg-orange-50 px-1.5 sm:px-2 py-0.5 rounded-full">
                                            <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FF7122] fill-[#FF7122]" />
                                            <span className="text-[10px] sm:text-xs font-bold text-gray-900">125</span>
                                        </div>
                                    </div>

                                    {/* Question */}
                                    <div className="mb-3 sm:mb-4">
                                        <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Où allez-vous ?</h2>
                                        <p className="text-gray-500 text-[10px] sm:text-xs">Trouvez le meilleur itinéraire</p>
                                    </div>

                                    {/* Inputs de recherche */}
                                    <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                                        {/* Position actuelle */}
                                        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 bg-gray-50 rounded-lg">
                                            <Navigation className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FF7122]" />
                                            <div>
                                                <p className="text-[9px] sm:text-[10px] text-gray-500">Position actuelle</p>
                                                <p className="text-[11px] sm:text-xs font-medium text-gray-900">Plateau, Abidjan</p>
                                            </div>
                                        </div>
                                        
                                        {/* Destination */}
                                        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 bg-gray-50 rounded-lg">
                                            <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-500" />
                                            <div>
                                                <p className="text-[9px] sm:text-[10px] text-gray-500">Destination</p>
                                                <p className="text-[11px] sm:text-xs font-medium text-gray-900">Yopougon, Abidjan</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* En-tête suggestions */}
                                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                                        <h3 className="text-xs sm:text-sm font-bold text-gray-900">Itinéraires Suggérés</h3>
                                        <div className="flex gap-0.5 sm:gap-1">
                                            <button className="px-1.5 py-0.5 sm:px-2 sm:py-0.5 bg-[#FF7122] rounded text-[9px] sm:text-[10px] text-white flex items-center gap-0.5 sm:gap-1">
                                                <List className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                                List
                                            </button>
                                            <button className="px-1.5 py-0.5 sm:px-2 sm:py-0.5 bg-gray-100 text-gray-700 rounded text-[9px] sm:text-[10px] flex items-center gap-0.5 sm:gap-1">
                                                <Map className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                                Map
                                            </button>
                                        </div>
                                    </div>

                                    {/* Liste des itinéraires - version compacte */}
                                    <div className="space-y-1.5 sm:space-y-2 overflow-y-auto flex-1 pr-0.5 sm:pr-1">
                                        {/* Itinéraire 1 - Le plus rapide */}
                                        <div className="bg-gradient-to-r from-orange-50 to-white p-2 sm:p-3 rounded-lg border border-orange-100">
                                            <div className="flex justify-between items-center mb-0.5 sm:mb-1">
                                                <div className="flex items-center gap-1.5 sm:gap-2">
                                                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#FF7122]/20 rounded flex items-center justify-center">
                                                        <Car className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FF7122]" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] sm:text-xs font-medium text-gray-900">Taxi + Gbaka</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-xs sm:text-sm font-bold text-gray-900">750 F</p>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-gray-600">
                                                <div className="flex items-center gap-2 sm:gap-3">
                                                    <span className="flex items-center gap-0.5">
                                                        <Clock className="w-2 h-2 sm:w-2.5 sm:h-2.5" /> 35 min
                                                    </span>
                                                    <span className="flex items-center gap-0.5">
                                                        <Repeat className="w-2 h-2 sm:w-2.5 sm:h-2.5" /> 1
                                                    </span>
                                                </div>
                                                <span className="text-[9px] sm:text-[10px] bg-[#FF7122]/10 text-[#FF7122] px-1 sm:px-1.5 py-0.5 rounded">Rapide</span>
                                            </div>
                                        </div>

                                        {/* Itinéraire 3 - Marche */}
                                        <div className="bg-gray-50 p-2 sm:p-3 rounded-lg border border-gray-200">
                                            <div className="flex justify-between items-center mb-0.5 sm:mb-1">
                                                <div className="flex items-center gap-1.5 sm:gap-2">
                                                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-green-100 rounded flex items-center justify-center">
                                                        <Footprints className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] sm:text-xs font-medium text-gray-900">Marche + Taxi</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-xs sm:text-sm font-bold text-gray-900">600 F</p>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-gray-600">
                                                <div className="flex items-center gap-2 sm:gap-3">
                                                    <span className="flex items-center gap-0.5">
                                                        <Clock className="w-2 h-2 sm:w-2.5 sm:h-2.5" /> 45 min
                                                    </span>
                                                    <span className="flex items-center gap-0.5">
                                                        <Repeat className="w-2 h-2 sm:w-2.5 sm:h-2.5" /> 2
                                                    </span>
                                                </div>
                                                <span className="text-[9px] sm:text-[10px] bg-gray-200 text-gray-700 px-1 sm:px-1.5 py-0.5 rounded">Sportif</span>
                                            </div>
                                        </div>

                                        {/* Petit espace en bas */}
                                        <div className="h-1 sm:h-2"></div>
                                    </div>
                                </div>

                                {/* Barre de navigation basse */}
                                <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 bg-gray-100/80 rounded-full p-0.5 sm:p-1 backdrop-blur-sm">
                                    <div className="flex justify-around items-center">
                                        <Home className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF7122]" />
                                        <div className="w-4 h-0.5 sm:w-6 sm:h-0.5 bg-gray-400 rounded-full"></div>
                                        <User className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Effet de lumière d'arrière-plan */}
                        <div className="absolute -z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-[#FF7122]/80/30 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Hero;