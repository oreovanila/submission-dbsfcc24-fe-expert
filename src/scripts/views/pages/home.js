/* eslint-disable no-new */
import TheRestourDbSource from '../../data/therestourdb-source';
import { createRestaurantItemTemplate, createEmptySearchRestaurantTemplate } from '../templates/template-creator';
import '../../components/loading-element';
import SkipLink from '../../utils/skip-link-initiator';
import SearchRestaurantHandler from '../../utils/search-restaurant-handler';

const Home = {
  async render() {
    return `
      <div class="hero">
        <div class="hero_inner">
          <h1 tabindex="0" class="hero_title">Find Your Best <span class="span_title">Restaurant</span> Here</h1>
          <p class="hero_description">Discover top dining spots near you with ease, from local favorites to international cuisines</p>
          <a class="hero_button" id="start_explore" href="#main_title">Start Exploring</a>
        </div>
      </div>
      <div id="mainContent"></div>
      <h2 tabindex="0" class="main_title" id="main_title">Explore Restaurants</h2>
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
        <div id="restaurants" class="container"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    const loadingElement = document.createElement('loading-element');
    const inputElement = document.getElementById('search-favorite-restaurant-input');

    SkipLink.init({
      mainElement: inputElement,
    });

    inputElement.addEventListener('input', (event) => {
      const query = event.target.value;
      new SearchRestaurantHandler({
        dataRestaurants: TheRestourDbSource,
        emptyTemplate: createEmptySearchRestaurantTemplate(),
        restaurantsContainer: restaurantsContainer,
        query: query,
      });
    });

    restaurantsContainer.appendChild(loadingElement);
    const restaurants = await TheRestourDbSource.home();

    setTimeout(() => {
      restaurantsContainer.removeChild(loadingElement);
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }, 300);
  },
};

export default Home;
