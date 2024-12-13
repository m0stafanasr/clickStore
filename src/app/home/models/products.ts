export class ProductsResponse {
    id:number=0;
    title:string='';
    price:string='';
    category:string='';
    description:string='';
    image:string='';
    rating:rating
}

export class rating {
    rate:number;
    count:number;
}