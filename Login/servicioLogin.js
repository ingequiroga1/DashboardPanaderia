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
        // buscar Usuario
    this.Logear = function (user, passw) {
            debugger;
        var response = $http({
            method: "POST",
            url: "http://www.depiff.com/api_clio/usuarios/validaracceso.php",
            //url: "http://depiff.com/api_clio/entregas/create.php",//
            dataType: 'json',
            //data: {'username': user, 'pass': passw},
            data:{"username": "vquiroga", "pass": "12345"},
            //data:"{\"idusuario\":2,\"idcliente\":4,\"fechaentrega\":\"20191008\",\"productos\":[{\"IdProducto\":1,\"DescProd\":\"Bolillo\",\"CantidadEntregada\":30.0,\"MontoPorPagar\":60.000,\"MontoPagado\":30.0},{\"IdProducto\":2,\"DescProd\":\"Pan Dulce\",\"CantidadEntregada\":20.0,\"MontoPorPagar\":70.000,\"MontoPagado\":50.0}],\"totalporpagar\":130.000,\"totalpagado\":80.0}",
            //data:{"idusuario":2,"idcliente":4,"fechaentrega":"20191008","productos":[{"IdProducto":1,"DescProd":"Bolillo","CantidadEntregada":30.0,"MontoPorPagar":60.000,"MontoPagado":30.0},{"IdProducto":2,"DescProd":"Pan Dulce","CantidadEntregada":20.0,"MontoPorPagar":70.000,"MontoPagado":50.0}],"totalporpagar":130.000,"totalpagado":80.0}
            headers: { "Content-Type": "application/json" }          
        });
      
        return response;
    }

    

});