import { Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IAdmins } from 'app/shared/model/admins.model';
import { AdminsService } from './admins.service';

@Component({
  templateUrl: './admins-delete-dialog.component.html'
})
export class AdminsDeleteDialogComponent {
  admins: IAdmins;

  constructor(protected adminsService: AdminsService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.adminsService.delete(id).subscribe(() => {
      this.eventManager.broadcast({
        name: 'adminsListModification',
        content: 'Deleted an admins'
      });
      this.activeModal.dismiss(true);
    });
  }
}
