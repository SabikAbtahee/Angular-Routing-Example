import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './goal/components/base/base.component';

const routes: Routes = [
    {
        path: 'goals',
        loadChildren: () => import('../app/goal/goal.module').then(x => x.GoalModule)
    },
    {
        path: 'goals/:id',
        loadChildren: () => import('../app/goal-detail/goal-detail.module').then(x => x.GoalDetailModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
