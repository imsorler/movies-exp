import React, { Component } from 'react';

export default class MoviesItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <div className='card' style={{ width: '100%' }}>
        <img
          className='card-img-top card-img--height'
          src={`https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`}
          alt='poster'
        />
        <div className='card-body'>
          <h6 className='card-title'>{item.title}</h6>
          <div className='card-text'>Рейтинг: {item.vote_average}</div>
          <div className='card-text'>Релиз: {item.release_date}</div>
        </div>
      </div>
    );
  }
}
