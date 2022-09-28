import React, {useState, useRef} from 'react';
import './App.css';
import { Box } from '@mui/material';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

function App() {
  const [file, setFile] = useState<File>();
  const inputRef = useRef<HTMLInputElement>(null);

  let uploadHandler = () => {
    console.log("State:" + file);
    if(file != undefined) {
      const data = new FormData();
      data.append('file', file);
      let promise = fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: data
      }).then(response => console.log(response))  
    }
    else {
      console.error("No valid file loaded!");
    }
  }

  return (
    <div className="App">
      <div className='mainBar'>
        <Box component="form">
          <div className='FileInput'>
            <input id='file' type='file' name='file' ref={inputRef} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              console.log(e.target.files);
              if(e.target != null) {
                setFile(e.target.files![0]);
              }
            }} />
          </div>
          <div className='Icon'>
            <label htmlFor='file'>Open File</label>
          </div>
          <div className='ManuButtons'>
            <Button onClick={uploadHandler}>Upload</Button>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default App;
