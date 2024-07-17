import Modal from 'react-modal';
import css from './BasicModal.module.css';



Modal.setAppElement('#root');

export const BasicModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      overlayClassName={css.overlay}
    >

      {children}
    </Modal>
  );
};


export default BasicModal;
