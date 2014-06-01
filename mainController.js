app.controller("MainController", function($scope){
	
	$scope.submit = function(){
		$scope.mensaje = 'hola ' + $scope.username;
	}

});