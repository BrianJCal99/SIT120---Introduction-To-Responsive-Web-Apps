var form = new Vue ({
    el: "#v-model-select-dynamic",
    data: {
        solarSystem: [
            {name: 'Sun'},
            {name: 'Mercury'},
            {name: 'Venus'},
            {name: 'Earth'},
            {name: 'Mars'},
            {name: 'Jupiter'},
            {name: 'Saturn'},
            {name: 'Uranus'},
            {name: 'Neptune'},
            {name: 'Pluto'},
        ],
        selected: '',
    }
})