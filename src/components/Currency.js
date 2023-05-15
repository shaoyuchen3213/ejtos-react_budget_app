import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type : 'CHG_CURRENCY',
            playload : val,
        });
    }

    return (
        <div className='alert alert-dark'>
            <span>Currency: </span>
            <select name = "currency" id = "currency" onChange={event => changeCurrency(event.target.value)}>
            <option value="£">Uk(£)</option>
            <option value="₹">India(₹)</option>
            <option value="€">Europe(€)</option>
            <option value="CAD">Canada(CAD)</option>
            </select>      
        </div>
    );
}

export default Currency;