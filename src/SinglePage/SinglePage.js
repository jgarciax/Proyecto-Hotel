import React, { useEffect, useState } from 'react'
import '../SinglePage/SinglePage.css'
import HeadTitle from '../common/HeadTitle/HeadTitle'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Sdata from '../components/Destinations/Sdata'
import EmptyFile from '../common/EmptyFile/EmptyFile'

const SinglePage = () => {
    const { id } = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        
        let item = Sdata.find((item) => item.id === parseInt(id))

        if(item){
            setItem(item)
        }
    }, [id])
    return (
    <>
        <HeadTitle />

        {item ? (
        <section className='single-page top'>
            <div className='container'>
            <Link to='/destination' className="primary-btn back">
                <i className='fas fa-long-arrow-alt-left'></i> Go back
            </Link>

            <article className='content flex'>
                <div className='main-content'>
                    <img src={item.image}/>
                    <p>{item.desc}</p>
                    <p>{item.desc}</p>
                    <div className='para flex_space'>
                        <p>{item.sidepara}</p>
                        <p>{item.sidepara}</p>
                    </div>
                    <h1>What is the {item.title} City?</h1>
                    <p>{item.desc}</p>
                    <div className='image grid1'>
                        <img src={item.paraImage_one}></img>
                        <img src={item.paraImage_two}></img>
                    </div>
                    <p>{item.desc}</p>
                </div>    

                <div className='side-content'>
                    <div className='box'>
                    <h2>How can we Help you?</h2>
                    <ip>{item.sidepara}</ip><p></p>
                    <button className='outline-btn'>
                        <i className='fa fa-phone-alt'></i>
                        Contact Us
                    </button>
                    </div>
                        <div className='box2'>
                        <ip>{item.sidepara}</ip>
                        </div>

                </div>
            </article>
            </div>
        </section>
        ) : (
            <EmptyFile />
        )}
    </>
    )
}

export default SinglePage
