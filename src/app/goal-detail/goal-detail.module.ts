import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalDetailComponent } from './components/goal-detail/goal-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [GoalDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
        [
            {
                path: '',
                component: GoalDetailComponent
            }
        ]
    ),
  ]
})
export class GoalDetailModule { }
