import React, {useState, useRef} from 'react';
import DisplayBox from '../DisplayBox/DisplayBox';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Delete } from '@mui/icons-material';
import './ControlPanel.css'

interface IProps {
    file: File | undefined;
    openHandler: () => void;
    uploadHandler: () => void;
    clearHandler: () => void;
}

function ControlPanel(props: IProps) {
    const file = props.file;
    const openHandler = props.openHandler;
    const uploadHandler = props.uploadHandler;
    const clearHandler = props.clearHandler;
    return (
        <div className='ManuButtons'>
            <DisplayBox file={file} />
            <span className='Button'>
                <Button variant='contained' onClick={openHandler}>Open</Button>
            </span>
            <span className='Button'>
                <Button className='Button' variant='contained' onClick={uploadHandler} disabled={file === undefined}>Upload</Button>
            </span>
            <span className='DelButton'>
                <IconButton aria-label='delete' color='primary' onClick={clearHandler}>
                    <Delete/>
                </IconButton>
            </span>
        </div>
    )
}

export default ControlPanel;