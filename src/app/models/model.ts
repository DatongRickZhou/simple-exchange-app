export interface user{
    userName:string;
    uid:string;
}
export interface currency{
    CurrencyCode:string;
    amount:number;
}
export interface SelectedCurrencys{
    FromCurrencyCode:string;
    FromCurrencyName:string;
    ToCurrencyCode:string;
    ToCurrencyName:string;
}