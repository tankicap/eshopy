import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReviewComponent } from './reviews/review/review.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'reviews',
        component:ReviewComponent
    }
];
