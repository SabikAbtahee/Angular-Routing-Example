import { TimelineComponent } from './../timeline/timeline.component';
import { ListComponent } from './../list/list.component';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    onOutletLoaded(component) {
        if (component instanceof ListComponent) {
            component.nodevar = 'list';

        }
        if (component instanceof TimelineComponent) {
            component.timelinevar = 'timeline';

        }

    }

}
