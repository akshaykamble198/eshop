export interface Product{
"id":number,
"img":string;
"category":string;
"title":string;
"details":string;
"price":number;
"rating":Ratings
}
export interface Ratings{
    "rate":number,
    "count":number
}
        