import './search.scss';
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Card';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';


function Search(){
    const [videos, setVideos] = useState([]);
    const query = useLocation().search;
    const [queryError, setQueryError] = useState('') 
    const [queryIsLoading, setQueryIsLoading] = useState(true) 
    
    useEffect(()=>{
        const fetchVideos = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API}/videos/search${query}`);
                setVideos(res.data);
                setQueryIsLoading(false)
            } catch (err) {
                setQueryError(err);
                setQueryIsLoading(false)
            }
        }
        fetchVideos();
    }, [query]);

    if(queryError) return 'An error has occurred';
    if(queryIsLoading) return 'Loading...';

    return(
        <section className='results'>
            <div className="filters">
                <TuneOutlinedIcon />
                <span>Filtros</span>
            </div>
                <hr />
            <div className="results__wrapper">
                {videos.map((video)=>(
                    <Card key={video._id} video={video} type={'large'}/>
                ))}
            </div> 
        </section>
    )
}

export default Search;