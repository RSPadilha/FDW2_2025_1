import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'

})
export class ClientComponent {
  clients: any;
  queryClient(event: any){
    fetch('http://localhost:3000/client')
      .then(res => res.json())
      .then(res => this.clients = res)
  }
}
