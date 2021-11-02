import React, { Component } from 'react';
import Cookies from 'universal-cookie';

import Header from './Header/Header';
import Filters from './Filters/Filters';
import MoviesList from './Movies/MoviesList';

import MoviesPages from '../pages/MoviesPage/MoviesPages';

import { fetchApi } from '../utils/functions';
import { API_URL, API_KEY_3 } from '../api/api';

const cookies = new Cookies();

export const AppContext = React.createContext();

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
      session_id: null,
      filters: {
        sort_by: 'popularity.desc',
        primary_release_year: '2019',
        with_geners: [1],
      },
      page: 1,
      total_pages: 500,
    };
  }

  updateUser = (user) => {
    this.setState({
      user,
    });
  };

  updateSessionId = (session_id) => {
    cookies.set('session_id', session_id, {
      path: '/',
      maxAge: 2592000,
    });
    this.setState({
      session_id,
    });
  };

  componentDidMount() {
    const session_id = cookies.get('session_id');
    if (session_id) {
      fetchApi(`${API_URL}/account?api_key=${API_KEY_3}&session_id=${session_id}`).then((user) => {
        this.updateUser(user);
      });
    }
  }

  render() {
    const { user } = this.state;

    return (
      <>
        <AppContext.Provider value={this.state.filters.with_geners}>
          <Header user={user} updateUser={this.updateUser} updateSessionId={this.updateSessionId} />
          <MoviesPages />
        </AppContext.Provider>
      </>
    );
  }
}
