import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteModal = (props) => {
    

    const handleClose = props.hClose;
    const handleShow = props.hShow;
    const show = props.state


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hey! Are you sure you want to delete this User?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Delete User
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
