import React, { useState } from 'react'
import btn1 from '../images/primary button.png'
import btn2 from '../images/secondary button.png'
import axios from 'axios';
// import {
//   Dropzone,
//   FileMosaic,
//   FullScreen,
//   ImagePreview,
//   VideoPreview,
// } from "@files-ui/react";

export default function Upload22() {
  const [num , setNum] = useState('')
  // const [file , setFile] = useState('')
//   const BASE_URL =
//  "https://www.myserver.com";
 

//  const [extFiles, setExtFiles] = React.useState([]);
//  const [imageSrc, setImageSrc] = React.useState(undefined);
//  const [videoSrc, setVideoSrc] = React.useState(undefined);
 
//  const updateFiles = (incommingFiles) => {
//    console.log("incomming files", incommingFiles);
//    setExtFiles(incommingFiles);
//  };
//  const onDelete = (id) => {
//    setExtFiles(extFiles.filter((x) => x.id !== id));
//  };
//  const handleSee = (imageSource) => {
//    setImageSrc(imageSource);
//  };
//  const handleWatch = (videoSource) => {
//    setVideoSrc(videoSource);
//  };
//  const handleStart = (filesToUpload) => {
//    console.log("advanced demo start upload", filesToUpload);
//  };
//  const handleFinish = (uploadedFiles) => {
//    console.log("advanced demo finish upload", uploadedFiles);
//    console.log(extFiles);
   
//  };
//  const handleAbort = (id) => {
//    setExtFiles(
//      extFiles.map((ef) => {
//        if (ef.id === id) {
//          return { ...ef, uploadStatus: "aborted" };
//         } else return { ...ef };
//       })
//     );
//  };
//  const handleCancel = (id) => {
//    setExtFiles(
//      extFiles.map((ef) => {
//        if (ef.id === id) {
//          return { ...ef, uploadStatus: undefined };
//         } else return { ...ef };
//       })
//     );
//  };
// const [file, setFile] = useState(null);

// const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
// };
//  const createUser = async () => {

//   const formData = new FormData();
//   formData.append('file', file);
//   try {
//     const response = await axios.post('https://deen.somee.com/api/Dashboard/AddAthkarMorning', {
//       File : formData,
//       Num: num,   

//     }, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     console.log('User created successfully:', response.data);
//   } catch (error) {
//     console.error(`${JSON.stringify(formData)}`, error.response ? error.response.data : error.message );
//   }
// };







  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
      setFile(event.target.files[0]);
  };

  const uploadFile = async () => {
      if (!file) {
          alert('Please select a file first');
          return;
      }

      const formData = new FormData();
      formData.append('file', file);

      try {
          const response = await axios.post('https://deen.somee.com/api/Dashboard/AddAthkarSleeping', {
            File : file,
            Num : num
          }, {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          });
          console.log('File uploaded successfully:', response.data);
      } catch (error) {
          console.error(num, error);
      }
  };




  return ( 
    <div className='container'>

        <h3 className='py-3'>الاذكار</h3>
        <hr />
        <div className='input-file'>
        <input type="file" onChange={(e) => handleFileChange(e)} />
        </div>        {/* <>
      <Dropzone
        onChange={updateFiles}
        minHeight="195px"
        value={extFiles}
        accept="image/*, video/*"
        maxFiles={3}
        maxFileSize={2 * 1024*1024}
        label="اضغط او اسحب الملف الي هنا"
        uploadConfig={{
           // autoUpload: true
          url: BASE_URL + "/file",
          cleanOnUpload: true,
         }}
        onUploadStart={handleStart}
        onUploadFinish={handleFinish}
        fakeUpload
        actionButtons={{
          position: "after",
          abortButton: {},
          deleteButton: {},
          uploadButton: {},
         }}
      >
        {extFiles.map((file) => (
          <FileMosaic
            {...file}
           key={file.id}
           onDelete={onDelete}
           onSee={handleSee}
           onWatch={handleWatch}
           onAbort={handleAbort}
           onCancel={handleCancel}
           resultOnTooltip
           alwaysActive
           preview
           info
          />
        ))}
      </Dropzone>
      <FullScreen
       open={imageSrc !== undefined}
       onClose={() => setImageSrc(undefined)}
      >
        <ImagePreview src={imageSrc} />
      </FullScreen>
      <FullScreen
       open={videoSrc !== undefined}
       onClose={() => setVideoSrc(undefined)}
      >
        <VideoPreview src={videoSrc} autoPlay controls />
      </FullScreen>
    </> */}
        
       <p className='text-secondary display-5'>الملف يستقبل Mpc4 - PNG - JBJ</p>


<input type="text" className='input-drop w-100' placeholder='رقم الذكر' onChange={(e) => setNum(e.target.value)}/>
       <div className='d-flex gap-3 align-items-center'>
           <img src={btn1} alt=""  className='curser' onClick={() => uploadFile()}/>
           <img src={btn2} alt=""  className='curser' />
       </div>
    </div>
  )
}
