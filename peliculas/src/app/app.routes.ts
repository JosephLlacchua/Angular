import { Routes } from '@angular/router';
import {HomeContentComponent} from "./public/components/home-content/home-content.component";
import{MoviesContentComponent} from "./movies/components/movies-content/movies-content.component";
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeContentComponent},
    { path: 'business/peliculas', component: MoviesContentComponent},
    { path: '**', redirectTo: 'not-found' }
    
];
