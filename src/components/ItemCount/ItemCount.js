import React  from 'react'

const ItemCount = () => {
    const [counter, setCounter] = React.useState(0)
    
    const handlerCounterUp = () => {
        setCounter(counter + 1); 
    };

    const handlerCounterDown = () => {
        setCounter(counter - 1);
    };


    


    return (

        <div>
            <button onClick={handlerCounterUp}>+</button>
            <p>{counter}</p>
            <button onClick={handlerCounterDown}>-</button>

        </div>
    )
}

export default ItemCount
