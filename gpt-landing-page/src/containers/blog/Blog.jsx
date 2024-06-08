import React from 'react'
import Features from './features/Features'
import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'
import './blog.css'

const article = {
    date: 'Sep 26, 2021',
    largeContent: 'GPT- 3 and Open  AI is the future.Let us explore how it is?',
    smallContent: 'Read Full Article',
    image: [blog01, blog02, blog03, blog04, blog05]
}
const Blog = () => {
    return (
        <section className='blog-section'>
            {article.image.map((oneImage) =>{
                return <Features image={oneImage} 
                largeContent={article.largeContent}
                smallContent={article.smallContent}
                date={article.date}

                />
            })}
        </section>
    )
}

export default Blog