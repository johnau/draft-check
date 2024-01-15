import React, { useCallback, useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { useDropzone } from "react-dropzone";
import ClearIcon from "@mui/icons-material/Clear";
import zIndex from "@mui/material/styles/zIndex";

const DropZoneArea = styled(Box)({
    border: '10px dashed #fff',
    borderRadius: 40,
    padding: 4,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
});

const AddFilesButton = styled(Button)({
    // backgroundColor: 'white',
    color: 'white',
    borderRadius: 0,
    textTransform: 'none',
    fontFamily: 'sharetech, sans-serif',
});

const FileList = ({ files, onRemove }) => {
    if (files.length === 0) {
        return (
            <></>
        )
    }
    return (
        <Box
            onClick={(e) => {
                e.stopPropagation();
            }}
            sx={{ position: 'absolute', bottom: 0, left: 0, mt: 2, display: 'flex', flexDirection: 'column', width: '100%', maxHeight: '200px', overflowY: 'scroll' }}
        >
            <Typography variant="body2" textAlign='left' sx={{ flexGrow: 1, fontFamily: 'sharetech-mono, sans-serif', ml: 1 }}>{files.length} File{files.length == 1 ? '' : 's'}:</Typography>
            {files.map((file, index) => (
                <Box key={index} sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', px: 2, background: 'linear-gradient(to right, rgba(0, 255, 120, 0.9), rgba(0, 0, 0, 0.0))', color: 'black', border: '2px solid black' }}>
                    <Typography variant="body1" textAlign='left' sx={{ flexGrow: 1, fontFamily: 'sharetech-mono, sans-serif' }}>{file.name}</Typography>
                    <IconButton
                        onClick={(e) => {
                            onRemove(index);
                            e.stopPropagation();
                        }}
                    >
                        <ClearIcon sx={{ color: 'red' }} />
                    </IconButton>
                </Box>
            ))}
        </Box>
    )
};

function FileDropZoneComponent({ onFilesDropped }) {
    const [droppedFiles, setDroppedFiles] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        const updatedFiles = [...droppedFiles, ...acceptedFiles];
        setDroppedFiles(updatedFiles);
        onFilesDropped(updatedFiles);
    }, [droppedFiles, onFilesDropped]);

    const handleRemoveFile = (index) => {
        const updatedFiles = [...droppedFiles];
        updatedFiles.splice(index, 1);
        setDroppedFiles(updatedFiles);
        onFilesDropped(updatedFiles);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
    });

    return (
        <DropZoneArea {...getRootProps()}>
            <input {...getInputProps()} />
            <Box className="label-box" sx={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography className="drop-zone-label" variant="h5" sx={{ fontFamily: 'sharetech, sans-serif' }}>
                    Drag & drop files here...
                </Typography>
                <AddFilesButton variant="text" sx={{ mt: 2 }}>
                    or click here to add files from File Open Dialog...
                </AddFilesButton>
                <FileList files={droppedFiles} onRemove={handleRemoveFile} />
            </Box>
        </DropZoneArea>
    );
}

export default FileDropZoneComponent;
