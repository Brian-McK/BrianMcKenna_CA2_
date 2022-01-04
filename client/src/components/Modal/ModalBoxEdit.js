import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import EditPlotForm from '../Modal/EditPlotForm';
import '../../scss/styles.scss';

export default class ModalBoxEdit extends Component {
  
  constructor(props) 
  {
      super(props)
      this.state = {
          show: false
      }
  }

  onSubmitPlot = (plot) => {
    console.log("ModalBoxEdit component got: " + plot)
  }

  handleClose = () => this.setState({show: false});
  handleShow = () => this.setState({show: true});

  render()
  {

    const readOnly = " (Read-only)";
    const labelMovieId = "IMDB Movie ID";
    const labelDirector = "Movie Director";

    return (
      <>
        <FontAwesomeIcon 
          icon={faEdit}
          className="faIconsHover"
          size="lg" 
          color="orange"
          onClick={this.handleShow}
        />

        <Modal 
          show={this.state.show} 
          onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit: {this.props.movieTitle}</Modal.Title>
            </Modal.Header>
        <Modal.Body>

          <EditPlotForm 
          labelMovieId={`${labelMovieId + readOnly}`}
          defaultValueMovieId={this.props.movieId.toUpperCase()}

          labelForPlot={this.props.movieTitle}
          defaultValuePlot={this.props.moviePlot}
          onSubmitPlot={plot => this.props.onSubmitPlot(plot)}
          closeWithSubmit={this.handleClose}

          labelDirector={`${labelDirector + readOnly}`}
          defaultValueLabelDirector={this.props.director}
          />

        </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" 
            onClick={this.handleClose} >
            Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}