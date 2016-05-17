import { Component } from '@angular/core';

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
		private innerDataService: InnerDataService
	){
		this.all = innerDataService.questions.length;
		this.right = innerDataService.answers.reduce(function(sum: number, current: number, i: number)
		{ return sum + (current == innerDataService.questions[i].right ? 1 : 0); }, 0);
	}

	questSelect(i){
		this.selectedId = i;
		this.selectedQuest = this.innerDataService.questions[this.selectedId];
	}
}