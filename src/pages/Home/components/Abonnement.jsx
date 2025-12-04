import { subscriptions } from "../../../data/data";

const Abonnement = () => {
    return (
        <section id="abonnements" className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6">
                <div className='mb-12 md:mb-16'>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4 text-black">
                        Abonnements illimités
                    </h2>

                    <p className="text-base sm:text-lg text-gray-400 text-center max-w-2xl mx-auto">
                        Choisissez l'abonnement qui vous convient le mieux
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {subscriptions.map((sub, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg border-2 transition-all duration-300 hover:scale-105 ${
                                sub.popular ? 'border-[#FF7122] shadow-2xl shadow-orange-200' : 'border-gray-200'
                            }`}
                        >
                            {sub.popular && (
                                <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                                    <span className="bg-gradient-to-r from-[#FF7122] to-orange-600 text-white text-xs md:text-sm font-bold px-4 py-1.5 md:px-6 md:py-2 rounded-full shadow-lg whitespace-nowrap">
                                        Le plus populaire
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-6 md:mb-8">
                                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl md:rounded-2xl mb-3 md:mb-4">
                                    <sub.icon className="w-6 h-6 md:w-8 md:h-8 text-[#FF7122]" />
                                </div>

                                <h4 className="text-lg md:text-xl font-bold text-black mb-1 md:mb-2">{sub.title}</h4>

                                <div className="flex items-end justify-center gap-0.5 md:gap-1">
                                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FF7122]">{sub.price} FCFA</span>
                                </div>
                                <span className="text-xs md:text-sm text-gray-500">{sub.period}</span>

                                <p className="text-sm md:text-base text-gray-700 mt-2 md:mt-3">{sub.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Abonnement;