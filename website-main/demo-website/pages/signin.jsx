import Header from "../section/Header";
import ServiseToHero from "../section/serviseHero"
import Footer from "../section/Footer";
import Sectionmiddlesection from "../section/sectionmiddlesection";
import SErvisecenteronizecontent from "../section/servisecenteronizecontent";
import SEctionlast from "../section/sectionlast.jsx";
function Servises() {
    return (
      <>
        <Header />
        <ServiseToHero />
        <br />
        <Sectionmiddlesection />
        <SErvisecenteronizecontent />

        <SEctionlast/>
        <Footer />
      </>
    );
}
export default Servises