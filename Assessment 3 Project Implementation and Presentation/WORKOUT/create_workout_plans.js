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
      disabled: 0,
    }
  },
  methods: {
    likeFeedback: function () {
      alert ("We appreciate your feedback to WORKOUT. What did you like? Let us know.");
      this.disabled = 1;
    },
    dislikeFeedback: function () {
      alert ("We appreciate your feedback to WORKOUT. Is there something we can do better? Let us know.");
      this.disabled = 1;
    }
  }
})

// 2nd Vue App
var app = new Vue({
	el:'#create-workout-plans',
	data: {
        errors: [],
        show: false,
        date: '',
        time: '',
        aim: null,
        bodyType: null,
        sets: '',
        reps: '',
        rest: '',
        day1: [],
        day2: [],
        day3: [],
        day4: [],
	},
    methods: {
        // checks all the fields are filled or not
        // if not an error message will added to a list
        checkForm: function () {
            this.errors = [];
            if (!this.aim) this.errors.push('Aim required.');
            if (!this.bodyType) this.errors.push('Select your bodytype.');
        },
        // change the content of the plan according to user's aim and bodyType
        createWorkoutPlan: function () {
            if (this.aim == 'Build Strength') {
                // if user selects Build Strength as their aim, current values of sets, reps and rest will adopt following values in ther workput plan
                this.sets = '3-5';
                this.reps = '1-5';
                this.rest = '2-5 MIN';
                if (this.bodyType == 'Ectomorph') {
                    // if user slects Build Strength as their aim and Ectomorph as their bodyType they will get following exercies in their workout plan
                    this.day1 = ['Incline Bench Press','Bench Press','Decline Fly','Overhead Dumbbell Press','Upright Row','Bent-Over Lateral Raise','Bench Dip','Close-Grip Bench Press','Lying Triceps Extension'];
                    this.day2 = ['Bent-Over Row','Lat Pulldown','Barbell Curl','Incline Dumbbell Curl','Dumbbell Preacher Curl'];
                    this.day3 = ['Squat','Leg Pres','Lunge','Leg Extension','Leg Curl','Squat','Leg Pres','Lunge','Leg Extension','Leg Curl','Leg-Pree Calf Raise','Seated Dumbbell Calf Raise','AB Crunches','Reverse Crunch'];
                    this.day4 = ['Cycling','Battle Ropes','Sledgehammer Slams'];
                }
                if (this.bodyType == 'Mesomorph') {
                    // if user slects Build Strength as their aim and Mesomorph as their bodyType they will get following exercies in their workout plan
                    this.day1 = ['Incline Bench Press','Bench Press','Decline Fly','Overhead Dumbbell Press','Upright Row','Bent-Over Lateral Raise','Bench Dip','Close-Grip Bench Press','Lying Triceps Extension'];
                    this.day2 = ['Lat pulldown','Wide dumbbell row','Barbell deadlift','Hyperextension','Single-arm dumbbell row','Quadruped dumbbell row','Resistance band pull apart','Single arm dumbbell preacher curl','Incline dumbbell curl','Dumbbell hammer curl'];
                    this.day3 = ['Squat','Leg Pres','Lunge','Leg Extension','Leg Curl','Squat','Leg Pres','Lunge','Leg Extension','Leg Curl','Leg-Pree Calf Raise','Seated Dumbbell Calf Raise','AB Crunches','Reverse Crunch'];
                    this.day4 = ['Burpees','Brisk walking','Jogging in place','Battle Ropes','Sledgehammer Slams'];
                }
                if (this.bodyType == 'Endomorph') {
                    // if user slects Build Strength as their aim and Endomorph as their bodyType they will get following exercies in their workout plan
                    this.day1 = ['Dumbbell Squeeze Press','Incline barbell bench press','Incline dumbbell bench press','Close-grip barbell bench press','Decline press-up','Cable fly','Decline barbell bench press','Staggered press-up','Barbell shrug','Barbell upright row','Dumbbell Overhead press','Dumbbell lateral raise','Alternating dumbbell front raise'];
                    this.day2 = ['Bent-Over Row','Lat Pulldown','Barbell Curl','Incline Dumbbell Curl','Dumbbell Preacher Curl'];
                    this.day3 = ['Squats','Lunges','Plank leg lifts','Single-leg deadlifts','Stability ball knee tucks','Step-ups','Box jumps','Speedskater jumps','High Plank','Leg raises','Plank knee crosses','V-ups & V-sit'];
                    this.day4 = ['Cycling','Battle Ropes','Sledgehammer Slams'];
                }
            }
            if (this.aim == 'Build Muscle') {
                // if user selects Build Muscle as their aim, current values of sets, reps and rest will adopt following values in ther workput plan
                this.sets = '3-5';
                this.reps = '6-12';
                this.rest = '1-2 MIN';
                if (this.bodyType == 'Ectomorph') {
                    // if user slects Build Muscle as their aim and Ectomorph as their bodyType they will get following exercies in their workout plan
                    this.day1 = ['Wide Bench Press','Incline Bench Press','Decline Bench Press','Bent-Over Row','Lat Pulldown','Barbell Curl','Incline Dumbbell Curl','Dumbbell Preacher Curl'];
                    this.day2 = ['Bent-Over Row','Lat Pulldown','Barbell Curl','Incline Dumbbell Curl','Dumbbell Preacher Curl'];
                    this.day3 = ['Squats','Lunges','Plank leg lifts','Single-leg deadlifts','Stability ball knee tucks','Step-ups','Box jumps','Speedskater jumps','High Plank','Leg raises','Plank knee crosses','V-ups & V-sit'];
                    this.day4 = ['HIIT','Battle Ropes','Sledgehammer Slams','Tyre Flip'];
                }
                if (this.bodyType == 'Mesomorph') {
                    // if user slects Build Muscle as their aim and Mesomorph as their bodyType they will get following exercies in their workout plan
                    this.day1 = ['Dumbbell Squeeze Press','Incline barbell bench press','Incline dumbbell bench press','Close-grip barbell bench press','Decline press-up','Cable fly','Decline barbell bench press','Staggered press-up','Barbell shrug','Barbell upright row','Dumbbell Overhead press','Dumbbell lateral raise','Alternating dumbbell front raise'];
                    this.day2 = ['Lat pulldown','Wide dumbbell row','Barbell deadlift','Hyperextension','Single-arm dumbbell row','Quadruped dumbbell row','Resistance band pull apart','Single arm dumbbell preacher curl','Incline dumbbell curl','Dumbbell hammer curl'];
                    this.day3 = ['Squats','Lunges','Plank leg lifts','Single-leg deadlifts','Stability ball knee tucks','Step-ups','Box jumps','Speedskater jumps','High Plank','Leg raises','Plank knee crosses','V-ups & V-sit'];
                    this.day4 = ['Burpees','Brisk walking','Jogging in place','Battle Ropes','Sledgehammer Slams'];
                }
                if (this.bodyType == 'Endomorph') {
                    // if user slects Build Muscle as their aim and Endomorph as their bodyType they will get following exercies in their workout plan
                    this.day1 = ['Wide Bench Press','Incline Bench Press','Decline Bench Press','Bent-Over Row','Lat Pulldown','Barbell Curl','Incline Dumbbell Curl','Dumbbell Preacher Curl'];
                    this.day2 = ['Lat pulldown','Wide dumbbell row','Barbell deadlift','Hyperextension','Single-arm dumbbell row','Quadruped dumbbell row','Resistance band pull apart','Single arm dumbbell preacher curl','Incline dumbbell curl','Dumbbell hammer curl'];
                    this.day3 = ['Squat','Leg Pres','Lunge','Leg Extension','Leg Curl','Squat','Leg Pres','Lunge','Leg Extension','Leg Curl','Leg-Pree Calf Raise','Seated Dumbbell Calf Raise','AB Crunches','Reverse Crunch'];
                    this.day4 = ['Running','Cycling','Swimming','Battle Ropes','Sledgehammer Slams'];
                }
            }
            if (this.aim == 'Build Endurance') {
                // if user selects Build Endurance as their aim, current values of sets, reps and rest will adopt following values in ther workput plan
                this.sets = '2-3';
                this.reps = '12-20+';
                this.rest = '30-75 SEC';
                if (this.bodyType == 'Ectomorph') {
                    // if user slects Build Endurance as their aim and Ectomorph as their bodyType they will get following exercies in their workout plan
                    this.day1 = ['Incline Bench Press','Bench Press','Decline Fly','Overhead Dumbbell Press','Upright Row','Bent-Over Lateral Raise','Bench Dip','Close-Grip Bench Press','Lying Triceps Extension'];
                    this.day2 = ['Bent-Over Row','Lat Pulldown','Barbell Curl','Incline Dumbbell Curl','Dumbbell Preacher Curl'];
                    this.day3 = ['Squat','Leg Pres','Lunge','Leg Extension','Leg Curl','Squat','Leg Pres','Lunge','Leg Extension','Leg Curl','Leg-Pree Calf Raise','Seated Dumbbell Calf Raise','AB Crunches','Reverse Crunch'];
                    this.day4 = ['HIIT','Battle Ropes','Sledgehammer Slams','Tyre Flip'];
                }
                if (this.bodyType == 'Mesomorph') {
                    // if user slects Build Endurance as their aim and Mesomorph as their bodyType they will get following exercies in their workout plan
                    this.day1 = ['Wide Bench Press','Incline Bench Press','Decline Bench Press','Bent-Over Row','Lat Pulldown','Barbell Curl','Incline Dumbbell Curl','Dumbbell Preacher Curl'];
                    this.day2 = ['Lat pulldown','Wide dumbbell row','Barbell deadlift','Hyperextension','Single-arm dumbbell row','Quadruped dumbbell row','Resistance band pull apart','Single arm dumbbell preacher curl','Incline dumbbell curl','Dumbbell hammer curl'];
                    this.day3 = ['Squats','Lunges','Plank leg lifts','Single-leg deadlifts','Stability ball knee tucks','Step-ups','Box jumps','Speedskater jumps','High Plank','Leg raises','Plank knee crosses','V-ups & V-sit'];
                    this.day4 = ['Burpees','Brisk walking','Jogging in place','Battle Ropes','Sledgehammer Slams'];
                }
                if (this.bodyType == 'Endomorph') {
                    // if user slects Build Endurance as their aim and Endomorph as their bodyType they will get following exercies in their workout plan
                    this.day1 = ['Dumbbell Squeeze Press','Incline barbell bench press','Incline dumbbell bench press','Close-grip barbell bench press','Decline press-up','Cable fly','Decline barbell bench press','Staggered press-up','Barbell shrug','Barbell upright row','Dumbbell Overhead press','Dumbbell lateral raise','Alternating dumbbell front raise'];
                    this.day2 = ['Lat pulldown','Wide dumbbell row','Barbell deadlift','Hyperextension','Single-arm dumbbell row','Quadruped dumbbell row','Resistance band pull apart','Single arm dumbbell preacher curl','Incline dumbbell curl','Dumbbell hammer curl'];
                    this.day3 = ['Squat','Leg Pres','Lunge','Leg Extension','Leg Curl','Squat','Leg Pres','Lunge','Leg Extension','Leg Curl','Leg-Pree Calf Raise','Seated Dumbbell Calf Raise','AB Crunches','Reverse Crunch'];
                    this.day4 = ['Running','Cycling','Swimming','Battle Ropes','Sledgehammer Slams'];
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
        },
    }
})