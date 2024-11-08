import { React } from "react";
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import PfpModal from './PfpModal.js'
import './PfpUploader.css'

const PfpUploader = ({ toggleModal, modal, userPFP, updatePFP }) => {

    return (
        <div className='mt-2'>
            {userPFP.current === '' ? (
                <Button onClick={ toggleModal } className='col-12'>
                    Select profile picture
                </Button>
            ) : (
                <div className='img-container'>
                    <div className='img-cover rounded-circle' onClick={ toggleModal }>
                        <FontAwesomeIcon icon={ faEdit } size='3x' />
                        
                    </div>
                    <img
                        src={ userPFP.current }
                        alt='User Profile Picture'
                        className='pfp-img rounded-circle'
                        height='150px'
                        width='150px'
                    />  
                </div>
            )}
            <PfpModal 
                modal={ modal } 
                toggleModal={ toggleModal } 
                userPFP={ userPFP } 
                updatePFP={ updatePFP } 
            />            
        </div>
    )
}

export default PfpUploader