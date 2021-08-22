new Vue({
    el: "#app",
    data: {
        todos: [
            {text:"Study", done:false},
            {text:"Eat", done: false},
            {text:"Sleep", done:false},
            {text:"Workout", done:false},
            {text:"Play Video Games", done:false}
        ]
    },
    methods: {
        toggle: function(todo){
            todo.done = !todo.done
        },
        addItem: function(todo){
            var value = this.newItem && this.newItem.trim()
            this.todos.push({
                text: value,
                done: false})
            this.newItem = '';
        }
    }
})