// const assert = require('assert');
Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');

  I.seeElement('.item_button');
  I.click(locate('.item_button').first());

  I.seeElement('#add-review-button');
  I.click('#add-review-button');
});

Scenario('add customer review', async ({ I }) => {
  I.seeElement('#name-review');
  I.fillField('#name-review', 'john');

  I.seeElement('#body-review');
  I.fillField('#body-review', 'Its perfect');

  I.seeElement('.swal2-confirm');
  I.click('.swal2-confirm');

  I.see('john', '.review-name');
  I.see('Its perfect', '.review-body');
});

Scenario('should return validation error when all input values are empty', ({ I }) => {
  I.seeElement('#name-review');
  I.fillField('#name-review', '');

  I.seeElement('#body-review');
  I.fillField('#body-review', '');

  I.seeElement('.swal2-confirm');
  I.click('.swal2-confirm');

  I.see('Please fill in your name and review!', '.swal2-validation-message');
});

Scenario('should return validation error when name input value is empty', ({ I }) => {
  I.seeElement('#name-review');
  I.fillField('#name-review', '');

  I.seeElement('#body-review');
  I.fillField('#body-review', 'So good');

  I.seeElement('.swal2-confirm');
  I.click('.swal2-confirm');

  I.see('Please fill in your name and review!', '.swal2-validation-message');
});

Scenario('should return validation error when body input value is empty', ({ I }) => {
  I.seeElement('#name-review');
  I.fillField('#name-review', 'john doe');

  I.seeElement('#body-review');
  I.fillField('#body-review', '');

  I.seeElement('.swal2-confirm');
  I.click('.swal2-confirm');

  I.see('Please fill in your name and review!', '.swal2-validation-message');
});
