import { Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IImports } from 'app/shared/model/imports.model';
import { ImportsService } from './imports.service';

@Component({
  templateUrl: './imports-delete-dialog.component.html'
})
export class ImportsDeleteDialogComponent {
  imports: IImports;

  constructor(protected importsService: ImportsService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.importsService.delete(id).subscribe(() => {
      this.eventManager.broadcast({
        name: 'importsListModification',
        content: 'Deleted an imports'
      });
      this.activeModal.dismiss(true);
    });
  }
}
