import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ISells } from 'app/shared/model/sells.model';
import { SellsService } from './sells.service';
import { SellsDeleteDialogComponent } from './sells-delete-dialog.component';

@Component({
  selector: 'jhi-sells',
  templateUrl: './sells.component.html'
})
export class SellsComponent implements OnInit, OnDestroy {
  sells: ISells[];
  eventSubscriber: Subscription;

  constructor(protected sellsService: SellsService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll() {
    this.sellsService.query().subscribe((res: HttpResponse<ISells[]>) => {
      this.sells = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInSells();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: ISells) {
    return item.id;
  }

  registerChangeInSells() {
    this.eventSubscriber = this.eventManager.subscribe('sellsListModification', () => this.loadAll());
  }

  delete(sells: ISells) {
    const modalRef = this.modalService.open(SellsDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.sells = sells;
  }
}
