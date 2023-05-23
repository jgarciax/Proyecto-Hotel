import React from 'react'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import GalleryData from "./GalleryData"
import "../Gallery/Gallery.css"
import Card from './Card'

const Gallery = () => {
    return (
    <>
        <HeadTitle />

        
        <section className='gallery top'>
            <div className='container grid'>
                {GalleryData.map((value) =>{
                    return <Card images={value.img} title={value.title} />
                })}
            </div>
        </section>
    </>
    )
}

export default Gallery