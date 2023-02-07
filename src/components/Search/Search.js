import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search';
import { ImageContext } from '../../Context/ImageContext';
const Search = () => {
  const {searchImage} = useContext(ImageContext)
  const search = (event) => {
    searchImage(event.target.value)
  }

  function debounce(fn, delay = 500) {
    let timeoutid;
    return function(...args) {
     
      const context = this;
       clearTimeout(timeoutid);
       timeoutid = setTimeout(() => {
        fn.call(context, ...args);
        clearTimeout(timeoutid);
       }, delay)
    }
  }

  const debouncedSearch = debounce((e) => search(e))


  return (
    <Box>
        <TextField id="outlined-basic"  type="search"  variant="outlined" placeholder='Search image' onChange={debouncedSearch} style={{ 
            width: '80%',
            margin: 'auto',
            display: 'flex',
            padding: '8px'
        }}
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}/>
    </Box>
    
  )
}


export default Search;