const express = require('express');

const PORT = 4000;

const homeRouter = require('./routes/home')
const productRouter = require('./routes/product')
const errorRouter = require('./routes/error')

const app = express();

console.log('test')
// Link the router file
app.use(homeRouter)
app.use("/api/products",productRouter)
app.use(errorRouter)

console.log(express.Router())
// app._router.stack.forEach(function(r){
//     if (r.route && r.route.path){
//       console.log(r.route.path)
//     }
//   })

app.listen(PORT,()=>{

})