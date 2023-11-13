import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
name:'tds'
})
export class TDS implements PipeTransform
{
    

    transform(value: any, ... args: any[]) {
        let salary:number = value- (value * .10);       

        return salary;
    }
}