import React from 'react';
import PropTypes from 'prop-types';

const Play = (play) => (
    <div>
        <p className='artx-type-et text-white'>ARTX AI will create <i>Genesis</i>, a digital artwork, using blockchain-based transaction data from the auction. <i>Genesis</i> is probably the most expensive and important artwork created on blockchain! Don&apos;t miss your chance to be a part of history!</p>
        <button className='d-block mx-auto btn btn-link text-warning artx-type-tw' onClick={play}>Play Now</button>
    </div>
);

Play.propTypes = {
    play: PropTypes.func.isRequired
};

export default Play;