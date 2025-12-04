import { Link } from 'react-router-dom';
import { MapPin, Compass, Navigation, Car, Bus, Train, Bike, Map } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 text-gray-900 px-4 relative overflow-hidden">
            {/* Effets de fond décoratifs */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#FF7122]/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-[#3B82F6]/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-[#FF7122]/10 rounded-full blur-lg"></div>
            
            <motion.div 
                className="max-w-md text-center relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Icône transport */}
                <motion.div 
                    className="flex justify-center mb-6"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                >
                    <div className="bg-gradient-to-br from-white to-blue-50 p-5 rounded-2xl border border-[#FF7122]/30 shadow-lg">
                        <Map className="h-16 w-16 text-[#FF7122]" />
                    </div>
                </motion.div>

                {/* Code erreur */}
                <motion.h1 
                    className="text-8xl font-black mb-4 bg-gradient-to-r from-[#FF7122] to-[#3B82F6] bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
                >
                    404
                </motion.h1>

                {/* Titre */}
                <motion.h2 
                    className="text-3xl font-bold mb-3 text-gray-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    Itinéraire introuvable
                </motion.h2>

                {/* Message */}
                <motion.p 
                    className="mb-8 text-gray-600 text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    Oups ! Cet itinéraire semble avoir disparu ou n'existe plus. 
                    Laissez TravelBabi vous guider vers la bonne destination.
                </motion.p>

                {/* Bouton de retour */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF7122] to-[#3B82F6] hover:from-[#FF9540] hover:to-[#60A5FA] text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        <Compass className="h-5 w-5" />
                        Retour à l'accueil
                    </Link>
                </motion.div>

                {/* Message secondaire avec logo */}
                <motion.div 
                    className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <div className="w-6 h-6 bg-[#FF7122] rounded-lg flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-white" />
                    </div>
                    Votre partenaire de déplacement à Abidjan
                </motion.div>
            </motion.div>

            {/* Décorations bas de page - Icônes de transport */}
            <div className="absolute bottom-10 left-10 opacity-20">
                <Car className="h-8 w-8 text-[#FF7122]" />
            </div>
            <div className="absolute bottom-20 right-10 opacity-20">
                <Bus className="h-6 w-6 text-[#3B82F6]" />
            </div>

            {/* Éléments décoratifs supplémentaires transport */}
            <div className="absolute top-10 right-16 opacity-15">
                <Navigation className="h-10 w-10 text-[#FF7122]" />
            </div>
            
            {/* Nouvelles icônes */}
            <div className="absolute top-20 left-16 opacity-15">
                <Train className="h-8 w-8 text-[#3B82F6]" />
            </div>
            
            <div className="absolute bottom-32 left-20 opacity-15">
                <Bike className="h-7 w-7 text-[#FF7122]" />
            </div>
            
            <div className="absolute top-32 right-20 opacity-15">
                <MapPin className="h-9 w-9 text-[#3B82F6]" />
            </div>

            {/* Logo TravelBabi en décoratif */}
            <div className="absolute bottom-10 right-20 opacity-15">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF7122] to-[#3B82F6] rounded-lg flex items-center justify-center shadow-md">
                    <Compass className="h-6 w-6 text-white" />
                </div>
            </div>

            {/* Points de repère décoratifs */}
            <div className="absolute top-40 left-1/4 opacity-10">
                <div className="w-3 h-3 bg-[#FF7122] rounded-full"></div>
            </div>
            <div className="absolute bottom-40 right-1/4 opacity-10">
                <div className="w-3 h-3 bg-[#3B82F6] rounded-full"></div>
            </div>
            <div className="absolute top-1/2 left-1/3 opacity-10">
                <div className="w-2 h-2 bg-[#FF7122] rounded-full"></div>
            </div>
        </div>
    );
};

export default NotFound;