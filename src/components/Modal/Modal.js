import React from "react";
import Modal from "react-modal";
import "./Modal.css";
import Close from "../../assets/img/closeCircle.png";

const customStyles = {
  content: {
    top: "62%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "75%",
    width: "70%",
    borderRadius: "10px",
    backgroundColor: "var(--white)",
    zIndex: 1002,
  },
};

const CustomModal = ({ data, isOpen, closeModal }) => {
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  const onClose = () => {
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={onClose}
      style={customStyles}
    >
      <div className="closeButton">
        <img
          onClick={() => onClose()}
          alt="close"
          height={30}
          width={30}
          src={Close}
          style={{ alignSelf: "flex-end" }}
        />
      </div>

      <div
        className="innerHtml"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
    </Modal>
  );
};

export default CustomModal;
