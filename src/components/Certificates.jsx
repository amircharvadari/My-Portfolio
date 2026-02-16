import './Certificates.css'

/* Issuer logos as inline SVGs */
const IssuerLogos = {
    Microsoft: () => (
        <svg className="certificates__card-logo" viewBox="0 0 23 23" width="36" height="36">
            <rect x="1" y="1" width="10" height="10" fill="#f25022" />
            <rect x="12" y="1" width="10" height="10" fill="#7fba00" />
            <rect x="1" y="12" width="10" height="10" fill="#00a4ef" />
            <rect x="12" y="12" width="10" height="10" fill="#ffb900" />
        </svg>
    ),
    IBM: () => (
        <svg className="certificates__card-logo" viewBox="0 0 50 24" width="44" height="22">
            <text x="25" y="20" textAnchor="middle" fill="#ffffff" fontFamily="'Helvetica Neue', Arial, sans-serif" fontWeight="bold" fontSize="22" letterSpacing="2">IBM</text>
        </svg>
    ),
    'Vanderbilt University': () => (
        <svg className="certificates__card-logo" viewBox="0 0 40 40" width="36" height="36">
            <circle cx="20" cy="20" r="19" fill="none" stroke="#cfae70" strokeWidth="2" />
            <text x="20" y="26" textAnchor="middle" fill="#cfae70" fontFamily="serif" fontWeight="bold" fontSize="22">V</text>
        </svg>
    ),
}

const certificates = [
    {
        title: 'Artificial Intelligence on Microsoft Azure',
        issuer: 'Microsoft',
        date: '2025',
        link: 'https://coursera.org/share/787fc4319369b60ad29ee143f04ac8e5',
    },
    {
        title: 'Introduction to Microsoft Azure Cloud Services',
        issuer: 'Microsoft',
        date: '2025',
        link: 'https://coursera.org/share/3c36f600e07131bb2102b5c06453943e',
    },
    {
        title: 'Deep Learning and Reinforcement Learning',
        issuer: 'IBM',
        date: '2026',
        link: 'https://coursera.org/share/2ad135a2d22426fbd871491b99b3138a',
    },
    {
        title: 'Exploratory Data Analysis for Machine Learning',
        issuer: 'IBM',
        date: '2026',
        link: 'https://coursera.org/share/d50d735c969a3428b65b980ec02ece2e',
    },
    {
        title: 'Unsupervised Machine Learning',
        issuer: 'IBM',
        date: '2026',
        link: 'https://coursera.org/share/91c23824dd56838c8c169279373e97b0',
    },
    {
        title: 'Microservice Architectures',
        issuer: 'Vanderbilt University',
        date: '2025',
        link: 'https://coursera.org/share/95ac92bb2c988f199115a037360f7e26',
    },
]

export default function Certificates() {
    return (
        <section className="certificates" id="certificates">
            <div className="section-container">
                <div className="certificates__header">
                    <span className="certificates__label">Certificates</span>
                    <h2 className="certificates__title">
                        Certifications & <span className="gradient-text">Achievements</span>
                    </h2>
                    <p className="certificates__subtitle">
                        Professional certifications and completed courses.
                    </p>
                </div>

                <div className="certificates__grid">
                    {certificates.map((cert) => {
                        const Logo = IssuerLogos[cert.issuer]
                        return (
                            <a href={cert.link} className="certificates__card" key={cert.title} target="_blank" rel="noopener noreferrer">
                                <div className="certificates__card-icon">
                                    {Logo ? <Logo /> : '🏆'}
                                </div>
                                <div className="certificates__card-body">
                                    <h3 className="certificates__card-title">{cert.title}</h3>
                                    <p className="certificates__card-issuer">{cert.issuer}</p>
                                    <span className="certificates__card-date">{cert.date}</span>
                                </div>
                                <svg className="certificates__card-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
                                </svg>
                            </a>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
