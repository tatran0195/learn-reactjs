import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ColorBox = props => {
    const [ color, setColor ] = useState('white')

    return (
        <div>
            {color}
            <br></br>
            <button onClick={() => setColor('black')}>Change to black</button>
            <button onClick={() => setColor('white')}>Change to white</button>
        </div>
    );
};

ColorBox.propTypes = {};

export default ColorBox;