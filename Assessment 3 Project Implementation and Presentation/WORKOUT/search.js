// search diet plan component
const searchDietPlans = {
  template: `
  <div>
  <h3>Search Over 100+ Diet Plans</h3>
  <div class="padding-16">
    <input type="text" class="searchinput" placeholder="Search Diet Plans" v-model.trim="searchTextDietPlan">
  </div>
  <div v-if="searchTextDietPlan && !(filteredDietPlanList.length == 0)">
    <span>Showing results for:</span><span class="large"><b> {{searchTextDietPlan}} </b></span>
    <br>
    <span>Total:</span><span class="large"><b> {{filteredDietPlanList.length}} </b></span><span>result(s) found.</span>
  </div>
  <div v-if="filteredDietPlanList.length == 0">
    <p>No results containing all your search terms were found.</p>
    <p>Your search - <b>{{searchTextDietPlan}}</b> - did not match any diet plans.</p>
    <p>Suggestions:</p>
    <ul>
      <li>Make sure that all words are spelled correctly.</li>
      <li>Try different keywords.</li>
      <li>Try more general keywords.</li>
    </ul>
  </div>
  <div class="row-padding" style="margin-top:64px">
      <template v-for="plan in filteredDietPlanList">
        <div class="third section center">
          <ul class="ul white hover-shadow pale-green">
            <li class="xlarge padding-32">
              <img style="width: 100%;" v-bind:src="plan.img"/>
              <h2>{{plan.title}}</h2>
              <h3>{{plan.stars}}</h3>
            </li>
            <li class="padding-16"><img src="https://img.icons8.com/ios/50/000000/monday.png"/>
              <p><b>Breakfast: </b>{{plan.mon.breakfast}}</p>
              <p v-show="plan.mon.snack1"><b>Snack: </b>{{plan.mon.snack1}}</p>
              <p><b>Lunch: </b>{{plan.mon.lunch}}</p>
              <p v-show="plan.mon.snack2"><b>Snack: </b>{{plan.mon.snack2}}</p>
              <p><b>Dinner: </b>{{plan.mon.dinner}}</p>
              <p v-show="plan.mon.snack3"><b>Snack: </b>{{plan.mon.snack3}}</p>
            </li>
            <li class="padding-16"><img src="https://img.icons8.com/ios/50/000000/tuesday.png"/>
              <p><b>Breakfast: </b>{{plan.tue.breakfast}}</p>
              <p v-show="plan.tue.snack1"><b>Snack: </b>{{plan.tue.snack1}}</p>
              <p><b>Lunch: </b>{{plan.tue.lunch}}</p>
              <p v-show="plan.tue.snack2"><b>Snack: </b>{{plan.tue.snack2}}</p>
              <p><b>Dinner: </b>{{plan.tue.dinner}}</p>
              <p v-show="plan.tue.snack3"><b>Snack: </b>{{plan.tue.snack3}}</p>
            </li>
            <li class="padding-16"><img src="https://img.icons8.com/ios/50/000000/wednesday.png"/>
              <p><b>Breakfast: </b>{{plan.wed.breakfast}}</p>
              <p v-show="plan.wed.snack1"><b>Snack: </b>{{plan.wed.snack1}}</p>
              <p><b>Lunch: </b>{{plan.wed.lunch}}</p>
              <p v-show="plan.wed.snack2"><b>Snack: </b>{{plan.wed.snack2}}</p>
              <p><b>Dinner: </b>{{plan.wed.dinner}}</p>
              <p v-show="plan.wed.snack3"><b>Snack: </b>{{plan.wed.snack3}}</p>
            </li>
            <li class="padding-16"><img src="https://img.icons8.com/ios/50/000000/thursday.png"/>
              <p><b>Breakfast: </b>{{plan.thu.breakfast}}</p>
              <p v-show="plan.thu.snack1"><b>Snack: </b>{{plan.thu.snack1}}</p>
              <p><b>Lunch: </b>{{plan.thu.lunch}}</p>
              <p v-show="plan.thu.snack2"><b>Snack: </b>{{plan.thu.snack2}}</p>
              <p><b>Dinner: </b>{{plan.thu.dinner}}</p>
              <p v-show="plan.thu.snack3"><b>Snack: </b>{{plan.thu.snack3}}</p>
            </li>
            <li class="padding-16"><img src="https://img.icons8.com/ios/50/000000/friday.png"/>
              <p><b>Breakfast: </b>{{plan.fri.breakfast}}</p>
              <p v-show="plan.fri.snack1"><b>Snack: </b>{{plan.fri.snack1}}</p>
              <p><b>Lunch: </b>{{plan.fri.lunch}}</p>
              <p v-show="plan.fri.snack2"><b>Snack: </b>{{plan.fri.snack2}}</p>
              <p><b>Dinner: </b>{{plan.fri.dinner}}</p>
              <p v-show="plan.fri.snack3"><b>Snack: </b>{{plan.fri.snack3}}</p>
            </li>
            <li class="padding-16"><img src="https://img.icons8.com/ios/50/000000/saturday.png"/>
              <p><b>Breakfast: </b>{{plan.sat.breakfast}}</p>
              <p v-show="plan.sat.snack1"><b>Snack: </b>{{plan.sat.snack1}}</p>
              <p><b>Lunch: </b>{{plan.sat.lunch}}</p>
              <p v-show="plan.sat.snack2"><b>Snack: </b>{{plan.sat.snack2}}</p>
              <p><b>Dinner: </b>{{plan.sat.dinner}}</p>
              <p v-show="plan.sat.snack3"><b>Snack: </b>{{plan.sat.snack3}}</p>
            </li>
            <li class="padding-16"><img src="https://img.icons8.com/ios/50/000000/sunday.png"/>
              <p><b>Breakfast: </b>{{plan.sun.breakfast}}</p>
              <p v-show="plan.sun.snack1"><b>Snack: </b>{{plan.sun.snack1}}</p>
              <p><b>Lunch: </b>{{plan.sun.lunch}}</p>
              <p v-show="plan.sun.snack2"><b>Snack: </b>{{plan.sun.snack2}}</p>
              <p><b>Dinner: </b>{{plan.sun.dinner}}</p>
              <p v-show="plan.sun.snack3"><b>Snack: </b>{{plan.sun.snack3}}</p>
            </li>
            <li class="padding-16">
              <h3 class="wide">by<br><i class="fas fa-dumbbell large margin-right"></i><b>WORKOUT</b></h3>
            </li>
          </ul>
        </div>
      </template>
    </div>
    </div>
  `,
  data () {
    return {
      searchTextDietPlan: '',
      // diet plan container
      dietPlanList: [
        { id: 1, 
          title: 'WEEKLY MEAL PLAN',
          img: './Images/ella-olsson-lMcRyBx4G50-unsplash.jpg',
          stars: '★★★★★',
          mon: {breakfast: 'Eggs & Fruit' , lunch: 'Chicken Fajita Salad', dinner: 'Crockpot Mexican Chicken',snack1: 'Chocolate Almond Shakeology w/ 1/2 banana',snack2: 'Orange String Cheese',snack3: 'Veggies & Hummus'},
          tue: {breakfast: 'Steel-cut Oats w/ Berries & Pecans' , lunch: 'Meatloaf', dinner: 'Ground Turkey Lettuce Wraps',snack1: 'Chocolate Mint Shakeology',snack2: 'Veggies & Hummus',snack3: 'Cottage Cheese & Veggies'},
          wed: {breakfast: 'Breakfast Sandwitch Ham & Egg on Thinwich' , lunch: 'Rice Cake w/ Turkey & Avacado', dinner: 'Loaded Baked Sweet Potato',snack1: 'Chocolate Almond Shakeology w/ 1/2 banana',snack2: 'Celery w/ Almond Butter',snack3: 'Veggies & Hummus'},
          thu: {breakfast: 'Steel-cut Oats w/ Berries & Pecans' , lunch: 'Meatloaf', dinner: 'Chicken Enchilada Soup',snack1: 'Chocolate Mint Shakeology',snack2: 'Veggies & Hummus',snack3: 'Cottage Cheese & Veggies'},
          fri: {breakfast: 'Eggs & Fruit' , lunch: 'Orange & String Cheese', dinner: 'Spaghetti',snack1: 'Chocolate Almond Shakeology w/ 1/2 banana',snack2: 'Chocolate Almond Shakeology w/ 1/2 banana',snack3: 'Orange String Cheese'},
          sat: {breakfast: 'Steel-cut Oats w/ Berries & Pecans' , lunch: 'Rice Cake w/ Turkey & Avacado', dinner: 'Chicken Tostada Bar',snack1: 'Chocolate Mint Shakeology',snack2: 'Celery w/ Almond Butter',snack3: 'Apple w/ Almond Butter'},
          sun: {breakfast: 'Steel-cut Oats w/ Berries & Pecans' , lunch: 'Chef Salad', dinner: 'Pot Roast & Vegetables',snack1: 'Chocolate Mint Shakeology',snack2: 'Veggies & Hummus',snack3: 'Cottage Cheese & Veggies'}
        },
        { id: 2, 
          title: 'WEIGHT LOSS DIET PLAN', 
          img: './Images/birgith-roosipuu-hom5fPULf4I-unsplash.jpg',
          stars: '★★★★★',
          mon: {breakfast: '3 hard boiled egs, 1 Grapefruit', lunch: '2 hard boiled eggs, 1 Banana or 1 Toast', dinner: '3 hard boiled eggs, Vegetable Salad', snack1: '', snack2: '', snack3: ''},
          tue: {breakfast: '1 hard boiled egg, 1 Grapefruit' , lunch: '2 hard boiled eggs. 1 grapefruit, 1 banana or 1 toast', dinner: 'Beef steak 200g, Vegetable Slad', snack1: '', snack2: '', snack3: ''},
          wed: {breakfast: '1 hard boiled egg, 1 grapefruit' , lunch: 'Vegetable salad, 1 grapefruit, 1 banana or 1 toast', dinner: '1 hard boiled egg, 1 chicken breast', snack1: '', snack2: '', snack3: ''},
          thu: {breakfast: '1 hard boiled egg, 1 grapefruit' , lunch: 'Vegetable salad, 1 grapefruit, 1 banana or 1 toast', dinner: '3 hard boiled eggd boiled spinich', snack1: '', snack2: '', snack3: ''},
          fri: {breakfast: '1 hard boiled egg, 1 grapefruit' , lunch: '3 hard boiled eggs, boiled spinich, 1 banana or 1 toast', dinner: '1 piece of white fish, vegetable salad, 1 banana or 1 toast', snack1: '', snack2: '', snack3: ''},
          sat: {breakfast: '2 hard boiled eggs, 1 grapefruit' , lunch: 'Fruit salad', dinner: 'Beef steak 200 g , Celery Tomato', snack1: '', snack2: '', snack3: ''},
          sun: {breakfast: '2 hard boiled eggs, 1 grapefruit' , lunch: '1 chicken breast, Celery tomato, 1 grapefruit', dinner: '1 chicken breast, tomato, 1 grapefruit, Steamed Cabbage', snack1: '', snack2: '', snack3: ''}
        },
        { id: 3, 
          title: 'WEIGHT GAIN DIET PLAN',
          img: './Images/agto-nugroho-8clQnz1iu68-unsplash.jpg',
          stars: '★★★★★',
          mon: {breakfast: 'Zucchini-Feta Pasta, Spinch Salad', lunch: 'Whole Grain Bagels w/Turkey Slics & Cult. Cream Cheese, Fresh Cherries', dinner: 'Fruit-on-the-Bottom Yogurt w/Peach Preserves, Boiled Eggs',snack1: 'Chocolate Almond Shakeology w/ 1/2 banana',snack2: 'Orange String Cheese',snack3: 'Veggies & Hummus'},
          tue: {breakfast: 'Grilled Herb Chicken, Cherry Caprese, Wild Rice' , lunch: 'Tuna Salad w/Grain-Free Crackers, Grapes', dinner: 'Spelt English Muffin Egg & Cheese Sandwich, Fresh Diced Peaches',snack1: 'Chocolate Mint Shakeology',snack2: 'Veggies & Hummus',snack3: 'Cottage Cheese & Veggies'},
          wed: {breakfast: 'Fully-Loaded Baked Potatoes w/Chives, Sour Cream' , lunch: 'Nut Butter Banana & Raw Honey Wrap, Vanilla Yogurt w/Peaches', dinner: 'Soaked Oatmeal w/Fresh Raspberries & Raw Honey',snack1: 'Chocolate Almond Shakeology w/ 1/2 banana',snack2: 'Celery w/ Almond Butter',snack3: 'Veggies & Hummus'},
          thu: {breakfast: 'Grilled Chicken Quesadilla Sandwiches, Refried Beans' , lunch: 'Avocado Egg Salad Sandwiches', dinner: 'Lemonberry Muffins, Scrambled Eggs, Fruit Smoothie',snack1: 'Chocolate Mint Shakeology',snack2: 'Veggies & Hummus',snack3: 'Cottage Cheese & Veggies'},
          fri: {breakfast: 'Seared Scallops, Saffron Rice w/Peas' , lunch: 'Refried 5-Layer Bean Dip w/Homemade Torillas', dinner: 'Spaghetti',snack1: 'Homemade Granala with Fresh Berries & Almond Milk',snack2: 'Chocolate Almond Shakeology w/ 1/2 banana',snack3: 'Orange String Cheese'},
          sat: {breakfast: 'Carrot-Cheddar Sandwiches, Tomato Soup, Cultered Pickles' , lunch: 'Pizza Bagels, Raw Veggies w/Ranch Dip', dinner: 'Strawberry Shortcakes, Scrambled Eggs',snack1: 'Chocolate Mint Shakeology',snack2: 'Celery w/ Almond Butter',snack3: 'Apple w/ Almond Butter'},
          sun: {breakfast: 'Grilled Steak, Mashed Potatoes, Steamed Asparagus' , lunch: 'Grilled Cheese Sandwishes w/Leftover Tomato Soup', dinner: 'Cheesy-Basil, Shortcake Biscuits w/Peach Preserves',snack1: 'Chocolate Mint Shakeology',snack2: 'Veggies & Hummus',snack3: 'Cottage Cheese & Veggies'}
        }
        // more can be added...
      ]
    }
  },
  computed: {
    // filter plans using keyword and returns a list with matching results
    filteredDietPlanList() {
      return this.dietPlanList.filter(plan => {
        return plan.title.toLowerCase().includes(this.searchTextDietPlan.toLowerCase());
      });
    }
  }
}

// search workout plan component
const searchWorkoutPlans = {
  template: `
  <div>
  <h3>Search Over 100+ Workout Plans</h3>
  <div class="padding-16">
    <input type="text" class="searchinput" placeholder="Search Workout Plans" v-model.trim="searchTextWorkoutPlan">
  </div>
  <div v-if="searchTextWorkoutPlan && !(filteredWorkoutPlanList.length == 0)">
    <span>Showing results for:</span><span class="large"><b> {{searchTextWorkoutPlan}} </b></span>
    <br>
    <span>Total:</span><span class="large"><b> {{filteredWorkoutPlanList.length}} </b></span><span>result(s) found.</span>
  </div>
  <div v-if="filteredWorkoutPlanList.length == 0">
    <p>No results containing all your search terms were found.</p>
    <p>Your search - <b>{{searchTextWorkoutPlan}}</b> - did not match any workout plans.</p>
    <p>Suggestions:</p>
    <ul>
      <li>Make sure that all words are spelled correctly.</li>
      <li>Try different keywords.</li>
      <li>Try more general keywords.</li>
    </ul>
  </div>
  <div class="row-padding" style="margin-top:64px">
      <template v-for="plan in filteredWorkoutPlanList">
        <div class="third section center">
          <ul class="ul white hover-shadow light-grey">
            <li class="xlarge padding-32">
              <img style="width: 100%" v-bind:src="plan.img"/>
              <h2>{{plan.title}}</h2>
              <h3>{{plan.stars}}</h3>
              <h4>{{plan.sets}} SETS</h4>
              <h4>{{plan.reps}} REPS</h4>
              <h4>{{plan.rest}} MIN REST</h4>
            </li>
            <li class="padding-16">
              <h4>DAY 1</h4>
              <p v-for="workout in plan.day1">{{workout}}</p>
            </li>
            <li class="padding-16">
              <h4>DAY 2</h4>
              <p v-for="workout in plan.day2">{{workout}}</p>
            </li>
            <li class="padding-16">
              <h4>DAY 3</h4>
              <p v-for="workout in plan.day3">{{workout}}</p>
            </li>
            <li class="padding-16">
              <h3 class="wide">by<br><i class="fas fa-dumbbell large margin-right"></i><b>WORKOUT</b></h3>
            </li>
          </ul>
        </div>
      </template>
    </div>
    </div>
  `,
  data () {
    return {
      searchTextWorkoutPlan: '',
      // workout plan container
      workoutPlanList: [
        { id: 1, 
          title: 'WORKOUT PLAN FOR BUILD YOUR ENDURANCE',
          img: './Images/anastase-maragos-7kEpUPB8vNk-unsplash.jpg',
          stars: '★★★★★',
          sets: '2-3',
          reps: '1-5',
          rest: '2-4',
          day1: ['Bent-Over Row','Lat Pulldown','Barbell Curl','Incline Dumbbell Curl','Dumbbell Preacher Curl'],
          day2: ['Leg Extension','Leg Curl','Latpull Down','Rowing','Back Extension','Chest Press','Decline Press','Letaral Raises (B/O)','Barbell Curl','Tricep Extension'],
          day3: ['Jumping Jacks','Burpees','Jump Rope','Squat Jumps','Plank'],
        },
        { id: 2, 
          title: 'GROW/BUILD MUSCLE WORKOUT PLAN', 
          img: './Images/anastase-maragos-fG0p4Qh_aWI-unsplash.jpg',
          stars: '★★★★★',
          sets: '3-5',
          reps: '1-5',
          rest: '2-5',
          day1: ['Dumbbell Squeeze Press','Incline barbell bench press','Incline dumbbell bench press','Close-grip barbell bench press','Decline press-up'],
          day2: ['Bent-Over Row','Lat Pulldown','Barbell Curl','Incline Dumbbell Curl','Dumbbell Preacher Curl','Lat pulldown','Wide dumbbell row','Barbell deadlift','Hyperextension','Single-arm dumbbell row'],
          day3: ['Barbell shrug','Barbell upright row','Dumbbell Overhead press','Dumbbell lateral raise','Alternating dumbbell front raise'],
        },
        { id: 3, 
          title: 'EXTREME WEIGHT LOSS WORKOUT PLAN',
          img: './Images/anastase-maragos-i6zMB3yy-jE-unsplash.jpg',
          stars: '★★★★★',
          sets: '3-4',
          reps: '18-20',
          rest: '1-2',
          day1: ['Cable fly','Decline barbell bench press','Staggered press-up','Jumping Jacks','Burpees'],
          day2: ['Quadruped dumbbell row','Resistance band pull apart','Single arm dumbbell preacher curl','Incline dumbbell curl','Dumbbell hammer curl','Chest Press','Decline Press','Letaral Raises (B/O)','Barbell Curl','Tricep Extension'],
          day3: ['Cycling','Battle Ropes','Sledgehammer Slams','Plank','Squat Jumps'],
        }
        // more can be added...
      ]
    }
  },
  computed: {
    // filter plans using keyword and returns a list with matching results
    filteredWorkoutPlanList() {
      return this.workoutPlanList.filter(plan => {
        return plan.title.toLowerCase().includes(this.searchTextWorkoutPlan.toLowerCase());
      });
    }
  }
}

var searchPlans = new VueRouter ({
  routes: [
    // route 1 - seacrh diet plans
    { path: '/search-diet-plans',
      component: searchDietPlans,
    },
    // route 2 - search workout plans
    { path: '/search-workout-plans',
      component: searchWorkoutPlans,
    }
  ]
})

// 4th Vue App
new Vue({
  el: '#search',
  router: searchPlans,
  computed: {
    // computes and returns current active path
    currentRouteName() {
        return this.$route.path;
    }
  }
})