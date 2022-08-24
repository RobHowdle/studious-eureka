# Laravel 9 & Vue3 Single Page Application Template
## Laravel 9, Vue3, Pinia & Tailwind


### Deploying the project for development:
- Install Docker for Windows.
- Set up WSL2.
- Clone this repo into your WSL2 home directory.
- `npm install` and `composer install`.
- Copy `.env.example` to `.env` and configure as needed.
- `sail up -d` to start the docker environments
- `sail down` to shut down the docker environments.

### Deploying the project for production:
1. Cross that bridge when you come to it.

### Notes
- Almost all your front end will be written inside `resources/js`. This is where the vue lives.
  - Routes can be defined in `routes.js`. You can define child routes if you add a `children` array to the route, then define routes inside that array as you normally would. This can go as deep as you like. In the parent of the route with a child, you must include a `<router-view></router-view>`. This is where the child will be rendered.
  - UI elements (repeating small elements with some kind of logic, e.g: a pagination selector) should go in `components/elements`.
  - You can use `@/path/to/thing` when importing files inside the js folder. `@` refrences the route of the js folder. So for example `@/views/Index.vue`.
  - Vue files should be in PascalCase. They should also end with what they are. For example a View file should be called `IndexView.vue`. This suffix naming convention isn't strict.
  - Javascript files should be lowercase.
  - Stores (Pinia) files should ideally be single words in lowercase. They should be the plural of their purpose. For example, a store file for handling Products should be `products.js`.
- You can create and import CSS files if you place them in `resources/css/<name>.css`. They *should* support PostCSS so you can do `@methods`. but they may also need to be added to the mix config. (Untested).
  - To import a CSS file in vue, you can do `@import "/path/to/file.css";` inside the style of a Vue component.
  - Adding `scoped` to a Vue's style tag will make any classes defined in that file only accessible from within that file. This way you can give classes more generic names and even apply styles directly to the element type.
- Your PHP (Laravel) code will mostly be written in `/app`.
  - Actions should be used where possible. When you intend to do an action from within a Controller, you should create an action for it in `/app/Actions`. The file name should be PascalCase and should end in the word `Action`. You can dependency inject this function by first importing it, then passing it as a paramater to the Controller function. Laravel will automatically scope in the function as the var you set.

### FAQ
**How do you center a div?**
- I've also yet to figure that out...
