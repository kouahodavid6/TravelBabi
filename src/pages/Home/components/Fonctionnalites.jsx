import { steps, fonctionnaly, testimonials } from '../../../data/data';
import { Star } from 'lucide-react';

const Fonctionnalites = () => {
    return(
        <section id='fonctionnalites' className='pt-16 bg-white'>
            <div className="container mx-auto px-4 mb-28">
                <div className='mb-12'>
                    <h2 className="text-2xl md:text-3xl font-black text-center mb-3 text-black">
                        Un routage intelligent conçu pour le réel.
                    </h2>

                    <p className="text-gray-400 text-center max-w-2xl mx-auto">
                        Nous prenons en compte chaque station de gbaka, hub de taxi et passage piéton pour vous donner le plan de voyage le plus précis.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-8xl mx-auto">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            <div className={`${step.gradient} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col border border-gray-200`}>
                                {/* Icône avec couleur depuis data.js */}
                                <div 
                                    className="p-2 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110 w-12 h-12 flex items-center justify-center"
                                    style={{ backgroundColor: step.iconBgColor }}
                                >
                                    <step.icon 
                                        className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12"
                                        style={{ color: step.iconColor }}
                                    />
                                </div>

                                {/* Titre */}
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-8 container mx-auto px-4 mb-14">
                <div className='mb-12'>
                    <h2 className="text-2xl md:text-3xl font-black text-center mb-3 text-black">
                        Vos trajets mémorisés.
                    </h2>

                    <p className="text-gray-400 text-center max-w-2xl mx-auto">
                        Sauvegardez vos itinéraires favoris (Maison à Travail, Sport à Marché) et accédez à votre historique instantanément. Notez les trajets pour aider la communauté.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 gap-6 max-w-6xl mx-auto'>
                    <div className="grid md:grid-cols-1 gap-8 max-w-full">
                        {fonctionnaly.map((step, index) => (
                            <div
                                key={index}
                                className="group relative"
                            >
                                <div className={`${step.gradient} p-5 rounded-xl shadow-lg h-full flex gap-3 border border-gray-200`}>
                                    {/* Icône avec couleur depuis data.js */}
                                    <div 
                                        className="p-2 rounded-full w-12 h-12 flex items-center justify-center"
                                        style={{ backgroundColor: step.iconBgColor }}
                                    >
                                        <step.icon 
                                            className="w-6 h-6"
                                            style={{ color: step.iconColor }}
                                        />
                                    </div>

                                    <div>
                                        {/* Titre */}
                                        <h3 className="text-md md:text-lg text-gray-900">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-500 leading-relaxed text-xs">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-5 rounded-xl shadow-lg h-full flex flex-col gap-6 border border-gray-200 bg-white relative">
                        {/* Badge citation en haut à droite */}
                        <div className="absolute -top-4 -right-5 w-10 h-10 bg-[#ffffff] rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white text-2xl font-bold bg-[#FF7122] w-8 h-8 rounded-full flex items-center justify-center">"</span>
                        </div>
                        
                        {testimonials.map((testimonial, index) => (
                            <div key={testimonial.name}>
                                {/* Contenu du témoignage */}
                                <div className="flex flex-col">
                                    {/* Nom et rôle */}
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900">{testimonial.name} <span className="text-sm text-gray-600">({testimonial.role})</span></h3>
                                        </div>
                                        
                                        {/* Étoiles */}
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star 
                                                    key={i}
                                                    className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* Citation */}
                                    <div className="pl-4 rounded-lg mt-2">
                                        <p className="text-sm italic text-gray-500">"{testimonial.text}"</p>
                                    </div>
                                </div>
                                
                                {/* Ligne de séparation horizontale (sauf pour le dernier élément) */}
                                {index < testimonials.length - 1 && (
                                    <div className="pt-4">
                                        <hr className="border-gray-200" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Fonctionnalites;