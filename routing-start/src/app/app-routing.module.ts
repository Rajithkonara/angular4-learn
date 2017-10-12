import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { UsersComponent } from 'app/users/users.component';
import { UserComponent } from 'app/users/user/user.component';
import { ServersComponent } from 'app/servers/servers.component';
import { ServerComponent } from 'app/servers/server/server.component';
import { EditServerComponent } from 'app/servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from 'app/page-not-found/page-not-found.component';
import { AuthGurd } from 'app/auth-gurd.service';
import { CanDeactivateGurd } from 'app/servers/edit-server/can-deactivate-gurd.service';
import { ErrorPageComponent } from 'app/error-page/error-page.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ] },
    { path: 'servers',
    //  canActivate: [AuthGurd],
     canActivateChild: [AuthGurd],
     component: ServersComponent, 
     children: [
      { path: ':id', component: ServerComponent }, 
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGurd] }
    ]}, 
    // { path: 'not-found', component: PageNotFoundComponent },  
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page Not Found!'} },  
    { path: '**', redirectTo: '/not-found' }
  ];
  
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}