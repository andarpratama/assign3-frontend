import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-profile',
  templateUrl: './container-profile.component.html',
  styleUrls: ['./container-profile.component.css']
})
export class ContainerProfileComponent implements OnInit {
  title:string = "My Profile"
  constructor() { }

  ngOnInit(): void {
  }

}
