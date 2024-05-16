import { Component, Input, OnInit, inject } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-monsters',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './monsters.component.html',
  styleUrl: './monsters.component.css',
})

export class MonstersComponent {
  @Input() monsterList: Monster[] = [];
  @Input() loading: boolean = true;
  private _router = inject(Router);

  navigate(id: number) {
    this._router.navigate(['/monsters', id]);
  }

  getIconPath(iconName: string): string {
    return `assets/img/icons/MHW_${iconName.replace(/[\s']/g, '_')}_Icon.webp`;
  }
}
