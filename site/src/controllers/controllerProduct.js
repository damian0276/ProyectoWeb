const path = require('path');
const fs = require('fs');



module.exports = {
    productosIndex: function(req,res){
        res.render(path.resolve(__dirname, '..', 'views','products','productos'))

    }
    


}