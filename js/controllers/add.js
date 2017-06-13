module.exports = {
    name: "AddItemController",
    func: function ($scope, AddService) {
       // $scope.items = AddService.getAddItems();
        
        $scope.add = function (item){
            console.log(item.name);
            AddService.addItem(item)
        }
    }
} 