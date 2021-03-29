import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, makeStyles, TextField } from '@material-ui/core';
import InputField from '../../../../components/form-controls/InputField';

AlbumForm.propTypes = {};

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '50ch',
        },
    },
}));

function AlbumForm(props) {
    const classes = useStyles();
    const [albumName, setAlbumName] = useState('');
    const [albumThumbnailUrl, setAlbumThumbnailUrl] = useState('');
    const { onClick } = props;

    const handleOnClick = () => {
        if (onClick) {
            onClick({ name: albumName, thumbnailUrl: albumThumbnailUrl });

            setAlbumName('');
            setAlbumThumbnailUrl('');
        }
    };

    const handleOnChangeAlbumName = (e) => {
        setAlbumName(e.target.value);
    };
    const handleOnChangeAlbumThumbnailUrl = (e) => {
        setAlbumThumbnailUrl(e.target.value);
    };

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    value={albumName}
                    name="song-name"
                    label="Song Name"
                    style={{ margin: '0 8px' }}
                    onChange={handleOnChangeAlbumName}
                />
            </form>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    value={albumThumbnailUrl}
                    name="song-thumbnail"
                    label="Thumbnail"
                    style={{ margin: '0 8px' }}
                    onChange={handleOnChangeAlbumThumbnailUrl}
                />
            </form>
            <br />
            <Button variant="contained" color="primary" onClick={handleOnClick}>
                Add Song
            </Button>
        </div>
    );
}

export default AlbumForm;
