import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-learn',
  templateUrl: './container-learn.component.html',
  styleUrls: ['./container-learn.component.css']
})
export class ContainerLearnComponent implements OnInit {
  title:string = "My Learning"
  constructor() { }

  ngOnInit(): void {
  }

}
