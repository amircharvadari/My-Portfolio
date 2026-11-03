import './About.css'

export default function About() {
    const languages = [
        { name: 'English', level: 'Fluent' },
        { name: 'Persian', level: 'Native' },
        { name: 'Turkish', level: 'Native' },
        { name: 'Azerbaijani', level: 'Native' },
    ]

    return (
        <section className="about" id="about">
            <div className="section-container">
                {/* Centered header */}
                <div className="about__header about__header--centered">
                    <span className="about__label">About Me</span>
                    <h2 className="about__title">
                        Passionate about building
                        <span className="gradient-text"> intelligent </span>
                        AI solutions
                    </h2>
                    <p className="about__bio">
                        Curiosity is what got me here. It pulled me out of medical school after two years and dropped me into AI Engineering at Bahçeşehir University — where I've been all in since semester one.
                    </p>
                    <p className="about__bio">
                        I'm wired for depth over breadth — one real conversation beats ten shallow ones, and one shipped project beats a hundred half-finished ideas. Alongside my studies, I lead a 4-person team as CEO, CTO & CMO at Hooshinotr.com, an educational consultancy I've helped grow to 300+ clients over four years. These days I split my time between building production-grade AI systems in Python and the cloud, and running the product, tech, and marketing side of a real business. I read business and psychology in parallel, because great products are half engineering, half understanding people. Quiet builder, fast learner, obsessed with turning ideas — technical or commercial — into things that actually create value.
                    </p>
                </div>

                {/* Languages */}
                <div className="about__languages about__languages--centered">
                    <h3 className="about__languages-title">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                        </svg>
                        Languages
                    </h3>
                    <div className="about__languages-list about__languages-list--inline">
                        {languages.map(lang => (
                            <div className="about__language" key={lang.name}>
                                <span className="about__language-name">{lang.name}</span>
                                <span className="about__language-level">{lang.level}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
