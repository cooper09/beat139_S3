
import React from 'react'; 
import S3 from 'aws-s3';

const config = {
  bucketName: 'testviddy',
  //dirName: 'photos', /* optional */
  region: 'us-east-1',
  accessKeyId: 'AKIA2DTP7BZY52DEG3DJ',
  secretAccessKey: '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',
  s3Url: 'https://s3.amazonaws.com/', /* optional */
}

const S3Client = new S3(config);
const newFileName = 'my-awesome-file';

export default class App extends React.Component {
  upload(e){
    console.log("Upload this bad boy: "+ e.target.files[0].name );

    
    S3Client.uploadFile(e.target.files[0] )
      .then(data=>{
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
