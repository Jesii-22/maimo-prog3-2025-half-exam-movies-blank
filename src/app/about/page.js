'use client'; 

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HOBBIES = [
  { name: 'Música', percentage: 70 },
  { name: 'Películas', percentage: 45 },
  { name: 'Viajar', percentage: 60 },
];

export default function AboutPage() {
  
  const [showImage, setShowImage] = useState(false);

  const toggleImage = () => {
    
    setShowImage(!showImage); 
  };

  return (
    <main className="container mx-auto p-8">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-indigo-700 border-b pb-2">
          Alumno: Jesica Marzeniuk
        </h1>
      </header>

      <section className="flex flex-col md:flex-row gap-10">
        
        <article className="md:w-2/3 space-y-6">
          
          <h2 className="text-2xl font-bold">Acerca de Mí</h2>
          <p className="text-lg text-gray-700">
            Soy estudiante de Licenciatura en Tecnología Multimedial apasionada por el diseño, la creación de experiencias digitales y el desarrollo web. Me gusta combinar creatividad con funcionalidad, trabajar en proyectos reales y aprender constantemente sobre UX, interfaces, branding y desarrollo frontend. También disfruto los proyectos vinculados al arte, la moda, la estética y los sistemas gamificados.
          </p>
          
          <h2 className="text-2xl font-bold pt-4">Mis Hobbies</h2>
          
             
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {HOBBIES.map((hobby, index) => (
              <li 
                key={index} 
                className="text-lg text-gray-700 p-2 bg-gray-100 rounded-md shadow-sm border-l-4 border-yellow-500"
              >
               
                {hobby.name}: {hobby.percentage}%
              </li>
            ))}
          </ul>

          

          <h2 className="text-2xl font-bold pt-4">Redes Sociales</h2>
          <div className='space-y-2'>
            <Link 
              href="https://www.linkedin.com/in/jesica-marzeniuk/" 
              target="_blank" 
              className="text-blue-600 hover:text-blue-800 font-semibold block"
            >
              LinkedIn: jesicamarzeniuk
            </Link>
            <Link 
              href="https://github.com/Jesii-22" 
              target="_blank" 
              className="text-blue-600 hover:text-blue-800 font-semibold block"
            >
              GitHub: Jesii-22
            </Link>
          </div>
        </article>

        <aside className="md:w-1/3 flex flex-col items-center p-6 bg-white rounded-lg shadow-xl h-fit">
          
          {!showImage ? (
            <button
              onClick={toggleImage}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700"
            >
              Ver Imagen
            </button>
          ) : (
            <div className="w-full relative h-64">
            
              <Image 
               
                src="/artulenguita.jpg" 
                alt="Foto del Alumno"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
              <button
                onClick={toggleImage}
                className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600"
              >
                Ocultar Imagen
              </button>
            </div>
          )}
        </aside>
      </section>
    </main>
  );
}