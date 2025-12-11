import Card from '@/app/components/Card';

export default function MoviesGrid({ movies, loading }) {
  if (loading) {
      return <div className='text-center text-xl mt-10'>Cargando grilla...</div>;
  }
  
  
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'> 
      {
        // 2. Borrar este comentario y completar el código para mostrar las películas
        movies.map((movie) => (
            
            <Card key={movie.id} movie={movie} /> 
        ))
      }
    </div>
  );
}