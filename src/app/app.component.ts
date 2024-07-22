import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import AOS from 'aos';
import { MainComponent } from "./main/main.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { ProductListsComponent } from "./product/product-lists/product-lists.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, FooterComponent, ProductListsComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Eshoppy';

  ngOnInit() {
    AOS.init();
  }
}
