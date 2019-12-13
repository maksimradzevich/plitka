import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ISolders } from 'app/shared/model/solders.model';
import { SoldersService } from './solders.service';
import { SoldersDeleteDialogComponent } from './solders-delete-dialog.component';

@Component({
  selector: 'jhi-solders',
  templateUrl: './solders.component.html'
})
export class SoldersComponent implements OnInit, OnDestroy {
  solders: ISolders[];
  eventSubscriber: Subscription;

  constructor(protected soldersService: SoldersService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll() {
    this.soldersService.query().subscribe((res: HttpResponse<ISolders[]>) => {
      this.solders = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInSolders();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: ISolders) {
    return item.id;
  }

  registerChangeInSolders() {
    this.eventSubscriber = this.eventManager.subscribe('soldersListModification', () => this.loadAll());
  }

  delete(solders: ISolders) {
    const modalRef = this.modalService.open(SoldersDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.solders = solders;
  }
}
