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

    const redirectToIndexPage = () => {
        window.location.href = 'https://swarabraul.github.io/React-Ethnus-IndexPage/';
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
            <button className="IndexPage-button" onClick={redirectToIndexPage}>
                Back to Index Page
            </button>
        </div>
    );
};

export default AgeCalculator;
