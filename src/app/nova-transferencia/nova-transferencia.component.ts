import { Component, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { Transferencia } from "../models/transferencia.models";
import { TransferenciaService } from "../services/transferencia.service";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
    @Output() aoTransferir = new EventEmitter<any>();

    valor: number;
    destino: number;

    constructor(private service: TransferenciaService, 
        private router: Router) {
        this.valor = 0;
        this.destino = 0;
    }

    transferir() {
        console.log("Nova transferência solicitada.");
        
        const valorEmitir : Transferencia = { valor: this.valor, destino: this.destino };
        this.service.adicionar(valorEmitir)
            .subscribe((result) => {
                console.log(result);
                this.limpar();
                this.router.navigateByUrl('extrato');
            }, (erro) => {
                console.error(erro);
            });
    }

    limpar() {
        this.valor = 0;
        this.destino = 0;
    }
}