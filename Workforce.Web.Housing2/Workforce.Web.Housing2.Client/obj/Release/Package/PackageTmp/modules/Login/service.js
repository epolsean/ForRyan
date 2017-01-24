(function (ga) {

    //main login page.  
  'use strict';
  ga.login.factory('loginService', ['$http', function ($http) {
      var url = 'http://ec2-34-193-194-23.compute-1.amazonaws.com/AssociateRest/api/accounts/getToken';
    return {
      get: function (u, p) {
        $http({
          withCredentials: true,
          username: u,
          password: p,
          method: 'get',
          url: url
        }).success(function () {
          location = '#/complexes';
        }).error(function () { location = '#/fail'; })
        }
      }
  }]);
})(window.ahApp);