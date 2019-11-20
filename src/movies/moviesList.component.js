import React, {useContext} from "react";
import {Movies, Genres} from './movies.context';
import MovieListing from './movieListing.component';

const parseGenres = (ids, genres) => {
    let result = [];
    if(ids && ids.map && genres && genres.map){
        result = ids.map((id) => {
            return genres.filter((genre) => {
                if(genre.id === id)
                    return true;
                return false;
            })
        })
    }
    // this is a hack cause of how I did the parsing. Don't even care to think about it.
    return result.flat();
}

const renderMovies = (movies, genres) => {
    
    if(movies && movies.map) {
      return movies.map(result => {
        return <MovieListing movie={result} key={result.title} genres={parseGenres(result.genre_ids, genres)} />;
      })
    }
  };

// Make sure to deconstruct this info
export default function MovieList() {
    const genres = useContext(Genres);

    return (
        <Movies.Consumer>

          {movies => {
            return renderMovies(movies, genres);
          }}
        </Movies.Consumer>
    )
}
