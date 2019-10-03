
app.controller('loginCtrl', function($scope, servicioLogin) {
	 //GetAllUsers();
     $scope.user = "vquiroga";


        //To Get All Records 
    $scope.GetAllUsers = function () {
        debugger;
        var getData = servicioLogin.getEmployees();
        getData.then(function (emp) {
            $scope.employees = emp.data;
        },function () {
            alert('Error in getting records');
        });
    }



    $scope.ValidarUsuario = function (user,pass) {
        debugger;
        var getData = servicioLogin.Logear(user, pass);
        getData.then(function (usuario) {
            $scope.usuario = usuario.data;
        },function () {
            alert('Error in getting records');
        });
    }

 
});