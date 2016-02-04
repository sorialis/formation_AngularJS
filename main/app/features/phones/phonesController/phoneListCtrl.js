'use strict';

angular.module('phonecat')
    .controller('PhoneListCtrl', ['$scope', 'Phones', function($scope, Phones){
        $scope.phones = Phones.getAll();

        $scope.orderProp = 'age';
    }]);