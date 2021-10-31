import React, { Component } from 'react';
import { API_URL, API_KEY_3 } from '../../../api/api';

export default class Login extends Component {
  sendPromises = () => {
    const fetchApi = (url, options = {}) => {
      return new Promise((resolve, reject) => {
        fetch(url, options)
          .then((resolve) => {
            if (resolve.status < 400) {
              return resolve.json();
            } else {
              throw resolve;
            }
          })
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            err.json().then((e) => {
              reject(e);
              console.log('Error_21: ', e);
            });
          });
      });
    };

    fetchApi(`${API_URL}/authentication/token/new?api_key=${API_KEY_3}`)
      .then((data) => {
        return fetchApi(
          `${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}`,
          {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              username: 'sublarki',
              password: 'neumann213',
              request_token: data.request_token,
            }),
          },
        );
      })
      .then((data) => {
        return fetchApi(`${API_URL}/authentication/session/new?api_key=${API_KEY_3}`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            request_token: data.request_token,
          }),
        });
      })
      .then((data) => {
        console.log('session data: ', data);
      })
      .catch((err) => {
        console.log('Error_30:', err);
      });
  };

  render() {
    return (
      <div>
        <button className='btn btn-success' type='button' onClick={this.sendPromises}>
          Login
        </button>
      </div>
    );
  }
}
