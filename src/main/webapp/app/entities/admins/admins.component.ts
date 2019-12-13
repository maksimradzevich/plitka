import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IAdmins } from 'app/shared/model/admins.model';
import { AdminsService } from './admins.service';
import { AdminsDeleteDialogComponent } from './admins-delete-dialog.component';

@Component({
  selector: 'jhi-admins',
  templateUrl: './admins.component.html'
})
export class AdminsComponent implements OnInit, OnDestroy {
  admins: IAdmins[];
  eventSubscriber: Subscription;

  constructor(protected adminsService: AdminsService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll() {
    this.adminsService.query().subscribe((res: HttpResponse<IAdmins[]>) => {
      this.admins = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInAdmins();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IAdmins) {
    return item.id;
  }

  registerChangeInAdmins() {
    this.eventSubscriber = this.eventManager.subscribe('adminsListModification', () => this.loadAll());
  }

  delete(admins: IAdmins) {
    const modalRef = this.modalService.open(AdminsDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.admins = admins;
  }
}
