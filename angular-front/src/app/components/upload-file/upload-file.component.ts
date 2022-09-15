import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FilesService } from 'src/app/services/files/files.service';
import { FileUploadedDto } from 'src/assets/dto/file-uploaded-dto';
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  faUpload = faUpload;
  fileDto: FileUploadedDto = new FileUploadedDto;
  fileForm = new FormGroup({
    fileToUploadControl: new FormControl('', [Validators.required])
  });


  constructor(private fileService: FilesService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const formData: FormData = new FormData();
    if (this.fileForm.get('fileToUploadControl')?.valid) {
      formData.append('file', this.fileForm.get('fileToUploadControl')?.value!);
      this.fileService.uploadFile(formData).subscribe(
        (fileDto: FileUploadedDto) => {
          this.fileDto = {...fileDto};
        },
        () => { },
        () => { }
      )
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    console.warn(file);
    console.warn(this.fileForm.get('fileToUploadControl'));

    this.fileForm.get('fileToUploadControl')?.setValue(file);
  }

}
