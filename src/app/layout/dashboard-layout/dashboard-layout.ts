import { Component, ElementRef, ViewChild } from '@angular/core';
import { faBars, faChevronDown, faCog, faHome, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [FaIconComponent, RouterModule],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css'
})
export class DashboardLayout {
  isSidebarOpen = false;

  faBars = faBars;
  faHome = faHome;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  faCog = faCog;
  faChevronDown = faChevronDown;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    
  }
  @ViewChild('userMenu') userMenu!: ElementRef;
  @ViewChild('userBtn') userBtn!: ElementRef;

  toggleUserMenu() {
    const menu = this.userMenu.nativeElement as HTMLElement;
    menu.classList.toggle('hidden');
  }
}
