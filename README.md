# About
Project is based on **React + Typescript + Vite**, and have features to search Github username and show their public repositories. 
[Click](https://github-repositories-explorer-test2025.netlify.app/) here to start using the app.

# Features
- Allows users to search for a GitHub username by typing in the search box and pressing the Search button or the Enter key.
- Displays public repositories when a result card is clicked from the search results.
- Shows repository details including name, star count, and description.
- Displays a message "GitHub username not found" if the searched user doesn't exist.
- Displays a message "User doesn't have any public repository" if the selected user has none.
- Disables the search action while a search is in progress.
- Prevents searching if the search box is empty.

# Run Locally
- ``npm run install``
- ``npm run dev``

# Unit Test
The test suite includes both global/shared components and the Home page feature. Below are the tested components along with their test cases:
File Name | Test Case 
--- | --- |
Accordion.test.tsx | <ul><li>Render title</li><li>Children should not render intially</li><li>Render children when acordion open</li><li>Hide children when acordion closed</li></ul>
Card.test.tsx | <ul><li>Children should be render</li></ul>
SearchBar.test.tsx | <ul><li>Search button should be disable initially</li><li>User can type into search box and button should click able</li></ul>
Home.test.tsx | <ul> <li>Should show 5 github users</li> <li>Should show user's repository when accordion clicked</li> <li>Should show text message "User doesn't have any public repository" when user doesn't have public repository </li> <li>Should show text message "Github username not found" when github user not found</li> </ul>

use ``npm run test`` to run the test locally.

# Library
- [Material UI](https://mui.com/) Used for layout and common UI components.
- [Styled Component](https://styled-components.com/) For creating custom components with CSS-in-JS styling.
- [Axios](https://axios-http.com/) For making API requests.
- [React Query](https://tanstack.com/query/latest) Handles API state and caching.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) For testing React components.
- [React Router](https://reactrouter.com/) Manages navigation and routing.

# Folder Structure



    
    ├── public               # Static assets that are publicly accessible
    ├── src                  # Main source code directory for the application
       ├── assets            # Stores local assets like images, icons, etc.
       ├── components        # Shared/global components used across the app
       ├── core              # Core utilities or configs required by most components
       ├── features          # Feature modules representing different pages
           ├── home            # Contains all features related to the home page
                ├── __components     # Components specific to the home page
                ├── network          # Handles API integration for the home page
                    ├── service.ts           # Defines actual API calls
                    ├── resolver.ts          # React Query resolvers that wrap and manage service calls
                    ├── response.type.d.ts   # Defines the types for API responses
                ├── page             # Home-related page components
                ├── test             # Test scripts for the home module
                ├── index.ts         # Entry point and exports for the home module
       ├── layout            # Layout components that act as wrappers for the app
       ├── router            # Route definitions and navigation configuration
    

