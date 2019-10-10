(function(){
	'use strict';

	angular 
		.module('AppPan')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['UserService', '$rootScope'];
	function HomeController(UserService, $rootScope) {

		var vm  = this;

		vm.user = null;
		vm.allUsers = [];
		vm.deleteUser = deleteUser;

		initController();

		  function initController() {
            loadCurrentUser();
           
        }

        function loadCurrentUser(){
        	debugger;
        	UserService.GetByUsername($rootScope.globals.currentUser.username)
        				.then(function(user){
        					vm.user = user;
        				});
        	debugger;
        }

         function deleteUser(id) {
            UserService.Delete(id)
            .then(function () {
                loadAllUsers();
            });
        }

	}

})();