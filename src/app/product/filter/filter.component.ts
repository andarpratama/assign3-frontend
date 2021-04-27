import { Component, OnInit, Input } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { FilterModule } from './filter.module';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
   @Input() item: FilterModule
//    filterHours : FilterModule
  constructor(private filterService : FilterService) { }

   ngOnInit(): void {
   //   this.filterHours = this.filterService.getFilterHours()
  }

}
