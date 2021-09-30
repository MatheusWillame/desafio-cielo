angular.module("listaTransacoes").factory("Constants", function($http){

    var _temp = "service_temp";

    //Form
    var _tiposPagamentos = [
		{tipo: "Crédito à vista", codigo: 1, categoria: "À vista"},
		{tipo: "Crédito a prazo", codigo: 1, categoria: "A prazo"},
		{tipo: "Débito", codigo: 2, categoria: "À vista"},
		{tipo: "Cheque", codigo: 3, categoria: "A prazo"},
		{tipo: "Boleto", codigo: 4, categoria: "À vista"},
		{tipo: "Carteira Digital", codigo: 5, categoria: "A prazo"}
	];
	
	var _marcasCartao = ["Mastercard","Visa","Hipercard","American Express","Elo"];
	var _canaisPagamento = ["Super Link / Digitada","Máquina","Pix","Plataforma Digital"];
	var _statusTransacao = ["Aprovada","Reprovada","Estornada","Cancelada","Em Análise"];

    //Gráficos
    var _dadosGraficoPie = {
		type: "pie",
		title: {
		  textAlign: 'center',
		  text: "Bandeiras de cartão de crédito mais utilizadas"
		},
		plot: {
		  slice: 50 //to make a donut
		},
		series: [{
		  values: [0],
		  text: "Master Card"
		}, {
		  values: [0],
		  text: "Visa"
	
		}, {
		  values: [0],
		  text: "Hipercard"
		}, {
			values: [0],
			text: "American Express"
		}, {
			values: [0],
			text: "Elo"
	  
		}]
	};

    var _dadosGraficoLine = {  
		type : 'line' ,  
		series : [  
		  { values : [0] },  
		  { values : [0] }  
		]  
	};

    return{
        temp: _temp,
        dadosGraficoPie: _dadosGraficoPie,
        dadosGraficoLine: _dadosGraficoLine,
        tiposPagamentos: _tiposPagamentos,
        marcasCartao : _marcasCartao,
	    canaisPagamento : _canaisPagamento,
	    statusTransacao : _statusTransacao 
    };

});