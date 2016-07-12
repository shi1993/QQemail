var app=angular.module('myapp',['ui.router']);
//定义路由表

// app.config(['$routeProvider',function($routeProvider){
// 	$routeProvider.when('/',{
// 		templateUrl:'pages/main.html'
// 	}).when('/xx',{
// 		templateUrl:'pages/page_1.html'
// 	}).when('/sx',{
// 		templateUrl:'pages/page_2.html'
// 	}).when('/txl',{
// 		templateUrl:'pages/page_3.html'
// 	}).otherwise({redriectTo:'/'});
// }]);

app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('home',{
		url:"/main",
		templateUrl:'pages/main.html'
	}).state('xx',{
		url:"/xx",
		templateUrl:'pages/page_1.html'
	}).state('xx.normal',{
		url:"/normal",
		templateUrl:'pages/normal.html'
	}).state('xx.qun',{
		url:"/qun",
		templateUrl:'pages/qun.html'
	}).state('xx.hecard',{
		url:"/hecard",
		templateUrl:'pages/hecard.html'
	}).state('xx.mingxinpian',{
		url:"/mingxinpian",
		templateUrl:'pages/mingxinpian.html'
	})
	.state('xx.av',{
		url:"/av",
		templateUrl:'pages/av.html'
	}).state('sx',{
		url:"/sx",
		templateUrl:'pages/page_2.html'
	}).state('txl',{
		url:"/txl",
		templateUrl:'pages/page_3.html'
	});
	$urlRouterProvider.otherwise('/main');
});
































app.controller('xxc',function($scope,$location){
	$scope.title='zheshishenmea';
	$scope.go=function(){
		$location.path('/th');
	}
});
//$routeParams传递参数
app.controller('sxc',function($scope,$routeParams){
	$scope.id=$routeParams.id;
	$scope.n=$routeParams.n;
});

app.controller('txlc',function($scope,$route){
	$scope.$route=$route;
	$scope.name='haha';
});



