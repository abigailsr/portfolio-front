import React from 'react'
import calculadora from '../images/calculadorareact.PNG';
import petshop from '../images/petshop.PNG';
import taskapp from '../images/taskapp.PNG';
import counterclicks from '../images/counterclicks.PNG';

const Portfolio = () => {


  const portafolios = [
    {
      id: 1,
      src: petshop,
      href: 'https://github.com/abigailsr/Idea-SousaRey'
      
    },
    {
      id: 2,
      src: calculadora,
      href: 'https://github.com/abigailsr/calculator-react'
      
    },
    {
      id: 3,
      src: taskapp,
      href: 'https://github.com/abigailsr/Aplicacion-Tareas'
      
    },
    {
      id: 4,
      src: counterclicks,
      href: 'https://github.com/abigailsr/counter-clicks-react-app'
      
    },
  ]

  
  return (
    <div name='portafolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen' >
      <div className='max-w-screen-lg p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

      <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

        {
          portafolios.map(({id,src,href}) =>(

            
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt='petshop' className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center' >
                <button className='w-1/2 px-6 py-3 m-4 duratiom-200 hover:scale-105'> <a href={href}>Code</a></button>
                </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  );
};

export default Portfolio