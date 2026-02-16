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
                        I am an AI Engineer and a third-year Artificial Intelligence student
                        at Bahçeşehir University. My journey began in Medicine, where I spent
                        2.5 years developing a deep understanding of biological systems before
                        pivoting to my true passion: Computer Science and AI. This unique
                        background allows me to approach healthcare challenges with a
                        data-driven, engineering mindset.
                    </p>
                    <p className="about__bio">
                        I specialize in designing high-performance algorithms—ranging from C++
                        data pipelines to NP-hard optimization problems like the Metric TSP.
                        Beyond core engineering, I am dedicated to building full-stack AI
                        applications that solve real-world problems in education and finance,
                        leveraging tools like Next.js, Python, and the Gemini API.
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
