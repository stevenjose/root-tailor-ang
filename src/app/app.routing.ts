import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const appRoutes = [
    { path:"",component: HomeComponent },
    { path:"users",component: UserComponent, pathMatch:'full' }
];

export const routing = RouterModule.forRoot(appRoutes);