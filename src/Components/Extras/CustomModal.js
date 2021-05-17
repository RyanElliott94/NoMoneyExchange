import PropTypes from "prop-types";
import "./extras.scss";
import { AiFillCloseCircle } from "react-icons/ai";

const CustomModal = ({
    showModal,
    closeModal,
    content
}) => {

    return showModal ? (
        <div className="custom-modal-main">
            <div className="custom-modal-inner">
                <AiFillCloseCircle fontSize="2rem" onClick={closeModal} />
                <div className="custom-modal-title">
                    <p>New Message</p>
                </div>

                <div className="custom-modal-content">
                    {content}
                </div>
            </div>
           
        </div>
    ) : null
}

CustomModal.defaultProps = {
    showModal: false
}

CustomModal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired
}

export default CustomModal;