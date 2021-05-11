import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { AuthService } from 'src/app/auth/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryModule } from './category.module';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  categories: CategoryModule[]
  userIsAuthenticated = false
  constructor(private categoryService : CategoryService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userIsAuthenticated = this.authService.getIsAuth()
    this.categories = this.categoryService.getCategory();

     $(document).ready(function () {
        const selected = document.querySelector('.selected');
        const optionContainer = document.querySelector('.options-container')
        const optionList = document.querySelectorAll('.option')
        selected.addEventListener('click', () => {
          optionContainer.classList.toggle('hidden')
        })


        optionList.forEach( item => {
          item.addEventListener('click', ()=> {
              const selectedText = selected.querySelector('.selected-text');
              selectedText.innerHTML = item.querySelector('label').innerHTML
              optionContainer.classList.remove('hidden')
          })
        })

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

  onLogout(): void {
    this.authService.logout();
  }

}
