app2.factory('usuari', function(){
debugger;
var datusuario = {};

var interfaz = {

	setdatusuario : function(user){
		debugger;
		datusuario = user;	
	},

	getdatusuario : function(){
		return datusuario;
	}
}
return interfaz;
});