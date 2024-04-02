import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-headbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './headbar.component.html',
  styleUrl: './headbar.component.css'
})
export class HeadbarComponent {

}
