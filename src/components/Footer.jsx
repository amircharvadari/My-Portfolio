import './Footer.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer__divider" />
            <div className="section-container footer__inner" style={{ justifyContent: 'center' }}>
                <p className="footer__copy" style={{ textAlign: 'center' }}>
                    © {currentYear} <span className="gradient-text">Amir Charvadari</span>. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
