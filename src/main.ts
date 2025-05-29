import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ClientComponent } from './components/client/client.component'; // Swaping in app.component.ts

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
