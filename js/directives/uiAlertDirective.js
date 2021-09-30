angular.module("listaTransacoes").directive("uiAlert", function(){

    return{
        templateUrl: "http://127.0.0.1:8887/view/alert.html",
        replace: true,
        restrict:"AE",
        scope:{
            title: "@", 
            message: "=", 
            details: "="
        }
    };

});