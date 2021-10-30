import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { onClick, title, disabled } = this.props;
    return (
      <button type='button' className='btn btn-light' onClick={onClick} disabled={disabled}>
        {title}
      </button>
    );
  }
}
