/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Scenario('liking one restaurants', async ({ I }) => {
  I.amOnPage('/#/favorite');

  I.see('No favorite restaurants yet', '.restaurant__not__found');
  I.amOnPage('/');

  I.seeElement('.item_name');
  const firstRestaurant = locate('.item_name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.seeElement('.item_button');
  I.click(locate('.item_button').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.item_container');
  const likedRestaurantName = await I.grabTextFrom('.item_name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
