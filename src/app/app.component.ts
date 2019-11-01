import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalState: any = {
    organizeInterviewModal: false,
    organizePaperTestModal: false,
    screenResumeModal: false,
    addToProjectModal: false,
    addToGroupModal: false,
  };
  title = 'zorro';
  projectList = [
    {label: 'a', value: 213},
    {label: 'b', value: 222},
    {label: 'c', value: 213},
    {label: 'd', value: 213},
  ]
  
  onClose(key) {
    this.modalState[key] = false;
  }

  showModal(key) {
    this.modalState[key] = true;
  }
}
