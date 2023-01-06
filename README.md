# LaravelVue
Laravel9.0 and Vue3

### Create project
composer create-project laravel/laravel LaravelVue

### Install Packages
npm install <br>
npm install --save-dev vue <br>
npm install --save-dev vue-loader <br>

### update the webpack.mix.js
 
mix.js('resources/js/app.js', 'public/js') <br>
    .vue({                                 <br>
        version: 3,                         <br>
    })                                      <br>
    .postCss('resources/css/app.css', 'public/css', [         <br>
        //                                   <br>
    ]);                                      <br>

### Compile and run
npm run dev <br>
php artisan serve <br>

