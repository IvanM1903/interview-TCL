import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KittensImageComponent } from './components/kittens-image/kittens-image.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';

const routes: Routes = [
  {path: 'kittens/image', component: KittensImageComponent},
  {path: 'upload', component: UploadFileComponent},
  {path: '', redirectTo: '/kittens/image', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
