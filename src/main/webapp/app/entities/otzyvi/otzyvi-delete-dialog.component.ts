import { Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IOtzyvi } from 'app/shared/model/otzyvi.model';
import { OtzyviService } from './otzyvi.service';

@Component({
  templateUrl: './otzyvi-delete-dialog.component.html'
})
export class OtzyviDeleteDialogComponent {
  otzyvi: IOtzyvi;

  constructor(protected otzyviService: OtzyviService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.otzyviService.delete(id).subscribe(() => {
      this.eventManager.broadcast({
        name: 'otzyviListModification',
        content: 'Deleted an otzyvi'
      });
      this.activeModal.dismiss(true);
    });
  }
}
