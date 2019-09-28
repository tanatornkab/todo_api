const express = require('express')
const app = express()
const todo = require('./todo/todo')


app.use(express.json())
app.use(todo)

class Todo {
    constructor(title){
     
        this.title = title
        this.completed = false
    }
   

}
function generateID(id){
    let newID = id+1
    return newID 
}
function addData(title){
    tmp = new Todo(title) 
    tmp.id  =  generateID (todos.length)
    todos.push(tmp)
    return 
}



let todos = []


addData('test1');

app.get('/todo_show', (req, res) => {
    res.send(todos)
})
//  get id 

app.get('/todo_show/:id',(req,res)=>{
    todos = todos.filter(i => i.id.toString() === req.params.id)
    res.send(todos)
})


// get active
app.get('/todo_active', (req, res) => {
    let tmp = []
    todos.filter(index =>{
        if(todos[index.id-1].completed===false)
        tmp [index.id-1] = todos[index.id-1]
    })
    
    res.send(tmp)
})

// add todo 
app.post('/todo_add', (req, res) => {    
    addData(req.body.title)
    res.status(200).send(todos)
})

// edit title
app.put('/todo_edit_title/:id',(req,res)=>{

    let id = req.params.id-1
        todos[id].title = req.body.title
        console.log("title "+req.body.title)
        res.status(201).send(todos)

  
})
// mark completed
app.put('/todo_edit_complet/:id',(req,res)=>{

    let id = req.params.id-1
        todos[id].completed = req.body.completed
        console.log("completed "+req.body.completed)
        res.status(201).send(todos)

})

// delete todo Uncommidted remove one item
app.delete('/todo_del/:id',(req,res)=>{
    let id = req.params.id-1
    todos = todos.filter(x=> x !==todos[id])
    res.status(200).send(todos)

})
// clear completed remove all item
app.delete('/todo_delete',(req,res)=>{
    let id = req.params.id-1
    todos = todos.filter(x=> x ==="^#&$%^@!%$!%^%$#&^%$&^(*")
    res.status(200).send(todos)

})




module.exports = app