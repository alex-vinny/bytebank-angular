import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
    @Output() aoTransferir = new EventEmitter<any>();

    valor: number | undefined;
    destino: number | undefined;

    transferir() {
        console.log("Nova transferência solicitada.");
        
        const valorEmitir = { valor: this.valor, destino: this.destino };
        this.aoTransferir.emit(valorEmitir);
        this.limpar();
    }

    limpar() {
        this.valor = 0;
        this.destino = 0;
    }
}