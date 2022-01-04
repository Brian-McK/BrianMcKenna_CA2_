import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddMovieForm from './AddMovieForm';
import '../../scss/styles.scss';

export default class AddMovieModalBox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  render() {
    const handleClose = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });

    return (
      <>
        <Button 
        variant="primary" 
        onClick={handleShow} 
        size="lg" 
        value="Add" 
        text={this.props.text}>
          {this.props.text}
        </Button>

        <Modal show={this.state.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.text}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <AddMovieForm 
            addMovie={movie => this.props.addMovie(movie)} 
            closeWithSubmit={handleClose} 
            />

          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}