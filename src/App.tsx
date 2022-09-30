import React, { useState, useRef } from 'react';
import { Box } from '@mui/material';
import './App.css';

//Api
import uploadFunc from './Apis/Upload';
import { uploadAddr } from './Apis/Constants';

//Components
import FileInput from './Components/FileInput/FileInput';
import ControlPanel from './Components/ControlPanel/ControlPanel';
import AlertBar from './Components/AlertBar/AlertBar';

//Hooks
import { useToastStatus } from './Hooks/useToastStatus';

function App() {
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState<boolean>(false);
  const [toastStatus, setByResult] = useToastStatus();
  const inputRef = useRef<HTMLInputElement>(null);
  const uploadHandler = () => {
    console.log(file);
    setLoading(true);
    uploadFunc(uploadAddr, file).then(result => {
      setLoading(false);
      setFile(undefined);
      setByResult(result);
    });
  }
  const openHandler = () => {
    if (inputRef.current != null) {
      inputRef.current.click();
    }
  }
  const clearHandler = () => {
    setFile(undefined);
  }

  return (
    <div className="App">
      <AlertBar status={toastStatus} updateStatus={setByResult} />
      <div className='MainBar'>
        <Box component="form">
          <FileInput action={(file: File) => setFile(file)} ref={inputRef} />
          <ControlPanel file={file} loading={loading} openHandler={() => openHandler()} uploadHandler={() => uploadHandler()} clearHandler={() => clearHandler()} />
        </Box>
      </div>
    </div>
  );
}

export default App;
