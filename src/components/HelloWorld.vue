<template>
  <div class="hello">
    <h1 class="text-primary">{{ msg }}</h1>
    <h2>{{ msg2 }}</h2>

    <h2 class="bg-primary">Data Binding Example</h2>
    <div class="card p-2 m-3 w-75 mx-auto">
      <h3>
        <i class="fas fa-magic"></i>
        TEST
      </h3>
      <!-- iterate over a list -->
      <ul>
        <li
        v-bind:key="wizard"
        v-for="wizard in wizards
        ">
          {{ wizard.first }} {{ wizard.last }}
        </li>
        <li>
          <span v-text="input_val"></span>
        </li>
      </ul>
        <!-- Two-way data binding -->
        <div>
          <span>Add a name: </span>
          <input type="text" v-model="input_val">
        </div>
    </div>

    <h2 class="bg-info">Dynamic Styling Example</h2>
    <div class="card p-2 m-3 w-75 mx-auto">
      <h3>
        <i class="fas fa-cog"></i>
        UX Font Size
      </h3>
      <!-- dynamic style -->
        <button
        class="btn btn-secondary my-2"
        v-on:click="fontSize++">
            <i class="fas fa-sort-alpha-up"></i>
            Increase font size
        </button>

        <p
        class="mt-2 text-black"
        v-bind:style="{fontSize: fontSize + 'px' }">
            Font size is: {{ fontSize }} pixels
        </p>

        <button
        class="btn btn-secondary my-2"
        v-on:click="fontSize--">
            <i class="fas fa-sort-alpha-down"></i>
            Decrease font size
        </button>
    </div>

    <h2 class="bg-success">Dynamic Class!</h2>
    <div class="card pt-3 m-3 w-75 mx-auto">
        <!-- add class from UX -->
        <ul>
            <li
            v-for="item in menuItems"
            v-bind:key="item"
            v-on:click="buttonized = item"
            v-bind:class="{ buttonized: buttonized == item }
            ">
                {{item}}
            </li>
        </ul>
    </div>

    <h2 class="bg-warning">Easy Iteration</h2>
    <div class="card p-1 m-3 w-75 mx-auto">
        <!-- counter w/ interpolation -->
        <div>
          <button class="btn btn-secondary my-2" v-on:click="counter++">
            Up counter <i class="fas fa-arrow-up"></i>
          </button>
          <p class="h4">
            Counter at {{counter}} times
          </p>
          <button class="btn btn-secondary my-2" v-on:click="counter--">
            Down counter <i class="fas fa-arrow-down"></i>
          </button>
        </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Enjoy Vue.js',
      msg2: 'Bootstrap4 and FontAwesome5 are gtg!',
      // iterate over a list
      wizards: [
        { first: 'Jeff', last: 'Sessions' },
      ],
      // Two-way data binding
      input_val: '',
      // Dynamic styling
      fontSize: 12,
      // Dynamic classes
      buttonized: 'Home',
      menuItems: ['Home', 'About', 'Contact'],
      // counter w/ interpolation
      counter: 0,
    };
  },
};
</script>


<style lang="scss">
    @import "../assets/main.scss";
</style>
