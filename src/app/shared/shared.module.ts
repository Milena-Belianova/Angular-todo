import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/icons/menu/menu.component';
import { EditComponent } from './components/icons/edit/edit.component';
import { DeleteComponent } from './components/icons/delete/delete.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MenuComponent, EditComponent, DeleteComponent, ModalComponent],
  imports: [CommonModule, FormsModule],
  exports: [MenuComponent, EditComponent, DeleteComponent],
})
export class SharedModule {}
