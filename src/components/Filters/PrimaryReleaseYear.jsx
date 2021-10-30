import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Filters/Button';
import UISelect from '../UIComponents/UISelect';

export default class PrimaryReleaseYear extends Component {
  static defaultProps = {
    options: [
      { label: '2018', value: '2018' },
      { label: '2017', value: '2017' },
      { label: '2020', value: '2020' },
      { label: '2021', value: '2021' },
    ],
  };

  render() {
    const {
      page,
      primary_release_year,
      onChangePagination,
      onChangeFilters,
      options,
      total_pages,
    } = this.props;

    return (
      <>
        <UISelect
          id='primary_release_year'
          name='primary_release_year'
          value={primary_release_year}
          onChange={onChangeFilters}
          labelText='Год релиза'>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </UISelect>
        <Button
          page={page}
          title='Назад'
          onClick={onChangePagination.bind(null, page - 1)}
          disabled={page === 1}
        />
        <Button
          page={page}
          title='Вперед'
          onClick={onChangePagination.bind(null, page + 1)}
          disabled={page === total_pages}
        />
      </>
    );
  }
}
