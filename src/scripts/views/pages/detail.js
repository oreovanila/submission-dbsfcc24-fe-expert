import UrlParser from '../../routes/url-parser';
import TheRestourDbSource from '../../data/therestourdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import ReviewButtonInitiator from '../../utils/review-button-initiator';
import '../../components/loading-element';
import SkipLink from '../../utils/skip-link-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    document.title = 'Detail - ResTour Apps';

    return `
      <div id="mainContent"></div>
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurant');
    const loadingElement = document.createElement('loading-element');

    SkipLink.init({
      mainElement: restaurantContainer,
    });

    restaurantContainer.appendChild(loadingElement);
    const restaurant = await TheRestourDbSource.detail(url.id);

    setTimeout(() => {
      restaurantContainer.removeChild(loadingElement);
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant,
      });

      ReviewButtonInitiator.init({
        listReviewContainer: document.querySelector('#list-review-container'),
        reviewButton: document.querySelector('#add-review-button'),
        id: url.id,
      });
    }, 200);
  },
};

export default Detail;
