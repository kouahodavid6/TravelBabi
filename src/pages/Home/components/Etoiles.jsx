import { starOptions } from "../../../data/data";
import { Star } from "lucide-react";

const Etoiles = () => {
    return (
        <section id="etoiles" className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6">
                <div className='mb-12 md:mb-16'>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4 text-black">
                        Propulsé <span className="text-[#FF7122]">par des</span> Étoiles.
                    </h2>

                    <p className="text-base sm:text-lg text-gray-400 text-center max-w-2xl mx-auto">
                        Chaque recherche utilise quelques étoiles. Choisissez comment recharger votre solde selon vos besoins.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {starOptions.map((option, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#FF7122] transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="absolute top-4 md:top-6 right-4 md:right-6">
                                <span className={`${option.badgeColor} text-white text-xs font-bold px-2 py-1 md:px-3 md:py-1 rounded-full`}>
                                    {option.badge}
                                </span>
                            </div>

                            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#FF7122] to-orange-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-200">
                                <option.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                            </div>

                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-2 md:mb-3">
                                {option.title}
                            </h3>

                            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                                {option.description}
                            </p>

                            <div className="flex items-center gap-1 md:gap-2 text-[#FF7122] font-bold">
                                <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                                <span className="text-sm md:text-base">{option.stars}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Etoiles;