
const express = require('express');
const app = express();
const path=require('path')
app.use(express.static(path.join(__dirname,'public')))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log(__dirname)

app.set('view engine', 'ejs');

// Route to render the index.ejs file
// app.get("/", (req, res) => {
//   res.render('index');
// });
app.get("/profile/:username/:age",(req,res)=>{
  console.log({username:req.params})
  res.send(`${req.params.username}`)
})
// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
