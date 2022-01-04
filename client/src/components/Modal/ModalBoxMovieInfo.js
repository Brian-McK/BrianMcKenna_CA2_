import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default class ModalBoxMovieInfo extends Component {
  
  constructor(props) 
  {
      super(props)
      this.state = {
          show: false
      }
  }

  render()
  {
    const handleClose = () => this.setState({show: false});
    const handleShow = () => this.setState({show: true});
  
    return (
      <>
      <FontAwesomeIcon 
        icon={faInfoCircle}
        className="faIconsHover"
        size="lg" 
        color="#007bff"
        onClick={handleShow}
        />

        <Modal show={this.state.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Title: {this.props.movieTitle}</Modal.Title>
          </Modal.Header>
        <Modal.Body>
          <h3>Plot:</h3>
          <p>{this.props.moviePlot}</p>
          <h5>Director: {this.props.director}</h5>
          <h6>IMDB ID: {this.props.movieId.toUpperCase()}</h6>
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