const Home  = Vue.component('principal', {
  template: `
    <div>
        <h1 class="text-center cover-heading">SINGLE PAGE APLICATION</h1>
        <p class="lead"> In Vue, a component is essentially a Vue instance with pre-defined options. Registering a component in Vue is straightforward:</p>
        <p class="lead">
          <a href="#" class="btn btn-lg btn-secondary">Learn more About Richard</a>
        </p>
    </div>
  `
})

const features = Vue.component('features', {
  template: `
    <div>
        <h1 class="text-center cover-heading">FEATURES FOR MY WEB</h1>
        <p class="lead">
            But this would render the same text for every todo, which is not super interesting. We should be able to pass data from the parent scope into child
            components. Let’s modify the component definition to make it accept a prop:
        </p>
        <p class="lead">
          Now we can pass the todo into each repeated component using
        </p>
    </div>
  `
})

const contact = Vue.component('contact', {
  template: `
    <div>
        <h1 class="text-center cover-heading">FEATURES FOR MY WEB</h1>
        <p class="lead">
            But this would render the same text for every todo, which is not super interesting. We should be able to pass data from the parent scope into child
            components. Let’s modify the component definition to make it accept a prop:
        </p>
        <p class="lead">
          Now we can pass the todo into each repeated component using
        </p>
    </div>
  `
})
