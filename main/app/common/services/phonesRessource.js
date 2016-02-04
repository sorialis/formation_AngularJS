'use strict';

angular.module('phonecat')
    .factory('Phones', ['$resource', function($resource){
        return $resource('assets/json/phones.json/:marque', {}, {
            'getAll':  {
                method:'GET',
                isArray:true
            }
/*            ,
            'delete': {
                method: 'DELETE'
            },
            'caracteritisque': {
                utl: 'assets/json/phones.json/:id/caracteristiques/:caracteristiqueID',
                method: 'GET',
                params: {id : '@id', caracteristiqueID : 'caracteristique'}
            }*/
        })
    }]);