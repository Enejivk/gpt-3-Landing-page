import './feature.css'

const Features = ({ title, content, name }) => {
    return (
        <div className={`feature-Item ${name}`} >
            <div className="feature-title">
                <hr />
                <h1>{title}</h1>
            </div>
            <p className="feature-content">
                {content}
            </p>
        </div>
    )
}
export default Features
