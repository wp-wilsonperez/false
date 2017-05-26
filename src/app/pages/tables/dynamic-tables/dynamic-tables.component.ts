<<<<<<< HEAD
import { Component, ViewEncapsulation } from '@angular/core';
import { DynamicTablesService } from './dynamic-tables.service';

@Component({
  selector: 'az-dynamic-tables',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dynamic-tables.component.html',
  styleUrls: ['./dynamic-tables.component.scss'],
  providers: [ DynamicTablesService ]
})
export class DynamicTablesComponent {
    public data: any;
    public searchText:string;
    constructor(private _dynamicTablesService:DynamicTablesService){
        this.data = _dynamicTablesService.getAll();
    } 
}

=======
import { Component, ViewEncapsulation } from '@angular/core';
import { DynamicTablesService } from './dynamic-tables.service';

@Component({
  selector: 'az-dynamic-tables',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dynamic-tables.component.html',
  styleUrls: ['./dynamic-tables.component.scss'],
  providers: [ DynamicTablesService ]
})
export class DynamicTablesComponent {
    public data: any;
    public searchText:string;
    constructor(private _dynamicTablesService:DynamicTablesService){
        this.data = _dynamicTablesService.getAll();
    } 
}

>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
