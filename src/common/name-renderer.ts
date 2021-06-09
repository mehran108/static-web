
import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
// import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid';

@Component({
  selector: 'app-name-renderer',
  template: `<a (click)="onClick($event)" href="javascript:void(0)" style="color: #9700a5;
  font-weight: bold;
  display: block;
  text-transform: capitalize;
  text-decoration: underline;
  font-size: 12px; cursor:pointer" aria-hidden="true">
 {{params.value}}</a>`
})

export class NameRendererComponent implements ICellRendererAngularComp {

  params: any;
  label: any;

  agInit(params: any): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event: any) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      };
      this.params.onClick(params);
    }
  }
}
