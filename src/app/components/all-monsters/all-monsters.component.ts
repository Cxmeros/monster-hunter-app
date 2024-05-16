import { Component, inject } from '@angular/core';
import { Monster, MonsterElement } from '../../models/monster.model';
import { SearchService } from '../../services/search.service';
import { ApiService } from '../../services/api.service';
import { MonstersComponent } from '../monsters/monsters.component';

@Component({
  selector: 'app-all-monsters',
  standalone: true,
  imports: [MonstersComponent],
  templateUrl: './all-monsters.component.html',
  styleUrl: './all-monsters.component.css'
})
export class AllMonstersComponent {
  apiService = inject(ApiService);
  initialMonsterList: Monster[] = [];
  monsterList: Monster[] = [];
  loading: boolean = true;

  _searchService = inject(SearchService);

  getAllMonsters(): void {
    this.apiService.getMonsters().subscribe((data: Monster[]) => {
      this.initialMonsterList = this.monsterList = data;
      this.loading = false;
    });
  }

  ngOnInit(){
    this._searchService.searchMonster.subscribe((value) => {
      if(value){
        this.monsterList = this.initialMonsterList.filter((monster: Monster) =>
          monster.name.toLowerCase().includes(value.toLowerCase())
        );
      } else {
        this.monsterList = this.initialMonsterList;
      }
    });
    this.getAllMonsters();
  }

}
