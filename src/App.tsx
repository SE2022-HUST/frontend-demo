import React, {useState, useRef} from 'react';
import { Box } from '@mui/material';
import './App.css';
import FileInput from './Components/FileInput/FileInput';
import ControlPanel from './Components/ControlPanel/ControlPanel';
import uploadFunc from './Apis/Upload';
import { uploadAddr } from './Apis/Constants';

function App() {
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const uploadHandler = () => {
    console.log(file);
    setLoading(true);
    uploadFunc(uploadAddr, file).then(result => {
      setLoading(false);
      setFile(undefined);
      if(result) {
        window.alert("上传成功");
      }
      else {
        window.alert("上传失败")
      }
    });
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
          <ControlPanel file={file} loading={loading} openHandler={()=>openHandler()} uploadHandler={()=>uploadHandler()} clearHandler={()=>clearHandler()} />
        </Box>
      </div>

    </div>
  );
}

export default App;
