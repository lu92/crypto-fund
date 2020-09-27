import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {RootNavComponent} from './root-nav/root-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {PerformanceHistoryComponent} from './performance-history/performance-history.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {MatCardModule} from '@angular/material/card';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EstimatedBalanceComponent } from './estimated-balance/estimated-balance.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RootNavComponent,
    PerformanceHistoryComponent,
    PortfolioComponent,
    EstimatedBalanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgxChartsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
