import React from 'react'
import Cards from './Cards'
import "./MostPopular.css"

const MostPopular = () => {
    return (
    <>
        <section className='popular top'>
            <div className='full_container'>
                <div className='heading'>
                <h1>Hotel más popular</h1>
                <div className='line'></div>
                </div>

                <div className='content'></div>
                <Cards />
            </div>
        </section>
    </>
  )
}

export default MostPopular
