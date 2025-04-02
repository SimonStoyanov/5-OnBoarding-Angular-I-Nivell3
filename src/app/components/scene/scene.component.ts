import { Component, input, InputSignal } from '@angular/core';
import { IStep } from '../../interfaces/i-step';
import { trigger, transition, query, style, animate, group } from '@angular/animations';

//#region ANIMATION
const left = [
  query(':enter, :leave', style({ 
    position: 'absolute', 
    width: '100%' 
  }), { optional: true }),

  group([
    query(':enter', [
      style({ transform: 'translateX(-100%)', opacity: 0 }), 
      animate('.4s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
    ], { optional: true }),

    query(':leave', [
      style({ transform: 'translateX(0)', opacity: 1 }), 
      animate('.4s ease-in', style({ transform: 'translateX(100%)', opacity: 0 }))
    ], { optional: true }),
  ]),
];

const right = [
  query(':enter, :leave', style({ 
    position: 'absolute', 
    width: '100%' 
  }), { optional: true }),

  group([
    query(':enter', [
      style({ transform: 'translateX(100%)', opacity: 0 }), 
      animate('.4s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
    ], { optional: true }),

    query(':leave', [
      style({ transform: 'translateX(0)', opacity: 1 }), 
      animate('.4s ease-in', style({ transform: 'translateX(-100%)', opacity: 0 }))
    ], { optional: true }),
  ]),
];

//#endregion ANIMATION

@Component({
  selector: 'app-scene',
  imports: [],
  templateUrl: './scene.component.html',
  styleUrl: './scene.component.scss',
  animations: [
    trigger('animSlider', [
      transition(':increment', right),
      transition(':decrement', left),
    ])
  ]
})
export class SceneComponent {
  public steps: InputSignal<IStep[]> = input.required<IStep[]>();
  public currentStep: number = 0;

  changeSlide(arg0: number) {
    this.currentStep += arg0;
  }
}
