class Location {
    constructor(name) {
        this.name = name;
    }
}

class Restaurant {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    describe() {
        return `${this.name} is located in ${this.location.name}`;
    }
}

class Cuisine {
    constructor(name, cuisine) {
        this.name = name;
        this.cuisine = cuisine;
        this.restaurants = [];
    }

    addRestaurant(restaurant) {
        if (restaurant instanceof Restaurant) {
            this.restaurants.push(restaurant);
        } else {
            throw new Error(`You can only add an instance of Restaurant. Argument is not a restaurant: ${restaurant}`);
        }
    }

    describe() {
        return `${this.name}, located at ${this.cuisine.name}, serves ${this.restaurants.length}, enjoy!`;
    }
}

class Menu {
    constructor() {
        this.restaurants = [];
        this.locations = []; // Added locations array
        this.selectedRestaurant = null;
    }

    start() {
        let selection = this.showMainMenu();
        while (selection !== '0') {
            switch (selection) {
                case '1':
                    this.createRestaurant();
                    break;
                case '2':
                    this.createLocation(); // Added display location
                    break;
                case '3':
                    this.deleteRestaurant();
                    break;
                case '4':
                    this.displayRestaurants();
                    break;
                case '5':
                    this.displayLocation();
                    break;
                default:
                    selection = '0';
            }

            selection = this.showMainMenu();
        }
        alert('Goodbye!');
    }

    showMainMenu() {
        return prompt(`
            0) exit
            1) create a new restaurant
            2) create location
            3) delete a restaurant and location
            4) display all restaurants
            5) display location
        `);
    }

    displayRestaurants() {
        let restaurantString = '';
        for (let i = 0; i < this.restaurants.length; i++) {
            restaurantString += i + ') ' + this.restaurants[i].name + '\n';
        }
        alert(restaurantString);
    }

    createRestaurant() {
        let name = prompt('Enter name for new restaurant:');
        let locationIndex = prompt('Enter location index for restaurant: ');
        let location = this.locations[locationIndex];
        this.restaurants.push(new Restaurant(name, location));
    }


    createLocation() {
        let name = prompt('Enter name for new restaurant:');
        let locationIndex = prompt('Enter location index for restaurant: ');
        let location = this.locations[locationIndex];
        this.locations.push(new Restaurant(name, location));
    }


    deleteRestaurant() {
        let index = prompt('Enter the index of the restaurant and location you wish to delete');
        if (index > -1 && index < this.restaurants.length) {
            this.restaurants.splice(index, 1);
        }
        if (index > -1 && index < this.locations.length) {
            this.locations.splice(index, 1);
        }
    }

    displayLocation() {
        let locationString = '';
        for (let i = 0; i < this.locations.length; i++) {
            locationString += i + ') ' + this.locations[i].name + '\n';
        }
        alert(locationString);
    }
 }

let menu = new Menu();
menu.start();
