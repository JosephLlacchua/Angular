import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarContentComponent } from "./public/components/toolbar-content/toolbar-content.component";
import { MoviesContentComponent } from "./movies/components/movies-content/movies-content.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ToolbarContentComponent, MoviesContentComponent]
})
export class AppComponent {
  title = 'peliculas';
}
