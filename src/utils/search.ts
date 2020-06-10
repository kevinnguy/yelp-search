import {CATEGORY_ALL} from './categories';

import Coordinates from '../types/Coordinates';

const searchYelp = async (
  term: string,
  location: string,
  category: string,
  userLocation: Coordinates,
) => {
  const {latitude = 0, longitude = 0} = userLocation;
  const searchParams = `term: ${term ? `"${term}"` : 'null'}, ${
    location?.length
      ? `location: "${location}"`
      : `latitude: ${latitude}, longitude: ${longitude}`
  }, ${category !== CATEGORY_ALL ? `categories: "${category}"` : ''}`;

  try {
    const response = await fetch('https://api.yelp.com/v3/graphql', {
      method: 'POST',
      headers: {
        // Should never expose API key! Will deactivate this soon
        Authorization:
          'Bearer u1Kc0hI4epGgBq9OoCi9C7JgYFOB0w3D4tfdb10dQvdLEt8qnqBmUfXdI4t8rZKcjdNgMyDK80QsWqYv-llh3DAUosUJNt74PJEUmWgnn4PAPURo0lapQBtF0RfgXnYx',
        'Content-Type': 'application/graphql',
        'Accept-Language': 'en_US',
      },
      body: `
      {
        search(${searchParams}) {
          business {
            id
            name
            rating
            review_count
            location {
              address1
              city
              state
            }
            coordinates {
              longitude
              latitude
            }
            photos
          }
        }
      }
      `,
    });

    const responseJSON = await response.json();
    return responseJSON.data.search.business;
  } catch (error) {
    console.warn('there was an error', error);
  }
};

export default searchYelp;
