import React, { Component } from 'react';

import SortBy from './SortBy';
import PrimaryReleaseYear from './PrimaryReleaseYear';
import Genres from './Genres';

export default class Filters extends Component {
  render() {
    const {
      filters: { sort_by, primary_release_year, with_genres },
      page,
      total_pages,
      onChangeFilters,
      onChangePagination,
    } = this.props;

    return (
      <form className='mb-3'>
        <SortBy value={sort_by} onChangeFilters={onChangeFilters} />
        <Genres with_genres={with_genres} onChangeFilters={onChangeFilters} />
        <PrimaryReleaseYear
          page={page}
          total_pages={total_pages}
          onChangePagination={onChangePagination}
          onChangeFilters={onChangeFilters}
          primary_release_year={primary_release_year}
        />
      </form>
    );
  }
}
