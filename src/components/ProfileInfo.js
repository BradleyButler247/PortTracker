import { React, useState } from "react";
import { Card, 
         CardTitle, 
         CardSubtitle, 
         CardBody, 
         Row,
         Col,
         TabContent, 
         TabPane, 
         Nav, 
         NavItem, 
         NavLink
       } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'; 
import ProfileFavoritesTab from '../pages/ProfileFavoritesTab'
import ProfileTradesTab from '../pages/ProfileTradesTab'


import '../components/ProfileInfo.css'


const ProfileInfo = ({ currUser, 
                       toggleForm, 
                       userTradeTotal, 
                       addTrade, 
                       updateFavorite, 
                       tradesList 
                    }) => {


    const [currentActiveTab, setCurrentActiveTab] = useState('1'); 
    const toggleTabs = (tab) => { if (currentActiveTab !== tab) setCurrentActiveTab(tab) }; 



    return (
        <Card className='profile-card mx-auto border-0 col-12'>
            <CardBody className='text-start py-0 px-0 d-inline'>
                <Row>
                    <Col xs='auto'>            
                        <CardTitle className='h1'>
                            { currUser.username }
                        </CardTitle>
                    </Col>
                    <Col xs='auto'>
                        <FontAwesomeIcon 
                            icon={ faEdit } 
                            onClick={ toggleForm }
                            className='edit-btn'
                        />
                    </Col>
                </Row>
                {userTradeTotal ? (
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
                            { `$${ userTradeTotal.toFixed(2) }` } 
                        </CardSubtitle>
                    </div>
                ) : (
                    <CardSubtitle className='my-1 h5'>
                        Total P&L: $0.00
                    </CardSubtitle>
                )}
                <div className='tabs-container my-4 mx-auto col-12'>
                    <Nav tabs>
                        <NavItem className='col-6'>
                            <NavLink className={ `${ classNames({ active: currentActiveTab === '1' })} profile` } 
                                     onClick={() => { toggleTabs('1') }}
                                     style={{ color: '#FBF8E6' }}> 
                                Trades 
                            </NavLink> 
                        </NavItem>
                        <NavItem className='col-6'>
                            <NavLink className={ `${ classNames({ active: currentActiveTab === '2' })} profile` } 
                                     onClick={() => { toggleTabs('2') }} 
                                     style={{ color: '#FBF8E6' }}>
                                Favorites 
                            </NavLink> 
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={ currentActiveTab }> 
                        <TabPane tabId="1"> 
                            <ProfileTradesTab addTrade={ addTrade } tradesList={ tradesList } />
                        </TabPane>
                        <TabPane tabId="2"> 
                            <ProfileFavoritesTab currUser={ currUser } updateFavorite={ updateFavorite } />
                        </TabPane>
                    </TabContent> 
                </div>
            </CardBody>
        </Card> 
    )
}

export default ProfileInfo