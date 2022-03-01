import { Pipe, PipeTransform } from '@angular/core';
import { formatNumber } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeHu from '@angular/common/locales/hu';
registerLocaleData(localeHu, 'hu');

@Pipe({
  name: 'customNumber'
})
export class CustomNumberPipe implements PipeTransform {

  transform(
    value: any,
    digitsInfo: string = '1.0-2',
    locale: string = 'hu',
    ): string | null {
      return formatNumber(
        value,
        locale,
        digitsInfo,
        );
      }
  }
