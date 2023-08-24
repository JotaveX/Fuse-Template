import { Component, Output } from '@angular/core';
import { CommunicationService } from 'app/shared/communication.service';


@Component({
  selector: 'app-three-dot',
  templateUrl: './three-dot.component.html',
  styleUrls: ['./three-dot.component.scss']
})
export class ThreeDotComponent {
  @Output() public listState: string = 'list';

  constructor(private communicationService: CommunicationService) {}

  
  toggleListState(newState: string): void {
    this.listState = newState;
    this.communicationService.setListState(newState);
  }

  changeListState(state: string) {
    this.listState = state;
  }
}
