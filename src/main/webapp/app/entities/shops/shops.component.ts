import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IShops } from 'app/shared/model/shops.model';
import { ShopsService } from './shops.service';
import { ShopsDeleteDialogComponent } from './shops-delete-dialog.component';

@Component({
  selector: 'jhi-shops',
  templateUrl: './shops.component.html'
})
export class ShopsComponent implements OnInit, OnDestroy {
  shops: IShops[];
  eventSubscriber: Subscription;

  constructor(protected shopsService: ShopsService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll() {
    this.shopsService.query().subscribe((res: HttpResponse<IShops[]>) => {
      this.shops = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInShops();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IShops) {
    return item.id;
  }

  registerChangeInShops() {
    this.eventSubscriber = this.eventManager.subscribe('shopsListModification', () => this.loadAll());
  }

  delete(shops: IShops) {
    const modalRef = this.modalService.open(ShopsDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.shops = shops;
  }
}
