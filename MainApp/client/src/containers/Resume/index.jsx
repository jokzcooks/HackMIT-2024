import { InfoIcon, ResumeIcon } from "../../components/Images"
import { useState } from 'react';
import "./index.css"

export const ResumePage = ({}) => {

    const [file, setFile] = useState(null)

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

    return (
        <div className="resumePageContainer">


            {
            file 
            ? 
                <div>
                    <div className="fileEntry">
                        <img src={ResumeIcon} alt="" />
                        <p>{file.name}</p>
                    </div>
                    <div className="fileOptions">
                        <button className="cancel" onClick={e => setFile(null)}>Cancel</button>
                        <button className="continue">Continue</button>
                    </div>
                </div>
            :
                <div>
                    <p className="title">Upload Resume</p>
                    <p className="subTitle"><img src={InfoIcon} alt="" /> We'll use this to build your profile</p>
                    <div className="uploadContainer" onDrop={e => handleDrop(e)} onDragOver={e => e.preventDefault()}>
                        <img src={ResumeIcon} alt="" />
                        <p>Drag resume (pdf) here</p>
                        <p>Or click to browse</p>
                    </div>
                </div>
            }

        </div>
    )

}

export default ResumePage