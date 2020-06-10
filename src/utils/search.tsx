const searchYelp = async (term: string, location: string) => {
  term = term ? `"${term}"` : 'null';
  location = location ? `"${location}"` : '"san francisco"'; // default to san francisco

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
        search(term: ${term}, location: ${location}) {
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
