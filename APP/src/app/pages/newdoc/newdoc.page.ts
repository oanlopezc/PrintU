import { Component, OnInit } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';


@Component({
  selector: 'app-newdoc',
  templateUrl: './newdoc.page.html',
  styleUrls: ['./newdoc.page.scss'],
})

export class NewdocPage implements OnInit {

  ngOnInit() {
  }
  

  public actpi=true;
  public actpf=true;
  public bsubir=true;
  public uploadtext="";
  public downloadtext="";
  public dir="";
  public fileTransfer:FileTransferObject;

  constructor(private fileChooser: FileChooser, 
    private filePath: FilePath, 
    private fileOpener: FileOpener,
    private transfer: FileTransfer, 
    private file: File) { 
  }
  

  unapag(){
    this.actpf=true;
    this.actpi=false;
  }
  rpag(){
    this.actpf=false;
    this.actpi=false;
  }
  tpag(){
    this.actpf=true;
    this.actpi=true;
  }

  choosefile(){
    this.fileChooser.open()
    .then(file => {
      this.filePath.resolveNativePath(file).then(resolvedFilePath => {
        this.dir=resolvedFilePath;
        this.fileOpener.open(resolvedFilePath, 'application/pdf').then(value => {
          //alert('El archivo seleccionado es: ' + resolvedFilePath);
          this.fileTransfer = this.transfer.create();
          let options: FileUploadOptions={
            fileKey: 'file',
            mimeType: 'application/pdf',
            fileName: 'nico.pdf',
            chunkedMode: false,
            headers: {}
          }
          this.uploadtext = "Subiendo archivo... ";
          this.fileTransfer.upload(resolvedFilePath,"http://10.203.163.52/upload.php",options).then(value =>{
            alert("Transferencia completada = "+JSON.stringify(value));
            this.uploadtext="";
          }).catch(err =>{
            alert(JSON.stringify(err));
          })
        });
        }).catch(err => {
      alert(JSON.stringify(err));
      }).catch(err => {
      alert(JSON.stringify(err));
    })
    }).catch(err => {
      alert(JSON.stringify(err));
    });
    this.bsubir=false; 
  }

  abort_upload(){
    this.fileTransfer.abort();
    alert("Subida cancelada.")
  }
}