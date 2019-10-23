import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TodoService {
	constructor() {}

	getTodos() {
		return [
			{
				id: 1,
				title: 'todo 1',
				completed: false
			},
			{
				id: 2,
				title: 'todo 2',
				completed: true
			},
			{
				id: 3,
				title: 'todo 3',
				completed: false
			}
		];
	}
}
