import React, { useState } from "react";
import './layout.css'
import logo from '../asserts/img/logo.png'
import Output from './output';

const Layout = (props) => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (event) => {
        const value = event.target.value;

        if (value === '=') {
            if (input !== '') {
                let res = '';
                try {
                    res = eval(input);
                    if (isNaN(res) || !isFinite(res)) {
                        throw new Error('Math error');
                    }
                    setResult(input + '=');
                    setInput(res.toString());
                } catch (err) {
                    setResult('Math error');
                }
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else if (value === 'DEL') {
            setInput(input.slice(0, -1));
        } else if (value === '.') {
            if (!input.includes('.')) {
                setInput(input + value);
            }
        } else if (input === '0' && value !== '.') {
            setInput(value);
        } else {
            setInput(input + value);
        }
    }

    return (
        <div className="frame">
            <div className="calculator">
                <br></br>
                <Output user={input} answer={result} />
                <img src={logo} width='150px' style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                <div className="keys">
                    <input type="button" value={'C'} className="button clear" onClick={handleClick}></input>
                    <input type="button" value={'DEL'} className="button clear" onClick={handleClick}></input>
                    <input type="button" value={'%'} className="button operator" onClick={handleClick}></input>
                    <input type="button" value={'/'} className="button operator" onClick={handleClick}></input>

                    <input type="button" value={'7'} className="button " onClick={handleClick}></input>
                    <input type="button" value={'8'} className="button " onClick={handleClick}></input>
                    <input type="button" value={'9'} className="button " onClick={handleClick}></input>
                    <input type="button" value={'*'} className="button operator" onClick={handleClick}></input>

                    <input type="button" value={'4'} className="button " onClick={handleClick}></input>
                    <input type="button" value={'5'} className="button " onClick={handleClick}></input>
                    <input type="button" value={'6'} className="button " onClick={handleClick}></input>
                    <input type="button" value={'-'} className="button operator" onClick={handleClick}></input>

                    <input type="button" value={'1'} className="button " onClick={handleClick}></input>
                    <input type="button" value={'2'} className="button " onClick={handleClick}></input>
                    <input type="button" value={'3'} className="button " onClick={handleClick}></input>
                    <input type="button" value={'+'} className="button operator" onClick={handleClick}></input>

                    <input type="button" value={'0'} className="button " onClick={handleClick}></input>
                    <input type="button" value={'.'} className="button " onClick={handleClick}></input>
                    <input type="button" value={'='} className="button operator" onClick={handleClick}></input>


                </div>
            </div>
        </div>
    )
};

export default Layout;
