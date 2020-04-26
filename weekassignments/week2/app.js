
(function(){
    angular.module("ShoppingListCheckOff",[])
        .controller("ToBuyController",ToBuyController)
        .controller("AlreadyBoughtController",AlreadyBoughtController)
        .service("ShoppingListCheckOffService",ShoppingListCheckOffService);

    function ShoppingListCheckOffService(){
        var service = this;

        service.ItemsToBuy= [
            {
                name: "Cookies",
                quantity: 10
            },
            {
                name: "Icecream",
                quantity: 10
            },
            {
                name: "Paneer",
                quantity: 10
            },
            {
                name: "Pespi",
                quantity: 5
            },
            {
                name: "CandyBar",
                quantity: 8
            },
            {
                name: "Wafers",
                quantity: 10
            },
            {
                name: "Maggi",
                quantity: 15
            },
            {
                name: "Pan Cake",
                quantity: 10
            },
            {
                name: "Candy",
                quantity: 10
            },
            {
                name: "Doughnut",
                quantity: 10
            }

        ];

        service.ItemsBought = [];

        service.moveToBoughtList = function (index) {
            Array.prototype.push.apply(service.ItemsBought, service.ItemsToBuy.splice(index, 1));
        }
    }


    ToBuyController.$inject=["ShoppingListCheckOffService"];
    function ToBuyController(ShoppingListCheckOffService){
        var ToBuyCtrl = this;
        ToBuyCtrl.ItemsInList = ShoppingListCheckOffService.ItemsToBuy;

        ToBuyCtrl.moveToBoughtList = function (index) {
            ShoppingListCheckOffService.moveToBoughtList(index);
        };
    }

    AlreadyBoughtController.$inject=["ShoppingListCheckOffService"];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var AlreadyBoughtCtrl = this;
        AlreadyBoughtCtrl.ItemsInList = ShoppingListCheckOffService.ItemsBought;

    }
})();
