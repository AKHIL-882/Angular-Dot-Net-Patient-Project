// Filename: patient-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
}

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [
    { id: 1, name: 'John Doe', age: 34, gender: 'Male' },
    { id: 2, name: 'Jane Smith', age: 40, gender: 'Female' },
    // Add more sample patients
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {}

  viewDetails(patientId: number) {
    this.router.navigate([`/patients/${patientId}`]);
  }
}
