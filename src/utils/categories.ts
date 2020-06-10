import yelpCategories from '../assets/yelp_categories.json';
import Category from '../types/Category';

const parentCategories = yelpCategories.filter(
  (category: Category) => category.parents.length === 0,
);

export const CATEGORY_ALL = 'CATEGORY_ALL';

export default parentCategories;
