import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent {
  @Output() filhoSend = new EventEmitter<string>();

  handleFilho() {
    const dadoAlvo = `String vindo do filho`
    this.filhoSend.emit(dadoAlvo);
  }

}
