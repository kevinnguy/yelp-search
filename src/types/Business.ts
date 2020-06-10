import Location from './Location';

export default interface Business {
  id: string;
  name: string;
  rating: number;
  review_count: number;
  location: Location;
}
