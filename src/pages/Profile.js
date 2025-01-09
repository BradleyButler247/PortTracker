import { React, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Row } from "reactstrap";
import FlashMsg from '../components/FlashMsg'
import ProfileEditForm from '../components/ProfileEditForm'
import ProfileInfo from '../components/ProfileInfo'

const Profile = ({ editUser, currUser, flashMsg, setFlashMsg, addTrade, updateFavorite }) => {
    const [formDisplay, setFormDisplay] = useState('none');
    const [infoDisplay, setInfoDisplay] = useState('');
    const [userTradeTotal, setUserTradeTotal] = useState();
    const [tradesList, setTradesList] = useState()

    const toggleForm = () => {
        formDisplay === 'none' 
        ? setFormDisplay('') 
        : setFormDisplay('none')
        
        infoDisplay === 'none' 
        ? setInfoDisplay('') 
        : setInfoDisplay('none')
    }

    const calculateTradeTotal = () => {
        if (currUser.username !== '') {
            const totalSpent = currUser.buys.map(buy => buy.quantity * buy.price).reduce((total, spent) => total + spent, 0);
            const totalEarned = currUser.sells.map(sell => sell.quantity * sell.price).reduce((total, spent) => total + spent, 0);
            
            setUserTradeTotal(totalEarned - totalSpent)
        }
    }

    const getTradeHistory = () => {
        const txns = [...currUser.buys, ...currUser.sells]
        const sortedTxns = txns.sort((a,b) => b.date_added.localeCompare(a.date_added))
        setTradesList(sortedTxns)
    }

    useEffect(() => {
        calculateTradeTotal();
        getTradeHistory()
    }, [currUser.buys, currUser.sells])



    return (
        currUser.username !== '' ? (
            <div className='home-container mx-auto '>
                {flashMsg.for === 'profile' ? (
                    <div className='mx-auto col-10'>
                        <FlashMsg flashMsg={ flashMsg } setFlashMsg={ setFlashMsg } />
                    </div>
                ) : <></>}


                <Row className='user-info-edit-form' style={{ display: formDisplay }}>
                    <ProfileEditForm 
                        currUser={ currUser } 
                        toggleForm={ toggleForm } 
                        editUser={ editUser } />
                </Row>

                <div className='user-info-container row mx-auto mt-5 col-11' style={{ display: infoDisplay }}>
                    <ProfileInfo 
                        currUser={ currUser } 
                        toggleForm={ toggleForm } 
                        userTradeTotal={ userTradeTotal } 
                        addTrade={ addTrade }
                        updateFavorite={ updateFavorite }
                        tradesList={ tradesList } />
                </div> 
            </div> 
        ) : (
            <Navigate to='/Login' />
        )
    )
}

export default Profile