import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { debounceTime } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  showSearchInput: boolean = true;

  router = inject(Router);

  searchControl = new FormControl();

  _searchService = inject(SearchService);

  ngOnInit(): void {

    this.router.events.subscribe(event => {
      if(this.router.url !== '/'){
        this.showSearchInput = false;
      } else {
        this.showSearchInput = true;
      }
    });

    this.searchControl.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      console.log(value);
      this._searchService.searchMonster.next(value || '');
    });
  }
}
