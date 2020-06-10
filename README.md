# Yelp Search

<img src="https://github.com/kevinnguy/yelp-search/blob/master/screenshots/1.png?raw=true">

### Instructions
- Install node modules
`npm i` (this will also run `npx pod-install` postinstall)
- Run iOS simulator
`npm run ios`

### App Features
- View your search results by toggling the map view and list view.
- Filter your search by selecting a category. This app only allows you to filter by Yelp's main parent categories. The `yelp_categories.json` contains all subcategories but for UX, I think it's more useful to filter by only the main parent categories.
- Tapping on the business on the list or the map marker will show you the business details. The details view shows images of the business and I chose to implement this because pictures are fun! 📸

## Improvements (pros and cons)
To implement this app quickly, I had to omit a few libraries that I would normally use in production. 
- To manage multiple app states and screens, I would use `redux` and `react-navigation` to better manage the app states and flows. By not using `react-navigation`, my `App.tsx` is bloated with conditional rendering. 
- I wanted to implement fitting the map with all the POIs but I didn't have enough time. Implementing this feature would've improved UX but there were other features that had higher priority for completing this app.
- The requirements for this exercise didn't call for writing unit tests but I think I would've liked to spend a little time writing tests, especially for the searching feature.
- To implement filtering categories, I wanted to use a picker component (`@react-native-community/picker`) since I think it's good UX for its purpose. If there were more parameters to filter, I would build a `Filter` component to manage all the params.


### Libraries used:
- react-native (`npx react-native init YelpSearch --template react-native-template-typescript`)
- react-native-maps
- @react-native-community/picker
