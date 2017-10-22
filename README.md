Dark Denim Destination

I designed an online store, called Dark Denim Destination, that specializes in selling men's black denim.

This is my first project at Redwood Code Academy that shows what we learned during the first month of the bootcamp, focusing on front-end development.

After the project was completed, I pushed the entire project to github.

The technologies that I used are HTML5, CSS3, and JavaScript. I used Angularjs as the front-end framework for my site.

With Angularjs, I used views, services, controllers, and ui-routers.

I created an index.html, custom css file, app.js, three views html files, four controllers javascript files, and three services javascript files.

In addition, I used 17 images to decorate the site, all contained within the images folder.

In addition, I included an animate.css file for the some css animations on my site.

The views folder contains html files for the home page, choose your denim page, shopping bag page, and check out page.

The services folder contains angularjs files for the choose your denim, shopping bag, and check out services.

The controller folder contains angularjs files that are associated with the views for the home page, choose your denim page, shopping bag page, and check out page.


In the index.html, I used the "Shadows into light" font from Google Fonts throughout the entire site. I also used Bootstrap, Animate.css file for css animations, Angular CDN 1.5.7, and Angular UI Router CDN 0.4.2.

Index.html File:

The index.html file contains the navigation bar code, with the associated ui-source references for all the html view files.

Custom CSS File:

The custom css file is in the css folder, under the file name "styles.css" This is were all my added css is located.

App.js File:

The app.js file contains the angular module, called "dddShopApp" and utilizes the ui-router. Under $StateProvider, I created four states, each one for the html view files.

Views Files:

The home.html file contains the stores main home page. I've included a jumbotron from bootstrap, with three paragraphs that I filed in with "lorem ipsum." I created three sections for the home page that are titled "Who We Are", "What We Do", and "Why We Do It" that includes an image for each section with "lorem ipsum" paragraphs as fill-ins. I also included a footer section on the bottom of the page to include the title of the site and the year it was designed. I also included my name to show that I designed the site. Most importantly, I included a message claiming no ownership for the images that I used, to avoid any kind of legalities.

The choose_your_denim.html contains the div container for each denim that is displayed on the site. I only made one container, and I utilized angulars ng-repeat to display the 12 denims for the site. This enable me to save time by not hard coding all 12 denim div blocks. I used Angular expressions {{ }} for dependency injection for the denim's image, name, price, color, and "Add to Bag" button paired with each denim.

The shopping_bag.html also utilizes Angular ng-repeat and expressions {{ }}. I created a div container for the denims that were added into the shopping bag. Angular dependency injection was used for the denims image, name, style, price, quantity, size, and color. It was also used to add the the "Edit" and "Remove" buttons next to each denim that was added into the shopping bag. I also created the bag summary div for the subtotal, shipping, and total cost of the shopping bag.

The check_out.html contains the customer info fill-in forms that ask for the customer's first name, last last, address1, address2, city, state, zip, email, password, credit card number, card expiration date, and card security code. I also created a customer card with a div container that uses ng-repeat to add multiple customers and, to see the each customer's information displayed on the screen.

Services Files:

The chooseYourDenimService.js file contains the angular module "dddShopApp" and the service "chooseYourDenimService." It contains the denim array, the denim contructor function, and the 12 denim properties pushed into the denim array.

(talk about button functions here!!!)

The shoppingBagService.js file contains the angular module "dddShopApp" and the service "shoppingBagService." It contains the shopping bag array to push the denim items from the chooseYourDenimService into the shopping bag.

It contains the functions for getting the shopping bag, and  the "Add to bag" button function.

(talk about button functions here!!!)

The checkOutService.js file contains the angular module "dddShopApp" and the service "checkOutService." It contains the customer array, the customer contructor function, and the 4 customer properties that will be pushed into the the customer array.

It contains the getCustomers function to return customers.
(talk about button functions here!!!)

Controller Files:

The homeController.js file contains the angular module "dddShopApp" and the controller name "homeController", with a function as a $scope parameter. This is to link the home view with the home controller via $scope.

The chooseYourDenimController.js file contains the angular module "dddShopApp" and the controller name "chooseYourDenimController", with the a function that contains $scope, chooseYourDenimService, and shoppingBagService as parameters. This is to link the chooseYourDenimController to the choose_your_denim.html view via $scope.

The shoppingBagController.js file contains the angular module "dddShopApp" and the controller name "shoppingBagController" with a function that contains the parameters $scope, and shoppingBagService.

(finish from here...)
