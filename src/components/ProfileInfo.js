import { React } from "react";
import { Card, 
         CardTitle, 
         CardSubtitle, 
         CardBody, 
         Row,
         Col
       } from "reactstrap";
import default_pfp from '../images/default_pfp.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import '../components/ProfileInfo.css'


const ProfileInfo = ({ currUser, toggleForm, userTradeTotal }) => {


    return (
        <Card className='profile-card mx-auto border-0 col-12'>
            <CardBody className='text-start py-0 px-0 d-inline'>
                <Row>
                    <Col xs='auto'>            
                        <img src={currUser.pfp === '' ? default_pfp : currUser.pfp} 
                            alt={`${currUser.username} profile picture`}
                            className='col-2 my-3 mx-2 p-0'
                            style={{ borderRadius: '50%', height: '12.5rem', width: 'auto' }}
                        />            
                        <CardTitle className='h1'>
                            {currUser.username}
                        </CardTitle>
                    </Col>
                    <Col xs='auto'>
                        <FontAwesomeIcon 
                            icon={ faEdit } 
                            onClick={toggleForm}
                            className='edit-btn'
                        />
                    </Col>
                </Row>

                


                {/* {userTradeTotal ? (
                    <div className='my-1'>
                        <CardSubtitle className='h3'>
                            Total P&L: 
                        </CardSubtitle>
                        <CardSubtitle 
                            className={
                                userTradeTotal.toFixed(2) > 0 
                                ? `d-inline my-1 ms-2 text-success` 
                                : `d-inline h4 my-1 ms-2 text-danger`
                        }>
                            { `$${userTradeTotal.toFixed(2)}` } 
                        </CardSubtitle>
                    </div>
                ) : (
                    <CardSubtitle className='my-1 h5'>
                        Total P&L: $0.00
                    </CardSubtitle>
                )} */}


            </CardBody>
        </Card> 
    )
}

export default ProfileInfo