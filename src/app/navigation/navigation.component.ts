import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() {
  }

   ngOnInit(): void {
      $(document).ready(function() {
         $("#burger-toogle").each(function(_, navToggler) {
            var target = $(navToggler).data("target");
            $(navToggler).on("click", function() {
               $(target).animate({
               height: "toggle"
               });
            });
         });

         const searchInput = document.querySelectorAll('.search')
         searchInput.forEach((s) => {
            s.addEventListener('keyup', function(e) {
            const result = <HTMLInputElement>document.querySelector(this.dataset.target)
            result.classList.remove('hidden')
            if (this.value === '') {
               result.classList.add('hidden')
            }

            window.addEventListener('click', function (e) {
               const el = event.target as HTMLInputElement
               if (el.getAttribute('id') !== 'search') {
                   result.classList.add('hidden')
               }
            })
            
            })
         })
      });
   }
   

}
