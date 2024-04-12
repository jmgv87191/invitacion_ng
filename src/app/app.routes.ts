import { Routes } from '@angular/router';
import { JmgrComponent } from './components/jmgr/jmgr.component';
import { EValeriaGtzVComponent } from './components/e-valeria-gtz-v/e-valeria-gtz-v.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"1",
        component:JmgrComponent
    },
    {
        path:"2",
        component:EValeriaGtzVComponent
    },
    {
        path:"footer",
        component:FooterComponent
    },
];
