let express = require('express')
let router = express.Router()
let fs = require('fs')
// const EventEmitter = require('events');
// let db_events = require('./test.js').db_events
// let find_one = require('./test.js').find_one
// let create = require('./test.js').create
// db_events.emit('init')

router.get('/aa', function (req, res) {
  res.send('Hello World!');
});
// router.post('/signup', function(req, res, next){
// 	console.log(JSON.stringify(req.body))
//   async function as(){
//     let zz = await create(req.body.username,req.body.password)
//     if (zz==='chenggong') {
//       res.send(JSON.stringify({flag:1}))
//     } else {
//       res.send(JSON.stringify({flag:0}))
//     }
//   }
//   as()

// })
// router.post('/login', function(req, res, next){
//   console.log(JSON.stringify(req.body))
//   async function as(){
//     let zz = await find_one(req.body.username,req.body.password)
//     if (zz==='chenggong') {
//       res.send(JSON.stringify({flag:1}))
//     } else {
//       res.send(JSON.stringify({flag:0}))
//     }
//   }
//   as()
// })
router.get('/',(req, res, next)=>{
  let homepage = fs.createReadStream('./build/index.html', {encoding: 'utf8'})
  homepage.pipe(res)
})


module.exports = router

