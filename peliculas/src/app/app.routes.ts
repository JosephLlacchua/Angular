import { Routes } from '@angular/router';
import {HomeContentComponent} from "./public/components/home-content/home-content.component";

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeContentComponent},
    { path: '**', redirectTo: 'not-found' }
];
