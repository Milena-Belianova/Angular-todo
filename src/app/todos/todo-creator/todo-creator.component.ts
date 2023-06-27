import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TodosActions } from 'src/app/redux/actions/todos.actions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-todo-creator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-creator.component.html',
  styleUrls: ['./todo-creator.component.scss'],
})
export class TodoCreatorComponent {
  constructor(private store: Store, public modalService: NgbModal) {}

  openModal() {
    const modalRef = this.modalService.open(ModalComponent, { centered: true });
    modalRef.componentInstance.isEdit = false;
    modalRef.result.then(
      (result) => {
        if (result) {
          this.store.dispatch(TodosActions.addTask(result));
        }
      },
      (reason) => {
        if (reason) {
          console.log(`Dismissed `);
        }
      }
    );
  }
}
