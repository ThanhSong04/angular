import { Observable } from 'rxjs';
import { SanPham } from './../../models/sanpham.model';
import {SanphamService } from '../../services/sanpham.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datas: SanPham[] = [];
  public maSP='';
  p: number = 1;
  constructor(private SPService: SanphamService) { }

  ngOnInit(): void {
    this.getAllSP();
  }
  getAllSP()
  {
    this.SPService.getAllSanPham().subscribe((data:SanPham[])=>{
      console.log(data);
      this.datas=data;
    })
  }

}
