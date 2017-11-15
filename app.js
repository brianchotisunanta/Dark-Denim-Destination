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
      url: "/choose-your-denim",                          //the backslash name in the address bar
      templateUrl: "./views/choose_your_denim.html",      //the view file pathway
      controller: "chooseYourDenimController"             //the controller associated with the this view
    })
    .state("shoppingbag", {
      url: '/shopping-bag',
      templateUrl: "./views/shopping_bag.html",
      controller: "shoppingBagController"
    })
    .state("checkout", {
      url: "/check-out",
      templateUrl: "./views/check_out.html",
      controller: "checkOutController"
    })
})
