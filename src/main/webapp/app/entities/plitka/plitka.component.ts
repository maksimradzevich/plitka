import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IPlitka } from 'app/shared/model/plitka.model';
import { PlitkaService } from './plitka.service';
import { PlitkaDeleteDialogComponent } from './plitka-delete-dialog.component';

@Component({
  selector: 'jhi-plitka',
  templateUrl: './plitka.component.html'
})
export class PlitkaComponent implements OnInit, OnDestroy {
  plitkas: IPlitka[];
  eventSubscriber: Subscription;

  constructor(protected plitkaService: PlitkaService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll() {
    this.plitkaService.query().subscribe((res: HttpResponse<IPlitka[]>) => {
      this.plitkas = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInPlitkas();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IPlitka) {
    return item.id;
  }

  registerChangeInPlitkas() {
    this.eventSubscriber = this.eventManager.subscribe('plitkaListModification', () => this.loadAll());
  }

  delete(plitka: IPlitka) {
    const modalRef = this.modalService.open(PlitkaDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.plitka = plitka;
  }
}
