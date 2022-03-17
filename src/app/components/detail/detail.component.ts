import { HomeComponent } from './../home/home.component';
import { ActivatedRoute, Routes } from '@angular/router';
import { SanphamService } from './../../services/sanpham.service';
import { SanPham } from './../../models/sanpham.model';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  sanpham = new SanPham;

  constructor(private routes:ActivatedRoute,private SanphamService:SanphamService) { }

  ngOnInit(): void {
    this.getRouteSP(this.routes.snapshot.params['maSP']);

  }
  getRouteSP(maSP:any){
    this.SanphamService.seachSP(maSP).subscribe((data:any)=>
    {
      console.log(this.sanpham)
      this.sanpham = data;
    })
  }

}
