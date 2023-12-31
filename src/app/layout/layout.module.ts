import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { RouterModule } from '@angular/router';
import { LayoutRoutes } from '../shared/routes/layout.routing';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from '@angular/cdk/menu';
import { LangComponent } from './components/language/lang.component';
import { ThemeComponent } from './components/theme/theme.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    MainContentComponent,
    FooterComponent,
    SidebarComponent,
    LangComponent,
    ThemeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItem,
    RouterModule.forChild(LayoutRoutes)
  ]
})
export class LayoutModule { }
