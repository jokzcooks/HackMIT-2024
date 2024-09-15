import { InfoIcon, ResumeIcon } from "../../components/Images"
import "./index.css"

export const ResumePage = ({}) => {

    const onDragOver = (ev) => {
        console.log("File(s) in drop zone");
      
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
    }

    const onDrop = (ev) => {
        console.log("File(s) dropped");
      
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
      
        if (ev.dataTransfer.items) {
          // Use DataTransferItemList interface to access the file(s)
          [...ev.dataTransfer.items].forEach((item, i) => {
            // If dropped items aren't files, reject them
            if (item.kind === "file") {
              const file = item.getAsFile();
              console.log(`… file[${i}].name = ${file.name}`);
            }
          });
        } else {
          // Use DataTransfer interface to access the file(s)
          [...ev.dataTransfer.files].forEach((file, i) => {
            console.log(`… file[${i}].name = ${file.name}`);
          });
        }
      }

    return (
        <div className="resumePageContainer">

            <div>
                <p className="title">Upload Resume</p>
                <p className="subTitle"><img src={InfoIcon} alt="" /> We'll use this to build your profile</p>
                <div className="uploadContainer" onDrop={e => handleDrop(e)} onDragOver={e => handleDragOver(e)}>
                    <img src={ResumeIcon} alt="" />
                    <p>Drag resume here</p>
                    <p>Or click to browse</p>
                </div>
            </div>

        </div>
    )

}

export default ResumePage