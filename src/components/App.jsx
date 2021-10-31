import React from 'react';

import Header from './Header/Header';
import Filters from './Filters/Filters';
import MoviesList from './Movies/MoviesList';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filters: {
        sort_by: 'popularity.desc',
        primary_release_year: '2019',
        with_geners: [],
      },
      page: 1,
      total_pages: 500,
    };
  }

  onChangeFilters = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        [name]: value,
      },
    }));
  };

  onChangePagination = (page) => {
    this.setState({
      page,
      total_pages: this.state.total_pages,
    });
  };

  render() {
    const { filters, page, total_pages, with_genres } = this.state;
    const defaultRealise = this.state.filters.primary_release_year;

    return (
      <>
        <Header />
        <div className='container'>
          <div className='row mt-4'>
            <div className='col-4'>
              <div className='card' style={{ width: '100%' }}>
                <div className='card-body'>
                  <h3>Фильтры</h3>
                  <Filters
                    page={page}
                    filters={filters}
                    total_pages={total_pages}
                    with_genres={with_genres}
                    primary_release_year={defaultRealise}
                    onChangeFilters={this.onChangeFilters}
                    onChangePagination={this.onChangePagination}
                  />
                </div>
              </div>
            </div>
            <div className='col-8'>
              <MoviesList
                filters={filters}
                page={page}
                onChangePagination={this.onChangePagination}
                onChangeFilters={this.onChangeFilters}
                primary_release_year={filters.primary_release_year}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
