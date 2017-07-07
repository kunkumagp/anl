import {Component} from 'angular2/core';
import {Config} from './config.component';
import { Http, RequestOptions, URLSearchParams } from 'angular2/http';


@Component({
    selector: 'title',
    template: '{{ appName }}'
})

export class AppComponent {
    appName = Config.MAIN_HEADING;
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/html/index.component.html',
    styleUrls:['css/custom.css']
})

export class bodyComponent {
    appName = Config.MAIN_HEADING;
}

