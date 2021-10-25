import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, overview, vote_average}) => (
    <div className="col-4 col-md-2">
        <div class="card overflow-hidden" style={{height: '350px'}}>
            <img className="card-img-top" src={IMG_API + poster_path} style={{maxWidth: '100%'}} alt="Item Movie" />
            <div class="card-body d-flex justify-content-between align-items">       
                <p class="card-title">{title}</p>
                <p class="card-text"><mark>{vote_average}</mark></p>
            </div>
        </div>        
    </div>
)

export default Movie;