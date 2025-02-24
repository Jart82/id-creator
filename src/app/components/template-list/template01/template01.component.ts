import { Component } from '@angular/core';
import { NgxBarcode6Module } from 'ngx-barcode6';
import { QRCodeComponent } from 'angularx-qrcode';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template01',
  standalone: true, // ✅ Ensure standalone component
  imports: [NgxBarcode6Module, QRCodeComponent, CommonModule], 
  templateUrl: './template01.component.html',
  styleUrls: ['./template01.component.css']
})
export class Template01Component {

  logo: string = 'assets/bird_2.jpg';
  companyName: string = 'Sacred Heart Hospital';
  name: string = 'Sarah Symon';
  role: string = 'Nurse';
  idNumber: string = '12345';
  passport: string = 'assets/closeup-young-female-professional-making-eye-contact-against-colored-background.jpg';
  department: string = 'Pediatrics';
  companyAddress = '123 Street, City, Country';
  phone = '+123 456 7890';
  email = 'info@company.com';
  issueDate = '01 Jan 2024';
  expiryDate = '01 Jan 2025';
  signature = 'assets/signature.png';
  

  currentView: string = 'front';

  changeView(viewName: string) {
    this.currentView = viewName;
  }
}
