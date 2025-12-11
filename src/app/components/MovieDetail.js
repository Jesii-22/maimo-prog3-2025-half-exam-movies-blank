'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

const DETAIL_BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'eb7e3fd7272143562cec959061b5eb32';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';

export default function MovieDetail({ id }) {
  const [movieDetail, setMovieDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


 const fetchMovieDetail = async (id) => {
  
    if (!id) return setLoading(false); 
    
    const API_URL = `${DETAIL_BASE_URL}${id}?api_key=${API_KEY}`;
    
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(API_URL);
      setMovieDetail(response.data);
    } catch (err) {
      console.error("Error al obtener detalle:", err);
      setError("No se pudo cargar el detalle de la película.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetail(id); 
  }, [id]); 

 
  if (loading) return <p className='text-center text-xl mt-10'>Loading...</p>;
  if (error) return <p className='text-center text-red-500 text-xl mt-10'>Error: {error}</p>;
  if (!movieDetail.id) return <p className='text-center text-xl mt-10'>Película no encontrada.</p>;
  
 
  const imageUrl = movieDetail.poster_path ? `${IMAGE_BASE_URL}${movieDetail.poster_path}` : '/placeholder.jpg';

  return (
    <div className='grid grid-cols-1 md:grid-cols-12'> 
      
   
   <div className='md:col-span-6 flex justify-center p-10'>
        <div className='relative w-[500px] h-[500px]'>
          <Image
            src={imageUrl}
            fill={true}
            sizes="(max-width: 768px) 100vw, 50vw" 
            alt={movieDetail.title || 'Póster'}
            className='rounded-lg object-cover'
          />
        </div>
      </div>
     
     <div className='md:col-span-6 flex flex-col justify-center p-10'>
        
        <h1 className='text-2xl font-bold mb-8'>{movieDetail.title}</h1>
        <p className='mb-10'>{movieDetail.overview}</p>
        
        {/* 3. Listado de generos: Loop con map */}
        <h2 className='text-xl font-semibold mb-2'>Géneros:</h2>
        <ul className='generos mb-10 flex flex-wrap gap-2'>
          {movieDetail.genres && movieDetail.genres.map((genre) => (
            <li 
                key={genre.id} 
                className='bg-gray-200 text-black p-2 rounded-full text-sm font-medium'
            >
                {genre.name}
            </li>
          ))}
        </ul>

        <div className='flex gap-5'>
          <Link
            className='bg-white rounded-xl p-2 w-[150px] text-black text-center hover:bg-opacity-50'
            href='/' 
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}