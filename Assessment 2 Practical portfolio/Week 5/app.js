Vue.component("grocery-items",{
    props:["item"],
    template:`
            <ol>
                {{item.item}}
                <button v-on:click="addItem">+</button>
                <button v-on:click="removeItem">-</button>
                {{count}}
            </ol>
            `,
    data:function(){
        return{
            count:0,
        }
    },
    methods: {
        addItem: function() {
            this.count++;
        },
        removeItem: function() {
            if (this.count > 0)
            this.count--;
        }
    }
})

var anExample = new Vue ({
    el: "#app",
    data: {
        message: 'My Grocery List',
        items:[
            {id:1, item:"Bannana"},
            {id:2, item:"Apple"},
            {id:3, item:"Orange"},
            {id:4, item:"Chicken"},
            {id:5, item:"Eggs"},
            {id:6, item:"Cheese"},
        ],
    },
})