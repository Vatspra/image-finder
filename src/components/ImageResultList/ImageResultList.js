import React, { useContext } from 'react'
import { ImageContext } from '../../Context/ImageContext'
import ImageCard from '../ImageCard/ImageCard'

export default function ImageResultList() {
  const {imageList} = useContext(ImageContext);
  return (
   <div className='grid grid-cols-6'>{
     imageList.map((data, index) =>
      <ImageCard url={data.webformatURL} key={index} />
    )}
   </div>
   
  )
}