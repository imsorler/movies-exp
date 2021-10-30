import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SortBy extends Component {
  static propTypes = {
    sort_by: PropTypes.string,
    onChangeFilters: PropTypes.func.isRequired,
  };

  static defaultProps = {
    options: [
      {
        label: 'Популярное по убыванию',
        value: 'popularity.desc',
      },
      {
        label: 'Популярное по возрастанию',
        value: 'popularity.asc',
      },
      {
        label: 'Рейтинг по убыванию',
        value: 'vote_average.desc',
      },
      {
        label: 'Рейтинг по возрастанию',
        value: 'vote_average.asc',
      },
    ],
  };

  render() {
    const { sort_by, onChangeFilters, options } = this.props;

    return (
      <div className='form-group'>
        <label htmlFor='sort_by'>Сортировать по:</label>
        <select
          id='sort_by'
          name='sort_by'
          className='from-control'
          value={sort_by}
          onChange={onChangeFilters}>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
