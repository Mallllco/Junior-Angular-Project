import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListaCorsiComponent } from './lista-corsi.component';
import { DettagliComponent } from './dettagli/dettagli.component';
import { CardListComponent } from 'src/app/Shared/components/card-list/card-list.component';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from 'src/app/Shared/components/card/card.component';
import { AggiungiCorsoDialogComponent } from './dialog/aggiungi-corso-dialog/aggiungi-corso-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MsToTimePipe } from 'src/app/Shared/pipes/ms-to-time.pipe';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ListaCorsiComponent,
      },
      {
        path: ':id',
        component: DettagliComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    ListaCorsiComponent,
    DettagliComponent,
    AggiungiCorsoDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardListComponent,
    MatCardModule,
    CardListComponent,
    CardComponent,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MsToTimePipe,
    MatIconModule,
    FormsModule,
  ],
})
export class ListaCorsiModule {}
