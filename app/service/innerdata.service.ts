import { Injectable } from '@angular/core';

import { Question } from './../class/Question';

@Injectable()
export class InnerDataService{
	questions: Question[] = [];
	answers: number[] = [];

	getQuestions() {
		return Promise.resolve(this.questions);
	}

	setQuestions(questions:Question[]){
		this.questions = questions;
	}

	getAnswers(){
		return Promise.resolve(this.answers);
	}

	setAnswers(isRight: number[]){
		this.answers = isRight;
	}

	setAnswer(id:number, answer: number){
		this.answers[id] = answer;
	}
}