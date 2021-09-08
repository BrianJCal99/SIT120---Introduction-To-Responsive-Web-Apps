var form = new Vue ({
    el: "#v-model-multiple-checkboxes",
    data: {
        movieList: [
            {title: 'Inception', year: '2010'},
            {title: 'Tenet', year: '2020'},
            {title: 'Interstellar', year: '2014'},
            {title: 'Dunkirk', year: '2017'},
            {title: 'The prestige', year: '2006'},
            {title: 'Insomnia', year: '2002'},
            {title: 'Trancendencs', year: '2014'}
        ],
        moviesToWatch: []
    },
    computed: {
        movieCount: function () {
            return this.moviesToWatch.length
        }
    }
})