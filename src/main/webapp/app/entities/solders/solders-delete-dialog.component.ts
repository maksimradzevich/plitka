import { Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ISolders } from 'app/shared/model/solders.model';
import { SoldersService } from './solders.service';

@Component({
  templateUrl: './solders-delete-dialog.component.html'
})
export class SoldersDeleteDialogComponent {
  solders: ISolders;

  constructor(protected soldersService: SoldersService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.soldersService.delete(id).subscribe(() => {
      this.eventManager.broadcast({
        name: 'soldersListModification',
        content: 'Deleted an solders'
      });
      this.activeModal.dismiss(true);
    });
  }
}
