import useGenres from '../hooks/useGenres'


const GenreList = () => {
    
    const {dataArray} = useGenres();

    return (
     <ul>
        {dataArray.map(data => <li key={data.id}>{data.name}</li>)}

     </ul>
   )
 }
 
 export default GenreList