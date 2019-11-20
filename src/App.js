import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Movies, Genres } from "./movies/movies.context";
import MovieList from "./movies/moviesList.component";
import {
  getTrendingMovies,
  getNewestMovies,
  getNowPlayingMovies,
  getSearchMovies,
  getGenres
} from "./movies/moviesApi";
import ErrorBoundary from "./ErrorBoundary.component";
import SideBar from "./sidebar/sidebar.component";
import Search from "./search/search.component";
import { SidebarProvider } from "./sidebar/sidebar.context";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState();
  const [genres, setGenres] = useState();
  const [pageSelection, setpageSelection] = useState("trending");
  const pages = [
    {
      copy: "Trending",
      path: "/trending"
    },
    {
      copy: "Search",
      path: "/search"
    },
    {
      copy: "Now Playing",
      path: "/nowplaying"
    },
    {
      copy: "Newest",
      path: "/newest"
    }
  ];

  useEffect(() => {
    getGenres().then(result => {
      setGenres(result.genres);
    });
  }, []);

  useEffect(() => {
  }, [pageSelection]);

  return (
    <div className="container">
      <ErrorBoundary>
        <Router>
          <SidebarProvider>
            <SideBar buttons={pages} />
            <Search />
            <Switch>
              <Route path="/trending">
                <Movies.Provider value={movies}>
                  <Genres.Provider value={genres}>
                    <MovieList />
                  </Genres.Provider>
                </Movies.Provider>
              </Route>
              <Route path="/nowplaying">
                <Movies.Provider value={movies}>
                  <Genres.Provider value={genres}>
                    <MovieList />
                  </Genres.Provider>
                </Movies.Provider>
              </Route>
              <Route path="/newest">
                <Movies.Provider value={movies}>
                  <Genres.Provider value={genres}>
                    <MovieList />
                  </Genres.Provider>
                </Movies.Provider>
              </Route>
              <Route path="/search">
                <Movies.Provider value={movies}>
                  <Genres.Provider value={genres}>
                    <MovieList />
                  </Genres.Provider>
                </Movies.Provider>
              </Route>
            </Switch>
          </SidebarProvider>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
