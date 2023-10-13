import React, { useState } from 'react';
import './AgeCalculator.css';

const AgeCalculator = () => {
    const [birthDate, setBirthDate] = useState('');
    const [age, setAge] = useState('');

    const calculateAge = () => {
        const dob = new Date(birthDate);
        const today = new Date();
        const ageInMilliseconds = today - dob;
        const ageInYears = new Date(ageInMilliseconds).getUTCFullYear() - 1970;
        setAge(ageInYears);
    };

    const redirectToGoogle = () => {
        window.location.href = 'https://www.google.com';
    };

    return (
        <div className="age-calculator">
            <h1>Age Calculator</h1>
            <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
            />
            <button className="calculate-button" onClick={calculateAge}>
                Calculate Age
            </button>
            {age && <p>Your age is {age} years.</p>}
            <button className="google-button" onClick={redirectToGoogle}>
                Back to Google
            </button>
        </div>
    );
};

export default AgeCalculator;
