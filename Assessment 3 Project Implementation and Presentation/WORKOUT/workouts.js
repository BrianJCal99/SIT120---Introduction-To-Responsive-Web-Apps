// Vue component for warm-up workouts
Vue.component('tab-warm-up', {
  template:`
  <div class="row-padding">
    <h3>Warm Up Workout</h3>
    <div class="third container margin-bottom hover-span" v-for="workout in workoutList" v-bind:key="workout.id">
      <img v-bind:src="workout.img" style="width: 100%;">
      <div class="container white">
        <p><b>{{workout.title}}</b></p>
        <p>{{workout.description}}</p>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      // workout info
      workoutList:
      [
        { id: 1,
          title: 'Seated Forward Bend Stretch',
          img: './Images/Exercises/woman-doing-seated-forward-bend-stretch-exercise-vector-38085598.jpg',
          description: `Bring your arms straight out to the sides and up over your head, reaching toward the ceiling.
          Inhale and draw your spine up long.
          As you exhale, begin to come forward, hinging at your hips. Imagine your pelvis as a bowl of water that is tipping forward.
          On each inhale, lengthen your spine. You may come a bit out of your forward bend to do this.
          On each exhale, deepen into your forward bend. Imagine your belly coming to rest on your thighs, rather than your nose coming to your knees. This will help you keep your spine long.
          Keep the neck as the natural extension of your spine, neither cranking it to look up nor letting it go completely.
          When you have come to your full extension with the spine long, decide whether you want to stay here or let your spine round forward.
          Take hold of your ankles or shins, whichever you can reach. You can also use a strap around your feet. Keep your feet flexed strongly throughout.`,
        },
        { id: 2,
          title: 'High Knees',
          img: './Images/Exercises/jog-on-spot-exercise-vector-34722667.jpg',
          description: `Stand tall with your feet about hip-to-shoulder-width apart and your arms at your sides.
          Looking straight ahead, open your chest, and engage your core muscles.
          Begin by bringing your right knee toward your chest, slightly above waist level. Simultaneously, move your left hand up in a pumping motion.
          Quickly lower your right leg and left hand.
          Repeat with your left leg and right hand.
          Alternate your right and left leg for the desired time.`,
        },
        { id: 3,
          title: 'Tyre Push Ups',
          img: './Images/Exercises/sports-man-doing-push-up-exercise-on-tires-vector-24513762.jpg',
          description: `A great option for those with inflexible wrists. Also creates an alternative to regular push ups.
          Place hands on tyre. Fingers should be gripping the sides with the thumb on top. Do a push up, keep elbows in by sides.`,
        }
      ]
    }
  }
})

// Vue component for chest workouts
Vue.component('tab-chest', {
	template: `
  <div class="row-padding">
    <h3>Chest Workout</h3>
    <div class="third container margin-bottom hover-span" v-for="workout in workoutList" v-bind:key="workout.id">
      <img v-bind:src="workout.img" style="width: 100%;">
      <div class="container white">
        <p><b>{{workout.title}}</b></p>
        <p>{{workout.description}}</p>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      // workout info
      workoutList: 
        [
          { id: 1,
            title: 'Barbell Bench Press Chest Press',
            img: './Images/Exercises/man-doing-barbell-bench-press-chest-press-vector-34502753.jpg',
            description: `Lie flat on your back on a bench. Grip the bar with hands just wider than shoulder-width apart, 
            so when you’re at the bottom of your move your hands are directly above your elbows. 
            This allows for maximum force generation. Bring the bar slowly down to your chest as you breathe in. 
            Push up as you breathe out, gripping the bar hard and watching a spot on the ceiling rather than the bar, 
            so you can ensure it travels the same path every time.`,
          },
          { id: 2,
            title: 'Incline Dumbbell Press',
            img: './Images/Exercises/incline-barbell-bench-press-exercise-vector-34861748.jpg',
            description: `The Incline Bench Press is a version of the traditional Bench Press in which the bench is positioned at about a 45-degree angle. 
            The resulting inclined position targets your upper chest and the frontside of your shoulders more the the standard flat bench.`,
          },
          { id: 3,
            title: 'Dumbbell Flat Bench Press',
            img: './Images/Exercises/man-doing-dumbbell-flat-bench-press-vector-34502850.jpg',
            description: `Lie on a flat bench holding a dumbbell in each hand with an overhand grip.
            Start by holding the dumbbells slightly wider than shoulder width apart above your shoulders. Your palms should be facing forward.
            Slowly bend your elbows until they are at a 90 degree angle and your upper arms are parallel to the ground.
            Push the weights up by straightening your arms.
            As you push the weights up, move your arms in an arc to bring the dumbbells together, until they meet over the center of your chest. Hold for a count of one.
            Lower the dumbbells by slowly bending your elbows back to 90 degrees.
            Continue lowering your arms until they are a little lower than parallel to the floor. (Your elbows should be pointing slightly towards the floor and you should feel a stretch in your chest muscles and shoulders.)
            Repeat
            Be sure to concentrate on a balanced movement when lifting the dumbbells. Use both arms equally spaced and moving at the same speed.`,
          }
        ]
    }
  }
})

// Vue component for leg workouts
Vue.component('tab-legs', {
	template: `
  <div class="row-padding">
    <h3>Leg Workout</h3>
    <div class="third container margin-bottom hover-span" v-for="workout in workoutList" v-bind:key="workout.id">
      <img v-bind:src="workout.img" style="width: 100%;">
      <div class="container white">
        <p><b>{{workout.title}}</b></p>
        <p>{{workout.description}}</p>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      // workout info
      workoutList:
        [
          { id: 4,
            title: 'Barbel Split Squats',
            img: './Images/Exercises/mand-doing-barbell-doing-split-squat-or-lunge-vector-34493796.jpg',
            description: `Unrack the barbell in similar fashion as you would a high bar back squat stepping slightly farther back than normal.
            Place one foot firmly in front of you, roughly 1-2 feet.
            Drop you back foot slightly behind you, allowing the knee the bend towards the floor into an almost kneeling position. 
            The back knee should be slightly behind an imaginary line that runs perpendicular to your front heel. 
            The feet themselves should be placed about hip width apart, similar to your squat.
            As you descend into the squat, allow the front foot to stay flat into the floor, with the front knee bending over the toes, making sure to keep the torso upright and not allowed to collapse forward.
            At the deepest part of the split squat, the front knee should be pointed in the direction of the front toes (never collapsed inwards or pushed excessively out).
            To come up, focus on staying balance between the feet and keeping the torso upright, using the front leg (specifically the quads and glutes to engage the movement).
            Come to an upright position with the front leg softly extended/locked, and repeat. Then switch legs.`,
          },
          { id: 5,
            title: 'Resistance Band Deadlift',
            img: './Images/Exercises/man-doing-resistance-band-deadlifts-exercise-vector-38586536.jpg',
            description: `Holding the handles of the resistance band, step on to the middle. Place your feet at shoulder-width with toes pointing forward. Tighten your core and keep your chest up.
            Bend your knees slightly and drive your hips back but NOT lower than your knees. Again, keep the chest up. This is the starting position.
            Forcefully contract your glutes, driving them forward. Do not just lean back. Your glutes should be fully contracted. Pause then return to the starting position.`,
          },
          { id: 6,
            title: 'Barbell Overhead Squats',
            img: './Images/Exercises/male-weight-lifter-strength-training-vector-34238799.jpg',
            description: `Start standing with the barbell behind your neck and a snatch-width grip. 
            Perform a snatch push press or snatch power jerk to secure the bar in the proper snatch overhead position. Once stable, 
            squat at a controlled speed to full depth, standing again with the bar overhead. 
            The elbows must remain locked throughout the lift and the bar overhead until you return to a full standing position.`,
          }
        ]
    }
  }
})

// Vue component for arm workouts
Vue.component('tab-arms', {
	template: `
  <div class="row-padding">
    <h3>Arm Workout</h3>
    <div class="third container margin-bottom hover-span" v-for="workout in workoutList" v-bind:key="workout.id">
      <img v-bind:src="workout.img" style="width: 100%;">
      <div class="container white">
        <p><b>{{workout.title}}</b></p>
        <p>{{workout.description}}</p>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      // workout info
      workoutList:
        [
          { id: 7,
            title: 'Standing Dumbbell Bicep Curls',
            img: './Images/Exercises/man-doing-standing-dumbbell-bicep-curls-vector-34705860.jpg',
            description: `Stand holding a dumbbell in each hand with your arms hanging by your sides. 
            Ensure your elbows are close to your torso and your palms facing forward. 
            Keeping your upper arms stationary, exhale as you curl the weights up to shoulder level while contracting your biceps.
            Use a thumb-less grip. Hold the weight at shoulder height for a brief pause, then inhale as you slowly lower back to the start position.`,
          },
          { id: 8,
            title: 'Barbell Drag Bicep Curl',
            img: './Images/Exercises/man-doing-barbell-drag-bicep-curls-exercise-vector-34698169.jpg',
            description: `For this exercise, you will need a barbell and some weights.
            To begin, grab the barbell with a double underhand (supinated) grip with your hands slightly wider than shoulder width apart.
            Assume a comfortable standing position with your back straight. Engage your core.
            Bring your elbows and shoulders back slightly as you curl the barbell upwards. It should feel like you are "dragging" the barbell up your body.
            Squeeze your biceps hard at the top and slowly return to the starting position.
            Repeat for your desired number of reps.`,
          },
          { id: 9,
            title: 'Behind-the-Back Standing Bicep Curls',
            img: './Images/Exercises/behind-back-standing-bicep-curl-infographic-vector-34483257.jpg',
            description: `Stand up straight with a flat back and tight core.
            Hold a pair of dumbbells in your hands.
            Bring your elbow backward to where the dumbbell is side by side with your hips.
            Hold your upper arm and elbow here as you curl the dumbbell up.
            Pause at the top of the movement and slowly release.
            Repeat.`,
          }
        ]
    }
  }
})

// Vue component for back workouts
Vue.component('tab-back', {
  template: `
  <div class="row-padding">
    <h3>Back Workout</h3>
    <div class="third container margin-bottom hover-span" v-for="workout in workoutList" v-bind:key="workout.id">
      <img v-bind:src="workout.img" style="width: 100%;">
      <div class="container white">
        <p><b>{{workout.title}}</b></p>
        <p>{{workout.description}}</p>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      // workout info
      workoutList:
      [
        { id: 1,
          title: 'Pull Ups',
          img: './Images/Exercises/man-doing-pull-ups-exercise-flat-vector-38234639.jpg',
          description: `Leap up and grip the bar with your hands shoulder width apart and your palms facing away from you. 
          Hang with your arms fully extended, you can bend your legs at the knee if they’re dragging on the ground.
          Keep your shoulders back and your core engaged throughout. Then pull up. Focus on enlisting every upper body muscle to aid your upward endeavours.
          Move slowly upward until your chin is above the bar, then equally slowly downward until your arms are extended again.`,
        },
        { id: 2,
          title: 'Chin Ups',
          img: './Images/Exercises/man-doing-chin-ups-workout-fitness-vector-34405142.jpg',
          description: `Grasp a pull-up bar with an underhand grip, hands shoulder-width apart or slightly narrower. 
          Straighten your arms, keep your knees bent and cross your lower legs. Retract your shoulder blades to reduce the stress on the shoulder joints. 
          Keeping your body stable and core engaged, pull your body up until your chin becomes aligned with the bar. 
          Pause for one to two seconds at the top, with the biceps under maximum tension. Slowly lower to the start position.`,
        },
        { id: 3,
          title: 'Bent Over Dumbbell Row',
          img: './Images/Exercises/woman-doing-dumbbell-row-exercise-vector-38191347.jpg',
          description: `Assume a standing position while holding a dumbbell in each hand with a neutral grip.
          Hinge forward until your torso is roughly parallel with the floor (or slightly above) and then begin the movement by driving the elbows behind the body while retracting the shoulder blades.
          Pull the dumbbells towards your body until the elbows are at (or just past) the midline and then slowly lower the dumbbells back to the starting position under control.
          Repeat for the desired number of repetitions.`,
        }
      ]
    }
  }
})

// Vue component for shoulder workouts
Vue.component('tab-shoulders', {
  template: `
  <div class="row-padding">
    <h3>Shoulder Workout</h3>
    <div class="third container margin-bottom hover-span" v-for="workout in workoutList" v-bind:key="workout.id">
      <img v-bind:src="workout.img" style="width: 100%;">
      <div class="container white">
        <p><b>{{workout.title}}</b></p>
        <p>{{workout.description}}</p>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      // workout info
      workoutList:
      [
        { id: 1,
          title: 'Seated Barbell Shoulder Press',
          img: './Images/Exercises/shoulder-exercises-barbell-press-vector-34248542.jpg',
          description: `Adjust the barbell to just below shoulder height while standing then load the desired weight onto the bar.
          Place an adjustable bench beneath the bar in an upright position.
          Sit down on the bench and unrack the bar using a pronated grip.
          Inhale, brace, tuck the chin, then lower the bar to the top of your chest.
          Exhale and press the bar back to lockout.
          Repeat for the desired number of repetitions.`,
        },
        { id: 2,
          title: 'Dumbbell Overhead Shoulder Press',
          img: './Images/Exercises/man-doing-overhead-dumbbell-shoulder-press-exercis-vector-39110706.jpg',
          description: `Perform dumbbell overhead presses by getting into a standing position with your feet shoulder-width apart. 
          Grab a pair of dumbbells and hold them at shoulder height. Lift the dumbbells overhead, then lower them slowly. 
          Repeat this movement for your desired number of repetitions.`,
        },
        { id: 3,
          title: 'Crab Walk',
          img: './Images/Exercises/man-doing-crab-walks-exercise-flat-vector-38320338.jpg',
          description: `Begin by sitting on the floor with your feet hip-distance apart in front of you and your arms behind your back with fingers facing hips.
          Lift hips off the floor and tighten your abs.
          Start “walking” forward by moving your left hand followed by your right foot; and then your right hand followed by your left foot. 
          Walk four or more steps as space allows, then walk back. 
          Continue back and forth for desired amount of time.`,
        }
      ]
    }
  }
})

// Vue component for ab workouts
Vue.component('tab-abs', {
  template:`
  <div class="row-padding">
    <h3>ABS Workout</h3>
    <div class="third container margin-bottom hover-span" v-for="workout in workoutList" v-bind:key="workout.id">
      <img v-bind:src="workout.img" style="width: 100%;">
      <div class="container white">
        <p><b>{{workout.title}}</b></p>
        <p>{{workout.description}}</p>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      // workout info
      workoutList:
      [
        { id: 1,
          title: 'Bicycles / Elbow-to-Knee Crunches / Cross-body Crunches',
          img: './Images/Exercises/woman-doing-bicycles-elbow-to-knee-crunches-vector-38263261.jpg',
          description: `Lie flat on an exercise mat on the floor keeping your lower back straight with no arching of your spine and with your knees bent and feet flat on the floor.
          Place your hands lightly on the sides of your head.
          Curl your torso upwards so your shoulders are slightly raised off the floor..
          Raise your knees until your thighs are at a right angle to the floor and your calves are parallel to the floor. This is the start position.
          Slowly move your legs in a pedaling action as if you are riding a bicycle.
          As you do so, exhale and bring your opposing elbow close to each knee by crunching to one side. Left elbow to right knee. Right elbow to left knee.
          After each crunch, return to the start position inhaling as you do so.
          Without pausing, repeat the movement to the other side.
          Repeat without pausing for the desired number of repetitions to each side.`,
        },
        { id: 2,
          title: 'Crunches',
          img: './Images/Exercises/man-doing-crunches-in-gym-vector-34250773.jpg',
          description: `Lie down on your back. Plant your feet on the floor, hip-width apart. Bend your knees and place your arms across your chest. Contract your abs and inhale.
          Exhale and lift your upper body, keeping your head and neck relaxed. Inhale and return to the starting position.`,
        },
        { id: 3,
          title: 'Double Crunches',
          img: './Images/Exercises/man-doing-double-crunchesabdominals-exercise-vector-34515910.jpg',
          description: `Lift your head and shoulders off the floor and raise your chest toward your knees. Keep your feet flat on the ground throughout the movement. 
          At the top of the repetition, your upper back should be around 8 inches (20 cm) off the ground. Reverse the movement until your shoulders and upper back are on the floor.`,
        }
      ]
    }
  }
})

// Vue component for crossfit-cardio workouts
Vue.component('tab-crossfit-cardio', {
  template:`
  <div class="row-padding">
    <h3>Crossfit/Cardio Workout</h3>
    <div class="third container margin-bottom hover-span" v-for="workout in workoutList" v-bind:key="workout.id">
      <img v-bind:src="workout.img" style="width: 100%;">
      <div class="container white">
        <p><b>{{workout.title}}</b></p>
        <p>{{workout.description}}</p>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      // workout info
      workoutList:
      [
        { id: 1,
          title: 'Battle Rope - Rope Slams',
          img: './Images/Exercises/man-doing-battle-rope-squatting-alternating-waves-vector-37271667.jpg',
          description: `Grab those grips and use your posterior chain (backside), shoulders, and arms to get the ropes above your head before slamming them to the ground as hard as possible. 
          So throw your hands in the air, then slam those ropes down like you just don’t care. Come into a semi-squat position at the bottom of the move. 
          This one really services your lower body, too. Instead of going for time, 
          treat this like a strength training exercise with weights and perform 3-4 sets of 10-15 reps with 30 seconds rest between sets.`,
        },
        { id: 2,
          title: 'Flip a Tire',
          img: './Images/Exercises/sports-man-flipping-a-tire-doing-hard-exercises-vector-24639825.jpg',
          description: `Start strong. Start with your feet and hips shoulder-width apart. 
          Push your hips back to get in the starting position, making sure to keep your back flat and your core engaged.
          Watch your hands. Make sure as you underhand grip the tire, you place your hands onto the treads. 
          Putting them in the space between the treads could cause you to hyperextend your fingers or, even worse, tear your biceps.
          Power is key. Now you’re ready for take off. 
          This is an explosive lift, so drive up through your hips. Once the tire is almost vertical, 
          catch it overhand and push it so it topples over onto the floor.`,
        },
        { id: 3,
          title: 'Sledge Hammer Swings',
          img: './Images/Exercises/sports-man-hitting-big-tire-with-hummer-doing-hard-vector-24513616.jpg',
          description: `Stand in front of the tire with a staggered stance, whilst gripping the sledgehammer
          Raise the sledgehammer up above the body
          Powerfully swing the sledge down to the tire as hard as you can
          As the hammer is lowering your upper hand should slide down to meet the lower hand 
          Repeat for reps (ensure both sides of the body are trained by switching sides)`,
        }
      ]
    }
  }
})

// 3rd Vue App
var app = new Vue({
	el:'#workouts',
  data: {
    currentTab: 'Warm-Up',
    tabs: ['Warm-Up', 'Chest', 'Legs', 'Arms', 'Back', 'Shoulders', 'ABS', 'Crossfit-Cardio']
  },
  computed: {
    // computes current tab component
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
})