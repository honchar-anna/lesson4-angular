import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './app.component';

@Pipe({
  name: 'sortLastName'
})
export class SortLastNamePipe implements PipeTransform {

  transform(person:Contact[],type:boolean): Contact[]{

if(!person) return []
    if(type){return person.sort((a, b)=>(a.lastName>b.lastName)? 1 :(a.lastName<b.lastName)?-1:0) } 
    return person.sort((a, b)=>(a.lastName<b.lastName)? 1 :(a.lastName>b.lastName)?-1:0)

}}
