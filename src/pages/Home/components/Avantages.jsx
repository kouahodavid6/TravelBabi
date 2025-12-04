import { benefits } from "../../../data/data";

const Avantages = () => {
    return (
        <div id='avantages' className="pt-6 bg-white">
            <section className='pt-16'>
                <div className="container mx-auto px-4 mb-28">
                    <div className='mb-12'>
                        <h2 className="text-2xl md:text-3xl font-black text-center mb-3 text-black">
                            Pourquoi TravelBabi ?
                        </h2>
            
                        <p className="text-gray-400 text-center max-w-2xl mx-auto">
                            Une solution complète pensée pour vos besoins de mobilité urbaine.
                        </p>
                    </div>
            
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((value, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-[#FF7122] transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7122]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative z-10 space-y-5">
                                    {/* Icône avec effet */}
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF7122] to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                                        <value.icon className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Titre avec point animé */}
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#FF7122] transition-colors duration-300">
                                            {value.title}
                                        </h3>
                                        <div className="w-2 h-2 bg-[#FF7122] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {value.description}
                                    </p>

                                    {/* Ligne décorative en bas */}
                                    <div className="pt-4 border-t border-gray-100 group-hover:border-[#FF7122] transition-colors duration-300">
                                        <div className="w-8 h-1 bg-[#FF7122] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </div>

                                {/* Effet de coin arrondi coloré */}
                                <div className="absolute top-0 right-0 w-6 h-6 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-8 h-8 bg-[#FF7122] transform rotate-45 translate-x-4 -translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Avantages;