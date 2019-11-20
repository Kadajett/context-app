import React from "react";
import { PosterPath } from "../contextConstants";
import LazyLoad from "react-lazyload";

const renderGenres = genres => genres.map(genre => `${genre.name}, `);

export default function MovieListing({ movie, genres }) {
  return (
    <div className="movieListing">
    {/* <button>Like</button> */}
    <LazyLoad once offset={100} width={185} height={278} overflow>
        <img src={PosterPath + movie.poster_path} alt="" />
    </LazyLoad>
      

      <h3 className="movieTitle">{movie.title}</h3>
      <span className="movieGenres">{renderGenres(genres)}</span>
    </div>
  );
}
