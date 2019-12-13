import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admins',
        loadChildren: () => import('./admins/admins.module').then(m => m.PlitkashopAdminsModule)
      },
      {
        path: 'clients',
        loadChildren: () => import('./clients/clients.module').then(m => m.PlitkashopClientsModule)
      },
      {
        path: 'course-parts',
        loadChildren: () => import('./course-parts/course-parts.module').then(m => m.PlitkashopCoursePartsModule)
      },
      {
        path: 'dostavka',
        loadChildren: () => import('./dostavka/dostavka.module').then(m => m.PlitkashopDostavkaModule)
      },
      {
        path: 'imports',
        loadChildren: () => import('./imports/imports.module').then(m => m.PlitkashopImportsModule)
      },
      {
        path: 'shops',
        loadChildren: () => import('./shops/shops.module').then(m => m.PlitkashopShopsModule)
      },
      {
        path: 'otzyvi',
        loadChildren: () => import('./otzyvi/otzyvi.module').then(m => m.PlitkashopOtzyviModule)
      },
      {
        path: 'plitka',
        loadChildren: () => import('./plitka/plitka.module').then(m => m.PlitkashopPlitkaModule)
      },
      {
        path: 'sells',
        loadChildren: () => import('./sells/sells.module').then(m => m.PlitkashopSellsModule)
      },
      {
        path: 'solders',
        loadChildren: () => import('./solders/solders.module').then(m => m.PlitkashopSoldersModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class PlitkashopEntityModule {}
