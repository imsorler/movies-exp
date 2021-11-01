import React, { Component } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import LoginForm from './LoginForm';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
    };
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { updateUser, updateSessionId } = this.props;
    return (
      <div>
        <button className='btn btn-success' type='button' onClick={this.toggleModal}>
          Войти
        </button>
        <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
          <ModalBody>
            <LoginForm updateUser={updateUser} updateSessionId={updateSessionId} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
