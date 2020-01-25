import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  menuClick(name,event){
    console.log("menuClick :Call..............!");
    if(name == 'manageItems'){
      this.router.navigate(['ManageItemScreen']);
    }
  }
}
