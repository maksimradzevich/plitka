import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IClients } from 'app/shared/model/clients.model';
import { ClientsService } from './clients.service';
import { ClientsDeleteDialogComponent } from './clients-delete-dialog.component';

@Component({
  selector: 'jhi-clients',
  templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit, OnDestroy {
  clients: IClients[];
  eventSubscriber: Subscription;

  constructor(protected clientsService: ClientsService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll() {
    this.clientsService.query().subscribe((res: HttpResponse<IClients[]>) => {
      this.clients = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInClients();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IClients) {
    return item.id;
  }

  registerChangeInClients() {
    this.eventSubscriber = this.eventManager.subscribe('clientsListModification', () => this.loadAll());
  }

  delete(clients: IClients) {
    const modalRef = this.modalService.open(ClientsDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.clients = clients;
  }
}
