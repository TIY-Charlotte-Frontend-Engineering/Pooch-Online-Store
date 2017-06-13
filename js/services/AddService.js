module.exports={
    name: 'AddService',
    func: function ($http){
        let items=[]; // cart
        // let carts=[];

     
        return {
             addItem:function(item){
                 
               items.push(item) 
                 
             },

            // getCarts: function(){
            //     return carts;
            //  },
            getAddItems(){
                return items;
            }
        }
    }
}