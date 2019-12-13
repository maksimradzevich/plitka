import { Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IPlitka } from 'app/shared/model/plitka.model';
import { PlitkaService } from './plitka.service';

@Component({
  templateUrl: './plitka-delete-dialog.component.html'
})
export class PlitkaDeleteDialogComponent {
  plitka: IPlitka;

  constructor(protected plitkaService: PlitkaService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.plitkaService.delete(id).subscribe(() => {
      this.eventManager.broadcast({
        name: 'plitkaListModification',
        content: 'Deleted an plitka'
      });
      this.activeModal.dismiss(true);
    });
  }
}
