import CONFIG from '../../globals/config';
import List from '../../utils/template-helper';

const createRestaurantItemTemplate = (restaurant) => `
  <article id=${restaurant.id} class='item_container'>
    <img 
      class="lazyload item_image"
      tabindex="0" 
      data-src='${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}' 
      alt='Gambar Resto ${restaurant.name}'
    />
    <div class='item_subContainer1'>
      <p tabindex="0" aria-label="Rating ${restaurant.rating}" class='item_rate'>⭐${restaurant.rating}/5</p>
      <p tabindex="0" aria-label="Kota ${restaurant.city}" class='item_city'>${restaurant.city}</p>
    </div>
    <div class='item_subContainer2'>
      <h4 tabindex="0" aria-label="Nama Resto: ${restaurant.name}" class='item_name'>${restaurant.name}</h4>
      <p tabindex="0" class='item_description'>${restaurant.description}</p>
      <a class='item_button' href="#/detail/${restaurant.id}">See More</a>
    </div>
  </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 tabindex="0" class="detail-title">${restaurant.name}</h2>
  <img 
    class="lazyload"
    tabindex="0" 
    data-src='${CONFIG.BASE_LARGE_IMAGE_URL + restaurant.pictureId}' 
    alt='Gambar Resto ${restaurant.name}'"
  />

  <p tabindex="0" class="detail-address">📍 ${restaurant.address}, ${restaurant.city}</p>

  <div class="detail-desc">
    <h3 tabindex="0" id="description">Description</h3>
    <p tabindex="0" aria-labelledby="description">${restaurant.description}</p>
  </div>

  <div class="detail-restaurant-container">
    <div class="additional-information-container">
      <h3 tabindex="0" >Categories</h3>
      <ul>
        ${List.listCategories(restaurant.categories)}
      </ul>

      <h3 tabindex="0">Menus</h3>
        <h4 tabindex="0">🍴 Foods</h4>
          <ul class="menusContainer">
            ${List.listMenus(restaurant.menus.foods)}
          </ul>
        <h4 tabindex="0">🥤 Drinks</h4>
          <ul class="menusContainer">
            ${List.listMenus(restaurant.menus.drinks)}
          </ul>
    </div>
    <div class="reviews-container">
      <h3 tabindex="0">Reviews</h3>
      <p tabindex="0" class="detail-rating">⭐${restaurant.rating}/5</p>
        <div id="list-review-container">
          ${List.listItemsReviewer(restaurant.customerReviews)}
        </div>  
      <button id="add-review-button" type="button">Add Review</button>
    </div>
  </div>

`;

const createCustomerReviewsTemplate = (review) => {
  return `
  <div class="review-container">
    <p tabindex="0" class="review-name"><b>From:</b> ${review.name}</p>
    <p tabindex="0" class="review-post"><b>Posted:</b> ${review.date}</p>
    <p tabindex="0" class="review-body">${review.review}</p>
  </div>
  `;
};

const createLikeRestaurantButtonTemplate = () => {
  return `
    <button aria-label="like this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  `;
};

const createUnlikeRestaurantButtonTemplate = () => {
  return `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;
};

const createEmptyFavoriteRestaurantTemplate = () => {
  return `
    <div class="empty_restaurant">
      <p class="restaurant__not__found">No favorite restaurants yet</p>
    </div>
  `;
};

const createEmptySearchRestaurantTemplate = () => {
  return `
    <div class="empty_restaurant">
      <p>Restaurant not found</p>
    </div>
  `;
};

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createCustomerReviewsTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createEmptyFavoriteRestaurantTemplate,
  createEmptySearchRestaurantTemplate,
};
