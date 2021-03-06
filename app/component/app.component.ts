import { Component } from '@angular/core';

import { HTTP_PROVIDERS } from '@angular/http';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from
'@angular/router-deprecated';

import { ExamComponent } from './exam.component';
import { ResultComponent } from './result.component';
import { SelectBiletComponent } from './selectBilet.component';

import { QuestionService } from './../service/questions.service';
import { InnerDataService } from './../service/innerdata.service';

@Component({
	selector: 'app',
	templateUrl: 'html/app.component.html'
	,
	styleUrls:[],
	directives: [ROUTER_DIRECTIVES],
	providers: [
		QuestionService,
		InnerDataService,
		ROUTER_PROVIDERS,
		HTTP_PROVIDERS
	],

})	
@RouteConfig([
	{
		path: '/select',
		name:'Select',
		component: SelectBiletComponent,
		useAsDefault: true,
	},
	{
			path: '/exam',
		name: 'Exam',
		component: ExamComponent,
	},
	{
		path: '/result',
		name: 'Result',
		component: ResultComponent,
	},
])

export class AppComponent {
	title = 'Экзамен ПДД';
}