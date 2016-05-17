export class Question {
	question: string;
	variants: string[];
	right: number;
	picture: string;
	comment: string;

	checkAnswer(answer:string){
		return this.variants.indexOf(answer) == this.right;
	}
}