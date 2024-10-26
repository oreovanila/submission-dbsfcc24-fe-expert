/* eslint-disable no-new */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import SearchRestaurantHandler from '../../utils/search-restaurant-handler';
import { createEmptyFavoriteRestaurantTemplate, createEmptySearchRestaurantTemplate } from '../templates/template-creator';
import SkipLink from '../../utils/skip-link-initiator';
import '../../components/loading-element';
import FavoriteRestaurantHelper from '../../utils/favorite-restaurant-helper';

const Favorite = {
  async render() {
    document.title = 'Favorite - ResTour Apps';

    return `
      <div id="favorite_items_container">
        <h2 tabindex="0" class="main_title">Favorite Restaurant</h2>
        <div id="search-container">
          <input 
            type="text" 
            name="search-restorant-input" 
            id="search-favorite-restaurant-input" 
            class="search-input"
            placeholder="Search Restaurant" 
          /> 
        </div>
        <div class="items_container">
          <div id="favorite-restaurants" class="container"></div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#favorite-restaurants');
    const loadingElement = document.createElement('loading-element');
    const inputElement = document.getElementById('search-favorite-restaurant-input');

    SkipLink.init({
      mainElement: inputElement,
    });

    restaurantsContainer.appendChild(loadingElement);
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

    setTimeout(() => {
      restaurantsContainer.removeChild(loadingElement);

      if (!restaurants.length) {
        favoriteRestaurantHelper.emptyRestaurantHandler();
      }

      favoriteRestaurantHelper.renderRestaurantsItem(restaurants);
    }, 300);

    inputElement.addEventListener('input', (event) => {
      if (!restaurants.length) {
        return;
      }

      const query = event.target.value;

      new SearchRestaurantHandler({
        dataRestaurants: FavoriteRestaurantIdb,
        emptyTemplate: createEmptySearchRestaurantTemplate(),
        restaurantsContainer: restaurantsContainer,
        query: query,
      });
    });

    const favoriteRestaurantHelper = new FavoriteRestaurantHelper({
      emptyTemplate: createEmptyFavoriteRestaurantTemplate(),
      restaurantsContainer: restaurantsContainer,
    });
  },
};

export default Favorite;
