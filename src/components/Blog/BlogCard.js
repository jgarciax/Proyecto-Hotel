import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const BlogCard = ({item: {id, date, catgeory, title, cover, para, desc}}) => {
  return (
    <>
        <div className='items'>
            <div className='img'>
                <img src={cover} />
            </div>
            <div className='category flex_space'>
                <span>{date}</span>
                <label>{catgeory}</label>
            </div>
            <div className='datail'>
                <h3>{title}</h3>
                <p>{para}</p>
            </div>
            <Link to= {`/blogsingle/${id}`} className='blogItem-link'>
                READ MORE <i className='fa fa-long-arrow-alt-right'></i>
            </Link>
        </div>
    </>
    )
}

export default BlogCard
