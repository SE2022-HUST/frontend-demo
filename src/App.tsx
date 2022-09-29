import React, {useState, useRef} from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Delete } from '@mui/icons-material';
import Input from '@mui/material/Input';

import './App.css';

import uploadFunc from './Apis/Upload';
import { uploadAddr } from './Apis/Constants';
import FileInput from './Components/FileInput/FileInput';
import DisplayBox from './Components/DisplayBox/DisplayBox';

function App() {
  const [file, setFile] = useState<File>();
  const inputRef = useRef<HTMLInputElement>(null);
  let response: Response | undefined;

  let uploadHandler = () => {
    console.log(file);
    response = uploadFunc(uploadAddr, file);
  }

  return (
    <div className="App">
      <div className='mainBar'>
        <Box component="form">
          <FileInput action={(file: File) => setFile(file)} ref={inputRef} />
          <div className='ManuButtons'>
            <DisplayBox file={file} />
            <span className='Button'>
              <Button variant='contained' onClick={() => {
                if(inputRef.current != null) {
                  inputRef.current.click();
                }
              }}>Open</Button>
            </span>
            <span className='Button'>
              <Button className='Button' variant='contained' onClick={uploadHandler} disabled={file === undefined}>Upload</Button>
            </span>
            <span className='DelButton'>
              <IconButton aria-label='delete' color='primary' onClick={() => {
                setFile(undefined);
              }}>
                <Delete/>
              </IconButton>
            </span>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default App;
