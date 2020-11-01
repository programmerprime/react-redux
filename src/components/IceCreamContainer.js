import React from 'react';
import { buyIceCream } from '../redux';
import {connect} from 'react-redux'

const IceCreamContainer = (props) => {
    return (
        <div>
            <h2>Num of icecreams: {props.numOfIceCreams}</h2>
            <button onClick={() => props.buyIceCream}>Buy Icecream</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}


const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);