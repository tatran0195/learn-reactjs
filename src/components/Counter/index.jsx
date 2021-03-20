import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = props => {
const [ count, setCount ] = useState(0)

    return (
        <div>
            {count}
            <br></br>
            <button onClick={() => setCount(x => x + 1)}>Increase</button>
        </div>
    );
};

Counter.propTypes = {

};

export default Counter;