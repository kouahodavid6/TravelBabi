import { steps, fonctionnaly, testimonials } from '../../../data/data';
import { Star } from 'lucide-react';

const Fonctionnalites = () => {
    return(
        <section id='fonctionnalites' className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
                <div className='mb-12 md:mb-16'>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4 text-black">
                        Un routage intelligent conçu pour le réel.
                    </h2>

                    <p className="text-base sm:text-lg text-gray-400 text-center max-w-2xl mx-auto">
                        Nous prenons en compte chaque station de gbaka, hub de taxi et passage piéton pour vous donner le plan de voyage le plus précis.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-8xl mx-auto">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            <div className={`${step.gradient} p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col border border-gray-200`}>
                                {/* Icône avec couleur depuis data.js */}
                                <div 
                                    className="p-2 rounded-xl md:rounded-2xl mb-4 md:mb-6 transition-all duration-300 group-hover:scale-110 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
                                    style={{ backgroundColor: step.iconBgColor }}
                                >
                                    <step.icon 
                                        className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-12"
                                        style={{ color: step.iconColor }}
                                    />
                                </div>

                                {/* Titre */}
                                <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gray-50 py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className='mb-12 md:mb-16'>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4 text-black">
                            Vos trajets mémorisés.
                        </h2>

                        <p className="text-base sm:text-lg text-gray-400 text-center max-w-2xl mx-auto">
                            Sauvegardez vos itinéraires favoris (Maison à Travail, Sport à Marché) et accédez à votre historique instantanément. Notez les trajets pour aider la communauté.
                        </p>
                    </div>

                    <div className='grid lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto'>
                        <div className="grid grid-cols-1 gap-4 md:gap-6 max-w-full">
                            {fonctionnaly.map((step, index) => (
                                <div
                                    key={index}
                                    className="group relative"
                                >
                                    <div className={`${step.gradient} p-4 md:p-5 rounded-xl shadow-lg h-full flex flex-col sm:flex-row gap-3 md:gap-4 border border-gray-200`}>
                                        {/* Icône avec couleur depuis data.js */}
                                        <div 
                                            className="p-2 rounded-full w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center"
                                            style={{ backgroundColor: step.iconBgColor }}
                                        >
                                            <step.icon 
                                                className="w-5 h-5 md:w-6 md:h-6"
                                                style={{ color: step.iconColor }}
                                            />
                                        </div>

                                        <div className="flex-1">
                                            {/* Titre */}
                                            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">
                                                {step.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-sm text-gray-500 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 md:p-5 rounded-xl shadow-lg h-full flex flex-col gap-4 md:gap-6 border border-gray-200 bg-white relative">
                            {/* Badge citation en haut à droite */}
                            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-5 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-white text-xl md:text-2xl font-bold bg-[#FF7122] w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center">"</span>
                            </div>
                            
                            {testimonials.map((testimonial, index) => (
                                <div key={testimonial.name}>
                                    {/* Contenu du témoignage */}
                                    <div className="flex flex-col">
                                        {/* Nom et rôle */}
                                        <div className="flex justify-between items-start flex-col sm:flex-row gap-1 sm:gap-0">
                                            <div>
                                                <h3 className="text-base md:text-lg font-bold text-gray-900">
                                                    {testimonial.name} 
                                                    <span className="text-sm text-gray-600"> ({testimonial.role})</span>
                                                </h3>
                                            </div>
                                            
                                            {/* Étoiles */}
                                            <div className="flex gap-0.5 md:gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star 
                                                        key={i}
                                                        className={`w-3 h-3 md:w-4 md:h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        
                                        {/* Citation */}
                                        <div className="pl-0 sm:pl-4 rounded-lg mt-1 md:mt-2">
                                            <p className="text-sm italic text-gray-500">"{testimonial.text}"</p>
                                        </div>
                                    </div>
                                    
                                    {/* Ligne de séparation horizontale (sauf pour le dernier élément) */}
                                    {index < testimonials.length - 1 && (
                                        <div className="pt-3 md:pt-4">
                                            <hr className="border-gray-200" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Fonctionnalites;