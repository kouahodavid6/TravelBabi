import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Fonctionnement from "./components/Fonctionnalites";
import Etoiles from "./components/Etoiles";
import Abonnement from "./components/Abonnement";
import Avantages from "./components/Avantages";
import AppScreens from "./components/AppScreens";
import Footer from "./components/Footer";

const Home = () => {
    return(
        <>
            <Navbar />
            {/* Animation d'apparition initiale pour Hero */}
            <div data-aos="fade-in" data-aos-duration="1200">
                <Hero />
            </div>

            {/* Animations au scroll pour les autres sections */}
            <div data-aos="fade-up" data-aos-delay="100">
                <Fonctionnement />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <Etoiles />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <Abonnement />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <Avantages />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <AppScreens />
            </div>
            <Footer />
        </>
    );
}

export default Home;