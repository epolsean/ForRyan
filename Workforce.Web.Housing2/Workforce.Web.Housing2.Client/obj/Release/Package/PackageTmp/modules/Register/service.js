(function (ga) {
  'use strict';

  ga.register.factory('registerService', ['$http', function ($http) {
      var url = 'http://ec2-34-193-194-23.compute-1.amazonaws.com/AssociateRest/api/associate/';
      return {
          post: function (data, pass, fail) {
              $http({
                  method: 'post',
                  url: url,
                  data: data
              }).then(pass, fail);
          }
      }
  }]);

  ga.register.factory('batchService', ['$http', function ($http) {
      var url = 'http://ec2-34-193-194-23.compute-1.amazonaws.com/AssociateRest/api/batch/';
      return {
          get: function (pass, fail) {
              $http({
                  method: 'get',
                  url: url
              }).then(pass, fail);
          }
      }
  }]);
  ga.register.factory('genderService', ['$http', function ($http) {
      var url = 'http://ec2-34-193-194-23.compute-1.amazonaws.com/AssociateRest/api/gender/';
      return {
          get: function (pass, fail) {
              $http({
                  method: 'get',
                  url: url
              }).then(pass, fail);
          }
      }
  }]);


})(window.ahApp);