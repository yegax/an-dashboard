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
    
  
  title = 'Array1';    
    

  myItems: MyItems[] = new Array();    
    

  IsForUpdate: boolean = false;    
  newItem: any = {};    
  updatedItem;    
    

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
  

 AddItem() {    
  this.myItems.push(    
    this.newItem    
  );    
  this.newItem = {};    
}   


EditItem(i) {  
  this.newItem.Value = this.myItems[i].Value;  
  this.updatedItem = i;  
  this.IsForUpdate = true;  
}  
  

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

DeleteItem(i) {  
  this.myItems.splice(i, 1);  
}  

}  

