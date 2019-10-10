app2.service("servicioLogin", function ($http){

	   //get All Eployee
    this.getEmployees = function () {
        debugger;
        return $http.get("http://www.depiff.com/api_clio/usuarios/read.php");
    };


	  // get Employee By Id
    this.getEmployee = function (employeeID) {
        var response = $http({
            method: "GET",
            url: "http://www.depiff.com/api_clio/usuarios/read_one.php?username=vquiroga&pass=12345"
        });
        return response;
    }
    

      // buscar Usuario
    this.Logear = function (user, pass) {
        var response = $http({
            method: "GET",
            url: "http://www.depiff.com/api_clio/usuarios/read_one.php?username="+user+"&pass="+pass
        });
        return response;
    }

});