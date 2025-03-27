import { Injectable } from '@angular/core';
import { IStep } from '../interfaces/i-step';

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  private steps: IStep[] = [
    {
      title: 'abc',
      description: 'abc',
      img: '...',
      bgcolor: '...'
    }
  ];

  getSteps(): IStep[] {
    return this.steps;
  }

  constructor() { }
}
