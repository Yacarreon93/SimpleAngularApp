angular.module('Eggly', [

])
.controller('MainCtrl', function ($scope) {
  $scope.categories = [
    { id: 0, name: 'Backend' },
    { id: 1, name: 'Frontend' },
    { id: 2, name: 'Systems' },
  ]
  $scope.bookmarks = [
    { id: 0, title: 'AngularJS', url: 'http://angularjs.org', category: 'Frontend' }, 
    { id: 1, title: 'React', url: 'http://angularjs.org', category: 'Frontend' }, 
    { id: 2, title: 'PHP', url: 'http://angularjs.org', category: 'Backend' }, 
  ]
})