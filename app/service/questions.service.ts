import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import { Question } from './../class/Question';

@Injectable()
export class QuestionService {
	private biletUrl = 'data/b1.json';

	constructor(
		private http: Http
	) { 
	}

	getQuestions(id) {
		this.biletUrl = "data/b"+ id +".json";
		return this.http.get(this.biletUrl).map(res => {
			return res.json();
		});
	}

	adapt(data){//todo внедрить в getQuestions
		return data.map(item => {
			let quest = new Question();
			quest.question = item.quest;
			quest.right = item.otvet - 1;
			quest.variants = item.v.filter(variant => {return variant});
			quest.picture = item.realUrl;
			quest.comment = item.comments;
			return quest;
		});
	}
}