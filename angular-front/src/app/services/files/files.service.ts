import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadedDto } from 'src/assets/dto/file-uploaded-dto';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  URL = 'http://localhost:8000/formdata';

  constructor(private http: HttpClient) { }

  uploadFile(formData: FormData): Observable<FileUploadedDto>{

    return this.http.post<FileUploadedDto>(this.URL,formData);
  }
}
