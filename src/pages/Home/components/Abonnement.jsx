import { subscriptions } from "../../../data/data";

const Abonnement = () => {
    return (
        <div id="abonnements" className="pt-6">
            <section className="pt-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className='mb-12'>
                        <h2 className="text-2xl md:text-3xl font-black text-center mb-3 text-black">
                            Abonnements illimités
                        </h2>

                        <p className="text-gray-400 text-center max-w-2xl mx-auto">
                            Choisissez l'abonnement qui vous convient le mieux
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {subscriptions.map((sub, index) => (
                            <div
                                key={index}
                                className={`relative bg-white rounded-3xl p-8 shadow-lg border-2 transition-all duration-300 hover:scale-105 ${
                                    sub.popular ? 'border-[#FF7122] shadow-2xl shadow-orange-200' : 'border-gray-200'
                                }`}
                            >
                                {sub.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-gradient-to-r from-[#FF7122] to-orange-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                                            Le plus populaire
                                        </span>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl mb-4">
                                        <sub.icon className="w-8 h-8 text-[#FF7122]" />
                                    </div>

                                    <h4 className="text-xl font-bold text-black mb-2">{sub.title}</h4>

                                    <div className="flex items-end justify-center gap-1">
                                        <span className="text-4xl font-bold text-[#FF7122]">{sub.price} FCFA</span>
                                    </div>
                                    <span className="text-gray-500 text-sm">{sub.period}</span>

                                    <p className="text-gray-700 text-md">{sub.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Abonnement;