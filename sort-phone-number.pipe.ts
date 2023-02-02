import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './app.component';

@Pipe({
  name: 'sortPhoneNumber'
})
export class SortPhoneNumberPipe implements PipeTransform {

  transform(person:Contact[],type:boolean): Contact[]{

    if(!person) return []
    if(type){return person.sort((a, b)=>(a.phoneNumber>b.phoneNumber)? 1 :(a.phoneNumber<b.phoneNumber)?-1:0) } 
    return person.sort((a, b)=>(a.phoneNumber<b.phoneNumber)? 1 :(a.phoneNumber>b.phoneNumber)?-1:0)
    
    }

}
