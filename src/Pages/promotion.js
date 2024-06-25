import React, { useState } from 'react';
import '../Styles/promotionform.css';

const PromotionForm = () => {
    const [sms, setSms] = useState('');
    const [sendById, setSendById] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [message, setMessage] = useState('');

    const handleSend = () => {
        // Handle the form submission logic here
        console.log({ sms, sendById, fromDate, toDate, message });
    };

    return (
        <div className="promotion-form">

                <div className="form-gr">
                    <label>Send SMS :</label>
                    <input type="text" value={sms} onChange={(e) => setSms(e.target.value)} />
                </div>
                <div className="form-gr">
                    <label>Send By ID:</label>
                    <input type="text" value={sendById} onChange={(e) => setSendById(e.target.value)} />
                </div> 

            <div className="form-group">
                <label>Bulk User By Date:</label>
                <div className="date-range">
                    <div>
                        <label>From:</label>
                        <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                    </div>
                    <div>
                        <label>To:</label>
                        <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
                    </div>   
                    
                </div>
            </div>
            <div className="form-group message-group">
                <textarea value={message} placeholder='1921/1 Character' onChange={(e) => setMessage(e.target.value)} />
                <button onClick={handleSend} className="send-button">Send <img src='send.svg' /></button>
            </div>
        </div>
    );
};

export default PromotionForm;