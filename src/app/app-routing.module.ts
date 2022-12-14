import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './users/user/user.component';
import { ListComponent } from './users/list/list.component';
import { DetailsComponent } from './users/details/details.component';
import { PermissionsGuard } from './guards/permissions.guard';
import { DataResolverService } from './resolvers/data.resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'reactive-contact', loadChildren: ()=> 
    import('./reactive-contact/reactive-contact.module').then( module => module.ReactiveContactModule)
  },
  { path: 'template-contact/:id', 
    component: ContactComponent,
    resolve: { department: DataResolverService } 
  },
  { path: 'users', component: UserComponent,  canActivate: [PermissionsGuard],
    children: [
      {path: 'list', component: ListComponent},
      {path: 'details', component: DetailsComponent}
    ] 
  },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
