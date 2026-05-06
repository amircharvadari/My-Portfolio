import './Projects.css'

const projects = [
    {
        title: 'Bookstore API',
        description: 'A RESTful API for managing a bookstore built with Flask and MongoDB. Containerized with Docker and orchestrated via Kubernetes for scalable deployment.',
        tags: ['Flask', 'MongoDB', 'Docker', 'Kubernetes'],
        categories: [
            { label: 'Backend', color: '#0a888aff' },
            { label: 'Cloud Native', color: '#780d91ff' },
        ],
        link: 'https://github.com/amircharvadari/bookstore-k8s-mongo',
    },
    {
        title: 'Human Activity Recognition',
        description: 'A multiclass classification system using Support Vector Machines and Principal Component Analysis to recognize human activities from sensor data.',
        tags: ['Python', 'SVM', 'PCA', 'Scikit-learn'],
        categories: [
            { label: 'AI', color: '#1d71f8ff' },
            { label: 'Pattern Recognition', color: '#06b6d4' },
        ],
        link: 'https://github.com/amircharvadari/HumanActivity_SVM_PCA_Classification',
    },
    {
        title: 'Medical Cost Prediction',
        description: 'A predictive analytics model estimating medical insurance costs using Polynomial Regression and Support Vector Regression.',
        tags: ['Python', 'Polynomial Regression', 'SVR', 'Pandas'],
        categories: [
            { label: 'Predictive Modeling', color: '#289f1dff' },
        ],
        link: 'https://github.com/amircharvadari/Medical-Insurance-Cost-Prediction',
    },
    {
        title: 'TSP Optimization',
        description: 'A predictive analytics model estimating medical insurance costs using Polynomial Regression and Support Vector Regression.',
        tags: ['Python', 'ACO', 'SA', 'Matplotlib'],
        categories: [
            { label: 'Algorithms', color: '#e16105ff' },
            { label: 'AI', color: '#1d71f8ff' },
        ],
        link: 'https://github.com/amircharvadari/Neurocourier-tsp-aco-sa',
    },
    {
        title: 'WhatsApp AI Agent',
        description: 'An intelligent WhatsApp assistant built with n8n, powered by OpenAI GPT-4o, featuring Pinecone RAG, Google Calendar integration, and automated daily reporting.',
        tags: ['n8n', 'OpenAI', 'Pinecone', 'WhatsApp API'],
        categories: [
            { label: 'AI', color: '#1d71f8ff' },
            { label: 'Automation', color: '#0a888aff' },
        ],
        link: 'https://github.com/amircharvadari/whatsapp-ai-agent-n8n',
    },
]

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="section-container">
                <div className="projects__header">
                    <h2 className="projects__heading">
                        Featured <span className="projects__heading-accent">Projects</span>
                    </h2>
                    <p className="projects__subtitle">
                        Explore my latest work in artificial intelligence, machine learning, and cloud engineering.
                    </p>
                </div>

                <div className="projects__grid">
                    {projects.map((project) => (
                        <article className="projects__card" key={project.title}>
                            <div className="projects__card-badges">
                                {project.categories.map(cat => (
                                    <span
                                        className="projects__card-badge"
                                        key={cat.label}
                                        style={{
                                            backgroundColor: cat.color,
                                        }}
                                    >
                                        {cat.label}
                                    </span>
                                ))}
                            </div>

                            <h3 className="projects__card-title">{project.title}</h3>
                            <p className="projects__card-desc">{project.description}</p>

                            <div className="projects__card-tags">
                                {project.tags.map(tag => (
                                    <span className="projects__card-tag" key={tag}>{tag}</span>
                                ))}
                            </div>

                            <a href={project.link} className="projects__card-btn" target="_blank" rel="noopener noreferrer">
                                View Project
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                </svg>
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
