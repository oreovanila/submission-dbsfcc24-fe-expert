import { createCustomerReviewsTemplate } from '../views/templates/template-creator';
class List {
  static listCategories(categories) {
    return categories.map(category => `<li tabindex="0">📌 ${category.name}</li>`).join('');
  }

  static listMenus(menus) {
    return menus.map(menu => `<li tabindex="0">- ${menu.name}</li>`).join('');
  }

  static listItemsReviewer(items) {
    return items.map(item => createCustomerReviewsTemplate(item)).join('');
  }
}

export default List;
