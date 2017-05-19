var app = angular.module("dddShopApp", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeController"
    })
    .state("chooseyourdenim", {
      url: "/chooseyourdenim",
      templateUrl: "./views/choose_your_denim.html",
      controller: "chooseYourDenimController"
    })
    .state("shoppingbag", {
      url: '/shoppingbag',
      templateUrl: "./views/shopping_bag.html",
      controller: "shoppingBagController"
    })
    .state("checkout", {
      url: "/checkout",
      templateUrl: "./views/check_out.html",
      controller: "checkOutController"
    })
})
