import { APP_INITIALIZER, NgModule } from '@angular/core';
import { NgIf, AsyncPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { LoaderInterceptorService } from './Shared/loader/services/loader-interceptor.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoaderComponent } from './Shared/loader/loader.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './Shared/components/card/card.component';
import { CardListComponent } from './Shared/components/card-list/card-list.component';
import { CoursesService } from './Shared/services/courses.service';

function webInizialization(coursesService: CoursesService) {
  return () => {
    return coursesService.retrieveDataCourses();
  };
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    LoaderComponent,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    NgIf,
    AsyncPipe,
    MatCardModule,
    CardComponent,
    CardListComponent,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: webInizialization,
      deps: [CoursesService],
      multi: true,
    },
    //   {
    //     provide: HTTP_INTERCEPTORS,
    //     useClass: LoaderInterceptorService,
    //     multi: true,
    //   },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
