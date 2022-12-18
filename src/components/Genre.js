import React from 'react'

function Genre({genre, setSelectedGenre}) {

    return (
        <div className='row' style={{ cursor: 'pointer' }}>
            {genre.map((item, id) => (    
                <div className="d-none d-md-block col-md-3 my-3" onClick={() => setSelectedGenre(item)} >   
                    <div className="card" >                         
                        <div className="  card-body">
                            <p className="card-text">{item}</p>                     
                        </div>    
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Genre