import React, { useEffect, useState } from "react";
import { CloudinaryContext, Image } from 'cloudinary-react';
import { listHotel } from '../api/HotelApi';
import "../components/HotelComponent.css"

export const HotelComponent = () => {
  const [hotels, setHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const result = await listHotel();
        if (Array.isArray(result)) {
          setHotels(result);
        } else {
          console.error('Los datos devueltos no son un array:', result);
        }
      } catch (error) {
        console.error('Error fetching hotel:', error);
      }
    };
    fetchHotel();
  }, []);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredHotel = hotels.filter((hotel) => {
    const { namehotel, address } = hotel;
    const searchQuery = searchTerm.toLowerCase();
    return namehotel.toLowerCase().includes(searchQuery) || address.toLowerCase().includes(searchQuery);
  });

  const renderHotelCards = () => {
    const images = [
      "https://res.cloudinary.com/dky3bispk/image/upload/v1684839448/Hoteles/blog-3_jqkmxv.jpg",
      "https://res.cloudinary.com/dky3bispk/image/upload/v1684839472/Hoteles/slider-2_jqpuqv.jpg",
      "https://res.cloudinary.com/dky3bispk/image/upload/v1684839459/Hoteles/Fondo1_iohrcs.jpg",
      "https://res.cloudinary.com/dky3bispk/image/upload/v1684839453/Hoteles/blog-4_seddre.jpg",
      "https://res.cloudinary.com/dky3bispk/image/upload/v1684839485/Hoteles/popular3_nfn20q.jpg",
      "https://res.cloudinary.com/dky3bispk/image/upload/v1684846352/Hoteles/gallery-4_gnoaul.jpg",
      "https://res.cloudinary.com/dky3bispk/image/upload/v1684846409/Hoteles/gallery-1_alh7se.jpg",
    ];
  
    return filteredHotel.map((hotel, index) => (
      <div className="col-md-4 mb-4 animate_animated animate_fadeIn" key={hotel._id}>
        <div className="card">
          <div className="card-body">
            <CloudinaryContext cloudName="dky3bispk">
              <Image publicId={images[index]} width="300" height="200" crop="fill" className="cloudinary-image" />
            </CloudinaryContext>
            <p className="card-text">Nombre Hotel: {hotel.namehotel}</p>
            <p className="card-text">Dirección: {hotel.address}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4">Lista de Hoteles</h1>
          <p className="lead">Aquí encontrarás una selección de los mejores hoteles para tu estadía.</p>
          <hr className="my-4"/>
          <div className="input-group mb-4">
            <input 
              type="text"
              className="form-control"
              placeholder="Buscar por hotel o dirección"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
            <div className="input-group-append">
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-4">
          {renderHotelCards()}
        </div>
      </div>
    </>
  );
};

export default HotelComponent;
