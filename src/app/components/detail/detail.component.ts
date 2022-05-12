import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EndpointInfoService } from 'src/app/services/endpoint-info.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  pokemon: any = '';
  pokemonType = '';
  pokemonImage = '';
  constructor(private endpointInforService: EndpointInfoService, private activatedRoute: ActivatedRoute) {
    this. activatedRoute.params.subscribe(params =>{
      this.getPokemon(params['id']);
    });
  }

  ngOnInit(): void {
  }

  getPokemon(id: any){
    this.endpointInforService.getPokemons(id).subscribe(response => {
      this.pokemon = response;
      this.pokemonImage = this.pokemon.sprites.front_default;
      this.pokemonType = response.types.map((type:any) => type.type.name).join(" / ")
    }, error =>{
      console.log(error);
    });
  }
}