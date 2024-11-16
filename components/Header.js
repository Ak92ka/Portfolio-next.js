import Link from "next/link";
import Hamburger from "./Hamburger";

export default function Header() {
    return (
        <div className="header">
            <Link href="/">
                <img src="https://github.com/Ak92ka/Portfolio-next.js/blob/main/public/Assets/logo.png?raw=true" alt="portfolio logo" className="logo" width="1500" />
            </Link>
            <ul className="header-ul">
                <li><a href="#apropos">À propos</a></li>
                {/*<li><a href="#experiences" >Experiences</a></li>*/}
                <li><a href="#competences">Compétences</a></li>
                <li><a href="#projets">Projets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="hamburger-container">
            <Hamburger className="hamburger-menu-component"/>
            </div>
        </div>
    );
}