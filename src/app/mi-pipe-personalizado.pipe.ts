import { Pipe, PipeTransform } from '@angular/core';
import { Validators } from '@angular/forms';

@Pipe({
  name: 'miPipePersonalizado'
})
export class MiPipePersonalizadoPipe implements PipeTransform {

  transform(valor: string | undefined): string {
    return valor?.toUpperCase() || '';
  }

}
