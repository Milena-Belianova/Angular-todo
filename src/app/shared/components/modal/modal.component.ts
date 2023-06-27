import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from 'src/app/redux/state.models';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() public task: Task | undefined;

  taskBody = '';

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    if (this.task) {
      this.taskBody = this.task.body;
    }
  }

  passBack() {
    this.activeModal.close({ ...this.task, body: this.taskBody });
  }
}
