
export default function Banner() {
    return(
        <div className="banner">
            <img src="https://raw.githubusercontent.com/Ak92ka/Portfolio-next.js/refs/heads/main/public/Assets/bonjour.webp" 
                        className="banner-gif"
                        alt="Joli soleil avec des lunettes disant bonjour"
                        width="480"
                        srcSet="https://raw.githubusercontent.com/Ak92ka/Portfolio-next.js/refs/heads/main/public/Assets/bonjour.webp 480w, https://raw.githubusercontent.com/Ak92ka/Portfolio-next.js/refs/heads/main/public/Assets/bonjour.webp 800w"
                        sizes="(max-width: 480px) 100vw, 480px" />
            <div className="banner-text">
            <h1>Ahmed Khalaf</h1>
                <h2>Développeur Full Stack</h2>
                <p>Je conçois et je code des choses magnifiquement simples, et j'aime ce que je fais</p>            </div>
        </div>
    );
}