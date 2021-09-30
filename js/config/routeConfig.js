angular.module("listaTransacoes").config(function ($routeProvider) {

    $routeProvider.when("/inicio", {
        templateUrl: "http://127.0.0.1:8887/view/inicio.html",
        controller:"TransacoesCtrl"
    });

    $routeProvider.when("/cadastro", {
        templateUrl: "http://127.0.0.1:8887/view/cadastroTransacao.html",
        controller:"TransacoesCtrl"
    });

    $routeProvider.when("/dashboard", {
        templateUrl: "http://127.0.0.1:8887/view/dashboard.html",
        controller:"TransacoesCtrl"
    });

    $routeProvider.when("/tabela", {
        templateUrl: "http://127.0.0.1:8887/view/tabela.html",
        controller:"TransacoesCtrl"
    });

    $routeProvider.when("/detalheTransacao/:id", {
        templateUrl: "http://127.0.0.1:8887/view/detalheTransacao.html",
        controller:"detalheTransacaoCtrl",
    });

    $routeProvider.otherwise({redirectTo: "/inicio"});

});