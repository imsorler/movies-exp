import React, { Component } from 'react';
import { AppContext } from '../App';
import { API_URL, API_KEY_3 } from '../../api/api';

import UICheckbox from '../UIComponents/UICheckbox';

class Genres extends Component {
  constructor() {
    super();

    this.state = {
      allGeners: [],
    };
  }

  getGeners = async () => {
    const link = `${API_URL}/genre/movie/list?api_key=${API_KEY_3}&language=ru-RU`;

    await fetch(link)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          allGeners: data,
        });
      });
  };

  componentDidMount() {
    this.getGeners();
  }

  render() {
    const { allGeners } = this.state;
    let genersNames = [];

    for (let gener in allGeners) {
      allGeners[gener].map((genre) => {
        return genersNames.push(genre);
      });
    }

    return (
      <div className='form-check'>
        {genersNames.map(({ id, name }) => (
          <UICheckbox key={id} id={id} name={name} />
        ))}
      </div>
    );
  }
}

export default () => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return <Genres allGeners={context} />;
      }}
    </AppContext.Consumer>
  );
};
