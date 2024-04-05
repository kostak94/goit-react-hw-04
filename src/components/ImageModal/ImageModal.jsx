import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    height: "600px",
    position: "relative",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.8)",
  },
};

Modal.setAppElement("#root");

const ImageModal = ({ src, onClose, alt, likes }) => {
  return (
    <Modal style={customStyles} isOpen={Boolean(src)} onRequestClose={onClose}>
      <img className={css.img} src={src} alt={alt} />
      <span className={css.span}>Likes: {likes}</span>
    </Modal>
  );
};

export default ImageModal;
