angular.module('ghanastocks', ['LocalStorageModule'])

.controller('ActivityCtrl', function($scope, localStorageService, Activities)
{
    console.log('started');
    /*Cache.clear(function(status)
    {
        alert(status);
    },function(status)
    {
        alert(status);
    });*/
    $scope.activities = localStorageService.get('activities');
    console.log(localStorageService.get('activities'));
    Activities.getActivities({
        'handle': 'WizardClass',
        'status': 'Testing message 1',
        'avatar': 'beetle',
        'x': '-41',
        'y' : '71'
    }).success(function(response)
    {
        console.log("SUCCESS!!!");
        $scope.activities = response;
        localStorageService.add('activities', response);
    }).error(function(response)
    {
        console.log("ERROR!!!");
        $scope.activities = [
            {'avatar': 'airplane', 'handle': 'ERROR', 'status': 'Just doing stuff'},
            {'avatar': 'lizard', 'handle': 'ERROR', 'status': 'ERROR'},
            {'avatar': 'sailboat', 'handle': 'ERROR', 'status': 'Me too, doing stuff'}
        ];
        console.log(response);
    });

})

.controller('FriendsCtrl', function($scope, Friends)
{
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends)
{
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('UserCtrl', function($scope, localStorageService, geoLocation)
{
    $scope.location = "Nothing yet";
    console.log(geoLocation.getLocation);
    geoLocation.getLocation(function(position)
    {
        $scope.location = JSON.stringify(position);
        alert(JSON.stringify(position));
        $scope.$apply();
    },
    function(error)
    {
        $scope.location = error;
        console.log("ERROR " + error);
        alert(JSON.stringify(error));
        $scope.$apply();
    },
    {
        maximumAge: 3000,
        timeout: 3000,
        enableHighAccuracy: true
    });
});

/*document.addEventListener('deviceready', onDeviceReady);
function onDeviceReady()
{
    var success = function(status) {
        alert('Message: ' + status);
    }

    var error = function(status) {
        alert('Error: ' + status);
    }

    /*window.cache.clear( success, error );

    navigator.geolocation.getCurrentPosition(function(position)
    {
        alert(JSON.stringify(position));
    },
    function(error)
    {
        alert(JSON.stringify(error));
    },
    {
        maximumAge: 20000,
        timeout: 15000,
        enableHighAccuracy: true
    });
}*/