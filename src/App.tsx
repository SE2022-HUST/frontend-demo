import React, {useState, useRef} from 'react';
import { Box } from '@mui/material';
import './App.css';
import FileInput from './Components/FileInput/FileInput';
import ControlPanel from './Components/ControlPanel/ControlPanel';
import uploadFunc from './Apis/Upload';
import { uploadAddr } from './Apis/Constants';

function App() {
  const [file, setFile] = useState<File>();
  const inputRef = useRef<HTMLInputElement>(null);
  let response: Response | undefined;
  const uploadHandler = () => {
    console.log(file);
    response = uploadFunc(uploadAddr, file);
  }
  const openHandler = () => {
    if(inputRef.current != null) {
      inputRef.current.click();
    }
  }
  const clearHandler = () => {
    setFile(undefined);
  }

  return (
    <div className="App">
      <div className='mainBar'>
        <Box component="form">
          <FileInput action={(file: File) => setFile(file)} ref={inputRef} />
          <ControlPanel file={file} openHandler={()=>openHandler()} uploadHandler={()=>uploadHandler()} clearHandler={()=>clearHandler()} />
        </Box>
      </div>

    </div>
  );
}

export default App;
