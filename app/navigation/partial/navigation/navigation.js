/*jshint latedef: nofunc */
(function () {
    'use strict';
    angular.module('navigation').controller('navigation.NavigationCtrl', navigation);

    function navigation($scope, $location) {
        /* jshint validthis: true */
        var vm = this;

        vm.activeTab = 'home';
        vm.hau = '<i>den loosli</i>';
        vm.goHome = goHome;
        vm.goTaetigkeit = goTaetigkeit;

        function goTaetigkeit() {
            navigate('/taetigkeit');
            vm.activeTab = 'taetigkeit';
        }

        function goHome() {
            navigate('/home');
            vm.activeTab = 'home';
        }

        function navigate(target) {
            $location.path(target);
        }
    }

})();
