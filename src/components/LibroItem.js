import React from 'react';

const LibroItem = (props) => {
 
  const {title, gender, author, image} =props;

  return (
      <div div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0  border-4' name="plus">
        <p>{title}</p>
        <p>{gender}</p>
        <p>{author}</p>
        <img src={image} alt="the-images"/>
      </div>
  )
}

export default LibroItem;