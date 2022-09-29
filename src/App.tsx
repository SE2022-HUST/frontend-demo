import React, {useState, useRef} from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Delete } from '@mui/icons-material';
import Input from '@mui/material/Input';

import './App.css';

import uploadFunc from './Apis/Upload';
import { uploadAddr } from './Apis/Constants';

function App() {
  const [file, setFile] = useState<File>();
  const inputRef = useRef<HTMLInputElement>(null);
  const displayRef = useRef<HTMLInputElement>(null);
  let response: Response | undefined;

  let uploadHandler = () => {
    console.log(file);
    response = uploadFunc(uploadAddr, file);
  }

  return (
    <div className="App">
      <div className='mainBar'>
        <Box component="form">
          <div className='FileInput'>
            <input hidden id='file' type='file' name='file' ref={inputRef} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              console.log(e.target.files);
              if(e.target != null) {
                setFile(e.target.files![0]);
                // console.log(e.target.files![0]);
                // console.log(file);
                // if(displayRef.current != null)
                // displayRef.current.innerText = e.target.files![0].name;
              }
            }} />
          </div>
          {/* <div className='Icon'>
            <label htmlFor='file'>Open File</label>
          </div> */}
          <div className='ManuButtons'>
            <span className="FileDisplay">
              <Input placeholder='Please choose a file~' readOnly ref={displayRef} value={file === undefined ? 'No File' : file.name} />
            </span>
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
