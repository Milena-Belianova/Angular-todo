import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from 'src/app/redux/state.models';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() public task: Task | undefined;

  @Input() public isEdit = false;

  taskBody = '';

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    if (this.task) {
      this.taskBody = this.task.body;
    }
  }

  passBack() {
    if (this.isEdit) {
      this.activeModal.close({ ...this.task, body: this.taskBody });
    }
    this.activeModal.close({ id: uuidv4(), body: this.taskBody, done: false });
  }
}
