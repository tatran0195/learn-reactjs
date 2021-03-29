import React, { useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import AlbumForm from '../../components/AlbumForm';
import AlbumList from '../../components/AlbumList';

AlbumListPage.propTypes = {};

function AlbumListPage(props) {
    const initAlbumList = [
        {
            id: 1,
            name: 'Nhạc Hoa Thịnh Hành',
            thumbnailUrl:
                'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/3/9/3/4/39349a90229b3f4ca9eafa69f9106932.jpg',
        },
        {
            id: 2,
            name: 'Ráp Việt nghe là ghiền',
            thumbnailUrl:
                'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/d/2/f/c/d2fc5d3c4627fc52220de11e07153e0f.jpg',
        },
        {
            id: 3,
            name: 'Wazzup: Viral Hits',
            thumbnailUrl:
                'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/5/5/f/c55fafaf6df6af993e474c6413546156.jpg',
        },
    ];

    const [albumList, setAlbumList] = useState(initAlbumList);

    const handleOnClick = (values) => {
        const maxId = albumList.reduce((max, album) => (album.id > max ? album.id : max));
        const newAlbum = {
            id: maxId + 1,
            name: values.name,
            thumbnailUrl: values.thumbnailUrl,
        };

        const newAlbumList = [...albumList, newAlbum];
        setAlbumList(newAlbumList);
    };

    return (
        <div>
            <h2>Lists of songs</h2>
            <AlbumList albumList={albumList} />
            <AlbumForm onClick={handleOnClick} />
        </div>
    );
}

export default AlbumListPage;
