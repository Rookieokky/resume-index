'use strict';

/* Services */

var searchcatServices = angular.module('searchcatServices', ['ngResource']);

searchcatServices.factory('Search', ['$resource',
  function($resource){
    return {
      srch: $resource('http://128.199.58.31:3030/search', {}, {
        query: { method: 'GET', params: {}, isArray: false }
      }),
      mtch: $resource('http://128.199.58.31:3030/matcher', {}, {
        query: { method: 'GET', params: {}, isArray: true }
      }),
    }
  }]);

