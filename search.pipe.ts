import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './app.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(person:Contact[],fied:string): Contact[] {
   if(!person) return []
   if(!fied) return person
   return person.filter(book=> book.firstName.toLowerCase().includes(fied.toLowerCase())||
   book.lastName.toLowerCase().includes(fied.toLowerCase())||
   book.phoneNumber.toLowerCase().includes(fied.toLowerCase()))
  }

}
