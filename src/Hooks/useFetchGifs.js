import { useState, useEffect } from 'react';
import { getEndPoint } from '../helpers/getGifs';

export const useFetchGifs = (categoria) =>{
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        getEndPoint(categoria)
        .then(img =>{
            setState({
                data:img,
                loading: false
            });
        })
    }, [ categoria ])

    return state; //{data:[], loading: true};
}