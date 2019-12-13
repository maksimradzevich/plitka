import { Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ISells } from 'app/shared/model/sells.model';
import { SellsService } from './sells.service';

@Component({
  templateUrl: './sells-delete-dialog.component.html'
})
export class SellsDeleteDialogComponent {
  sells: ISells;

  constructor(protected sellsService: SellsService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.sellsService.delete(id).subscribe(() => {
      this.eventManager.broadcast({
        name: 'sellsListModification',
        content: 'Deleted an sells'
      });
      this.activeModal.dismiss(true);
    });
  }
}
