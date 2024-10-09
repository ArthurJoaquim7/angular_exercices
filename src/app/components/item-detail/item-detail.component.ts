import { Component } from '@angular/core';

// IMPORTS PARA DYNAMIC ROUTES
import { Carros } from 'src/Carros';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})

export class ItemDetailComponent {
  carro?: Carros;

  constructor(private testServoce: TestService, private route: ActivatedRoute) {
    this.getCarro()
  }

  getCarro() {
    const id = Number(this.route.snapshot.paramMap.get("id")); // Extração do ID convertendo em NUMBER
    this.testServoce.getItem(id).subscribe((carro) => this.carro = carro);;
  }


}
