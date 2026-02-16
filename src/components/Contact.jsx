import { useState } from 'react'
import './Contact.css'

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle') // idle | sending | sent | error

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: 'c4792881-e165-4d5f-a0b7-6c1d3ff2d931',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New message from ${formData.name} via Portfolio`,
                }),
            })

            if (res.ok) {
                setStatus('sent')
                setFormData({ name: '', email: '', message: '' })
                setTimeout(() => setStatus('idle'), 3000)
            } else {
                setStatus('error')
                setTimeout(() => setStatus('idle'), 3000)
            }
        } catch {
            setStatus('error')
            setTimeout(() => setStatus('idle'), 3000)
        }
    }

    return (
        <section className="contact" id="contact">
            <div className="contact__glow" />
            <div className="section-container">
                <div className="contact__header">
                    <h2 className="contact__title">
                        <span className="gradient-text">Get In Touch</span>
                    </h2>
                    <p className="contact__subtitle">
                        Have a project in mind or want to collaborate? Feel free to reach out!
                    </p>
                </div>

                <div className="contact__grid">
                    {/* Send a Message Form */}
                    <div className="contact__card">
                        <h3 className="contact__card-heading">Send a Message</h3>
                        <form className="contact__form" onSubmit={handleSubmit}>
                            <div className="contact__field">
                                <label className="contact__field-label" htmlFor="name">Your Name</label>
                                <input
                                    className="contact__input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="contact__field">
                                <label className="contact__field-label" htmlFor="email">Your Email</label>
                                <input
                                    className="contact__input"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="contact__field">
                                <label className="contact__field-label" htmlFor="message">Your Message</label>
                                <textarea
                                    className="contact__input contact__textarea"
                                    id="message"
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className={`contact__submit ${status === 'sent' ? 'contact__submit--sent' : ''} ${status === 'error' ? 'contact__submit--error' : ''}`}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? (
                                    'Sending...'
                                ) : status === 'sent' ? (
                                    <>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                        Sent!
                                    </>
                                ) : status === 'error' ? (
                                    'Failed — try again'
                                ) : (
                                    <>
                                        Send Message
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="contact__card">
                        <h3 className="contact__card-heading">Contact Information</h3>

                        <div className="contact__items">
                            <a href="mailto:amrchrv@gmail.com" className="contact__item">
                                <div className="contact__item-icon contact__item-icon--email">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <path d="M22 6l-10 7L2 6" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="contact__item-label">Email</span>
                                    <span className="contact__item-value">amrchrv@gmail.com</span>
                                </div>
                            </a>

                            <a href="https://linkedin.com/in/amircharvadari" target="_blank" rel="noopener noreferrer" className="contact__item">
                                <div className="contact__item-icon contact__item-icon--linkedin">
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="contact__item-label">LinkedIn</span>
                                    <span className="contact__item-value">linkedin.com/in/amircharvadari</span>
                                </div>
                            </a>

                            <a href="https://github.com/amircharvadari" target="_blank" rel="noopener noreferrer" className="contact__item">
                                <div className="contact__item-icon contact__item-icon--github">
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="contact__item-label">GitHub</span>
                                    <span className="contact__item-value">github.com/amircharvadari</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
