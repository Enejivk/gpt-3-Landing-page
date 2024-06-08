import './footer.css'
import logo from '../../assets/logo.svg'
const Footer = () => {
    return (
        <footer>
            <h1>Do you want to step in to the future before others</h1>
            <button>Request Early Access</button>
            <div className="footer-item-container">
                <div className="footer-section-logo">
                    <img src={logo} alt="" />
                    <p>Crechterwoord K12 182 DK <br/> Alknjkcb, All Rights Reserved</p>
                </div>
                <ul>
                    <h2>Links</h2>
                    <p><a href="#">Overons</a></p>
                    <p><a href="#">social Media</a></p>
                    <p><a href="#">Counters</a></p>
                    <p><a href="#">Contact</a></p>
                </ul>
                <ul>
                    <h2>Company</h2>
                    <p><a href="#">Terms and Condition</a></p>
                    <p><a href="#">Privacy Policy</a></p>
                    <p><a href="#">Contact</a></p>
                </ul>
                <ul>
                    <h2>Get In Touch</h2>
                    <p><a href="#">Crechterwoord K12 182 DK Al</a></p>
                    <p><a href="#"> info@payme.net</a></p>
                    <p><a href="#"> 085-132567</a></p>
                </ul>
            </div>
        </footer>
    )
}

export default Footer