import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule } from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule,RouterLink],
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css'
})
export class ToolbarContentComponent {

}
