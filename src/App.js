import React, { useState, useEffect } from 'react';
import queryString from 'query-string'
// import Counter from './components/Counter';
// import ColorBox from './components/ColorBox';
// import AlbumFeature from './features/Album';
// import TodoFeature from './features/Todo';
import PostList from './components/PostList';
import Pagination from './components/Pagination';

function App() {

  const [postList, setPostList] = useState([])
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 20,
  })
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  })

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filters)
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?_limit=${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON);

        const {data, pagination}=responseJSON;
        setPostList(data);
        setPagination(pagination)
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message);
      }
    }

    fetchPostList()
  }, [filters]);

  function handlePageChange(newPage) {

    setFilters({
      ...filters,
      _page: newPage,
    });
  };

  return (
    <div className="App">
      {/* <TodoFeature /> */}
      {/* <AlbumFeature /> */}
      {/* <ColorBox />
      <Counter /> */}
      <PostList posts={postList}/>
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
