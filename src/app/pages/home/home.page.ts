import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule, IonicModule]
})
export class HomePage implements OnInit {

  characters: any[] = [];
  params = {} as any;

  // Inyectar servicio
  constructor(
    private rickAndMortySvc: RickAndMortyService
  ) { }

  ngOnInit() {
    // scroll infinito
    this.params.page = 0;
    this.getCharacters();
  }

  getCharacters(event?: any)
  {
    this.params.page += 1;
    this.rickAndMortySvc.getCharacter(this.params).subscribe({
      next: (res: any) => {
        // spreed operator
        this.characters.push(...res.results);
        //console.log(this.characters);

        if (event)
          {
            event.target.complete();
          }
      },
      error: (error: any) => {
        if (event) event.target.complete();
      }

    });

  }


  searchCharacters()
  {
    this.params.page = 1;

    this.rickAndMortySvc.getCharacter(this.params).subscribe({
      next: (res: any) => {
        this.characters = res.results;
      },
      error: (error: any) => {

      }
    })
  }


}
