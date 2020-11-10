const path = require('path');
const fs = require('fs');




module.exports = {
    administrar:(req,res)=>{
        res.render(path.resolve(__dirname, '..', 'views','admin','administrar',))

    }
}