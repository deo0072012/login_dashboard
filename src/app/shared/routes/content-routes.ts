import { Routes} from '@angular/router';


export const content: Routes = [
{
    path:'dashboard',
    loadChildren:()=>import('../../adminpanel/dashboard/dashboard.module').then(m=>m.DashboardModule),
}

];