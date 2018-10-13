import React from 'react';

const UserProfile = (props) => {
    return (
    <div>
        <h1>User Avatar</h1>
        <ul>
            <li>Name</li>
            <li>Id</li>
            <li>Age</li>
            <li>PhoneNumber</li>
            <li>PaymentMethod</li>
            <li>TransactionHistory
                <ul>
                    <li>Spending</li>
                    <li>Debt</li>
                    <li>Lending</li>
                </ul>
            </li>
        </ul>
    </div>
    )
}

export default UserProfile;