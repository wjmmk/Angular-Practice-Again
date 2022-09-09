import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithoutSaveGuard } from '../guards/without-save.guard';
import { DataResolverService } from '../resolvers/data.resolver.service';
import { ReactiveContactComponent } from './reactive-contact.component';

const routes: Routes = [
  { 
    path: 'reactive-contact', 
    component: ReactiveContactComponent, 
    canDeactivate: [WithoutSaveGuard],
    resolve: { department: DataResolverService } 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveContactRoutingModule { }
