import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from 'src/app/redux/state.models';
import { Store } from '@ngrx/store';
import { TodosActions } from 'src/app/redux/actions/todos.actions';
import { SharedModule } from '../../shared/shared.module';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  imports: [CommonModule, SharedModule, NgbModule],
})
export class TodoItemComponent {
  @Input() task!: Task;

  constructor(private store: Store, public modalService: NgbModal) {}

  onTaskDelete() {
    this.store.dispatch(TodosActions.removeTask({ id: this.task.id }));
  }

  openEditModal() {
    const modalRef = this.modalService.open(ModalComponent, { centered: true });
    modalRef.componentInstance.task = this.task;
    modalRef.result.then(
      (result) => {
        if (result) {
          console.log(result);
          this.store.dispatch(TodosActions.editTask(result));
        }
      },
      (reason) => {
        if (reason) {
          console.log(`Dismissed `);
        }
      }
    );
  }

  onCheckboxClick() {
    this.store.dispatch(TodosActions.setTaskDone({ id: this.task.id }));
  }
}
