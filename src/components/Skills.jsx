import './Skills.css'

const skills = [
    {
        name: 'Python',
        icon: (
            <svg viewBox="0 0 128 128" width="32" height="32">
                <linearGradient id="py-a" x1="70.252" x2="170.659" y1="1237.476" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#5A9FD4" />
                    <stop offset="1" stopColor="#306998" />
                </linearGradient>
                <linearGradient id="py-b" x1="209.474" x2="130.27" y1="1098.811" y2="1175.218" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#FFD43B" />
                    <stop offset="1" stopColor="#FFE873" />
                </linearGradient>
                <path fill="url(#py-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" />
                <path fill="url(#py-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM78.79 90.01c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" />
            </svg>
        ),
    },
    {
        name: 'SQL',
        icon: (
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#2496ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
        ),
    },

    {
        name: 'Gemini API',
        icon: (
            <svg viewBox="0 0 32 32" width="32" height="32">
                <defs>
                    <linearGradient id="gem-g" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4285F4" />
                        <stop offset="50%" stopColor="#9B72CB" />
                        <stop offset="100%" stopColor="#D96570" />
                    </linearGradient>
                </defs>
                <path fill="url(#gem-g)" d="M16 0C16 0 16 16 0 16C16 16 16 32 16 32C16 32 16 16 32 16C16 16 16 0 16 0Z" />
            </svg>
        ),
    },
    {
        name: 'LangChain',
        icon: (
            <svg viewBox="0 0 32 32" width="32" height="32">
                <defs>
                    <linearGradient id="lc-g" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1C3C3C" />
                        <stop offset="100%" stopColor="#2EA67A" />
                    </linearGradient>
                </defs>
                <circle cx="16" cy="16" r="15" fill="url(#lc-g)" />
                <path d="M16 6 L16 12 M16 20 L16 26 M6 16 L12 16 M20 16 L26 16 M9.5 9.5 L13 13 M19 19 L22.5 22.5 M22.5 9.5 L19 13 M13 19 L9.5 22.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="16" cy="16" r="4.5" fill="white" />
                <text x="16" y="18.5" textAnchor="middle" fill="#1C3C3C" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="6">🦜</text>
            </svg>
        ),
    },
    {
        name: 'LangGraph',
        icon: (
            <svg viewBox="0 0 32 32" width="32" height="32">
                <defs>
                    <linearGradient id="lg-g" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                </defs>
                <rect width="32" height="32" rx="6" fill="url(#lg-g)" />
                <line x1="10" y1="10" x2="22" y2="10" stroke="white" strokeWidth="1.5" opacity="0.5" />
                <line x1="10" y1="10" x2="10" y2="22" stroke="white" strokeWidth="1.5" opacity="0.5" />
                <line x1="22" y1="10" x2="22" y2="22" stroke="white" strokeWidth="1.5" opacity="0.5" />
                <line x1="10" y1="22" x2="22" y2="22" stroke="white" strokeWidth="1.5" opacity="0.5" />
                <line x1="10" y1="10" x2="22" y2="22" stroke="white" strokeWidth="1.5" opacity="0.5" />
                <line x1="22" y1="10" x2="16" y2="16" stroke="white" strokeWidth="1.5" opacity="0.5" />
                <circle cx="10" cy="10" r="3" fill="white" />
                <circle cx="22" cy="10" r="3" fill="white" />
                <circle cx="10" cy="22" r="3" fill="white" />
                <circle cx="22" cy="22" r="3" fill="white" />
                <circle cx="16" cy="16" r="3" fill="white" />
            </svg>
        ),
    },
    {
        name: 'n8n',
        icon: (
            <svg viewBox="0 0 32 32" width="32" height="32">
                <rect width="32" height="32" rx="6" fill="#EA4B71" />
                <text x="16" y="22" textAnchor="middle" fill="white" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14">n8n</text>
            </svg>
        ),
    },
    {
        name: 'Streamlit',
        icon: (
            <svg viewBox="0 0 32 32" width="32" height="32">
                <path fill="#FF4B4B" d="M16 3L3.5 10.5 16 14l12.5-3.5L16 3z" />
                <path fill="#FF4B4B" d="M3.5 15l12.5 7.5L28.5 15l-12.5-3.5L3.5 15z" opacity="0.7" />
                <path fill="#FF4B4B" d="M3.5 19.5L16 27l12.5-7.5L16 23 3.5 19.5z" opacity="0.4" />
            </svg>
        ),
    },
    {
        name: 'Firebase',
        icon: (
            <svg viewBox="0 0 128 128" width="32" height="32">
                <path fill="#FFA000" d="M58.187 43.354l-9.452 8.873L34.726 23.808c-.762-1.452.728-3.074 2.087-2.272l21.374 21.818z" />
                <path fill="#F57C00" d="M90.344 82.776L80.56 18.254c-.423-2.407-3.606-3.136-5.106-1.168L34.726 64.098l27.81 17.36 27.808-17.36z" />
                <path fill="#FFCA28" d="M90.344 82.776L62.536 65.416 48.735 81.458 34.726 64.098z" />
                <path fill="#FFA000" d="M34.726 64.098l13.109 17.36 14.701-15.042-13.801-13.189z" />
                <path fill="#FFCA28" d="M62.536 81.458L90.344 82.776c3.242 1.752-.449 5.889-3.894 5.889H41.618c-3.311 0-6.892-4.008-3.894-5.889l24.812-1.318z" />
            </svg>
        ),
    },
    {
        name: 'Docker',
        icon: (
            <svg viewBox="0 0 128 128" width="32" height="32">
                <path fill="#2496ED" d="M124.8 52.1c-4.3-2.5-10-2.8-14.8-1.4-.6-5.2-4-9.7-8-12.9l-1.6-1.3-1.4 1.6c-2.7 3.4-3.4 9.1-3 13.4.3 3.2 1.5 6.4 3.6 8.9-1.7.9-3.4 1.7-5 2.2-3.4 1.2-7 1.8-10.7 1.8H0l-.4 2.5c-.8 6.2-.4 12.5 1.3 18.5 2 6.8 5.5 12.7 10.7 17 6 5 13.7 7.6 21.6 8.3 9.3.8 18.5-.5 26.8-4.1 6.9-3 13-7.4 18-13.1 7.4-8.5 11.8-18.3 14.6-28.6h1.3c4.4 0 9-1.7 11.9-5.2l.9-1.1-1.9-1.5z" />
                <path fill="#2496ED" d="M15 52H27v12H15zM29 52H41v12H29zM43 52H55v12H43zM57 52H69v12H57zM29 38H41v12H29zM43 38H55v12H43zM57 38H69v12H57zM71 38H83v12H71zM57 24H69v12H57z" />
            </svg>
        ),
    },
    {
        name: 'C++',
        icon: (
            <svg viewBox="0 0 128 128" width="32" height="32">
                <path fill="#659AD2" d="M115.4 30.7L67.1 2.9c-1.7-1-4.5-1-6.2 0L12.6 30.7c-1.7 1-3.1 3.5-3.1 5.5v55.7c0 2 1.4 4.5 3.1 5.5l48.3 27.8c1.7 1 4.5 1 6.2 0l48.3-27.8c1.7-1 3.1-3.5 3.1-5.5V36.1c.1-2-1.3-4.4-3.1-5.4z" />
                <path fill="#003E73" d="M64 23.7l-43.4 25v50l43.4 25 43.4-25v-50L64 23.7z" opacity="0.1" />
                <path fill="white" d="M64 23.7v100l43.4-25v-50L64 23.7z" opacity="0.1" />
                <path fill="white" d="M57 76.7c-6.5-3.8-10.3-10.8-10.3-18.6 0-11.7 9.5-21.3 21.3-21.3 7.9 0 14.9 4.3 18.6 10.7l-9.5 5.5c-1.9-3.2-5.3-5.3-9.1-5.3-5.8 0-10.5 4.7-10.5 10.5 0 4 2.3 7.5 5.7 9.2L57 76.7z" />
                <g fill="white">
                    <path d="M90 60h-4v-4h-4v4h-4v4h4v4h4v-4h4zM105 60h-4v-4h-4v4h-4v4h4v4h4v-4h4z" />
                </g>
            </svg>
        ),
    },
]

export default function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="skills__bg-glow" />
            <div className="section-container">
                <div className="skills__header">
                    <span className="skills__label">Skills</span>
                    <h2 className="skills__title">
                        Tools and Technologies I Work With
                    </h2>
                    <p className="skills__subtitle">
                        A curated set of tools and technologies I use to build intelligent solutions.
                    </p>
                </div>

                <div className="skills__grid">
                    {skills.map((skill, i) => (
                        <div
                            className="skills__card"
                            key={skill.name}
                            style={{ animationDelay: `${i * 0.08}s` }}
                        >
                            <div className="skills__card-icon">{skill.icon}</div>
                            <span className="skills__card-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
