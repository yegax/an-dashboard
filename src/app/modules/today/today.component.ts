import { Component, OnInit } from '@angular/core';

export class MyItems {    
  Value: string;    
  constructor(Value:string)    
  {    
    this.Value = Value;    
  }    
}

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})

export class TodayComponent {    
    
  // Used To Specify Title using Interpolation    
  title = 'Working With Array In Angular 5';    
    
  // Array where we are going to do CRUD operations    
  myItems: MyItems[] = new Array();    
    
  // Other variables    
  IsForUpdate: boolean = false;    
  newItem: any = {};    
  updatedItem;    
    
  // Provide some values to the array    
  constructor()    
  {    
    this.myItems.push(    
      new MyItems("Chicken"),    
      new MyItems("Rice"),    
      new MyItems("Ceasar Salad"),    
      new MyItems("Yogurt"),    
      new MyItems("Oatmeal")    
    );    
  } 
  
  // To add new item in array    
 AddItem() {    
  this.myItems.push(    
    this.newItem    
  );    
  this.newItem = {};    
}   

// When user selects edit option  
EditItem(i) {  
  this.newItem.Value = this.myItems[i].Value;  
  this.updatedItem = i;  
  this.IsForUpdate = true;  
}  
  
// When user clicks on update button to submit updated value  
UpdateItem() {  
  let data = this.updatedItem;  
  for (let i = 0; i < this.myItems.length; i++) {  
    if (i == data) {  
      this.myItems[i].Value = this.newItem.Value;  
    }  
  }  
  this.IsForUpdate = false;  
  this.newItem = {};  
}  
// To delete specific item  
DeleteItem(i) {  
  this.myItems.splice(i, 1);  
}  

}  

