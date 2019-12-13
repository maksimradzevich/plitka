import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IImports } from 'app/shared/model/imports.model';
import { ImportsService } from './imports.service';
import { ImportsDeleteDialogComponent } from './imports-delete-dialog.component';

@Component({
  selector: 'jhi-imports',
  templateUrl: './imports.component.html'
})
export class ImportsComponent implements OnInit, OnDestroy {
  imports: IImports[];
  eventSubscriber: Subscription;

  constructor(protected importsService: ImportsService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll() {
    this.importsService.query().subscribe((res: HttpResponse<IImports[]>) => {
      this.imports = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInImports();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IImports) {
    return item.id;
  }

  registerChangeInImports() {
    this.eventSubscriber = this.eventManager.subscribe('importsListModification', () => this.loadAll());
  }

  delete(imports: IImports) {
    const modalRef = this.modalService.open(ImportsDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.imports = imports;
  }
}
