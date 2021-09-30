angular.module("listaTransacoes").controller("detalheTransacaoCtrl", function ($scope, $routeParams, TransacoesAPI) {
    
    $scope.itemSelect = [];

    var carregarTransacoes = function(){
		TransacoesAPI.getTransacoes().success(function (data) {
			
            $scope.itemSelect = data[(parseInt($routeParams.id)-1)];
		}).error(function (data, status) {
			$scope.details = "Error: "+data;
		});
	};

    carregarTransacoes();

});