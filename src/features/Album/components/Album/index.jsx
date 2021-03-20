import React from 'react';
import PropTypes from 'prop-types';
// import './styles.scss'

Album.propTypes = {

};

function Album(props) {
    const { album } = props;
    return (
        <div className="album">
            <img src={album.thumbnailUrl} alt={album.name}></img>
            <p>{album.name}</p>
        </div>
    );
}

export default Album;