import React, { useState } from "react"
import Dcard from "./Dcard"
//import "../gallery/Gallery.css"
import "./Destinations.css"
import Sdata from "./Sdata"

const AllItem = () => {
  const [items, setIems] = useState(Sdata)
  return (
    <>
      <section className='gallery desi mtop'>
        <div className='container'>
          <div className='content grid'>
            {items.map((item) => {
              return <Dcard key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllItem
