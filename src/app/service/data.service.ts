import { Injectable } from "@angular/core";
import { Product } from "../model/product.model";

@Injectable()
export class DataService {

    public products:Product[] = [
        {
            id:100,
            name:"Apple mac book xyz series",
            description:"It is a laptop",
            price:45456.34
        },
        {
            id:101,
            name:"Dell book xyz series",
            description:"It is a laptop",
            price:67456.34
        },{
            id:102,
            name:"Hp book xyz series",
            description:"It is a laptop",
            price:3456.34
        },{
            id:103,
            name:"Lenovo mac book xyz series",
            description:"It is a laptop",
            price:11336.34
        }
    ];
}
