import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LibroItem from "./LibroItem";

const Plus = (props) => {
  const [loading, setLoading] = useState(false);
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const cargarLibros = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/plus");
      setLibros(response.data);
      setLoading(false);
    };
    cargarLibros();
  }, []);

  return (
    <div className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'> 
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
      <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Plus</p>
      <p  className='py-6'>Recommend me a book</p>
      </div>
      {loading ? (
        <p>loading...</p>
      ) : (
        libros.map((item) => (
          <LibroItem
            key={item.id}
            title={item.title}
            gender={item.gender}
            author={item.author}
            image={item.image}
          />
        ))
      )}
      </div>
    </div>
  );
};

export default Plus;
