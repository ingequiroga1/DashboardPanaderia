(function(){
	'use strict';

	angular
		.module('AppPan')
		.factory('UserService', UserService);

	UserService.$inject = ['$http'];

	function UserService($http) {
		var service = {};

		service.GetByUsername =GetByUsername;

		return service;

		function GetByUsername(username){
			return $http.get('/api/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
		}

		   function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
		
	}
})();