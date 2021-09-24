// user feedback for the created plan
Vue.component('like-plan', {
    template: `
    <div class= "container padding-16">
        <p class="large">Are you satisfied with the results?</p>
        <button class="button large black hover-light-green" v-bind:title="like" v-on:click="likeFeedback" :disabled="disabled == 1">Like<i class="fa fa-thumbs-up margin-left" aria-hidden="true"></i></button>
        <button class="button large black hover-light-green" v-bind:title="dislike" v-on:click="dislikeFeedback" :disabled="disabled == 1">Dislike<i class="fa fa-thumbs-down margin-left" aria-hidden="true"></i></button>
    </div>
    `,
    data() {
        return {
        like: 'Like',
        dislike: 'Dislike',
        disabled: 0
        }
    },
    methods: {
        // triggered if user clicks like button and will show an popup alert
        likeFeedback: function () {
        alert ("We appreciate your feedback to WORKOUT. What did you like? Let us know.");
        // disable buttons
        this.disabled = 1;
        },
        // triggered if user clicks dislike button and will show an popup alert
        dislikeFeedback: function () {
        alert ("We appreciate your feedback to WORKOUT. Is there something we can do better? Let us know.");
        // disable buttons
        this.disabled = 1;
        }
    }
})

// filter function that resturns an all caps string value
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.toUpperCase()
})

// 1st Vue App
var app = new Vue({
	el:'#create-diet-plans',
	data: {
        errors: [],
        show: false,
        date: '',
        time: '',
        userName: null,
		gender: null,
        age: null,
        height: null,
        weight: null,
        waist: null,
        neck: null,
        showHip: false,
        hip: null,
        lifestyle: null,
        lifestyleOptions: [
            { option: 'Sedentary lifestyle', description:'Little or no exercise'},
            { option: 'Lightly active', description:'Light exercise/sports 1-3 days/week'},
            { option: 'Moderately active', description:'Medium exercise/sports 3-5 days/week'},
            { option: 'Active lifestyle', description:'Hard exercise/sports 6-7 days a week'},
            { option: 'Very active lifestyle', description:'Intense exercise/sports, physical job or twice/day training'}
        ],
        bmi:0,
        bmr:0,
        totalDailyCalorieNeeds:0,
        bodyFat:0,
        bmiCategorie: null,
        monday: {
            breakfast:[],
            lunch:[],
            dinner:[],
            snack: []
        },
        tuesday: {
            breakfast:[],
            lunch:[],
            dinner:[],
            snack: []
        },
        wednesday: {
            breakfast:[],
            lunch:[],
            dinner:[],
            snack: []
        },
        thursday: {
            breakfast:[],
            lunch:[],
            dinner:[],
            snack: []
        },
        friday: {
            breakfast:[],
            lunch:[],
            dinner:[],
            snack: []
        },
        saturday: {
            breakfast:[],
            lunch:[],
            dinner:[],
            snack: []
        },
        sunday: {
            breakfast:[],
            lunch:[],
            dinner:[],
            snack: []
        },
	},
    computed: {
        // calculates and returns value of bmi & bmiCategorie using height and weight
        ComputeBMI: function () {
            this.bmi = (this.weight / ((this.height/100)*(this.height/100))).toFixed(1)
            if (this.bmi < 18.5 || this.bmi == 18.5){
                this.bmiCategorie = 'Underweight'
            }
            if (18.5 < this.bmi && this.bmi < 24.9 || this.bmi == 24.9){
                this.bmiCategorie = 'Normal weight'
            }
            if (24.9 < this.bmi && this.bmi < 29.9 || this.bmi == 29.9){
                this.bmiCategorie = 'Overweight'
            }
            if (this.bmi > 30){
                this.bmiCategorie = 'Obesity'
            }
            return [this.bmi,this.bmiCategorie]
        },
        // calculates and returns the value of BMR using gender, bmr, height, weight and age
        ComputeBMR: function () {
            if (this.gender == 'Male') {
                this.bmr = (((10*this.weight)+(6.25*this.height)-(5*this.age)+5)).toFixed()
            }
            if (this.gender == 'Female') {
                this.bmr = (((10*this.weight)+(6.25*this.height)-(5*this.age)-161)).toFixed()
            }
            return this.bmr
        },
        // calculates and returns the value of totalDailyCalorieNeeds using bmi and lifestyle
        ComputeTotalDailyCalorieNeeds: function () {
            if (this.lifestyle == 'Sedentary lifestyle') {
                this.totalDailyCalorieNeeds = (this.bmr * 1.2).toFixed()
            }
            if (this.lifestyle == 'Lightly active') {
                this.totalDailyCalorieNeeds = (this.bmr * 1.375).toFixed()
            }
            if (this.lifestyle == 'Moderately active') {
                this.totalDailyCalorieNeeds = (this.bmr * 1.55).toFixed()
            }
            if (this.lifestyle == 'Active lifestyle') {
                this.totalDailyCalorieNeeds = (this.bmr * 1.725).toFixed()
            }
            if (this.lifestyle == 'Very active lifestyle') {
                this.totalDailyCalorieNeeds = (this.bmr * 1.9).toFixed()
            }
            return this.totalDailyCalorieNeeds
        },
        // calculates and retruns the value of bodyFat using gender, height, waist, neck and hip meassurement
        ComputeBodyFat: function () {
            // if user selects male calculate their bodyfat percentage using this formula
            if (this.gender == 'Male') {
                this.bodyFat = (86.010*Math.log10((this.waist/2.54)-(this.neck/2.54))-70.041*Math.log10((this.height/2.54))+36.76).toFixed()
            }
            // if user selects female calculate their bodyfat percentage using this formula
            if (this.gender == 'Female') {
                this.bodyFat = (163.205*Math.log10((this.waist/2.54)+(this.hip/2.54)-(this.neck/2.54))-97.684*Math.log10((this.height/2.54))-78.387).toFixed()
            }
            return this.bodyFat
        },
    },
    methods: {
        // checks all the fields are filled or not
        // if not an error message will added to a list
        checkForm: function () {
            this.errors = [];

            if (!this.age) this.errors.push('Age required.');
            if (!this.gender) this.errors.push('Select your gender.');
            if (!this.height) this.errors.push('Enter your height.');
            if (!this.weight) this.errors.push('Enter your weight.');
            if (!this.neck) this.errors.push('Enter your neck measurment.');
            if (!this.waist) this.errors.push('Enter your waist measurment.');
            if (!this.lifestyle) this.errors.push('Select your lifestyle.');
            if (this.gender == 'Female' && !this.hip) this.errors.push('Enter your hip measurment.(Only for women)')
        },
        // change the content of diet plan according to user's BMI categorie and lifestyle
        createDietPlan: function () {
            if (this.bmiCategorie == 'Underweight') {
                if (this.lifestyle == 'Sedentary lifestyle') {
                    // if user's BMI categorie is undewrweight and slects Sedentary lifestyle as his/her lifestyle they will get following meals in their diet plan
                    this.monday.breakfast = ['Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)','Cranberry juice (1 c)','413 cal, 18 gm pro'];
                    this.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.monday.dinner = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.monday.snack = ['Greek yogurt parfalt (1 c)','126 cal, 5 gm pro'];
    
                    this.tuesday.breakfast = ['Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)','Greek yogurt with fruit (1 single serve container)','Whole milk (1 c)','644 cal, 22 gm pro'];
                    this.tuesday.lunch = ['Ham salad sandwich (1/2 c on 2 pc bread)','Edamame (1/2 c)','Whole milk (1 c)','710 cal, 35 gm pro'];
                    this.tuesday.dinner = ['Lasagna (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','608 cal, 24 gm pro'];
                    this.tuesday.snack = ['Cottage cheese (1/2 c)','Canned fruit (1 snack pack)','180 cal, 11 gm pro'];
    
                    this.wednesday.breakfast = ['Srambled eggs (1 large)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Fruit juice (1/2 c)','284 cal, 10 gm pro'];
                    this.wednesday.lunch = ['Cheseburger with bun (1 sand)','Fries (1 small serving)','Chocolate milk shake (1 c)','1021 cal, 40 gm pro'];
                    this.wednesday.dinner = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)','295 cal, 8 gm pro'];
    
                    this.thursday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.thursday.lunch = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.thursday.dinner = ['Ground beef tacos (1 taco)','Refried beans (1/2 c)','Rice (1/2 c)','Whole milk (1 c)','579 cal, 30 gm pro'];
                    this.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)','Whole milk (1 c)','445 cal, 16 gm pro'];
    
                    this.friday.breakfast = ['English muffin (1) with nut butter (2 Tbs)','Whole milk (1 c)','540 cal, 22 gm pro'];
                    this.friday.lunch = ['Chicken & cheese pita (1 pita) with avocado (2 Tbs)','Cherry tomatoes (1 c)','Whole milk (1 c)','555 cal, 32 gm pro'];
                    this.friday.dinner = ['Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)','Garlic bread (1 slice)','Whole milk (1 c)','744 cal, 48 gm pro'];
                    this.friday.snack = ['String cheese (1 stick)','Crackers (5)','Whole milk (1 c)','280 cal,14 gm pro'];
                    
                    this.saturday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.saturday.lunch = ['Chicken stir fry (1 c) with veggies (1/2 c)','Pineapple (1/2 c)','Whole milk (1 c)','482 cal, 24 gm pro'];
                    this.saturday.dinner = ['Meat with potatoes & gravy (1 c total meal)','Cooked carrots (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','593 cal, 26 gm pro'];
                    this.saturday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
    
                    this.sunday.breakfast = ['Hard-boilded egg (1 large)','Fruit (1/2 c)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Whole milk (1 c)','422 cal, 18 gm pro'];
                    this.sunday.lunch = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.sunday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.sunday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
                }
                if (this.lifestyle == 'Lightly active') {
                    // if user's BMI categorie is undewrweight and slects Lightly active as his/her lifestyle they will get following meals in their diet plan
                    this.monday.breakfast = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.monday.lunch = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
                    this.monday.dinner = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.monday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
    
                    this.tuesday.breakfast = ['English muffin (1) with nut butter (2 Tbs)','Whole milk (1 c)','540 cal, 22 gm pro'];
                    this.tuesday.lunch = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.tuesday.dinner = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.tuesday.snack = ['String cheese (1 stick)','Crackers (5)','Whole milk (1 c)','280 cal,14 gm pro'];
    
                    this.wednesday.breakfast = ['Chicken & cheese pita (1 pita) with avocado (2 Tbs)','Cherry tomatoes (1 c)','Whole milk (1 c)','555 cal, 32 gm pro'];
                    this.wednesday.lunch = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.wednesday.dinner = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.wednesday.snack = ['Greek yogurt parfalt (1 c)','126 cal, 5 gm pro'];
    
                    this.thursday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.thursday.lunch = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.thursday.dinner = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)','295 cal, 8 gm pro'];
    
                    this.friday.breakfast = ['Ham salad sandwich (1/2 c on 2 pc bread)','Edamame (1/2 c)','Whole milk (1 c)','710 cal, 35 gm pro'];
                    this.friday.lunch = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.friday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.friday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
                    
                    this.saturday.breakfast = ['Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)','Greek yogurt with fruit (1 single serve container)','Whole milk (1 c)','644 cal, 22 gm pro'];
                    this.saturday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.saturday.dinner = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.saturday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
    
                    this.sunday.breakfast = ['Srambled eggs (1 large)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Fruit juice (1/2 c)','284 cal, 10 gm pro'];
                    this.sunday.lunch = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.sunday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.sunday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
                }
                if (this.lifestyle == 'Moderately active') {
                    // if user's BMI categorie is undewrweight and slects Mederately active as his/her lifestyle they will get following meals in their diet plan
                    this.monday.breakfast = ['Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)','Cranberry juice (1 c)','413 cal, 18 gm pro'];
                    this.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.monday.dinner = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.monday.snack = ['Greek yogurt parfalt (1 c)','126 cal, 5 gm pro'];
    
                    this.tuesday.breakfast = ['Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)','Greek yogurt with fruit (1 single serve container)','Whole milk (1 c)','644 cal, 22 gm pro'];
                    this.tuesday.lunch = ['Ham salad sandwich (1/2 c on 2 pc bread)','Edamame (1/2 c)','Whole milk (1 c)','710 cal, 35 gm pro'];
                    this.tuesday.dinner = ['Lasagna (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','608 cal, 24 gm pro'];
                    this.tuesday.snack = ['Cottage cheese (1/2 c)','Canned fruit (1 snack pack)','180 cal, 11 gm pro'];
    
                    this.wednesday.breakfast = ['Srambled eggs (1 large)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Fruit juice (1/2 c)','284 cal, 10 gm pro'];
                    this.wednesday.lunch = ['Cheseburger with bun (1 sand)','Fries (1 small serving)','Chocolate milk shake (1 c)','1021 cal, 40 gm pro'];
                    this.wednesday.dinner = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)','295 cal, 8 gm pro'];
    
                    this.thursday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.thursday.lunch = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.thursday.dinner = ['Ground beef tacos (1 taco)','Refried beans (1/2 c)','Rice (1/2 c)','Whole milk (1 c)','579 cal, 30 gm pro'];
                    this.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)','Whole milk (1 c)','445 cal, 16 gm pro'];
    
                    this.friday.breakfast = ['English muffin (1) with nut butter (2 Tbs)','Whole milk (1 c)','540 cal, 22 gm pro'];
                    this.friday.lunch = ['Chicken & cheese pita (1 pita) with avocado (2 Tbs)','Cherry tomatoes (1 c)','Whole milk (1 c)','555 cal, 32 gm pro'];
                    this.friday.dinner = ['Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)','Garlic bread (1 slice)','Whole milk (1 c)','744 cal, 48 gm pro'];
                    this.friday.snack = ['String cheese (1 stick)','Crackers (5)','Whole milk (1 c)','280 cal,14 gm pro'];
                    
                    this.saturday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.saturday.lunch = ['Chicken stir fry (1 c) with veggies (1/2 c)','Pineapple (1/2 c)','Whole milk (1 c)','482 cal, 24 gm pro'];
                    this.saturday.dinner = ['Meat with potatoes & gravy (1 c total meal)','Cooked carrots (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','593 cal, 26 gm pro'];
                    this.saturday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
    
                    this.sunday.breakfast = ['Hard-boilded egg (1 large)','Fruit (1/2 c)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Whole milk (1 c)','422 cal, 18 gm pro'];
                    this.sunday.lunch = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.sunday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.sunday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
                }
                if (this.lifestyle == 'Active lifestyle') {
                    // if user's BMI categorie is undewrweight and slects Active lifestyle as his/her lifestyle they will get following meals in their diet plan
                    this.monday.breakfast = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.monday.lunch = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
                    this.monday.dinner = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.monday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
    
                    this.tuesday.breakfast = ['English muffin (1) with nut butter (2 Tbs)','Whole milk (1 c)','540 cal, 22 gm pro'];
                    this.tuesday.lunch = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.tuesday.dinner = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.tuesday.snack = ['String cheese (1 stick)','Crackers (5)','Whole milk (1 c)','280 cal,14 gm pro'];
    
                    this.wednesday.breakfast = ['Chicken & cheese pita (1 pita) with avocado (2 Tbs)','Cherry tomatoes (1 c)','Whole milk (1 c)','555 cal, 32 gm pro'];
                    this.wednesday.lunch = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.wednesday.dinner = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.wednesday.snack = ['Greek yogurt parfalt (1 c)','126 cal, 5 gm pro'];
    
                    this.thursday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.thursday.lunch = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.thursday.dinner = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)','295 cal, 8 gm pro'];
    
                    this.friday.breakfast = ['Ham salad sandwich (1/2 c on 2 pc bread)','Edamame (1/2 c)','Whole milk (1 c)','710 cal, 35 gm pro'];
                    this.friday.lunch = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.friday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.friday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
                    
                    this.saturday.breakfast = ['Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)','Greek yogurt with fruit (1 single serve container)','Whole milk (1 c)','644 cal, 22 gm pro'];
                    this.saturday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.saturday.dinner = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.saturday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
    
                    this.sunday.breakfast = ['Srambled eggs (1 large)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Fruit juice (1/2 c)','284 cal, 10 gm pro'];
                    this.sunday.lunch = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.sunday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.sunday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
                }
                if (this.lifestyle == 'Very active lifestyle') {
                    // if user's BMI categorie is undewrweight and slects Very active lifestyle as his/her lifestyle they will get following meals in their diet plan
                    this.monday.breakfast = ['Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)','Cranberry juice (1 c)','413 cal, 18 gm pro'];
                    this.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.monday.dinner = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.monday.snack = ['Greek yogurt parfalt (1 c)','126 cal, 5 gm pro'];
    
                    this.tuesday.breakfast = ['Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)','Greek yogurt with fruit (1 single serve container)','Whole milk (1 c)','644 cal, 22 gm pro'];
                    this.tuesday.lunch = ['Ham salad sandwich (1/2 c on 2 pc bread)','Edamame (1/2 c)','Whole milk (1 c)','710 cal, 35 gm pro'];
                    this.tuesday.dinner = ['Lasagna (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','608 cal, 24 gm pro'];
                    this.tuesday.snack = ['Cottage cheese (1/2 c)','Canned fruit (1 snack pack)','180 cal, 11 gm pro'];
    
                    this.wednesday.breakfast = ['Srambled eggs (1 large)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Fruit juice (1/2 c)','284 cal, 10 gm pro'];
                    this.wednesday.lunch = ['Cheseburger with bun (1 sand)','Fries (1 small serving)','Chocolate milk shake (1 c)','1021 cal, 40 gm pro'];
                    this.wednesday.dinner = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)','295 cal, 8 gm pro'];
    
                    this.thursday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.thursday.lunch = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.thursday.dinner = ['Ground beef tacos (1 taco)','Refried beans (1/2 c)','Rice (1/2 c)','Whole milk (1 c)','579 cal, 30 gm pro'];
                    this.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)','Whole milk (1 c)','445 cal, 16 gm pro'];
    
                    this.friday.breakfast = ['English muffin (1) with nut butter (2 Tbs)','Whole milk (1 c)','540 cal, 22 gm pro'];
                    this.friday.lunch = ['Chicken & cheese pita (1 pita) with avocado (2 Tbs)','Cherry tomatoes (1 c)','Whole milk (1 c)','555 cal, 32 gm pro'];
                    this.friday.dinner = ['Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)','Garlic bread (1 slice)','Whole milk (1 c)','744 cal, 48 gm pro'];
                    this.friday.snack = ['String cheese (1 stick)','Crackers (5)','Whole milk (1 c)','280 cal,14 gm pro'];
                    
                    this.saturday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.saturday.lunch = ['Chicken stir fry (1 c) with veggies (1/2 c)','Pineapple (1/2 c)','Whole milk (1 c)','482 cal, 24 gm pro'];
                    this.saturday.dinner = ['Meat with potatoes & gravy (1 c total meal)','Cooked carrots (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','593 cal, 26 gm pro'];
                    this.saturday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
    
                    this.sunday.breakfast = ['Hard-boilded egg (1 large)','Fruit (1/2 c)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Whole milk (1 c)','422 cal, 18 gm pro'];
                    this.sunday.lunch = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.sunday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.sunday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
                }
            }
            if (this.bmiCategorie == 'Normal weight') {
                if (this.lifestyle == 'Sedentary lifestyle') {
                    // if user's BMI categorie is Normal weight and slects Sedentary lifestyle as his/her lifestyle they will get following meals in their diet plan
                    this.monday.breakfast = ['Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)','Cranberry juice (1 c)','413 cal, 18 gm pro'];
                    this.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.monday.dinner = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.monday.snack = ['Greek yogurt parfalt (1 c)','126 cal, 5 gm pro'];
    
                    this.tuesday.breakfast = ['Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)','Greek yogurt with fruit (1 single serve container)','Whole milk (1 c)','644 cal, 22 gm pro'];
                    this.tuesday.lunch = ['Ham salad sandwich (1/2 c on 2 pc bread)','Edamame (1/2 c)','Whole milk (1 c)','710 cal, 35 gm pro'];
                    this.tuesday.dinner = ['Lasagna (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','608 cal, 24 gm pro'];
                    this.tuesday.snack = ['Cottage cheese (1/2 c)','Canned fruit (1 snack pack)','180 cal, 11 gm pro'];
    
                    this.wednesday.breakfast = ['Srambled eggs (1 large)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Fruit juice (1/2 c)','284 cal, 10 gm pro'];
                    this.wednesday.lunch = ['Cheseburger with bun (1 sand)','Fries (1 small serving)','Chocolate milk shake (1 c)','1021 cal, 40 gm pro'];
                    this.wednesday.dinner = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)','295 cal, 8 gm pro'];
    
                    this.thursday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.thursday.lunch = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.thursday.dinner = ['Ground beef tacos (1 taco)','Refried beans (1/2 c)','Rice (1/2 c)','Whole milk (1 c)','579 cal, 30 gm pro'];
                    this.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)','Whole milk (1 c)','445 cal, 16 gm pro'];
    
                    this.friday.breakfast = ['English muffin (1) with nut butter (2 Tbs)','Whole milk (1 c)','540 cal, 22 gm pro'];
                    this.friday.lunch = ['Chicken & cheese pita (1 pita) with avocado (2 Tbs)','Cherry tomatoes (1 c)','Whole milk (1 c)','555 cal, 32 gm pro'];
                    this.friday.dinner = ['Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)','Garlic bread (1 slice)','Whole milk (1 c)','744 cal, 48 gm pro'];
                    this.friday.snack = ['String cheese (1 stick)','Crackers (5)','Whole milk (1 c)','280 cal,14 gm pro'];
                    
                    this.saturday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.saturday.lunch = ['Chicken stir fry (1 c) with veggies (1/2 c)','Pineapple (1/2 c)','Whole milk (1 c)','482 cal, 24 gm pro'];
                    this.saturday.dinner = ['Meat with potatoes & gravy (1 c total meal)','Cooked carrots (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','593 cal, 26 gm pro'];
                    this.saturday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
    
                    this.sunday.breakfast = ['Hard-boilded egg (1 large)','Fruit (1/2 c)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Whole milk (1 c)','422 cal, 18 gm pro'];
                    this.sunday.lunch = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.sunday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.sunday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
                }
                if (this.lifestyle == 'Lightly active') {
                    // if user's BMI categorie is Normal weight and slects Lightly active as his/her lifestyle they will get following meals in their diet plan
                    this.monday.breakfast = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.monday.lunch = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
                    this.monday.dinner = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.monday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
    
                    this.tuesday.breakfast = ['English muffin (1) with nut butter (2 Tbs)','Whole milk (1 c)','540 cal, 22 gm pro'];
                    this.tuesday.lunch = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.tuesday.dinner = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.tuesday.snack = ['String cheese (1 stick)','Crackers (5)','Whole milk (1 c)','280 cal,14 gm pro'];
    
                    this.wednesday.breakfast = ['Chicken & cheese pita (1 pita) with avocado (2 Tbs)','Cherry tomatoes (1 c)','Whole milk (1 c)','555 cal, 32 gm pro'];
                    this.wednesday.lunch = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.wednesday.dinner = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.wednesday.snack = ['Greek yogurt parfalt (1 c)','126 cal, 5 gm pro'];
    
                    this.thursday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.thursday.lunch = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.thursday.dinner = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)','295 cal, 8 gm pro'];
    
                    this.friday.breakfast = ['Ham salad sandwich (1/2 c on 2 pc bread)','Edamame (1/2 c)','Whole milk (1 c)','710 cal, 35 gm pro'];
                    this.friday.lunch = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.friday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.friday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
                    
                    this.saturday.breakfast = ['Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)','Greek yogurt with fruit (1 single serve container)','Whole milk (1 c)','644 cal, 22 gm pro'];
                    this.saturday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.saturday.dinner = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.saturday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
    
                    this.sunday.breakfast = ['Srambled eggs (1 large)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Fruit juice (1/2 c)','284 cal, 10 gm pro'];
                    this.sunday.lunch = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.sunday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.sunday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
                }
                if (this.lifestyle == 'Moderately active') {
                    // if user's BMI categorie is Normal weight and slects Moderately active as his/her lifestyle they will get following meals in their diet plan
                    this.monday.breakfast = ['Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)','Cranberry juice (1 c)','413 cal, 18 gm pro'];
                    this.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.monday.dinner = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.monday.snack = ['Greek yogurt parfalt (1 c)','126 cal, 5 gm pro'];
    
                    this.tuesday.breakfast = ['Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)','Greek yogurt with fruit (1 single serve container)','Whole milk (1 c)','644 cal, 22 gm pro'];
                    this.tuesday.lunch = ['Ham salad sandwich (1/2 c on 2 pc bread)','Edamame (1/2 c)','Whole milk (1 c)','710 cal, 35 gm pro'];
                    this.tuesday.dinner = ['Lasagna (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','608 cal, 24 gm pro'];
                    this.tuesday.snack = ['Cottage cheese (1/2 c)','Canned fruit (1 snack pack)','180 cal, 11 gm pro'];
    
                    this.wednesday.breakfast = ['Srambled eggs (1 large)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Fruit juice (1/2 c)','284 cal, 10 gm pro'];
                    this.wednesday.lunch = ['Cheseburger with bun (1 sand)','Fries (1 small serving)','Chocolate milk shake (1 c)','1021 cal, 40 gm pro'];
                    this.wednesday.dinner = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)','295 cal, 8 gm pro'];
    
                    this.thursday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.thursday.lunch = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.thursday.dinner = ['Ground beef tacos (1 taco)','Refried beans (1/2 c)','Rice (1/2 c)','Whole milk (1 c)','579 cal, 30 gm pro'];
                    this.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)','Whole milk (1 c)','445 cal, 16 gm pro'];
    
                    this.friday.breakfast = ['English muffin (1) with nut butter (2 Tbs)','Whole milk (1 c)','540 cal, 22 gm pro'];
                    this.friday.lunch = ['Chicken & cheese pita (1 pita) with avocado (2 Tbs)','Cherry tomatoes (1 c)','Whole milk (1 c)','555 cal, 32 gm pro'];
                    this.friday.dinner = ['Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)','Garlic bread (1 slice)','Whole milk (1 c)','744 cal, 48 gm pro'];
                    this.friday.snack = ['String cheese (1 stick)','Crackers (5)','Whole milk (1 c)','280 cal,14 gm pro'];
                    
                    this.saturday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.saturday.lunch = ['Chicken stir fry (1 c) with veggies (1/2 c)','Pineapple (1/2 c)','Whole milk (1 c)','482 cal, 24 gm pro'];
                    this.saturday.dinner = ['Meat with potatoes & gravy (1 c total meal)','Cooked carrots (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','593 cal, 26 gm pro'];
                    this.saturday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
    
                    this.sunday.breakfast = ['Hard-boilded egg (1 large)','Fruit (1/2 c)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Whole milk (1 c)','422 cal, 18 gm pro'];
                    this.sunday.lunch = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.sunday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.sunday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
                }
                if (this.lifestyle == 'Active lifestyle') {
                    // if user's BMI categorie is Normal weight and slects Active lifestyle as his/her lifestyle they will get following meals in their diet plan
                    this.monday.breakfast = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.monday.lunch = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
                    this.monday.dinner = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.monday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
    
                    this.tuesday.breakfast = ['English muffin (1) with nut butter (2 Tbs)','Whole milk (1 c)','540 cal, 22 gm pro'];
                    this.tuesday.lunch = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.tuesday.dinner = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.tuesday.snack = ['String cheese (1 stick)','Crackers (5)','Whole milk (1 c)','280 cal,14 gm pro'];
    
                    this.wednesday.breakfast = ['Chicken & cheese pita (1 pita) with avocado (2 Tbs)','Cherry tomatoes (1 c)','Whole milk (1 c)','555 cal, 32 gm pro'];
                    this.wednesday.lunch = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.wednesday.dinner = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.wednesday.snack = ['Greek yogurt parfalt (1 c)','126 cal, 5 gm pro'];
    
                    this.thursday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.thursday.lunch = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.thursday.dinner = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)','295 cal, 8 gm pro'];
    
                    this.friday.breakfast = ['Ham salad sandwich (1/2 c on 2 pc bread)','Edamame (1/2 c)','Whole milk (1 c)','710 cal, 35 gm pro'];
                    this.friday.lunch = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.friday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.friday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
                    
                    this.saturday.breakfast = ['Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)','Greek yogurt with fruit (1 single serve container)','Whole milk (1 c)','644 cal, 22 gm pro'];
                    this.saturday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.saturday.dinner = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.saturday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
    
                    this.sunday.breakfast = ['Srambled eggs (1 large)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Fruit juice (1/2 c)','284 cal, 10 gm pro'];
                    this.sunday.lunch = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.sunday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.sunday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
                }
                if (this.lifestyle == 'Very active lifestyle') {
                    // if user's BMI categorie is Normal weight and slects Very active lifestyle as his/her lifestyle they will get following meals in their diet plan
                    this.monday.breakfast = ['Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)','Cranberry juice (1 c)','413 cal, 18 gm pro'];
                    this.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.monday.dinner = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.monday.snack = ['Greek yogurt parfalt (1 c)','126 cal, 5 gm pro'];
    
                    this.tuesday.breakfast = ['Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)','Greek yogurt with fruit (1 single serve container)','Whole milk (1 c)','644 cal, 22 gm pro'];
                    this.tuesday.lunch = ['Ham salad sandwich (1/2 c on 2 pc bread)','Edamame (1/2 c)','Whole milk (1 c)','710 cal, 35 gm pro'];
                    this.tuesday.dinner = ['Lasagna (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','608 cal, 24 gm pro'];
                    this.tuesday.snack = ['Cottage cheese (1/2 c)','Canned fruit (1 snack pack)','180 cal, 11 gm pro'];
    
                    this.wednesday.breakfast = ['Srambled eggs (1 large)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Fruit juice (1/2 c)','284 cal, 10 gm pro'];
                    this.wednesday.lunch = ['Cheseburger with bun (1 sand)','Fries (1 small serving)','Chocolate milk shake (1 c)','1021 cal, 40 gm pro'];
                    this.wednesday.dinner = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)','295 cal, 8 gm pro'];
    
                    this.thursday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.thursday.lunch = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.thursday.dinner = ['Ground beef tacos (1 taco)','Refried beans (1/2 c)','Rice (1/2 c)','Whole milk (1 c)','579 cal, 30 gm pro'];
                    this.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)','Whole milk (1 c)','445 cal, 16 gm pro'];
    
                    this.friday.breakfast = ['English muffin (1) with nut butter (2 Tbs)','Whole milk (1 c)','540 cal, 22 gm pro'];
                    this.friday.lunch = ['Chicken & cheese pita (1 pita) with avocado (2 Tbs)','Cherry tomatoes (1 c)','Whole milk (1 c)','555 cal, 32 gm pro'];
                    this.friday.dinner = ['Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)','Garlic bread (1 slice)','Whole milk (1 c)','744 cal, 48 gm pro'];
                    this.friday.snack = ['String cheese (1 stick)','Crackers (5)','Whole milk (1 c)','280 cal,14 gm pro'];
                    
                    this.saturday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.saturday.lunch = ['Chicken stir fry (1 c) with veggies (1/2 c)','Pineapple (1/2 c)','Whole milk (1 c)','482 cal, 24 gm pro'];
                    this.saturday.dinner = ['Meat with potatoes & gravy (1 c total meal)','Cooked carrots (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','593 cal, 26 gm pro'];
                    this.saturday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
    
                    this.sunday.breakfast = ['Hard-boilded egg (1 large)','Fruit (1/2 c)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Whole milk (1 c)','422 cal, 18 gm pro'];
                    this.sunday.lunch = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.sunday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.sunday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
                }
            }
            if (this.bmiCategorie == 'Overweight') {
                if (this.lifestyle == 'Sedentary lifestyle') {
                    // if user's BMI categorie is Overweight and slects Sedentary lifestyle as his/her lifestyle they will get following meals in their diet plan
                    this.monday.breakfast = ['Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)','Cranberry juice (1 c)','413 cal, 18 gm pro'];
                    this.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.monday.dinner = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.monday.snack = ['Greek yogurt parfalt (1 c)','126 cal, 5 gm pro'];
    
                    this.tuesday.breakfast = ['Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)','Greek yogurt with fruit (1 single serve container)','Whole milk (1 c)','644 cal, 22 gm pro'];
                    this.tuesday.lunch = ['Ham salad sandwich (1/2 c on 2 pc bread)','Edamame (1/2 c)','Whole milk (1 c)','710 cal, 35 gm pro'];
                    this.tuesday.dinner = ['Lasagna (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','608 cal, 24 gm pro'];
                    this.tuesday.snack = ['Cottage cheese (1/2 c)','Canned fruit (1 snack pack)','180 cal, 11 gm pro'];
    
                    this.wednesday.breakfast = ['Srambled eggs (1 large)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Fruit juice (1/2 c)','284 cal, 10 gm pro'];
                    this.wednesday.lunch = ['Cheseburger with bun (1 sand)','Fries (1 small serving)','Chocolate milk shake (1 c)','1021 cal, 40 gm pro'];
                    this.wednesday.dinner = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)','295 cal, 8 gm pro'];
    
                    this.thursday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.thursday.lunch = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.thursday.dinner = ['Ground beef tacos (1 taco)','Refried beans (1/2 c)','Rice (1/2 c)','Whole milk (1 c)','579 cal, 30 gm pro'];
                    this.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)','Whole milk (1 c)','445 cal, 16 gm pro'];
    
                    this.friday.breakfast = ['English muffin (1) with nut butter (2 Tbs)','Whole milk (1 c)','540 cal, 22 gm pro'];
                    this.friday.lunch = ['Chicken & cheese pita (1 pita) with avocado (2 Tbs)','Cherry tomatoes (1 c)','Whole milk (1 c)','555 cal, 32 gm pro'];
                    this.friday.dinner = ['Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)','Garlic bread (1 slice)','Whole milk (1 c)','744 cal, 48 gm pro'];
                    this.friday.snack = ['String cheese (1 stick)','Crackers (5)','Whole milk (1 c)','280 cal,14 gm pro'];
                    
                    this.saturday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.saturday.lunch = ['Chicken stir fry (1 c) with veggies (1/2 c)','Pineapple (1/2 c)','Whole milk (1 c)','482 cal, 24 gm pro'];
                    this.saturday.dinner = ['Meat with potatoes & gravy (1 c total meal)','Cooked carrots (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','593 cal, 26 gm pro'];
                    this.saturday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
    
                    this.sunday.breakfast = ['Hard-boilded egg (1 large)','Fruit (1/2 c)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Whole milk (1 c)','422 cal, 18 gm pro'];
                    this.sunday.lunch = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.sunday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.sunday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
                }
                if (this.lifestyle == 'Lightly active') {
                    // if user's BMI categorie is Overweight and slects Lightly active as his/her lifestyle they will get following meals in their diet plan
                    this.monday.breakfast = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.monday.lunch = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
                    this.monday.dinner = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.monday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
    
                    this.tuesday.breakfast = ['English muffin (1) with nut butter (2 Tbs)','Whole milk (1 c)','540 cal, 22 gm pro'];
                    this.tuesday.lunch = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.tuesday.dinner = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.tuesday.snack = ['String cheese (1 stick)','Crackers (5)','Whole milk (1 c)','280 cal,14 gm pro'];
    
                    this.wednesday.breakfast = ['Chicken & cheese pita (1 pita) with avocado (2 Tbs)','Cherry tomatoes (1 c)','Whole milk (1 c)','555 cal, 32 gm pro'];
                    this.wednesday.lunch = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.wednesday.dinner = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.wednesday.snack = ['Greek yogurt parfalt (1 c)','126 cal, 5 gm pro'];
    
                    this.thursday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.thursday.lunch = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.thursday.dinner = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)','295 cal, 8 gm pro'];
    
                    this.friday.breakfast = ['Ham salad sandwich (1/2 c on 2 pc bread)','Edamame (1/2 c)','Whole milk (1 c)','710 cal, 35 gm pro'];
                    this.friday.lunch = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.friday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.friday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
                    
                    this.saturday.breakfast = ['Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)','Greek yogurt with fruit (1 single serve container)','Whole milk (1 c)','644 cal, 22 gm pro'];
                    this.saturday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.saturday.dinner = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.saturday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
    
                    this.sunday.breakfast = ['Srambled eggs (1 large)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Fruit juice (1/2 c)','284 cal, 10 gm pro'];
                    this.sunday.lunch = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.sunday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.sunday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
                }
                if (this.lifestyle == 'Moderately active') {
                    // if user's BMI categorie is Overweight and slects Moderately active as his/her lifestyle they will get following meals in their diet plan
                    this.monday.breakfast = ['Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)','Cranberry juice (1 c)','413 cal, 18 gm pro'];
                    this.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.monday.dinner = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.monday.snack = ['Greek yogurt parfalt (1 c)','126 cal, 5 gm pro'];
    
                    this.tuesday.breakfast = ['Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)','Greek yogurt with fruit (1 single serve container)','Whole milk (1 c)','644 cal, 22 gm pro'];
                    this.tuesday.lunch = ['Ham salad sandwich (1/2 c on 2 pc bread)','Edamame (1/2 c)','Whole milk (1 c)','710 cal, 35 gm pro'];
                    this.tuesday.dinner = ['Lasagna (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','608 cal, 24 gm pro'];
                    this.tuesday.snack = ['Cottage cheese (1/2 c)','Canned fruit (1 snack pack)','180 cal, 11 gm pro'];
    
                    this.wednesday.breakfast = ['Srambled eggs (1 large)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Fruit juice (1/2 c)','284 cal, 10 gm pro'];
                    this.wednesday.lunch = ['Cheseburger with bun (1 sand)','Fries (1 small serving)','Chocolate milk shake (1 c)','1021 cal, 40 gm pro'];
                    this.wednesday.dinner = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)','295 cal, 8 gm pro'];
    
                    this.thursday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.thursday.lunch = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.thursday.dinner = ['Ground beef tacos (1 taco)','Refried beans (1/2 c)','Rice (1/2 c)','Whole milk (1 c)','579 cal, 30 gm pro'];
                    this.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)','Whole milk (1 c)','445 cal, 16 gm pro'];
    
                    this.friday.breakfast = ['English muffin (1) with nut butter (2 Tbs)','Whole milk (1 c)','540 cal, 22 gm pro'];
                    this.friday.lunch = ['Chicken & cheese pita (1 pita) with avocado (2 Tbs)','Cherry tomatoes (1 c)','Whole milk (1 c)','555 cal, 32 gm pro'];
                    this.friday.dinner = ['Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)','Garlic bread (1 slice)','Whole milk (1 c)','744 cal, 48 gm pro'];
                    this.friday.snack = ['String cheese (1 stick)','Crackers (5)','Whole milk (1 c)','280 cal,14 gm pro'];
                    
                    this.saturday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.saturday.lunch = ['Chicken stir fry (1 c) with veggies (1/2 c)','Pineapple (1/2 c)','Whole milk (1 c)','482 cal, 24 gm pro'];
                    this.saturday.dinner = ['Meat with potatoes & gravy (1 c total meal)','Cooked carrots (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','593 cal, 26 gm pro'];
                    this.saturday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
    
                    this.sunday.breakfast = ['Hard-boilded egg (1 large)','Fruit (1/2 c)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Whole milk (1 c)','422 cal, 18 gm pro'];
                    this.sunday.lunch = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.sunday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.sunday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
                }
                if (this.lifestyle == 'Active lifestyle') {
                    // if user's BMI categorie is Overweight and slects Active lifestyle as his/her lifestyle they will get following meals in their diet plan
                    this.monday.breakfast = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.monday.lunch = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
                    this.monday.dinner = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.monday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
    
                    this.tuesday.breakfast = ['English muffin (1) with nut butter (2 Tbs)','Whole milk (1 c)','540 cal, 22 gm pro'];
                    this.tuesday.lunch = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.tuesday.dinner = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.tuesday.snack = ['String cheese (1 stick)','Crackers (5)','Whole milk (1 c)','280 cal,14 gm pro'];
    
                    this.wednesday.breakfast = ['Chicken & cheese pita (1 pita) with avocado (2 Tbs)','Cherry tomatoes (1 c)','Whole milk (1 c)','555 cal, 32 gm pro'];
                    this.wednesday.lunch = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.wednesday.dinner = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.wednesday.snack = ['Greek yogurt parfalt (1 c)','126 cal, 5 gm pro'];
    
                    this.thursday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.thursday.lunch = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.thursday.dinner = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)','295 cal, 8 gm pro'];
    
                    this.friday.breakfast = ['Ham salad sandwich (1/2 c on 2 pc bread)','Edamame (1/2 c)','Whole milk (1 c)','710 cal, 35 gm pro'];
                    this.friday.lunch = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.friday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.friday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
                    
                    this.saturday.breakfast = ['Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)','Greek yogurt with fruit (1 single serve container)','Whole milk (1 c)','644 cal, 22 gm pro'];
                    this.saturday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.saturday.dinner = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.saturday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
    
                    this.sunday.breakfast = ['Srambled eggs (1 large)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Fruit juice (1/2 c)','284 cal, 10 gm pro'];
                    this.sunday.lunch = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.sunday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.sunday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
                }
                if (this.lifestyle == 'Very active lifestyle') {
                    // if user's BMI categorie is Overweight and slects Very active lifestyle as his/her lifestyle they will get following meals in their diet plan
                    this.monday.breakfast = ['Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)','Cranberry juice (1 c)','413 cal, 18 gm pro'];
                    this.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.monday.dinner = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.monday.snack = ['Greek yogurt parfalt (1 c)','126 cal, 5 gm pro'];
    
                    this.tuesday.breakfast = ['Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)','Greek yogurt with fruit (1 single serve container)','Whole milk (1 c)','644 cal, 22 gm pro'];
                    this.tuesday.lunch = ['Ham salad sandwich (1/2 c on 2 pc bread)','Edamame (1/2 c)','Whole milk (1 c)','710 cal, 35 gm pro'];
                    this.tuesday.dinner = ['Lasagna (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','608 cal, 24 gm pro'];
                    this.tuesday.snack = ['Cottage cheese (1/2 c)','Canned fruit (1 snack pack)','180 cal, 11 gm pro'];
    
                    this.wednesday.breakfast = ['Srambled eggs (1 large)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Fruit juice (1/2 c)','284 cal, 10 gm pro'];
                    this.wednesday.lunch = ['Cheseburger with bun (1 sand)','Fries (1 small serving)','Chocolate milk shake (1 c)','1021 cal, 40 gm pro'];
                    this.wednesday.dinner = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)','295 cal, 8 gm pro'];
    
                    this.thursday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.thursday.lunch = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.thursday.dinner = ['Ground beef tacos (1 taco)','Refried beans (1/2 c)','Rice (1/2 c)','Whole milk (1 c)','579 cal, 30 gm pro'];
                    this.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)','Whole milk (1 c)','445 cal, 16 gm pro'];
    
                    this.friday.breakfast = ['English muffin (1) with nut butter (2 Tbs)','Whole milk (1 c)','540 cal, 22 gm pro'];
                    this.friday.lunch = ['Chicken & cheese pita (1 pita) with avocado (2 Tbs)','Cherry tomatoes (1 c)','Whole milk (1 c)','555 cal, 32 gm pro'];
                    this.friday.dinner = ['Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)','Garlic bread (1 slice)','Whole milk (1 c)','744 cal, 48 gm pro'];
                    this.friday.snack = ['String cheese (1 stick)','Crackers (5)','Whole milk (1 c)','280 cal,14 gm pro'];
                    
                    this.saturday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.saturday.lunch = ['Chicken stir fry (1 c) with veggies (1/2 c)','Pineapple (1/2 c)','Whole milk (1 c)','482 cal, 24 gm pro'];
                    this.saturday.dinner = ['Meat with potatoes & gravy (1 c total meal)','Cooked carrots (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','593 cal, 26 gm pro'];
                    this.saturday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
    
                    this.sunday.breakfast = ['Hard-boilded egg (1 large)','Fruit (1/2 c)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Whole milk (1 c)','422 cal, 18 gm pro'];
                    this.sunday.lunch = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.sunday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.sunday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
                }
            }
            if (this.bmiCategorie == 'Obesity') {
                if (this.lifestyle == 'Sedentary lifestyle') {
                    // if user's BMI categorie is Obesity and slects Sedentary lifestyle as his/her lifestyle they will get following meals in their diet plan
                    this.monday.breakfast = ['Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)','Cranberry juice (1 c)','413 cal, 18 gm pro'];
                    this.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.monday.dinner = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.monday.snack = ['Greek yogurt parfalt (1 c)','126 cal, 5 gm pro'];
    
                    this.tuesday.breakfast = ['Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)','Greek yogurt with fruit (1 single serve container)','Whole milk (1 c)','644 cal, 22 gm pro'];
                    this.tuesday.lunch = ['Ham salad sandwich (1/2 c on 2 pc bread)','Edamame (1/2 c)','Whole milk (1 c)','710 cal, 35 gm pro'];
                    this.tuesday.dinner = ['Lasagna (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','608 cal, 24 gm pro'];
                    this.tuesday.snack = ['Cottage cheese (1/2 c)','Canned fruit (1 snack pack)','180 cal, 11 gm pro'];
    
                    this.wednesday.breakfast = ['Srambled eggs (1 large)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Fruit juice (1/2 c)','284 cal, 10 gm pro'];
                    this.wednesday.lunch = ['Cheseburger with bun (1 sand)','Fries (1 small serving)','Chocolate milk shake (1 c)','1021 cal, 40 gm pro'];
                    this.wednesday.dinner = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)','295 cal, 8 gm pro'];
    
                    this.thursday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.thursday.lunch = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.thursday.dinner = ['Ground beef tacos (1 taco)','Refried beans (1/2 c)','Rice (1/2 c)','Whole milk (1 c)','579 cal, 30 gm pro'];
                    this.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)','Whole milk (1 c)','445 cal, 16 gm pro'];
    
                    this.friday.breakfast = ['English muffin (1) with nut butter (2 Tbs)','Whole milk (1 c)','540 cal, 22 gm pro'];
                    this.friday.lunch = ['Chicken & cheese pita (1 pita) with avocado (2 Tbs)','Cherry tomatoes (1 c)','Whole milk (1 c)','555 cal, 32 gm pro'];
                    this.friday.dinner = ['Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)','Garlic bread (1 slice)','Whole milk (1 c)','744 cal, 48 gm pro'];
                    this.friday.snack = ['String cheese (1 stick)','Crackers (5)','Whole milk (1 c)','280 cal,14 gm pro'];
                    
                    this.saturday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.saturday.lunch = ['Chicken stir fry (1 c) with veggies (1/2 c)','Pineapple (1/2 c)','Whole milk (1 c)','482 cal, 24 gm pro'];
                    this.saturday.dinner = ['Meat with potatoes & gravy (1 c total meal)','Cooked carrots (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','593 cal, 26 gm pro'];
                    this.saturday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
    
                    this.sunday.breakfast = ['Hard-boilded egg (1 large)','Fruit (1/2 c)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Whole milk (1 c)','422 cal, 18 gm pro'];
                    this.sunday.lunch = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.sunday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.sunday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
                }
                if (this.lifestyle == 'Lightly active') {
                    // if user's BMI categorie is Obesity and slects Lightly active lifestyle as his/her lifestyle they will get following meals in their diet plan
                    this.monday.breakfast = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.monday.lunch = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
                    this.monday.dinner = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.monday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
    
                    this.tuesday.breakfast = ['English muffin (1) with nut butter (2 Tbs)','Whole milk (1 c)','540 cal, 22 gm pro'];
                    this.tuesday.lunch = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.tuesday.dinner = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.tuesday.snack = ['String cheese (1 stick)','Crackers (5)','Whole milk (1 c)','280 cal,14 gm pro'];
    
                    this.wednesday.breakfast = ['Chicken & cheese pita (1 pita) with avocado (2 Tbs)','Cherry tomatoes (1 c)','Whole milk (1 c)','555 cal, 32 gm pro'];
                    this.wednesday.lunch = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.wednesday.dinner = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.wednesday.snack = ['Greek yogurt parfalt (1 c)','126 cal, 5 gm pro'];
    
                    this.thursday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.thursday.lunch = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.thursday.dinner = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)','295 cal, 8 gm pro'];
    
                    this.friday.breakfast = ['Ham salad sandwich (1/2 c on 2 pc bread)','Edamame (1/2 c)','Whole milk (1 c)','710 cal, 35 gm pro'];
                    this.friday.lunch = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.friday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.friday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
                    
                    this.saturday.breakfast = ['Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)','Greek yogurt with fruit (1 single serve container)','Whole milk (1 c)','644 cal, 22 gm pro'];
                    this.saturday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.saturday.dinner = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.saturday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
    
                    this.sunday.breakfast = ['Srambled eggs (1 large)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Fruit juice (1/2 c)','284 cal, 10 gm pro'];
                    this.sunday.lunch = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.sunday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.sunday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
                }
                if (this.lifestyle == 'Moderately active') {
                    // if user's BMI categorie is Obesity and slects Moderately active lifestyle as his/her lifestyle they will get following meals in their diet plan
                    this.monday.breakfast = ['Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)','Cranberry juice (1 c)','413 cal, 18 gm pro'];
                    this.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.monday.dinner = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.monday.snack = ['Greek yogurt parfalt (1 c)','126 cal, 5 gm pro'];
    
                    this.tuesday.breakfast = ['Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)','Greek yogurt with fruit (1 single serve container)','Whole milk (1 c)','644 cal, 22 gm pro'];
                    this.tuesday.lunch = ['Ham salad sandwich (1/2 c on 2 pc bread)','Edamame (1/2 c)','Whole milk (1 c)','710 cal, 35 gm pro'];
                    this.tuesday.dinner = ['Lasagna (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','608 cal, 24 gm pro'];
                    this.tuesday.snack = ['Cottage cheese (1/2 c)','Canned fruit (1 snack pack)','180 cal, 11 gm pro'];
    
                    this.wednesday.breakfast = ['Srambled eggs (1 large)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Fruit juice (1/2 c)','284 cal, 10 gm pro'];
                    this.wednesday.lunch = ['Cheseburger with bun (1 sand)','Fries (1 small serving)','Chocolate milk shake (1 c)','1021 cal, 40 gm pro'];
                    this.wednesday.dinner = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)','295 cal, 8 gm pro'];
    
                    this.thursday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.thursday.lunch = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.thursday.dinner = ['Ground beef tacos (1 taco)','Refried beans (1/2 c)','Rice (1/2 c)','Whole milk (1 c)','579 cal, 30 gm pro'];
                    this.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)','Whole milk (1 c)','445 cal, 16 gm pro'];
    
                    this.friday.breakfast = ['English muffin (1) with nut butter (2 Tbs)','Whole milk (1 c)','540 cal, 22 gm pro'];
                    this.friday.lunch = ['Chicken & cheese pita (1 pita) with avocado (2 Tbs)','Cherry tomatoes (1 c)','Whole milk (1 c)','555 cal, 32 gm pro'];
                    this.friday.dinner = ['Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)','Garlic bread (1 slice)','Whole milk (1 c)','744 cal, 48 gm pro'];
                    this.friday.snack = ['String cheese (1 stick)','Crackers (5)','Whole milk (1 c)','280 cal,14 gm pro'];
                    
                    this.saturday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.saturday.lunch = ['Chicken stir fry (1 c) with veggies (1/2 c)','Pineapple (1/2 c)','Whole milk (1 c)','482 cal, 24 gm pro'];
                    this.saturday.dinner = ['Meat with potatoes & gravy (1 c total meal)','Cooked carrots (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','593 cal, 26 gm pro'];
                    this.saturday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
    
                    this.sunday.breakfast = ['Hard-boilded egg (1 large)','Fruit (1/2 c)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Whole milk (1 c)','422 cal, 18 gm pro'];
                    this.sunday.lunch = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.sunday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.sunday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
                }
                if (this.lifestyle == 'Active lifestyle') {
                    // if user's BMI categorie is Obesity and slects Active lifestyle as his/her lifestyle they will get following meals in their diet plan
                    this.monday.breakfast = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.monday.lunch = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
                    this.monday.dinner = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.monday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
    
                    this.tuesday.breakfast = ['English muffin (1) with nut butter (2 Tbs)','Whole milk (1 c)','540 cal, 22 gm pro'];
                    this.tuesday.lunch = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.tuesday.dinner = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.tuesday.snack = ['String cheese (1 stick)','Crackers (5)','Whole milk (1 c)','280 cal,14 gm pro'];
    
                    this.wednesday.breakfast = ['Chicken & cheese pita (1 pita) with avocado (2 Tbs)','Cherry tomatoes (1 c)','Whole milk (1 c)','555 cal, 32 gm pro'];
                    this.wednesday.lunch = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.wednesday.dinner = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.wednesday.snack = ['Greek yogurt parfalt (1 c)','126 cal, 5 gm pro'];
    
                    this.thursday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.thursday.lunch = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.thursday.dinner = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)','295 cal, 8 gm pro'];
    
                    this.friday.breakfast = ['Ham salad sandwich (1/2 c on 2 pc bread)','Edamame (1/2 c)','Whole milk (1 c)','710 cal, 35 gm pro'];
                    this.friday.lunch = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.friday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.friday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
                    
                    this.saturday.breakfast = ['Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)','Greek yogurt with fruit (1 single serve container)','Whole milk (1 c)','644 cal, 22 gm pro'];
                    this.saturday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.saturday.dinner = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.saturday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
    
                    this.sunday.breakfast = ['Srambled eggs (1 large)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Fruit juice (1/2 c)','284 cal, 10 gm pro'];
                    this.sunday.lunch = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.sunday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.sunday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
                }
                if (this.lifestyle == 'Very active lifestyle') {
                    // if user's BMI categorie is Obesity and slects Very active lifestyle as his/her lifestyle they will get following meals in their diet plan
                    this.monday.breakfast = ['Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)','Cranberry juice (1 c)','413 cal, 18 gm pro'];
                    this.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)','Potato salad (1/2 c)'];
                    this.monday.dinner = ['Spagetti with meatballs (1-1.5 c)','Garlic bread (1 slice)','Fruit (1/2 c)','Whole milk (1 c)','615 cal, 26 gm pro'];
                    this.monday.snack = ['Greek yogurt parfalt (1 c)','126 cal, 5 gm pro'];
    
                    this.tuesday.breakfast = ['Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)','Greek yogurt with fruit (1 single serve container)','Whole milk (1 c)','644 cal, 22 gm pro'];
                    this.tuesday.lunch = ['Ham salad sandwich (1/2 c on 2 pc bread)','Edamame (1/2 c)','Whole milk (1 c)','710 cal, 35 gm pro'];
                    this.tuesday.dinner = ['Lasagna (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','608 cal, 24 gm pro'];
                    this.tuesday.snack = ['Cottage cheese (1/2 c)','Canned fruit (1 snack pack)','180 cal, 11 gm pro'];
    
                    this.wednesday.breakfast = ['Srambled eggs (1 large)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Fruit juice (1/2 c)','284 cal, 10 gm pro'];
                    this.wednesday.lunch = ['Cheseburger with bun (1 sand)','Fries (1 small serving)','Chocolate milk shake (1 c)','1021 cal, 40 gm pro'];
                    this.wednesday.dinner = ['Salmon (1 sm fillet) prepared in butter (1 Tbs)','Rice (1/2 c)','Broccoli (1/2 c)','Whole milk (1 c)','595 cal, 55 gm pro'];
                    this.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)','295 cal, 8 gm pro'];
    
                    this.thursday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.thursday.lunch = ['Tuna salad sandwich (1/2 c on 2 pc bread)','Baby carrots (5)','Whole milk (1 c)','627 cal, 38 gm pro'];
                    this.thursday.dinner = ['Ground beef tacos (1 taco)','Refried beans (1/2 c)','Rice (1/2 c)','Whole milk (1 c)','579 cal, 30 gm pro'];
                    this.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)','Whole milk (1 c)','445 cal, 16 gm pro'];
    
                    this.friday.breakfast = ['English muffin (1) with nut butter (2 Tbs)','Whole milk (1 c)','540 cal, 22 gm pro'];
                    this.friday.lunch = ['Chicken & cheese pita (1 pita) with avocado (2 Tbs)','Cherry tomatoes (1 c)','Whole milk (1 c)','555 cal, 32 gm pro'];
                    this.friday.dinner = ['Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)','Garlic bread (1 slice)','Whole milk (1 c)','744 cal, 48 gm pro'];
                    this.friday.snack = ['String cheese (1 stick)','Crackers (5)','Whole milk (1 c)','280 cal,14 gm pro'];
                    
                    this.saturday.breakfast = ['Oatmeal (1/2 c) with nut butter (2 Tbs)','Fruit juice (1/2 c)','405 cal, 14 gm pro'];
                    this.saturday.lunch = ['Chicken stir fry (1 c) with veggies (1/2 c)','Pineapple (1/2 c)','Whole milk (1 c)','482 cal, 24 gm pro'];
                    this.saturday.dinner = ['Meat with potatoes & gravy (1 c total meal)','Cooked carrots (1/2 c)','Roll (1) with butter (1 Tbs)','Whole milk (1 c)','593 cal, 26 gm pro'];
                    this.saturday.snack = ['Hard-boiled egg (1 large)','Cherry tomatoes (1/2 c)','109 cal 8 gm pro'];
    
                    this.sunday.breakfast = ['Hard-boilded egg (1 large)','Fruit (1/2 c)','Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)','Whole milk (1 c)','422 cal, 18 gm pro'];
                    this.sunday.lunch = ['Tomato soup (1 c) made with milk','Grilled cheese (1/2 sandwich)','Whole milk (1 c)','Whole milk (1 c)','624 cal, 28 gm pro'];
                    this.sunday.dinner = ['Meatloaf with gravy (5 oz)','Green beans (1/2 c)','Bread (1 slice) & butter (2 Tbs)','Whole milk (1 c)','490 cal, 31 gm pro'];
                    this.sunday.snack = ['Cookies (3)','Whole milk (1 c)','375 cal, 10 gm pro'];
                }          
            }
        },
        // display plan if 0 errors (no empty fields)
        // adds created date and time of the plan
        showPlan: function () {
            this.date = new Date().toLocaleDateString();
            this.time = new Date().toLocaleTimeString();

            if(this.errors.length == 0) {
                this.show = true
                return this.show
            }
            else {
                this.show = false
                return this.show
            }
        }
    }
})