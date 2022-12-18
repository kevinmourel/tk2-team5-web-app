import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'


function Detail() {

    const [detail, setDetail] = useState({})
    
    const {id} = useParams()

    useEffect(() => {
        fetch(`http://localhost:8000/data?id=${id}`)
            .then((res) => res.json())
            .then((res) => {
                setDetail(res[0])
            })
    }, [id]);

    return (
        <div className='container p-3'>
            <div className='row'>
                <div className='d-none d-md-block col-md-4'>
                    <img src={detail.image} className="img-fluid"/>                  
                </div>
                <div className='col-12 col-md-6'>
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${detail.trailer}`} className="react-player" controls/>
                    <h1 className='mt-3'>{detail.title}</h1>
                    <h5 className='text-muted'>{detail.genre}</h5>
                    <p>{detail.description}</p>
                </div>
            </div> 
        </div>
    )
}

export default Detail