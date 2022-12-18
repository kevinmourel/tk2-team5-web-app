import React from 'react'
import { Link } from "react-router-dom";

function Film({film}) {
    return (
        <div className='row'>
            {film.map((item, id) => (
                
                    <div className="col-12 col-md-4 mb-3" key={id}>
                        <Link to={`/detail/${item.id}`} style={{ textDecoration: 'none' }}>
                            <div className="card" >                         
                                <div class=" row card-body">
                                    <div className="col-6">
                                        <h5 class="card-title text-dark">{item.title}</h5>
                                        <p class="card-text text-dark" >{`${item.description.substring(0, 80)}...`}</p>
                                    </div>
                                    <img className="col-6 img-card" src={item.image} alt={item.title}/>                               
                                </div>    
                            </div>
                        </Link>
                    </div>
              
                ))}
        </div>
    )
}

export default Film