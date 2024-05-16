import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { debounceTime } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  searchControl = new FormControl();

  _searchService = inject(SearchService);

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      console.log(value);
      this._searchService.searchMonster.next(value || '');
    });
  }
}
