import { benefits } from "../../../data/data";

const Avantages = () => {
    return (
        <div id='avantages' className="pt-6">
            <section className='pt-12 md:pt-16 bg-white'>
                <div className="container mx-auto px-4 sm:px-6 mb-16 md:mb-28">
                    <div className='mb-8 md:mb-12'>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-3 text-black">
                            Pourquoi TravelBabi ?
                        </h2>
            
                        <p className="text-sm sm:text-base text-gray-400 text-center max-w-2xl mx-auto">
                            Une solution complète pensée pour vos besoins de mobilité urbaine.
                        </p>
                    </div>
            
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {benefits.map((value, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-gray-100 hover:border-[#FF7122] transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7122]/5 to-transparent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative z-10 space-y-3 md:space-y-5">
                                    {/* Icône avec effet */}
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#FF7122] to-orange-500 rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                                        <value.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                    </div>

                                    {/* Titre avec point animé */}
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-[#FF7122] transition-colors duration-300">
                                            {value.title}
                                        </h3>
                                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF7122] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                        {value.description}
                                    </p>

                                    {/* Ligne décorative en bas */}
                                    <div className="pt-3 md:pt-4 border-t border-gray-100 group-hover:border-[#FF7122] transition-colors duration-300">
                                        <div className="w-6 h-0.5 md:w-8 md:h-1 bg-[#FF7122] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </div>

                                {/* Effet de coin arrondi coloré */}
                                <div className="absolute top-0 right-0 w-5 h-5 md:w-6 md:h-6 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 bg-[#FF7122] transform rotate-45 translate-x-3 -translate-y-3 md:translate-x-4 md:-translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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