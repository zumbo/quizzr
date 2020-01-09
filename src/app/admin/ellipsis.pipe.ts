import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: any, ...args: string[]): string {
    const limit = args.length > 0 ? parseInt(args[0], 10) : 80;
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }

}
