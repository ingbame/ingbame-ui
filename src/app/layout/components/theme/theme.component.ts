import { Component } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['../navbar/navbar.component.scss']
})
export class ThemeComponent {
  bgNav: string = "bgNavColor";
  colorNav: string = "colorNav";
  bgModal: string = "bgModalColor";
  bgMain: string = "bgMainColor";
  bgSecundary: string = "bgSecundaryColor";
  color: string = "color";

  constructor() { }

  changeTheme(theme: string): void {
    document.documentElement.style.setProperty(`--${this.bgNav}`, `var(--${theme}-bg-nav)`);
    document.documentElement.style.setProperty(`--${this.colorNav}`, `var(--${theme}-color-nav)`);
    document.documentElement.style.setProperty(`--${this.bgModal}`, `var(--${theme}-bg-modal)`);
    document.documentElement.style.setProperty(`--${this.bgMain}`, `var(--${theme}-bg-main)`);
    document.documentElement.style.setProperty(`--${this.bgSecundary}`, `var(--${theme}-bg-main)`);
    document.documentElement.style.setProperty(`--${this.color}`, `var(--${theme}-color)`);
  }
}
