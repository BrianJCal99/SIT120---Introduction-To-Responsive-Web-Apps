const AccountInfo = {
  props: {
    firstName: String,
    lastName: String,
    userAge: Number,
    userCountry: String
  },
  template: `
    <h3>Change Your Account Info</h3>
    Change your first name: 
    <input 
      type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)">
    <br><br>
    Chang your lasdt name: 
    <input
      type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)">
    <br><br>
    Change your age: 
    <input
      type="number"
      :value="userAge"
      @input="$emit('update:userAge', $event.target.value)">
    <br><br>
    Change your country: 
    <input
      type="text"
      :value="userCountry"
      @input="$emit('update:userCountry', $event.target.value)">
  `
};

const HelloVueApp = {
  components: {
    AccountInfo,
  },
  data() {
    return {
      firstName: 'Brian',
      lastName: 'Caldera',
      userAge: 22,
      userCountry: 'Australia',
    };
  },
};

Vue.createApp(HelloVueApp).mount('#v-model-example')