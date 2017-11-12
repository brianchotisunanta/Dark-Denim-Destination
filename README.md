# Dark Denim Destination

### This is my first project at Redwood Code Academy.

### This is a front-end application only.

I designed an online store, called Dark Denim Destination, that specializes in selling men's black denim, that shows what we learned during the first month of the bootcamp, focusing on front-end development.

<img width="1718" alt="screen shot 2017-10-22 at 3 42 08 am" src="https://user-images.githubusercontent.com/24735848/32697098-47d1fd8c-c73d-11e7-81da-031a6c45f5b8.png">

<img width="1718" alt="screen shot 2017-10-22 at 3 42 47 am" src="https://user-images.githubusercontent.com/24735848/32697101-539ca40a-c73d-11e7-9242-3d8240829b73.png">

<img width="1718" alt="screen shot 2017-10-22 at 3 42 39 am" src="https://user-images.githubusercontent.com/24735848/32697099-4aae9c90-c73d-11e7-8fde-abdbd7292801.png">

<img width="1690" alt="screen shot 2017-10-22 at 3 43 28 am" src="https://user-images.githubusercontent.com/24735848/32697104-623141e2-c73d-11e7-954f-4ce948abda35.png">

<img width="1718" alt="screen shot 2017-10-22 at 3 43 48 am" src="https://user-images.githubusercontent.com/24735848/32697105-624a501a-c73d-11e7-9f7b-eb6c7f95a919.png">

<img width="1718" alt="screen shot 2017-10-22 at 3 43 54 am" src="https://user-images.githubusercontent.com/24735848/32697106-62688ad0-c73d-11e7-86f5-795366458888.png">

<img width="1718" alt="screen shot 2017-10-22 at 3 43 58 am" src="https://user-images.githubusercontent.com/24735848/32697107-62e60cbc-c73d-11e7-9700-54e030932e26.png">

## Technologies:
#### •HTML5
#### • CSS3
#### • JavaScript
#### • AngularJS (Directives, Module, Controllers, Services)
#### • Angular UI Router
#### • Google Font Open Sans & Shadows Into Light
#### • Bootstrap


I created an index.html, custom css file, app.js, three views html files, four controllers javascript files, and three services javascript files.

In addition, I used 17 images to decorate the site, all contained within the images folder.

In addition, I included an animate.css file for the some css animations on my site.

The views folder contains html files for the home page, choose your denim page, shopping bag page, and check out page.

The services folder contains angularjs files for the choose your denim, shopping bag, and check out services.

The controller folder contains angularjs files that are associated with the views for the home page, choose your denim page, shopping bag page, and check out page.


In the index.html, I used the "Shadows into light" font from Google Fonts throughout the entire site. I also used Bootstrap, Animate.css file for css animations, Angular CDN 1.5.7, and Angular UI Router CDN 0.4.2.

### Index.html File:

The index.html file contains the navigation bar code, with the associated ui-source references for all the html view files.

### Custom CSS File:

The custom css file is in the css folder, under the file name "styles.css" This is were all my added css is located.

### App.js File:

The app.js file contains the angular module, called "dddShopApp" and utilizes the ui-router. Under $StateProvider, I created four states, each one for the html view files.

### Views Files:

The home.html file contains the stores main home page. I've included a jumbotron from bootstrap, with three paragraphs that I filed in with "lorem ipsum." I created three sections for the home page that are titled "Who We Are", "What We Do", and "Why We Do It" that includes an image for each section with "lorem ipsum" paragraphs as fill-ins. I also included a footer section on the bottom of the page to include the title of the site and the year it was designed. I also included my name to show that I designed the site. Most importantly, I included a message claiming no ownership for the images that I used, to avoid any kind of legalities.

The choose_your_denim.html contains the div container for each denim that is displayed on the site. I only made one container, and I utilized angulars ng-repeat to display the 12 denims for the site. This enable me to save time by not hard coding all 12 denim div blocks. I used Angular expressions {{ }} for dependency injection for the denim's image, name, price, color, and "Add to Bag" button paired with each denim.

The shopping_bag.html also utilizes Angular ng-repeat and expressions {{ }}. I created a div container for the denims that were added into the shopping bag. Angular dependency injection was used for the denims image, name, style, price, quantity, size, and color. It was also used to add the the "Edit" and "Remove" buttons next to each denim that was added into the shopping bag. I also created the bag summary div for the subtotal, shipping, and total cost of the shopping bag.

The check_out.html contains the customer info fill-in forms that ask for the customer's first name, last last, address1, address2, city, state, zip, email, password, credit card number, card expiration date, and card security code. I also created a customer card with a div container that uses ng-repeat to add multiple customers and, to see the each customer's information displayed on the screen.

### Services Files:

The chooseYourDenimService.js file contains the angular module "dddShopApp" and the service "chooseYourDenimService." It contains the denim array, the denim contructor function, and the 12 denim properties pushed into the denim array.

(talk about button functions here!!!)

The shoppingBagService.js file contains the angular module "dddShopApp" and the service "shoppingBagService." It contains the shopping bag array to push the denim items from the chooseYourDenimService into the shopping bag.

It contains the functions for getting the shopping bag, and  the "Add to bag" button function.

(talk about button functions here!!!)

The checkOutService.js file contains the angular module "dddShopApp" and the service "checkOutService." It contains the customer array, the customer contructor function, and the 4 customer properties that will be pushed into the the customer array.

It contains the getCustomers function to return customers.
(talk about button functions here!!!)

### Controller Files:

The homeController.js file contains the angular module "dddShopApp" and the controller name "homeController", with a function as a $scope parameter. This is to link the home view with the home controller via $scope.

The chooseYourDenimController.js file contains the angular module "dddShopApp" and the controller name "chooseYourDenimController", with the a function that contains $scope, chooseYourDenimService, and shoppingBagService as parameters. This is to link the chooseYourDenimController to the choose_your_denim.html view via $scope.

The shoppingBagController.js file contains the angular module "dddShopApp" and the controller name "shoppingBagController" with a function that contains the parameters $scope, and shoppingBagService.

(finish from here...)
