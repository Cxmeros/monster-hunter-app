import { Component, OnInit, inject } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { StarRatingPipe } from '../../pipes/star-rating.pipe';

@Component({
  selector: 'app-monster-detail',
  standalone: true,
  imports: [StarRatingPipe],
  templateUrl: './monster-detail.component.html',
  styleUrl: './monster-detail.component.css',
})
export class MonsterDetailComponent implements OnInit {
  loading: boolean = true;
  public monster?: Monster;
  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);

  getRenderPath(name: string ): string{
    return `assets/img/renders/MHW_${name.replace(/[\s']/g, '_')}_Render.webp`;
  }

  getStars(rating: number): string[] {
    return new Array(rating);
  }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this._apiService.getMonster(params['id']).subscribe((data: Monster) => {
        this.monster = data;
        console.log(this.monster);
        this.loading = false;
      });
    });
  }
}
