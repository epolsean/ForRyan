(function (ga) {
    'use strict';

    ga.assocList.factory('listGetService', ['$http', function ($http) {
        var url = 'http://ec2-34-193-194-23.compute-1.amazonaws.com/AssociateRest/api/associate/';
        return {
            get: function (data, pass, fail) {
                $http({
                    method: 'get',
                    url: url,
                    params: data
                }).then(pass, fail);
            }
        }
    }]);

    ga.assocList.factory('listDeleteService', ['$http', function ($http) {
        var url = 'http://ec2-34-193-194-23.compute-1.amazonaws.com/AssociateRest/api/associate/';
        return {
            removeAssociate: function (data, pass, fail) {
                $http({
                    method: 'delete',
                    url: url,
                    data: data,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(pass, fail);
            }
        }
    }]);

})(window.ahApp);