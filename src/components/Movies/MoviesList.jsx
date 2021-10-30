import React, { Component } from 'react';
import { API_URL, API_KEY_3 } from '../../api/api';

import MoviesItem from './MoviesItem';

export default class MoviesList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      releases_on_page: {},
    };
  }

  getMovies = (filters, page) => {
    const { sort_by } = filters;
    const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-RU&sort_by=${sort_by}&page=${page}`;

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

  getReleaseDate = () => {
    const { movies } = this.state;
    let date = [];
    let uniqueDate = [];

    movies.forEach(({ release_date }) => {
      date.push(release_date.substring(0, 4));
    });

    const res = date.filter((dates, index, arr) => {
      return arr.indexOf(dates) === index;
    });

    uniqueDate.push(res);
    return uniqueDate;
  };

  componentDidMount() {
    this.getMovies(this.props.filters, this.props.page);
  }

  componentDidUpdate(prevProps) {
    if (this.props.filters.sort_by !== prevProps.filters.sort_by) {
      this.props.onChangePagination(1);
      this.getMovies(this.props.filters, 1);
    }

    if (this.props.page !== prevProps.page) {
      this.getMovies(this.props.filters, this.props.page);
    }

    this.state.releases_on_page = this.getReleaseDate();
  }

  render() {
    const { movies } = this.state;

    return (
      <div className='row'>
        {movies &&
          movies.map((movie) => {
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
