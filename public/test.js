// try{
//   throw new Error('ad')
// } catch {
//   // console.log('catch')
// }
// let iport = 5656
// let obj = {type: 'Ack2', data: {port: iport}}
// let str = JSON.stringify(obj)
// console.log(str)
// console.log(JSON.parse(str).data.port)

// let peerlist = []
// let net = require('net')
// let server = net.createServer((c)=>{
//   c.setEncoding = 'utf8'
//   c.on('data', ()=>{
//     let obj = JSON.parse(data)
//     obj.mouth = c
//     step1(obj)
//   })
// })
// server.listen(5678)

// function step1(peer){
//   ear = net.createConnection({ port: peer.port }, () => {
//     peer.ear = ear
//     peerlist.push(peer)
//     console.log(`peerlist:${peerlist}`)
// }
//Bob
const net = require('net')
const iport = 4321
const remotePort = 5678
let peerlist = new Map()
// let mouth
const server = net.createServer((c)=>{
  c.setEncoding('utf8')
  let obj
  console.log('incomming connection')
  c.on('data', (chunk)=>{
    try{
      obj = JSON.parse(chunk)
    } catch {}
    switch (obj.type) {
      case 'Ack1':
        step2(obj.data.port, c)
        break
      case 'Ack2':
        console.log('step3.2')
        step4(obj.data.port, c)
        break
      case 'Ack3':
        step5(obj.data.port)
        break
    }
  })
})
server.listen(iport, function () {
  console.log('Alice ready')
})
new_connection(remotePort)

function step2 (num, c) {
  console.log('step1.2')
  console.log('step2')
  let peer = {}
  peer.port = num
  peer.temp_socket = c
  let constant_socket = net.createConnection({ port: num }, () => {
    console.log('step3.1')
    let obj = {type:'Ack2', data: {port: iport}}
    constant_socket.write(JSON.stringify(obj))
    peer.constant_socket = constant_socket
    peerlist.set(num, peer)
    constant_socket = null
    setTimeout(()=>{
      if(!peerlist.get(num).ready){
        peerlist.delete(num)
      }
    },5000)
  })
}
function step5 (num) {
  console.log('step4.2')
  peerlist.get(num).ready = true
  console.log(peerlist.get(num).port)
  succes_call()
}

function step4 (num, c) {
  peerlist.get(num).temp_socket = c
  console.log('step4.1')
  peerlist.get(num).ready = true
  let obj = {type: 'Ack3', data: {port: iport}}
  peerlist.get(num).constant_socket.write(JSON.stringify(obj))
  succes_call()
}
function new_connection(remotePort) {
  let constant_socket = net.createConnection({port: remotePort}, ()=>{
    console.log('step1.1')
    let obj = {type:'Ack1', data:{port: iport}}
    // console.log('test1.js')
    constant_socket.write(JSON.stringify(obj))
    let peer = {}
    peer.port = remotePort
    peer.constant_socket = constant_socket
    peerlist.set(remotePort, peer)
    constant_socket = null
    setTimeout(()=>{
      if(!peerlist.get(remotePort).ready){
        peerlist.delete(remotePort)
      }
    },5000)
  })
}
function succes_call(){
  console.log(`success`)
  process.stdin.pipe(peerlist.get(remotePort).temp_socket)
  peerlist.get(remotePort).constant_socket.pipe(process.stdout)
}