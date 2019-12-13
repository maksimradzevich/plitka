import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { PlitkashopSharedModule } from 'app/shared/shared.module';
import { PlitkashopCoreModule } from 'app/core/core.module';
import { PlitkashopAppRoutingModule } from './app-routing.module';
import { PlitkashopHomeModule } from './home/home.module';
import { PlitkashopEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    PlitkashopSharedModule,
    PlitkashopCoreModule,
    PlitkashopHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    PlitkashopEntityModule,
    PlitkashopAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class PlitkashopAppModule {}
