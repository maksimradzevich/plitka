import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IDostavka } from 'app/shared/model/dostavka.model';
import { DostavkaService } from './dostavka.service';
import { DostavkaDeleteDialogComponent } from './dostavka-delete-dialog.component';

@Component({
  selector: 'jhi-dostavka',
  templateUrl: './dostavka.component.html'
})
export class DostavkaComponent implements OnInit, OnDestroy {
  dostavkas: IDostavka[];
  eventSubscriber: Subscription;

  constructor(protected dostavkaService: DostavkaService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll() {
    this.dostavkaService.query().subscribe((res: HttpResponse<IDostavka[]>) => {
      this.dostavkas = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInDostavkas();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IDostavka) {
    return item.id;
  }

  registerChangeInDostavkas() {
    this.eventSubscriber = this.eventManager.subscribe('dostavkaListModification', () => this.loadAll());
  }

  delete(dostavka: IDostavka) {
    const modalRef = this.modalService.open(DostavkaDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.dostavka = dostavka;
  }
}
