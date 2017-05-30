module.exports={
    name: "CartListController",
    func: function($scope, AddService){
        $scope.items= AddService.getCarts();
    }
}