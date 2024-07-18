import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from 'src/app/Shared/components/card-list/card-list.component';
import { CardComponent } from 'src/app/Shared/components/card/card.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardListComponent,
    CardComponent,
  ],
})
export class HomePageModule {}
