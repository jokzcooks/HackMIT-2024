import { InfoIcon, ResumeIcon } from "../../components/Images"
import { useState, useRef } from 'react';
import "./index.css"
import { useNavigate } from "react-router";

export const ResumePage = ({}) => {

    const [file, setFile] = useState(null)
    const inputFile = useRef(null) 
    const navigate = useNavigate()

    const handleDrop = (ev) => {
        ev.preventDefault();
        if (ev.dataTransfer.items) {
          const fls = [...ev.dataTransfer.items].map(item => {
            console.log(item)
            if (item.kind === "file" && String(item.type).toLowerCase().includes("pdf")) return item.getAsFile()
          })
          setFile(fls[0])
        } else {
            console.log([...ev.dataTransfer.files])
          setFile([...ev.dataTransfer.files][0])
        }
    }

    const uploadFile = async (file) => {
        if (!file) {
          console.log("No file to upload.");
          return;
        }
        const formData = new FormData();
        formData.append('file', file);
    
        try {
          const res = await fetch("http://localhost:5000/pleaseUseAsIntended", {
            method: 'POST',
            body: formData,
          });
    
          if (res.status != 200) {
            throw new Error('An error occured while uploading');
          }

          const result = await response.json();
          console.log('File uploaded successfully:', result);
        } catch (error) {
          console.error('Error uploading file:', error);
        }
        
        navigate("/profile")
      };

    const openFilePicker = async () => {
        inputFile.current.click();
    }

    const handleUploaded = async (e) => {
        const fls = [...e.target.files].map(item => {
            if (String(item.type).toLowerCase().includes("pdf")) return item
        })
        console.log(fls)
        setFile(fls[0])
    }

    return (
        <div className="resumePageContainer">
            {
            file 
            ? 
                <div>
                    <p className="title">Upload Resume</p>
                    <div className="fileEntry">
                        <img src={ResumeIcon} alt="" />
                        <p>{file.name}</p>
                        <p>{file.length}</p>
                    </div>
                    <div className="fileOptions">
                        <button className="cancel" onClick={e => setFile(null)}>Cancel</button>
                        <button className="continue" onClick={e => uploadFile(file)}>Continue</button>
                    </div>
                </div>
            :
                <div>
                    <p className="title">Upload Resume</p>
                    <p className="subTitle"><img src={InfoIcon} alt="" /> We'll use this to build your profile</p>
                    <div className="uploadContainer" onClick={e => openFilePicker()} onDrop={e => handleDrop(e)} onDragOver={e => e.preventDefault()}>
                        <img src={ResumeIcon} alt="" />
                        <input onChange={e => handleUploaded(e)} type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
                        <p>Drag resume (pdf) here</p>
                        <p>Or click to browse</p>
                    </div>
                </div>
            }

        </div>
    )

}

export default ResumePage