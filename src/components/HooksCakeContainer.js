import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux';

const HooksCakeContainer = () => {

    // the useSelector hook is equvalent to the mapStateTopProps function

    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of cakes: {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy a cake</button>
        </div>
    );
};

export default HooksCakeContainer;