import React, { useState } from 'react';
import './Calculator.css';

const SimpleCalculator = () => {
    const [input, setInput] = useState('');

    const handleButtonClick = (value) => {
        setInput((prevInput) => prevInput + value);
    };

    const handleClear = () => {
        setInput('');
    };

    const handleCalculate = () => {
        try {
            // Replace parentheses with '*' for multiplication before evaluating
            const cleanedInput = input.replace(/\(/g, '*(');
            setInput(eval(cleanedInput).toString());
        } catch (error) {
            setInput('Error');
        }
    };

    const handleKeyboardInput = (key) => {
        switch (key) {
            case '=':
                handleCalculate();
                break;
            case 'C':
                handleClear();
                break;
            default:
                handleButtonClick(key);
        }
    };

    const renderKeyboard = () => {
        const keyboardLayout = [
            ['7', '8', '9', '/'],
            ['4', '5', '6', '*'],
            ['1', '2', '3', '-'],
            ['0', '.', '(', ')'],
            ['+', '=', 'C'],
        ];

        return keyboardLayout.map((row, rowIndex) => (
            <div key={rowIndex} className="keyboard-row">
                {row.map((key) => (
                    <button
                        key={key}
                        onClick={() => handleKeyboardInput(key)}
                    >
                        {key}
                    </button>
                ))}
            </div>
        ));
    };

    return (
            <div>
                
                <h1>Calculator</h1>


        <div className='calculator-container'>
            <div className='cal'><div className="calculator">
                <div className="output-screen">
                    <div className="input">{input}</div>
                </div>
                <div className="buttons">
                    {renderKeyboard()}
                </div>
            </div></div>
        </div>
            </div>
    );
};

export default SimpleCalculator;
