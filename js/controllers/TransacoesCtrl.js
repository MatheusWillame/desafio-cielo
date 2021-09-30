angular.module("listaTransacoes").controller("TransacoesCtrl", function ($scope, TransacoesAPI, Constants) {
	
	$scope.dsTransacoes = [];

	$scope.numTransacoes;
	$scope.numQtdMinMDR;
	$scope.numTaxaMDR;
	$scope.numTotalLiq;

	$scope.dadosGraficoPie = Constants.dadosGraficoPie;
	$scope.dadosGraficoLine = Constants.dadosGraficoLine;
	$scope.tiposPagamentos = Constants.tiposPagamentos;
	$scope.marcasCartao = Constants.marcasCartao;
	$scope.canaisPagamento = Constants.canaisPagamento;
	$scope.statusTransacao = Constants.statusTransacao;

	var init = function(){
		carregarTransacoes();
	}

	var carregarTransacoes = function(){
		TransacoesAPI.getTransacoes().success(function (data) {
			$scope.dsTransacoes = data;
			populaGraficoMDR();
			populaGraficoPIE();
			populaInfoGrid();
		}).error(function (data, status) {
			$scope.error = "Não foi possível carregar os dados";
			$scope.details = "Motivo: "+data;
		});
	};

	$scope.adicionarTransacao = function (transacao) {
		
		var transacaoComplete = atribuicaoDadosStatic(transacao);

		TransacoesAPI.saveTransacao(transacaoComplete).success(function(data){
			delete $scope.transacao; //break cycle - deleção transacao da view para impedir referência compartilhada 
			$scope.transacaoForm.$setPristine(); //Retornando o form ao estado $Pristine
			carregarTransacoes();
		}).error(function (data, status) {
			$scope.error = "Erro na requisição Post";
			$scope.details = "Motivo: "+data;
		});
	};

	$scope.deletarTransacao = function (transacoes) {
		$scope.dsTransacoes = transacoes.filter(function(transacao){ 
			if(!transacao.selecionado){ 
				return transacao;
			}
		});

		TransacoesAPI.deleteTransacao($scope.dsTransacoes).success(function(data){
			carregarTransacoes();
		}).error(function (data, status) {
			$scope.error = "Erro na requisição Delete";
			$scope.details = "Motivo: "+data;
		});

		populaGraficoMDR();
		populaGraficoPIE();
	};

	$scope.isTransacaoSelecionada = function(transacoes){
		return transacoes.some(function(contato){
			return contato.selecionado
		});
	};

	$scope.ordernarPor = function(campo){
		$scope.criterioOrdenacao = campo;
		$scope.direcaoOrdenacao = !$scope.direcaoOrdenacao; 
	};

	var populaGraficoMDR = function(){

		var _minimumMDRAmmount = $scope.dsTransacoes.map(function(item, indice){
			return item.minimumMDRAmmount;
		});
		var _mdrFeeAmount = $scope.dsTransacoes.map(function(item, indice){
			return item.mdrFeeAmount;
		});

		$scope.dadosGraficoLine.series.forEach((serie, index)=>{
			if(index==0){
				$scope.dadosGraficoLine.series[index].values = _minimumMDRAmmount;
			} else{
				$scope.dadosGraficoLine.series[index].values = _mdrFeeAmount;
			}
		});
		
	};

	var populaGraficoPIE = function(){

		$scope.dadosGraficoPie.series.forEach((serie, index)=>{
			serie.values[0] = getValuesPIE(index)
		});
		
	};

	var getValuesPIE = function (index) {

		var cardBrand = $scope.dsTransacoes.map(function(item, indice){
			return item.cardBrand;
		});

		switch(index){
			case 0: 
				return cardBrand.filter((v) => (v === "Mastercard")).length;
			case 1:
				return cardBrand.filter((v) => (v === "Visa")).length;
			case 2:
				return cardBrand.filter((v) => (v === "Hipercard")).length;
			case 3:
				return cardBrand.filter((v) => (v === "American Express")).length;
			case 4:
				return cardBrand.filter((v) => (v === "Elo")).length;
		}
	}

	var populaInfoGrid = function(){

		//transfer of data to cards
		$scope.numTransacoes = $scope.dsTransacoes.length;
		$scope.numQtdMinMDR = taxaMdrValue();
		$scope.numTaxaMDR = numTaxaMDRValue();
		$scope.numTotalLiq = numTotalLiqValue();

	}

	var taxaMdrValue = function(){
		var _minimumMDRAmmount= $scope.dsTransacoes.map(function(item, indice){
			return item.minimumMDRAmmount;
		});

		return parseFloat(_minimumMDRAmmount.reduce((total, currentElement) => total + currentElement).toFixed(2));
	}

	var numTaxaMDRValue = function(){
		var _mdrFeeAmount = $scope.dsTransacoes.map(function(item, indice){
			return item.mdrFeeAmount;
		});

		return parseFloat(_mdrFeeAmount.reduce((total, currentElement) => total + currentElement).toFixed(2));
	}

	var numTotalLiqValue = function(){
		var _netAmount = $scope.dsTransacoes.map(function(item, indice){
			return item.netAmount;
		});

		return parseFloat(_netAmount.reduce((total, currentElement) => total + currentElement).toFixed(0));
	}

	var atribuicaoDadosStatic = function(transacao){

		var id = $scope.dsTransacoes.length+1;

		transacao["id"] = id.toString();
		transacao["merchantId"] = "2000463023";
		transacao["paymentNode"] = 485173;
		transacao["cnpjRoot"] = 485116;
		transacao["authorizationCode"] = "378224";
		transacao["truncatedCardNumber"] = "1014";
		transacao["grossAmount"] = 90.0;
		transacao["terminal"] = "32668";
		transacao["administrationFee"] = 3.9;
		transacao["channelCode"] = 1;
		transacao["withdrawAmount"] = 0.0;
		transacao["mdrTaxAmount"] = 0.0;

		return transacao;
	};

	init();

});