/* eslint-disable class-methods-use-this */
import SearchFavoriteRestaurantHandler from './search-restaurant-handler';

class FavoriteRestaurantHelper extends SearchFavoriteRestaurantHandler {
  constructor({ emptyTemplate, restaurantsContainer }) {
    super({ emptyTemplate, restaurantsContainer });
  }

  searchInputListenerHandler() {};
}

export default FavoriteRestaurantHelper;
