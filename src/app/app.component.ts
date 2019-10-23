import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'angular-crash-todolist';
	greeting: string = "i'm a prop";
	constructor() {
		this.greeting = "here's Johnny";
		this.changeGreeting('REDRUM');
	}

	changeGreeting(greeting: string): void {
		this.greeting = greeting;
	}
}
