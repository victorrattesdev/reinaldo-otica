import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadbarComponent } from './sharepages/headbar/headbar.component';
import { FooterComponent } from './sharepages/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reinaldo-otica';
}
