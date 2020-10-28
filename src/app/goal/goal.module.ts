import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './components/base/base.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ListComponent } from './components/list/list.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    
    
    {
        path:'',
        component:BaseComponent,
        children:[
            {
                path: 'list',
                component: ListComponent,
              },
              {
                path: 'timeline',
                component: TimelineComponent,
              },
              {
                path: '',
                redirectTo:'timeline',
                pathMatch:'full'
              },
        ]
    }
  ];

@NgModule({
  declarations: [BaseComponent, TimelineComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class GoalModule { }
