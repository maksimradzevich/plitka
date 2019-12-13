import { Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IShops } from 'app/shared/model/shops.model';
import { ShopsService } from './shops.service';

@Component({
  templateUrl: './shops-delete-dialog.component.html'
})
export class ShopsDeleteDialogComponent {
  shops: IShops;

  constructor(protected shopsService: ShopsService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.shopsService.delete(id).subscribe(() => {
      this.eventManager.broadcast({
        name: 'shopsListModification',
        content: 'Deleted an shops'
      });
      this.activeModal.dismiss(true);
    });
  }
}
