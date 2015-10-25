(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['common', datacontext]);

    function datacontext(common) {
        var $q = common.$q;

        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            var people = [
                { firstName: 'Praveen', lastName: 'Jukalkar', age: 44, location: 'Pittsburgh' },
                { firstName: 'Joe', lastName: 'Vella', age: 44, location: 'Pittsburgh' },
                { firstName: 'Subhash', lastName: 'Hegde', age: 44, location: 'Pittsburgh' },
                { firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'Pittsburgh' },
                { firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'Pittsburgh' },
                { firstName: 'Landon', lastName: 'Gates', age: 11, location: 'Pittsburgh' },
                { firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Pittsburgh' }
            ];
            return $q.when(people);
        }
    }
})();