import React, { Component } from 'react';
import { API_URL, API_KEY_3 } from '../../api/api';

import MoviesItem from './MoviesItem';

export default class MoviesList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  getMovies = (filtres) => {
    const { sort_by } = filtres;
    const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-RU&sort_by=${sort_by}`;

    fetch(link)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          movies: data.results,
        });
      });
  };

  componentDidMount() {
    this.getMovies(this.props.filters);
  }

  componentDidUpdate(prevProps) {
    // if (this.props.filtres.sort_by !== prevProps.filters.sort_by) {
    //   this.getMovies(this.props.filtres);
    // }
  }

  render() {
    const { movies } = this.state;
    return (
      <div className='row'>
        {movies.map((movie) => {
          return (
            <div key={movie.id} className='col-6 mb-4'>
              <MoviesItem item={movie} />
            </div>
          );
        })}
      </div>
    );
  }
}
