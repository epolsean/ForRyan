(function (ga) {
    'use strict';

    ga.associate.factory('traineeGetService', ['$http', function ($http) {
        var url = 'http://ec2-34-193-194-23.compute-1.amazonaws.com/HousingRest/api/associate/';
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

    ga.associate.factory('associateByAptService', ['$http', function ($http) {
        var url = 'http://ec2-34-193-194-23.compute-1.amazonaws.com/HousingRest/api/associate/';
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

    ga.associate.factory('associatePostService', ['$http', function ($http) {
        var url = 'http://ec2-34-193-194-23.compute-1.amazonaws.com/HousingRest/api/associate/';
        return {
            addAssoc: function (info, pass, fail) {
                $http({
                    method: 'post',
                    url: url,
                    data: info
                }).then(pass, fail);
            }
        }
    }]);

    ga.associate.factory('associateDeleteService', ['$http', function ($http) {
        var url = 'http://ec2-34-193-194-23.compute-1.amazonaws.com/HousingRest/api/associate/';
        return {
            removeAssoc: function (info, pass, fail) {
                $http({
                    method: 'delete',
                    url: url,
                    data: info,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(pass, fail);
            }
        }
    }]);

})(window.ahApp);