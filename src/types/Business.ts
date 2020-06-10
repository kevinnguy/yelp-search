import Location from './Location';
import Coordinates from './Coordinates';

export default interface Business {
  id: string;
  name: string;
  rating: number;
  review_count: number;
  location: Location;
  coordinates: Coordinates;
  photos: Array<String>;
}
