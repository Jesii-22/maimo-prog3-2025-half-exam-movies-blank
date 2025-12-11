import Image from 'next/image';
import Link from 'next/link';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';

export default function Card({movie}) {
    
    
    const imagePath = movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : '/placeholder.jpg';
    
    return (
        <Link href={`/movie/${movie.id}`}> 
            <div
            key={movie.id}
            
            className='col_3 flex flex-col justify-center items-center gap-3 bg-white p-4 rounded-lg text-black shadow-lg hover:shadow-xl transition'
            >
            
            <div className='relative w-full h-64'>
                <Image
                src={imagePath}
                width={500}
                height={750} 
                alt={movie.title || 'Póster de película'}
                className='rounded-lg object-cover w-full h-full'
                />
            </div>
            
            <h2 className='text-xl font-bold truncate'>{movie.title}</h2>
            
            <span
                className='bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition'
            >
                Ver detalle
            </span>
            </div>
        </Link>
    )
}