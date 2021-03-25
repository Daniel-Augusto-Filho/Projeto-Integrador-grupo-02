import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../model/Produto';
import { Categoria } from '../model/Categoria';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produto : Produto = new Produto()

  idProduto : number


  constructor( 
    private produtoService : ProdutoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  
    
  }


}
