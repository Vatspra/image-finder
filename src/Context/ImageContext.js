// create context

import { createContext, useEffect, useState } from "react";
import axios from 'axios';



const getImage = (q) => {
    const API_KEY = '';
    const url = `https://pixabay.com/api/?q=${q}&key=${API_KEY}&image_type=photo`;
    return axios.get(url)
}


export const ImageContext = createContext([]);

const ImageProvider = ({ children }) => {
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        getImage('dog').then((res) => {
            const images = res.data.hits;
            setImageList(images)
        })
    }, []);


    const searchImage = (val) => {
        getImage(val).then((res) => {
            const images = res.data.hits;
            setImageList(images)
        })
    }
    return (
        <ImageContext.Provider value={{imageList, searchImage}}>
            {children}
        </ImageContext.Provider>
    )
}



export default ImageProvider;


// const ImageReducer = (state, action) => {

//     if (action.type === 'SEARCH') {

//         return {
//             ...state,
//             transactions: state.transactions.filter((tx) => tx.id !== action.payload)
//         }
//     }

//     if (action.type === 'ADD') {

//         return {
//             ...state,
//             transactions: [{
//                 id: Math.random().toString(),
//                 ...action.payload
//             }, ...state.transactions]
//         }
//     }
//     if (action.type) {
//         return state
//     }

// }



