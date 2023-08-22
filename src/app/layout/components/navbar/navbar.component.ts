import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() sideNav?: MatDrawer;

  constructor() {}

  onMenuClick(){
    this.sideNav?.toggle();
  }
  onClickLinkedIn(){
    window.open(environment.socialMedia.linkedIn, "_blank");
  }
  onClickGitHub(){
    window.open(environment.socialMedia.gitHub, "_blank");
  }
}
