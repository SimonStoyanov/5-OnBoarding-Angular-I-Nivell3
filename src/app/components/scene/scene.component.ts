import { Component, input, InputSignal } from '@angular/core';
import { IStep } from '../../interfaces/i-step';

@Component({
  selector: 'app-scene',
  imports: [],
  templateUrl: './scene.component.html',
  styleUrl: './scene.component.scss'
})
export class SceneComponent {
  public steps: InputSignal<IStep[]> = input.required<IStep[]>();
}
