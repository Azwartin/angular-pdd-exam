import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Question } from './../class/question';

import { InnerDataService } from './../service/innerdata.service';

@Component({
	selector: 'exam',
	templateUrl: 'html/exam.component.html',
	styleUrls: [],
})

export class ExamComponent {
	questions: Question[] = [];
	answers: number[] = [];
	curQuestionId: number;
	selectedVariant: string;

	nextQuestion() {
		this.answers[this.curQuestionId] = this.questions[this.curQuestionId]
		.variants.indexOf(this.selectedVariant);

		this.selectedVariant = '';
		if (this.curQuestionId + 1 >= this.questions.length) {
			//this.innerDataService.setQuestions(this.questions);
			//this.innerDataService.setAnswers(this.answers);
			this.router.navigate(['Result', { }]);
		} else {
			this.curQuestionId++;
		}
	}

	selectVariant(variant){
		this.selectedVariant = variant;
	}

	constructor(
		private router: Router,
		private innerDataService: InnerDataService
	){
		this.curQuestionId = 0;
		this.selectedVariant = '';
		this.questions = this.innerDataService.questions;
		this.answers = this.innerDataService.answers;
		//this.innerDataService.setQuestions();
	}
}