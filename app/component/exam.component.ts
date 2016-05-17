import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Question } from './../class/question';

import { QuestionService } from './../service/questions.service';
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
	takeExam: boolean;

	nextQuestion() {
		this.answers[this.curQuestionId] = this.questions[this.curQuestionId]
		.variants.indexOf(this.selectedVariant);

		this.selectedVariant = '';
		if (this.curQuestionId + 1 >= this.questions.length) {
			this.innerDataService.setQuestions(this.questions);
			this.innerDataService.setAnswers(this.answers);
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
		private questionsService: QuestionService,
		private innerDataService: InnerDataService
	){
		this.curQuestionId = 0;
		this.selectedVariant = '';
		this.takeExam = false;

		questionsService.getQuestions().subscribe(quests => { 
			this.questions = this.questionsService.adapt(quests);
			this.answers.length = this.questions.length;
			for (let i = 0; i < this.answers.length; i++){
				this.answers[i] = -1;
			}
		});
	}
}