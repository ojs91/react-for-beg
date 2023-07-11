import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
  const [det, setDet] = useState([]);
  const {id} = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDet(json.data.movie);
  })
  console.log(det)
  useEffect(()=>{
    getMovie();
  }, []);

  if (det.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    
    <div className="detail-wrap">
      <h1 className="detail-title">{det.title}</h1>
      <div className="thumb-img">
        <img src={det.medium_cover_image} alt="" />
      </div>
      
      <div>
        <ul className="detail-genres-list">
          {det.genres.map(g => {
            return <li 
              className="detail-genres-item" key={g}
              style={{listStyle:'none', fontWeight:'bold'}}
            >#{g}</li>
          })}
        </ul>
      </div>
      <div className="detail-desc">
        <p>{det.description_full}</p>
      </div>
    </div>
  )
  
}
export default Detail;