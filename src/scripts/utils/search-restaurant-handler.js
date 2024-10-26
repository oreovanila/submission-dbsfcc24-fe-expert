import { createRestaurantItemTemplate } from '../views/templates/template-creator';

class SearchRestaurantHandler {
  constructor({
    dataRestaurants, emptyTemplate, restaurantsContainer, query = null,
  }) {
    this._dataRestaurants = dataRestaurants;
    this._emptyTemplate = emptyTemplate;
    this._restaurantsContainer = restaurantsContainer;
    this._query = query;

    this.searchInputListenerHandler();
  }

  async searchInputListenerHandler() {
    this._restaurantsContainer.innerHTML = '';

    const restaurants = await this._dataRestaurants.searchRestaurants(this._query.trim());

    if (!restaurants.length) {
      this.emptyRestaurantHandler();
    };

    this.renderRestaurantsItem(restaurants);
  }

  emptyRestaurantHandler() {
    this._restaurantsContainer.innerHTML += this._emptyTemplate;
  };

  renderRestaurantsItem(restaurants) {
    restaurants.forEach((restaurant) => {
      this._restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  }
};

export default SearchRestaurantHandler;
