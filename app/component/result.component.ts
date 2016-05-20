import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Question } from './../class/question';

import { InnerDataService } from './../service/innerdata.service';

@Component({
	selector: 'result',
	templateUrl: 'html/result.component.html',
	styleUrls: [],
})

export class ResultComponent {
	right: number;
	all: number;
	selectedQuest: Question;
	selectedId: number;

	constructor(
		private router: Router,
		private innerDataService: InnerDataService
	){
		if(!this.innerDataService.questions || this.innerDataService.questions.length == 0){
				this.router.navigate(['Select', { }]);
		}
		this.all = innerDataService.questions.length;
		this.right = innerDataService.answers.reduce(function(sum: number, current: number, i: number)
		{ return sum + (current == innerDataService.questions[i].right ? 1 : 0); }, 0);
	}

	questSelect(i){
		this.selectedId = i;
		this.selectedQuest = this.innerDataService.questions[this.selectedId];
	}

	toSelect(){
		this.router.navigate(['Select', {}]);
	}
}