import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HeroesService, Heroe } from '../../servicios/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})




export class HeroeComponent  {

  
  heroe:Heroe;
  // strFecha:string;
  srcRuta:string = environment.srcRuta;

  constructor(private _heroesService:HeroesService, private avtivateRoute: ActivatedRoute) { 

    this.avtivateRoute.params.subscribe( params => {
        let id = params['id'];
        this.heroe = this._heroesService.getHeroe(id);
        // let fecha: Date = new Date(this.heroe.aparicion);
        // this.strFecha = fecha.getDate() + '/' + (+fecha.getMonth() +1) + '/' + fecha.getFullYear();
    })

    // console.log(this.heroe);
}

}

