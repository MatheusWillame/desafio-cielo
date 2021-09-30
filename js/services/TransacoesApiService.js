angular.module("listaTransacoes").factory("TransacoesAPI", function($http){

    var _getTransacoes = function(){
        return $http.get('http://localhost:3412/transacoes');
    };

    var _getTransacao = function(id){
        return $http.get('http://localhost:3412/transacoes'+'/'+id);
    };

    var _saveTransacao = function(transacao){
        return $http.post('http://localhost:3412/transacoes', transacao);
    }

    var _deleteTransacao = function(transacao){
        return $http.post('http://localhost:3412/transacoesUp', transacao);
    }

    return{
        getTransacoes: _getTransacoes,
        getTransacao:  _getTransacao,
        saveTransacao: _saveTransacao,
        deleteTransacao: _deleteTransacao
    };

});