import React from 'react';
import { Link } from 'react-router-dom';

const StreamCard = ({ stream }) => {

  return (
    <Link to={`/movieDetails/${stream.id}`} >
      <div className="card bwm-card">
        <img
          className="card-img-top"
          src={"http://via.placeholder.com/350x250"}
          alt={stream.title} />
        <div className="card-body">
          <h6 className="movielanguage ">
            {stream.original_language}
          </h6>
          <p className="movietitle">{stream.title}</p>
        </div>
      </div>
    </Link>

  )
}

export default StreamCard;