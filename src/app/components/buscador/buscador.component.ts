import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = [];
  nombre:string ="";

  constructor(private _heroesService:HeroesService, private avtivateRoute: ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {

      this.avtivateRoute.params.subscribe( params => {
      this.nombre = params['nombre'];
      this.heroes = this._heroesService.buscarHeroes(this.nombre);
    });
    
  }
  
  verHeroe (id: number){
    this._router.navigate(['/heroe/',id]);
  }


}
