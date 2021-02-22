import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormaing'
})
export class TextFormaingPipe implements PipeTransform {

  transform(value:string, maxSize: number): unknown {
    if(value.length < maxSize){
      return value
    }
    else{
      return value.slice(0,maxSize);
    }
  }

}
