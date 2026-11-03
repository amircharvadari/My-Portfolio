import './Experience.css'

const experiences = [
    {
        role: 'CEO, CTO & CMO',
        company: 'Hooshinotr.com',
        type: 'Educational Consultancy',
        period: '2026 — Present',
        bullets: [
            'Lead and manage a 4-person team across product, technology, and marketing operations',
            "Oversee the company's technology stack and go-to-market strategy",
            'Managed ~$2,000 in marketing & SEO spend over 4 months, contributing to ₺1,000,000 in revenue within 3 months',
            'Led educational content strategy and advised 300+ clients over 4 years',
        ],
    },
    {
        role: 'Member',
        company: 'BAU Artificial Intelligence Society',
        type: 'Student Organization',
        period: '2025 — 2026',
        bullets: [
            'Active member contributing to AI community initiatives at Bahçeşehir University',
        ],
    },
]

export default function Experience() {
    return (
        <section className="experience" id="experience">
            <div className="section-container">
                <div className="experience__header">
                    <span className="experience__label">Experience</span>
                    <h2 className="experience__title">
                        Building While <span className="gradient-text">Learning</span>
                    </h2>
                    <p className="experience__subtitle">
                        Leading a team and venture alongside my engineering studies.
                    </p>
                </div>

                <div className="experience__list">
                    {experiences.map((exp) => (
                        <div className="experience__card" key={exp.role + exp.company}>
                            <div className="experience__card-header">
                                <div>
                                    <h3 className="experience__card-role">{exp.role}</h3>
                                    <p className="experience__card-company">{exp.company} · {exp.type}</p>
                                </div>
                                <span className="experience__card-period">{exp.period}</span>
                            </div>
                            <ul className="experience__card-bullets">
                                {exp.bullets.map((b) => (
                                    <li key={b}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
