import React, {useState} from 'react';
import './App.css';
import { Box } from '@mui/material';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

function App() {
  const [file, setFile] = useState<File>();

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
      <Box component="form">
        <div className='FileInput'>
          <Input id='FileInput' type='file' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            console.log(e.target.files);
            if(e.target != null) {
              setFile(e.target.files![0]);
            }
          }} />
          <Button onClick={uploadHandler}>Upload</Button>
        </div>
      </Box>
    </div>
  );
}

export default App;
