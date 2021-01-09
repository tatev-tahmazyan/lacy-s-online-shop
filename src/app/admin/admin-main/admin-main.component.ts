import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent {

	public customerList: Array<any> = [

		{ id : 0, price : 34.35, date : '15/11/20', name : 'Jorden'},
    { id : 1, price : 54.64, date : '10/09/20', name : 'Anna'},
    { id : 2, price : 25.12, date : '09/12/20', name : 'Lidia'},
    { id : 3, price : 46.17, date : '08/11/20', name : 'Polo'},
    { id : 4, price : 51.15, date : '07/12/20', name : 'Berta'},
    { id : 5, price : 37.10, date : '25/12/20', name : 'Calvin'},
    { id : 6, price : 36.56, date : '26/12/20', name : 'Natali'},
    { id : 7, price : 50.56, date : '10/12/20', name : 'Jack'},
    { id : 8, price : 47.36, date : '15/12/20', name : 'Fiona'},
    { id : 9, price : 20.59, date : '26/12/20', name : 'Lizi'},

	];

	public partnerList: Array<any> = [

		{ id : 0, partner : 'Nike', remove : 'highlight_off', showPartner : true},
    { id : 1, partner : 'Adidas', remove : 'highlight_off', showPartner : true},
    { id : 2, partner : 'Puma', remove : 'highlight_off', showPartner : true},
    { id : 3, partner : 'Levis', remove : 'highlight_off', showPartner : true},
    { id : 4, partner : 'Pandora', remove : 'highlight_off', showPartner : true},
    { id : 5, partner : 'Gucci', remove : 'highlight_off', showPartner : true},
    { id : 6, partner : 'Louis Vuitton', remove : 'highlight_off', showPartner : true},
	];
	
  constructor() { }

  ngOnInit(): void {
  }

  removePartner(item : any) : void{
  	this.partnerList.splice(this.partnerList.indexOf(item),1);
  }

}



