import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BioComponent } from './bio/bio.component';
import { BookComponent } from './book/book.component';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: 'book', component: BookComponent },
      { path: '', redirectTo: '/bio', pathMatch: 'full' },
      { path: 'bio', component: BioComponent }
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
