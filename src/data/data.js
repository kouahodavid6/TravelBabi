import { Layers, Map, Coins, Heart,MessageSquare, Eye, CheckCircle, BarChart3, Play, ShoppingBag, Crown, Calendar, Star, PiggyBank, Zap, Users, Bus, Smartphone, Shield } from 'lucide-react';

// Navbar
export const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'fonctionnalites', label: 'Fonctionnalités' },
    { id: 'screens', label: 'Écrans' },
    { id: 'etoiles', label: 'Étoiles' },
    { id: 'abonnements', label: 'Abonnements' },
    { id: 'avantages', label: 'Avantages' },
];

// Données pour le composant Fonctionnalités
export const steps = [
    {
        icon: Layers,
        title: 'Combinaisons Multimodales',
        description: "Visualisez votre trajet en étapes claires. Sachez exactement où changer de 'Gbaka' pour un taxi ou quand marcher.",
        iconColor: '#F97316',
        iconBgColor: 'rgba(249, 115, 22, 0.1)',
        gradient: 'from-orange-50 to-orange-100'
    },
    {
        icon: Map,
        title: "Cartes Interactives",
        description: "Passez en vue carte pour voir les routes colorées. Cliquez sur n'importe quel segment pour zoomer sur les intermédiaires.",
        iconColor: '#3B82F6',
        iconBgColor: 'rgba(59, 130, 246, 0.1)',
        gradient: 'from-blue-50 to-blue-100'
    },
    {
        icon: Coins,
        title: 'Transparence des Prix',
        description: "Connaissez le coût total avant de partir. Nous agrégeons les prix pour chaque étape afin que vous puissiez budgétiser.",
        iconColor: '#10B981',
        iconBgColor: 'rgba(16, 185, 129, 0.1)',
        gradient: 'from-emerald-50 to-emerald-100'
    },
];

export const fonctionnaly = [
    {
        icon: Heart,
        title: 'Favoris',
        description: "Accès en un clic à vos destinations fréquentes.",
        iconColor: '#10B981',
        iconBgColor: 'rgba(16, 185, 129, 0.1)',
        gradient: 'from-emerald-50 to-emerald-100'
    },
    {
        icon: MessageSquare,
        title: "Avis de la communauté",
        description: "'La route de Cocody était plus rapide !' - Voir les avis.",
        iconColor: '#3B82F6',
        iconBgColor: 'rgba(59, 130, 246, 0.1)',
        gradient: 'from-blue-50 to-blue-100'
    }
];

export const testimonials = [
    {
        name: 'Judicael Cakpo',
        role: 'Étudiant',
        text: "Enfin une application qui comprend comment fonctionne le transport à Abidjan. Les estimations de prix sont justes.",
        rating: 5,
        bgColor: 'bg-gradient-to-br from-[#FF7122]/80 to-[#ff8c00]',
        textColor: 'text-black',
    },
    {
        name: 'Emmanuel Bamidélé',
        role: 'Étudiant',
        text: "J'ai économisé 30 minutes en évitant les bouchons au Plateau. J'adore le modèle d'abonnement.",
        rating: 4,
        bgColor: 'bg-gradient-to-br from-[#ff8c00] to-[#FF7122]/80',
        textColor: 'text-black',
    },
];

// Les écrans fixes
export const fixedScreens = [
    {
        image: 'List.png',
        title: 'Liste des Trajets',
        description: 'Consultez tous les itinéraires avec leurs détails complets',
        icon: Eye
    },
    {
        image: 'Map.png',
        title: 'Vue Cartographique',
        description: 'Suivez votre trajet en temps réel sur une carte interactive',
        icon: BarChart3
    },
    {
        image: 'Details.png',
        title: 'Détails Complets',
        description: 'Analysez les coûts, durée et confort de chaque option',
        icon: CheckCircle
    }
];

// Propulsé par les étoiles
export const starOptions = [
    {
        icon: Play,
        title: 'Gagner des étoiles',
        description: 'Regardez des publicités locales et gagnez des étoiles gratuitement.',
        badge: 'Gratuit',
        badgeColor: 'bg-green-500',
        stars: '+5 étoiles'
    },
    {
        icon: ShoppingBag,
        title: 'Acheter des étoiles',
        description: 'Packs étoiles: tarifs avantageux, validité prolongée.',
        badge: 'Populaire',
        badgeColor: 'bg-[#FF7122]',
        stars: 'À partir de 50 étoiles'
    },
    {
        icon: Crown,
        title: 'abonnement',
        description: 'Abonnez-vous pour bénéficier d\'étoiles illimitées sous une période.',
        badge: 'Premium',
        badgeColor: 'bg-yellow-500',
        stars: 'Étoiles illimitées'
    }
];

// Abonnement
export const subscriptions = [
    {
        title: 'Hebdomadaire',
        price: '2 500',
        period: '/ semaine',
        popular: false,
        description: 'Étoiles illimitées pour une semaine',
        icon: Calendar
    },
    {
        title: 'Mensuel',
        price: '8 000',
        period: '/ mois',
        popular: true,
        description: 'Étoiles illimitées pour un mois',
        icon: Star
    },
    {
        title: 'Trimestriel',
        price: '20 000',
        period: '/ 3 mois',
        popular: false,
        description: 'Étoiles illimitées pour un trimestre',
        icon: Crown
    }
];

export const benefits = [
    {
        icon: PiggyBank,
        title: 'Économique',
        description: 'Comparez les prix et choisissez l\'option la plus abordable pour votre budget.'
    },
    {
        icon: Zap,
        title: 'Rapide',
        description: 'Trouvez les itinéraires les plus courts et évitez les embouteillages en temps réel.'
    },
    {
        icon: Users,
        title: 'Communauté',
        description: 'Profitez des avis et recommandations de milliers d\'utilisateurs.'
    },
    {
        icon: Bus,
        title: 'Transports urbains',
        description: 'Spécialement conçu pour les réalités des transports en Afrique.'
    },
    {
        icon: Smartphone,
        title: 'Interface moderne',
        description: 'Une app intuitive et élégante, accessible à tous.'
    },
    {
        icon: Shield,
        title: 'Fiable',
        description: 'Des données vérifiées et mises à jour en continu pour votre sécurité.'
    }
];