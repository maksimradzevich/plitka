import { Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IDostavka } from 'app/shared/model/dostavka.model';
import { DostavkaService } from './dostavka.service';

@Component({
  templateUrl: './dostavka-delete-dialog.component.html'
})
export class DostavkaDeleteDialogComponent {
  dostavka: IDostavka;

  constructor(protected dostavkaService: DostavkaService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.dostavkaService.delete(id).subscribe(() => {
      this.eventManager.broadcast({
        name: 'dostavkaListModification',
        content: 'Deleted an dostavka'
      });
      this.activeModal.dismiss(true);
    });
  }
}
