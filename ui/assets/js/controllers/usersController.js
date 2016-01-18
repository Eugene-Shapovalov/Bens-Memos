var model = {
    items: [
        { login: 'Brad', password: '12345', active: false },
        { login: 'Alex', password: 'qwerty', active: true },
        { login: 'Monica', password: 'monica123', active: true },
        { login: 'Nomad', password: 'nom5555', active: false }
    ]
};

bensMemosApp.controller("usersController", function($scope) {
    $scope.list = model;
    $scope.addItem = function(username, passwd) {
        if(username != "" && passwd != "") {
            $scope.list.items.push({ login: username, password: passwd, active: false});
        }
    }
});