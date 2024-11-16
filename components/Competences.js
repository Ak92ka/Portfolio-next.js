import ProgressBar from "./ProgressBar";
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNode } from "@fortawesome/free-brands-svg-icons";

export default function Competences() {
    return (
        <section className="section-competence" id="competences">
            <h2 className="competence-h2">Mes Compétences</h2>
            <h3 className="competence-h3">Front-end</h3>
            <div className="div-frontend">
                <ProgressBar percentage={95} icon={faHtml5} skill="HTML5" />
                <ProgressBar percentage={95} className="bar-blue" icon={faCss3Alt} skill="CSS" />
                <ProgressBar percentage={90} className="bar-yellow" icon={faJsSquare} skill="JavaScript" />
                <ProgressBar percentage={90} className="bar-dark-blue" icon={faReact} skill="React" />
            </div>
            <h3 className="competence-h3">Back-end</h3>
            <div className="div-backend">
            <ProgressBar percentage={85} className="bar-dark-green" icon={faNode} skill="Node.js" />
            <ProgressBar percentage={90} className="bar-green" icon="https://raw.githubusercontent.com/Ak92ka/Portfolio-next.js/689b657e91db423640f7c14485a572fb808dee96/public/Assets/mongodb.svg" skill="MongoDB" />
        </div>
        </section>
    );
}