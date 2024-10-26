import TheRestourDbSource from '../data/therestourdb-source';
import AlertHelper from './alert-helper';
import List from './template-helper';

const ReviewButtonInitiator = {
  init({ listReviewContainer, reviewButton, id }) {
    this._reviewButton = reviewButton;
    this._listReviewContainer = listReviewContainer;
    this._id = id;

    this.addReview();
  },

  addReview() {
    this._reviewButton.addEventListener('click', async () => {
      try {
        const result = await AlertHelper.showReviewForm(this._id);

        if (result.isConfirmed) {
          const reviewData = {
            id: this._id,
            name: result.value.name,
            review: result.value.review,
          };

          const response = await TheRestourDbSource.reviews(reviewData);
          this._listReviewContainer.innerHTML = List.listItemsReviewer(response.customerReviews);

          AlertHelper.showResponse('Your review has been added');
        }
      } catch (error) {
        AlertHelper.showResponse(error);
      }
    });
  },
};

export default ReviewButtonInitiator;
