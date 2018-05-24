import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messsages: string[] = [];

  constructor() { }

  add(message: string){
    this.messsages.push(message);
  }
  clear(){
    this.messsages = [];
  }
}
