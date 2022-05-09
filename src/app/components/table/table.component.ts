import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EndpointInfoService } from 'src/app/services/endpoint-info.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'image', 'name', 'types'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);
  pokemons = [];
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  constructor(private endpointinfoService: EndpointInfoService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    let pokemonData;
    for(let i = 1; i <= 807; i++){
      this.endpointinfoService.getPokemons(i).subscribe( res => {
        pokemonData = {
          position: i,
          image: res.sprites.front_default,
          name: res.name,
          types: res.types.map((type:any) => type.type.name).join(" / ")
        };
        this.data.push(pokemonData);
        this.dataSource = new MatTableDataSource<any>(this.data);
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.log(error);
      });
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRow(row: any){
    console.log(row)
  }
}