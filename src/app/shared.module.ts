import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EllipsisDirective } from './Directives/ellipsis.directive';
import { FilterPipe } from './Pipes/filter.pipe';

@NgModule({
  declarations: [FilterPipe, EllipsisDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FilterPipe,
    EllipsisDirective,
  ],
})
export class SharedModule {}
