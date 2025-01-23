// Filename: patient-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Recommendation {
  id: number;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patientId!: number;
  recommendations: Recommendation[] = [
    { id: 1, description: 'Annual check-up', completed: false },
    { id: 2, description: 'Allergy assessment', completed: true },
    // More sample recommendations
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.patientId = Number(this.route.snapshot.paramMap.get('id'));
  }

  toggleCompleted(recommendation: Recommendation) {
    recommendation.completed = !recommendation.completed;
  }
}
