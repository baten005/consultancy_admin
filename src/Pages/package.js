import React, { useState } from 'react';
import '../Styles/package.css';

const Package = () => {
    const [sms, setSms] = useState('');
    const [sendById, setSendById] = useState('')
    const [message, setMessage] = useState('');

    const handleSend = () => {
        // Handle the form submission logic here
        console.log({ sms, sendById, message });
    };

    return (
        <div className="package-form-container">
                <div className="package-form-group">
                    <label>Add Package</label>
                    <input type="text" value={sms} placeholder='Package name' onChange={(e) => setSms(e.target.value)} />
                    <input type="text" value={sendById} placeholder='Price' onChange={(e) => setSendById(e.target.value)} />
                    <div>
                        <button onClick={handleSend} className="add-button">Add</button>
                    </div>
                </div>

            <div className="package-form-group">
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
        </div>
    );
};

export default Package;