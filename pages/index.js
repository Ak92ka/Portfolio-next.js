import Header from "../components/Header"
import Banner from "../components/Banner"
import Apropos from "../components/Apropos"
import Competences from "../components/Competences"
import Projets from "../components/Projets"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Head from "next/head"

export default function Accueil() {
    return (
        <div>
            <Head>
                <title>Portfolio de Ahmed Khalaf</title>
                <meta
            name="description"
            content="Découvrez le portfolio de Ahmed Khalaf, développeur web, incluant ses expériences, projets, et compétences en développement web moderne et créatif." />
          <link rel="icon" href="https://raw.githubusercontent.com/Ak92ka/Portfolio-next.js/refs/heads/main/public/favicon.ico" />
            </Head>
            <Header/>
            <Banner/>
            <Apropos/>
            <Competences/>
            <Projets/>
            <Contact/>
            <Footer/>
        </div>
    )
}