import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IOtzyvi } from 'app/shared/model/otzyvi.model';
import { OtzyviService } from './otzyvi.service';
import { OtzyviDeleteDialogComponent } from './otzyvi-delete-dialog.component';

@Component({
  selector: 'jhi-otzyvi',
  templateUrl: './otzyvi.component.html'
})
export class OtzyviComponent implements OnInit, OnDestroy {
  otzyvis: IOtzyvi[];
  eventSubscriber: Subscription;

  constructor(protected otzyviService: OtzyviService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll() {
    this.otzyviService.query().subscribe((res: HttpResponse<IOtzyvi[]>) => {
      this.otzyvis = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInOtzyvis();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IOtzyvi) {
    return item.id;
  }

  registerChangeInOtzyvis() {
    this.eventSubscriber = this.eventManager.subscribe('otzyviListModification', () => this.loadAll());
  }

  delete(otzyvi: IOtzyvi) {
    const modalRef = this.modalService.open(OtzyviDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.otzyvi = otzyvi;
  }
}
