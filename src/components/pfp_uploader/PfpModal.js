import { React } from "react";
import { Modal, 
         ModalBody } from 'react-bootstrap'
import PfpCropper from './PfpCropper'         

const PfpModal = ({ modal, toggleModal, updatePFP }) => {

    return (
        <Modal className='my-auto' show={ modal } centered >
            <ModalBody className='row text-end'>
                <PfpCropper toggleModal={toggleModal} updatePFP={updatePFP} />
            </ModalBody>
        </Modal>
    )
}

export default PfpModal