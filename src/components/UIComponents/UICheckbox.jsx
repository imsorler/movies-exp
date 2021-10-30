import React, { Component } from 'react';

export default class UICheckbox extends Component {
  render() {
    const { id, name } = this.props;
    return (
      <>
        <input className='form-check-input' type='checkbox' value='' id={id} />
        <label className='form-check-label' htmlFor={id}>
          {name}
        </label>
        <br />
      </>
    );
  }
}
