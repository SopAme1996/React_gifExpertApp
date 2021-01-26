import React from 'react';
import { useFetchGifs } from '../Hooks/useFetchGifs';
import { GfGridItem } from './GfGridItem';
import PropTypes from 'prop-types'


export const RestApi = ({ categoria }) => {

    const {data:imagenes, loading}= useFetchGifs(categoria);

    return (
        <>
        <h3 className='animate__animated animate__fadeIn titulo'>{categoria}</h3>
        <hr className="line"/>
        <div className="animate__animated animate__backInLeft card-grid">

        {loading && <div className='containerLoading'><p>Loading....</p><div className='laoding'></div></div>}
        {
            imagenes.map(img => {
                return(
               <GfGridItem
                   key={img.id}
                   {...img}
              />
              )
            })
                }
        </div>
        </>
    )
}

RestApi.propTypes = {
categoria: PropTypes.string.isRequired
}