Vue.component('diet-plan', {
  props: ['plan'],
  template: `
  <div class="third section center">
      <ul class="ul white hover-shadow">
        <li class="xlarge padding-32 pale-green">
          <img src="https://img.icons8.com/ios-filled/100/000000/meal.png"/>
          <h2>{{plan.title}}</h2>
          <h3>{{plan.stars}}</h3>
        </li>
        <li class="padding-16"><img src="https://img.icons8.com/ios/50/000000/monday.png"/>
          <p><b>Breakfast: </b>{{plan.mon.breakfast}}</p>
          <p><b>Lunch: </b>{{plan.mon.lunch}}</p>
          <p><b>Dinner: </b>{{plan.mon.dinner}}</p>
        </li>
        <li class="padding-16"><img src="https://img.icons8.com/ios/50/000000/tuesday.png"/>
          <p><b>Breakfast: </b>{{plan.tue.breakfast}}</p>
          <p><b>Lunch: </b>{{plan.tue.lunch}}</p>
          <p><b>Dinner: </b>{{plan.tue.dinner}}</p>
        </li>
        <li class="padding-16"><img src="https://img.icons8.com/ios/50/000000/wednesday.png"/>
          <p><b>Breakfast: </b>{{plan.wed.breakfast}}</p>
          <p><b>Lunch: </b>{{plan.wed.lunch}}</p>
          <p><b>Dinner: </b>{{plan.wed.dinner}}</p>
        </li>
        <li class="padding-16"><img src="https://img.icons8.com/ios/50/000000/thursday.png"/>
          <p><b>Breakfast: </b>{{plan.thu.breakfast}}</p>
          <p><b>Lunch: </b>{{plan.thu.lunch}}</p>
          <p><b>Dinner: </b>{{plan.thu.dinner}}</p>
        </li>
        <li class="padding-16"><img src="https://img.icons8.com/ios/50/000000/friday.png"/>
          <p><b>Breakfast: </b>{{plan.fri.breakfast}}</p>
          <p><b>Lunch: </b>{{plan.fri.lunch}}</p>
          <p><b>Dinner: </b>{{plan.fri.dinner}}</p>
        </li>
        <li class="padding-16"><img src="https://img.icons8.com/ios/50/000000/saturday.png"/>
          <p><b>Breakfast: </b>{{plan.sat.breakfast}}</p>
          <p><b>Lunch: </b>{{plan.sat.lunch}}</p>
          <p><b>Dinner: </b>{{plan.sat.dinner}}</p>
        </li>
        <li class="padding-16"><img src="https://img.icons8.com/ios/50/000000/sunday.png"/>
          <p><b>Breakfast: </b>{{plan.sun.breakfast}}</p>
          <p><b>Lunch: </b>{{plan.sun.lunch}}</p>
          <p><b>Dinner: </b>{{plan.sun.dinner}}</p>
        </li>
        <li class="pale-green padding-16">
          <h3 class="wide">≈ {{plan.calories}} CALORIES PER DAY</h3>
        </li>
      </ul>
    </div>
  `
})

new Vue({
  el: '#diet-plans',
  data: {
    show: true,
    plans: [
      { id: 1, 
        title: 'DIET PLAN 1',
        calories: 1300,
        rating: 5,
        stars: '★★★★★',
        mon: {breakfast: '' , lunch: '', dinner: ''},
        tue: {breakfast: '' , lunch: '', dinner: ''},
        wed: {breakfast: '' , lunch: '', dinner: ''},
        thu: {breakfast: '' , lunch: '', dinner: ''},
        fri: {breakfast: '' , lunch: '', dinner: ''},
        sat: {breakfast: '' , lunch: '', dinner: ''},
        sun: {breakfast: '' , lunch: '', dinner: ''}
      },
      
      { id: 2, 
        title: 'DIET PLAN 2', 
        calories:1500,
        rating: 5,
        stars: '★★★★★',
        mon: {breakfast: '' , lunch: '', dinner: ''},
        tue: {breakfast: '' , lunch: '', dinner: ''},
        wed: {breakfast: '' , lunch: '', dinner: ''},
        thu: {breakfast: '' , lunch: '', dinner: ''},
        fri: {breakfast: '' , lunch: '', dinner: ''},
        sat: {breakfast: '' , lunch: '', dinner: ''},
        sun: {breakfast: '' , lunch: '', dinner: ''}
      },

      { id: 3, 
        title: 'DIET PLAN 3', 
        calories: 1800,
        rating: 5,
        stars: '★★★★★',
        mon: {breakfast: '' , lunch: '', dinner: ''},
        tue: {breakfast: '' , lunch: '', dinner: ''},
        wed: {breakfast: '' , lunch: '', dinner: ''},
        thu: {breakfast: '' , lunch: '', dinner: ''},
        fri: {breakfast: '' , lunch: '', dinner: ''},
        sat: {breakfast: '' , lunch: '', dinner: ''},
        sun: {breakfast: '' , lunch: '', dinner: ''}
      },

      { id: 4, 
        title: 'DIET PLAN 4', 
        calories: 1800,
        rating: 3,
        stars: '★★★☆☆',
        mon: {breakfast: '' , lunch: '', dinner: ''},
        tue: {breakfast: '' , lunch: '', dinner: ''},
        wed: {breakfast: '' , lunch: '', dinner: ''},
        thu: {breakfast: '' , lunch: '', dinner: ''},
        fri: {breakfast: '' , lunch: '', dinner: ''},
        sat: {breakfast: '' , lunch: '', dinner: ''},
        sun: {breakfast: '' , lunch: '', dinner: ''}
      },

      { id: 5, 
        title: 'DIET PLAN 5', 
        calories: 1800,
        rating: 4,
        stars: '★★★★☆',
        mon: {breakfast: '' , lunch: '', dinner: ''},
        tue: {breakfast: '' , lunch: '', dinner: ''},
        wed: {breakfast: '' , lunch: '', dinner: ''},
        thu: {breakfast: '' , lunch: '', dinner: ''},
        fri: {breakfast: '' , lunch: '', dinner: ''},
        sat: {breakfast: '' , lunch: '', dinner: ''},
        sun: {breakfast: '' , lunch: '', dinner: ''}
      },

      { id: 6, 
        title: 'DIET PLAN 6', 
        calories: 1800,
        rating: 3,
        stars: '★★★☆☆',
        mon: {breakfast: '' , lunch: '', dinner: ''},
        tue: {breakfast: '' , lunch: '', dinner: ''},
        wed: {breakfast: '' , lunch: '', dinner: ''},
        thu: {breakfast: '' , lunch: '', dinner: ''},
        fri: {breakfast: '' , lunch: '', dinner: ''},
        sat: {breakfast: '' , lunch: '', dinner: ''},
        sun: {breakfast: '' , lunch: '', dinner: ''}
      },
    ]
  }
})