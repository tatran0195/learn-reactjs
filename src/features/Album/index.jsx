import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';


AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc Hoa Thịnh Hành',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/3/9/3/4/39349a90229b3f4ca9eafa69f9106932.jpg'
        },
        {
            id: 2,
            name: 'Ráp Việt nghe là ghiền',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/d/2/f/c/d2fc5d3c4627fc52220de11e07153e0f.jpg'
        },
        {
            id: 3,
            name: 'Wazzup: Viral Hits',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/5/5/f/c55fafaf6df6af993e474c6413546156.jpg'
        },
    ];
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;