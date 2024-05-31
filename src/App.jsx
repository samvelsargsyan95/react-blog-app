import HeaderComponent from './components/header/HeaderComponent';
import Posts from './components/posts/Posts';
import axios from 'axios';
import { Alert, Grid } from '@mui/material';
import { useState, useEffect } from 'react';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [postList, setPostList] = useState([]);
  const [filteredPostData, setFilteredPostData] = useState(postList)

  // get posts data
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get('https://cloud.codesupply.co/endpoint/react/data.json');
        setPostList(response.data);
      } catch (err) {
        throw new Error(err)
      }
    };

    getPosts();
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Posts search
  useEffect(() => {
    const filtered = postList.filter(item =>
      item?.title.toLowerCase().includes(searchText.toLowerCase()) || 
      item?.text.toLowerCase().includes(searchText.toLowerCase()) 
    );
    setFilteredPostData(filtered);
  }, [searchText, postList]);

  return (
    <>
      <HeaderComponent setSearchText={setSearchText} />
      <Posts filteredPostData={filteredPostData} />

      {
        (searchText && !filteredPostData.length) && 
        
        <Grid 
        container justifyContent="center">
          <Alert variant="outlined" severity="warning">
            There are no existing posts with that keyword...
          </Alert>
        </Grid>
      }
    </>
  );
};
