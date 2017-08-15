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
  
  $scope.currentCategory = null
  
  function setCurrentCategory (category) {
    $scope.currentCategory = category
    cancelCreating()
    cancelEditing()
  }
  
  $scope.setCurrentCategory = setCurrentCategory
  
  function isCurrentCategory (category) {
    return $scope.currentCategory !== null && category.name === $scope.currentCategory.name
  } 
  
  $scope.isCurrentCategory = isCurrentCategory

  function startCreating () {
    $scope.isCreating = true
    $scope.isEditing = false
    resetCreateForm()
  }

  function cancelCreating () {
    $scope.isCreating = false
  }

  function startEditing () {
    $scope.isCreating = false
    $scope.isEditing = true
  }

  function cancelEditing () {
    $scope.isEditing = false
  }

  function shouldShowCreating () {
    return $scope.currentCategory && !$scope.isEditing
  }

  function shouldShowEditing () {
    return $scope.isEditing && !$scope.isCreating
  }

  $scope.startCreating = startCreating
  $scope.cancelCreating = cancelCreating
  $scope.startEditing = startEditing
  $scope.cancelEditing = cancelEditing
  $scope.shouldShowCreating = shouldShowCreating
  $scope.shouldShowEditing = shouldShowEditing

  // CRUD

  $scope.editedBookmark = null

  function resetCreateForm () {
    $scope.newBookmark = {
      title: '',
      url: '',
      category: $scope.currentCategory.name
    }
  }

  function createBookmark (bookmark) {
    bookmark.id = $scope.bookmarks.length
    $scope.bookmarks.push(bookmark)
    resetCreateForm()
  }

  function setEditedBookmark (bookmark) {
    $scope.editedBookmark = angular.copy(bookmark)
  }

  function updateBookmark (bookmark) {
    var index = _.findIndex($scope.bookmarks, function (b) {
      return b.id == bookmark.id
    })
    $scope.bookmarks[index] = bookmark
    $scope.editedBookmark = null
    $scope.isEditing = false
  }

  function isSelectedBookmark (bookmarkId) {
    return $scope.editedBookmark !== null && $scope.editedBookmark.id === bookmarkId
  }

  function deleteBookmark (bookmark) {
    _.remove($scope.bookmarks, function (b) {
      return b.id == bookmark.id
    })
  }

  $scope.deleteBookmark = deleteBookmark

  $scope.setEditedBookmark = setEditedBookmark
  $scope.createBookmark = createBookmark
  $scope.updateBookmark = updateBookmark
  $scope.isSelectedBookmark = isSelectedBookmark

})