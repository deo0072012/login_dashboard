import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FeathericonsComponent } from './components/feathericons/feathericons.component';
import { LayoutComponent } from './layout/layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';




@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, FeathericonsComponent, LayoutComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    FormsModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
