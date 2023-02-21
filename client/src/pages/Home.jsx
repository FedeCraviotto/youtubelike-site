import React, { useEffect, useState } from 'react';
import './home.scss';
import Card from '../components/Card'
import axios from 'axios';

function Home({ type }){

    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(()=>{
        // useEffect no puede ser async, por eso creamos una funcion
        const fetchVideos = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API}/videos/${type}`);
                setVideos(res.data);
                setIsLoading(false);
            } catch (err) {
                setError(err.response.data);
            }
        }
        fetchVideos();
    },[type])

    if(error) return 'An error has occurred';
    if(isLoading) return 'Loading...';

    return(
        <div className="home">
            {videos?.map((item) => (
                <Card key={item._id} video={item} type='medium'/>
            ))}
        </div>
    )
}
export default Home;