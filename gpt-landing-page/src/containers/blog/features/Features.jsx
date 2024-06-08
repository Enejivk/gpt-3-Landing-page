import React from 'react'

const Features = ({ image, largeContent, smallContent, date }) => {
    return (
        <div className='blog-item'>
            <div className='blog-feature-image'>
                <img src={image} alt='image' /></div>
            <div className="blog-feature-text">
                <p>{date}</p>
                <h2>{largeContent}</h2>
                <p>{smallContent}</p>
            </div>
        </div>
    )
}

export default Features
