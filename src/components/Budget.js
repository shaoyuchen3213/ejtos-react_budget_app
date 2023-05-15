import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch,expenses, currency } = useContext(AppContext);
    const [inputValue, setInputValue] = React.useState(budget);
    const [lastValidBudget] = React.useState(budget);

    const handdleInputChange = (event) => {
        setInputValue(parseInt(event.target.value));
    };


    const handleInputBlur = () => {
        const value = inputValue;
        const totalExpenses = expenses.reduce((total, item) => {
                return (total = total + item.cost);
            }
                , 0);
            if(isNaN(value)) {
                alert("Please enter a valid number!");
                setInputValue(lastValidBudget);
                return;
            }

            if( value < totalExpenses){
                alert("You cannot reduce the budget that is already allocated!");
                setInputValue(lastValidBudget);
                return;
            } else if(value > 20000) {
                alert("The budget must be between 0 and 20000");
                setInputValue(20000);
            } else {
                dispatch({
                    type: 'SET_BUDGET',
                    payload: value,
                });
            }
        
    }


    

    


    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" value={inputValue} id= "budget" placeholder="Enter budget" step={10}
            style={{ marginLeft: '2rem' , size: 10}}
            onChange={handdleInputChange}
            onBlur={handleInputBlur}>
            </input>

        </div>
    );
};
export default Budget;
