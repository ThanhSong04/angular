import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SanPham } from '../models/sanpham.model';
@Injectable({
  providedIn: 'root',
})
export class SanphamService {
  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
  };

  khUrl = 'https://619c39e468ebaa001753c7e7.mockapi.io/product';
  constructor(private http: HttpClient) {}

  getAllSanPham(): Observable<SanPham[]> {
    return this.http.get<SanPham[]>(this.khUrl).pipe();
  }

  seachSP(maSP: number): Observable<SanPham> {
    return this.http.get<SanPham>(`${this.khUrl}/${maSP}`).pipe();
  }
}
