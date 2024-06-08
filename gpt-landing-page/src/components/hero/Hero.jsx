import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './hero.css'

const Hero = () => {
    return (
        <section className='hero-section'>
            <div className="hero-content">
                <h1>Let’s Build Something
                    amazing with GPT-3
                    OpenAI
                </h1>
                <p className='hero-first-paragraph'>Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className="hero-section-input">
                    <input type="text" placeholder='Your Email Address' />
                    <button>Get started</button>
                </div>
                <div className="people">
                    <img src={people} alt="people" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="hero-image">
                <img src={ai} alt="Image of an ai" />
            </div>
        </section>
    )
}

export default Hero
