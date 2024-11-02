import Link from "next/link";
import Hamburger from "./Hamburger";

export default function Header() {
    return (
        <div className="header">
            <Link href="/">
                <img src="assets/logo.PNG" alt="portfolio logo" className="logo" width="1500" height="" />
            </Link>
            <ul className="header-ul">
                <li><a href="#apropos">À propos</a></li>
                {/*<li><a href="#experiences" >Experiences</a></li>*/}
                <li><a href="#competences">Competences</a></li>
                <li><a href="#projets">Projets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="hamburger-container">
            <Hamburger className="hamburger-menu-component"/>
            </div>
        </div>
    );
}