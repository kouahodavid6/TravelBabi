import ButtonStore from "../../components/ButtonStore";
import { 
    Play, 
    Eye,
    Star
} from 'lucide-react';

const Hero = () => {
    return(
        <header id="accueil" className="relative bg-white text-black min-h-screen flex items-center overflow-hidden pt-20">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#FF7122]/10"></div>

            <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
                    {/* Partie texte - centrée sur mobile */}
                    <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gray-100 rounded-full shadow-sm border border-orange-100">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF7122] rounded-full animate-pulse"></div>
                            <span className="text-xs md:text-sm font-medium text-[#FF7122]">Version prototypée disponible</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-black">
                            Maîtrisez le chaos des <span className="text-[#FF7122]">transports publics</span>.
                        </h1>

                        <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Trouvez les itinéraires les plus malins combinant Gbakas, Taxis et marche. Comparez les coûts, le temps et le confort instantanément.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                            <ButtonStore 
                                store="Voir la démo"
                                url="https://www.figma.com/proto/EVahCF5QyBXNyU2tQsk7Eq/TravelBabi?node-id=19-2467&p=f&t=xQvJyOhSx5UngCKB-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                                icon={Play}
                                variant="primary"
                                className="text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3"
                            />
                            <ButtonStore 
                                store="Voir le prototype"
                                url="https://www.figma.com/proto/EVahCF5QyBXNyU2tQsk7Eq/TravelBabi?node-id=19-2467&p=f&t=xQvJyOhSx5UngCKB-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                                icon={Eye}
                                variant="outline"
                                className="text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3"
                            />
                        </div>

                        {/* Points clés sous les boutons */}
                        <div className="pt-2">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 bg-[#FF7122]/10 rounded-full flex items-center justify-center">
                                    <Star className="w-2.5 h-2.5 text-[#FF7122]" />
                                </div>
                                <span className="text-xs sm:text-sm font-medium text-gray-700">Itinéraires adaptés</span>
                            </div>
                        </div>
                    </div>

                    {/* Partie téléphone - proportions réalistes */}
                    <div className="relative flex items-center justify-center">
                        {/* Téléphone avec proportions réalistes */}
                        <div className="relative">
                            {/* Ombre portée */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7122]/10 to-[#ff8c00]/10 rounded-[3rem] blur-lg transform translate-y-3 scale-105 -z-10"></div>
                            
                            {/* Cadre du téléphone - proportions de smartphone moderne */}
                            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-2 shadow-2xl shadow-gray-900/50 transform hover:scale-[1.02] transition-transform duration-500">
                                {/* Encoche dynamique */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-36 bg-gray-900 rounded-b-2xl z-20"></div>
                                
                                {/* Écran du téléphone - proportions 9:19.5 (iPhone-like) */}
                                <div className="relative bg-white w-[280px] h-[560px] rounded-[2.5rem] overflow-hidden">
                                    {/* Interface avec object-fit cover pour remplir l'écran */}
                                    <img 
                                        src="/Interface.jpg" 
                                        alt="Interface TravelBabi"
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Overlay gradient subtil */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                                </div>
                                
                                {/* Boutons latéraux réalistes */}
                                <div className="absolute right-0 top-1/4 w-1 h-10 bg-gray-700/80 rounded-l"></div>
                                <div className="absolute right-0 top-2/3 w-1 h-6 bg-gray-700/80 rounded-l"></div>
                            </div>

                            {/* Effets lumineux */}
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-[#FF7122] to-orange-500 rounded-full blur-md opacity-20"></div>
                            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#FF7122] to-orange-400 rounded-full blur-md opacity-20"></div>
                        </div>
                    </div>
                </div>

                {/* Indicateur de scroll */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block">
                    <div className="flex flex-col items-center gap-1 text-gray-400">
                        <span className="text-xs font-medium">Défiler</span>
                        <div className="w-5 h-8 border border-gray-300 rounded-full flex justify-center">
                            <div className="w-0.5 h-2 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Hero;