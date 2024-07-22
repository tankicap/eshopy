import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Collapse } from 'bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
 
  closeNavbar(): void {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      new Collapse(navbarCollapse).hide();
    }
  }
}
