import { Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { ExampleScreenComponent } from './screens/example-screen/example-screen.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeScreenComponent
    },
    {
        path: 'example',
        component: ExampleScreenComponent
    },
];
