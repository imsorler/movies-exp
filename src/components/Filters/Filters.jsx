import React from 'react';

export default class Filters extends React.Component {
  render() {
    const {
      filters: { sort_by },
      onChangeFilters,
    } = this.props;

    return (
      <form className='mb-3'>
        <div className='form-group'>
          <label htmlFor='sort_by'>Сортировать по:</label>
          <select
            className='from-control'
            value={sort_by}
            onChange={onChangeFilters}
            id='sort_by'
            name='sort_by'>
            <option value='popularity.desc'>Популярное по убыванию</option>
            <option value='popularity.asc'>Популярное по возрастанию</option>
            <option value='vote_average.desc'>Рейтинг по убыванию</option>
            <option value='vote_average.asc'>Рейтинг по возрастанию</option>
          </select>
        </div>
      </form>
    );
  }
}
