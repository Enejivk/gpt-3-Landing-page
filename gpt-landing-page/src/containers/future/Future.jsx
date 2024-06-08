import Features from "../features/Features"
import './future.css'

const article = [
    {
        title: 'Improving end distrusts instantly ',
        content: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
    },
    {
        title: 'Become the tended active',
        content: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
    },
    {
        title: 'Message or am nothing',
        content: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
    },
    {
        title: 'Really boy law county',
        content: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
    },
]

const Future = () => {
    return (
        <section className="future-section">
            <div className="future-section-big-text">
                <h1>The Future is Now and
                    You Just Need To Realize It.
                    Step into Future Today & Make
                    it Happen.
                </h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="future-section-item-container">
                {article.map((item, index) => {
                    const { title, content } = item
                    return < Features title={title} content={content} />
                })}
            </div>
        </section>
    )
}
export default Future;
