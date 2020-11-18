const app = new Vue({
    el : '#app',
    data : {
        heading : "To Do App Using Vue",
        id : 1,
        title : '',
        done : false,
        todos : []

    },
    methods : {
        reset(){
            this.id++
            this.title = ''
            this.done = false
        },
        addTodo(){
            let todo = {
                id : this.id ,
                title : this.title,
                done : this.done
            }
            this.todos.push(todo)
            this.reset()
        },
        removeTodo(todo){
            const todoIndex = this.todos.indexOf(todo)
            this.todos.splice(todoIndex,1)
        }

    }
})

