import API_ENDPOINT from '../globals/api-endpoint';
import AlertHelper from '../utils/alert-helper';

class TheRestourDbSource {
  static async home() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async reviews(review) {
    try {
      const response = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });

      return response.json();
    } catch (error) {
      AlertHelper.showResponse(error);
      return null;
    }
  }

  static async searchRestaurants(query) {
    const response = await fetch(API_ENDPOINT.SEARCH + query);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
};

export default TheRestourDbSource;
