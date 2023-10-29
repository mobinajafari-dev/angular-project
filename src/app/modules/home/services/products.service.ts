import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '@shared';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getData(baseURL: string, endpoint: string) {
    const url = `${baseURL}/${endpoint}`;
    return this.http.get<IProduct[]>(url);
  }
  moreDetails(id: number) {
    const baseURL = 'https://fakestoreapi.com';
    const endpoint = 'products';
    const url = `${baseURL}/${endpoint}/${id}`;
    return this.http.get<IProduct[]>(url);
  }
}
