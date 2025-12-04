import { starOptions } from "../../../data/data";
import { Star } from "lucide-react";

const Etoiles = () => {
    return (
        <div id="etoiles" className="pt-6 bg-white">
            <section className="pt-16">
                <div className="container mx-auto px-4">
                    <div className='mb-12'>
                        <h2 className="text-2xl md:text-3xl font-black text-center mb-3 text-black">
                            Propulsé par des Étoiles.
                        </h2>

                        <p className="text-gray-400 text-center max-w-2xl mx-auto">
                            Chaque recherche utilise quelques étoiles. Choisissez comment recharger votre solde selon vos besoins.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {starOptions.map((option, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#FF7122] transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="absolute top-6 right-6">
                                    <span className={`${option.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                                    {option.badge}
                                    </span>
                                </div>

                                <div className="w-16 h-16 bg-gradient-to-br from-[#FF7122] to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-200">
                                    <option.icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-black mb-3">
                                    {option.title}
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {option.description}
                                </p>

                                <div className="flex items-center gap-2 text-[#FF7122] font-bold">
                                    <Star className="w-5 h-5 fill-current" />
                                    <span>{option.stars}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Etoiles;