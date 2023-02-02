import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './app.component';

@Pipe({
  name: 'sortFirstName'
})
export class SortFirstNamePipe implements PipeTransform {

  transform(person:Contact[],type:boolean): Contact[]{

    if(!person) return []
    if(type){return person.sort((a, b)=>(a.firstName>b.firstName)? 1 :(a.firstName<b.firstName)?-1:0) } 
    return person.sort((a, b)=>(a.firstName<b.firstName)? 1 :(a.firstName>b.firstName)?-1:0)
    
    }

}
