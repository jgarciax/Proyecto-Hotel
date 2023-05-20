import axios from 'axios';
const URL = "http://localhost:3010/api/";

export const listHotel = async () => {
    try{
        const {
            data: { Hotel }} = await axios.get(`${URL}read-hotel`);
        console.log(Hotel);
        return Hotel;
    }catch({ response: { data } } ) {
        return data.message;
    }
};