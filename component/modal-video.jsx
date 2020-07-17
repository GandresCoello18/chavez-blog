import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalVideo = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Video de youtube
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ height: 500 }}>
        <iframe
          style={{ width: "100%", height: "100%" }}
          src="https://www.youtube.com/embed/qMgZ1N4wS6o"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalVideo;
