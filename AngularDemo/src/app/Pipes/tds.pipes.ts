import{Pipe,PipeTransform} form '@angular/core'

@Pipe({
    name:"tds"
})

export class TDS implements PipeTransform
{
    {{1000 | currency:'INR'}}

    transform(value :any,...args,:any[]){
        let salary:number=value*(value*.10);

        return salary;
    }
}