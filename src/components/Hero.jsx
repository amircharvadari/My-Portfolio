import { useRef, useEffect } from 'react'
import './Hero.css'

export default function Hero() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationId

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        const particles = Array.from({ length: 80 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.5 + 0.1,
        }))

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach(p => {
                p.x += p.vx
                p.y += p.vy
                if (p.x < 0) p.x = canvas.width
                if (p.x > canvas.width) p.x = 0
                if (p.y < 0) p.y = canvas.height
                if (p.y > canvas.height) p.y = 0

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(124, 92, 252, ${p.opacity})`
                ctx.fill()
            })

            particles.forEach((a, i) => {
                particles.slice(i + 1).forEach(b => {
                    const dx = a.x - b.x
                    const dy = a.y - b.y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < 120) {
                        ctx.beginPath()
                        ctx.moveTo(a.x, a.y)
                        ctx.lineTo(b.x, b.y)
                        ctx.strokeStyle = `rgba(124, 92, 252, ${0.06 * (1 - dist / 120)})`
                        ctx.stroke()
                    }
                })
            })

            animationId = requestAnimationFrame(animate)
        }
        animate()

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <section className="hero" id="hero">
            <canvas ref={canvasRef} className="hero__particles" />
            <div className="hero__bg-orb hero__bg-orb--1" />
            <div className="hero__bg-orb hero__bg-orb--2" />
            <div className="hero__bg-orb hero__bg-orb--3" />

            <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-3xl mx-auto px-4 w-full">
                {/* Profile image first */}
                <div className="hero__image-wrapper animate-in">
                    <div className="hero__image-glow" />
                    <div className="hero__image-border">
                        <img
                            src="/profile.jpg"
                            alt="Amirhassan Charvadari"
                            className="hero__image"
                        />
                    </div>
                </div>



                {/* Title */}
                <h1 className="font-[var(--font-heading)] text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight animate-in animate-in-delay-2"
                    style={{ fontFamily: 'var(--font-heading)' }}>
                    Hi, I'm <span className="gradient-text">Amir</span>
                </h1>

                {/* Subtitle */}
                <p className="text-[clamp(1rem,1.8vw,1.15rem)] text-[var(--text-secondary)] leading-relaxed max-w-lg mx-auto animate-in animate-in-delay-3">
                    AI Engineer crafting intelligent solutions with LLMs, cloud infrastructure, and scalable AI-driven applications.
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-2 flex-wrap justify-center animate-in animate-in-delay-4">
                    <a href="#projects" className="hero__btn hero__btn--primary">
                        View My Work
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
                        </svg>
                    </a>
                    <a href="/resume_new.pdf" download className="hero__btn hero__btn--secondary">
                        Resume
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                        </svg>
                    </a>
                    <a href="#contact" className="hero__btn hero__btn--secondary">
                        Get in Touch
                    </a>
                </div>
            </div>

            <div className="hero__scroll-indicator animate-in animate-in-delay-5">
                <div className="hero__scroll-mouse">
                    <div className="hero__scroll-wheel" />
                </div>
                <span>Scroll to explore</span>
            </div>
        </section>
    )
}
