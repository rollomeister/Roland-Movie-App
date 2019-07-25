import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


@NgModule({
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      Ng2SearchPipeModule,
      RouterModule.forRoot([
         { path: '', component: MovieListComponent },
         { path: 'movies/:movieKey', component: MovieDetailsComponent },
      ])
   ],
   declarations: [
      AppComponent,
      TopBarComponent,
      MovieListComponent,
      MovieDetailsComponent,
      FooterComponent
   ],
   bootstrap: [ AppComponent ]
})
export class AppModule { }
