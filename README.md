# ReactJS Practice

# Parcel
- Dev Build
- Local server(creates a local server)
- HMR(Hot Module Replacement)  Automatically refreshes the page after saving
- File Watching Algorithm - written in C++
- Caching which results in faster builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling(to support old browsers)
- Error Handling(better way of showing error on screen)
- Tree Shaking - remove unused code
- Different dev and production bundles/builds


# Food Ordering app

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Restaurant Container
 *   - Restaurant Card
 *      -Img
 *      -Name,Rating,cost,time
 * Footer
 * - Copyright
 * - Address
 * - Contact
 */


Two Types of Export/Import

-Default Export/Import
 export default Component;
 import {Component} from ".....";

-Named Export/Import
 export const Component; 
 import {Component} from ".....";


 # React Hooks
 It's just a normal JS utility function
-useState()- Superpowerful state variable in React
-useEffect()
 -If no dependency array, useEffect is called on every render.
 -If dependency array is empty, useEffect is called just once on initial render.
 -If dependency array has some dependency, useEffect is called everytime that dependency is changed.