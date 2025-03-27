import { Component, OnInit } from '@angular/core';
import { SceneComponent } from "../scene/scene.component";
import { IStep } from '../../interfaces/i-step';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'app-home',
  imports: [SceneComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  steps: IStep[] = [];

  constructor(private stepsService: StepsService) {}

  ngOnInit() {
    this.steps = this.stepsService.getSteps();
  }
}
