
import React from 'react'; 
import S3 from 'aws-s3';

const config = {
  bucketName: 'testviddy',
  //dirName: 'photos', /* optional */
  region: 'us-east-1',
   accessKeyId: 'AKIA2DTP7BZY52DEG3DJ',
  secretAccessKey: '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',
  s3Url: 'https://s3.amazonaws.com/testviddy/', /* optional */
}

const S3Client = new S3(config);


export default class App extends React.Component {
  upload(e){
    console.log("Upload this bad boy: "+ e.target.files[0].name );

    

    const newFileName = e.target.files[0].name.split('.').slice(0, -1).join('.');

    console.log("FileName: ", newFileName);
    
    S3Client.uploadFile(e.target.files[0], newFileName   )
      .then(data=>{
        alert("File has been successfully uploaded.")
        console.log("S3 data: "+ data );
      })
      .catch( err =>{
        console.log("Error: " + err )
      })
  }
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Upload Files to S3</h1>
        <input type='file' onChange={this.upload}>
        
        </input>
      </div>);
  }
}
