import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule, IonicModule]
})
export class CharacterDetailPage implements OnInit {

  characterId: string = '';
  character = null as any;
  episodes: any[] = [];

  constructor(
    private actRoute: ActivatedRoute,
    private rickAndMortySvc: RickAndMortyService,
  ) {
    this.characterId = this.actRoute.snapshot.paramMap.get('id') as string
    //console.log("this.characterId", this.characterId);
  }

  ngOnInit() {
  }


  ionViewWillEnter()
  {
    this.getCharacter();

  }

  // Obtener personaje por id
  getCharacter()
  {
    this.rickAndMortySvc.getCharacterById(this.characterId).subscribe({
      next: (res: any) => {
        //console.log("res", res);
        this.character = res;
        this.getEpisodes();
        
      },
      error: (error: any) => {

      }
    });
  }

  getEpisodes()
  {
    for (let url of this.character.episode)      
      {
        this.rickAndMortySvc.getByUrl(url).subscribe({
          next: (res: any) => {
            this.episodes.push(res);

          },
          error: (error: any) => {

          }
      })
    };
  }



}
