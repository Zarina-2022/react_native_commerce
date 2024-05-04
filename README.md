This project is a mobile commerce application built using React Native. It includes components, navigation logic, context providers, and API requests. Here's a brief description:

The project consists of various components and screens for a mobile commerce platform. 

`It includes functionalities such as:`
- browsing products, 
- viewing product details, 
- adding products to cart and favorites, 
- user authentication (login and registration), 
- managing user profile, 
- viewing notifications, 
- and checking out.

`Key components and screens include:`

- Homepage: displays widgets including new arrivals, bestsellers, categories, etc.
- Categories: displays a list of product categories.
- ProductList: displays a list of products based on selected or filtered categories.
- ProductDetails: displays detailed information about a selected product including image, description, price, and rating.
- Cart: displays the items added to the cart and provides options for checkout.
- Checkout: allows users to review their cart and proceed with the purchase.
- Favourites: displays a list of favorite products saved by the user.
- Profile: manages user profile including user information, favorites, and orders.
- Login/Register: provides user authentication functionalities.
- Notifications: displays notifications for the user.

`The project utilizes various libraries and tools such as:`
-  React Navigation for navigation, 
- UI Kitten for UI components, 
- Axios for HTTP requests.

`It follows modern React Native development practices including:`
- component-based architecture, 
- state management with hooks, 
- and functional components.

`Here's a brief overview of what each file appears to be doing:`
- <b>TabNavigator:</b> creates a bottom tab navigator with icons for different screens like categories, favorites, homepage, and profile.
- <b>StackNavigator:</b> sets up a native stack navigator with header options and screens like login, cart, notifications, etc.
- <b>BadgeContextProvider:</b> defines a context provider for managing badges, favorites, and login status.
- <b>ProductsCards:</b> renders a card component for displaying product information, including an option to add the product to favorites.
- <b>CategoryList:</b> displays a list of categories fetched from an API endpoint.
- <b>Spinner:</b> renders a spinner component for indicating loading states.
- <b>EmptyItemList:</b> shows a message when a list is empty, prompting users to take action.
- <b>Counter:</b> implements a counter component with increment and decrement functionality.
- <b>Button:</b> displays a customizable button component.
- <b>HeaderTabIcons:</b> renders icons for the header tabs, such as search and cart, along with a badge count for the cart.
- <b>TabIcon:</b> renders icons for the bottom tab navigator based on the current screen.
- <b>UserInfo:</b> displays user information such as name and job title.
- <b>ProfileMenu:</b> renders a list of options for the user profile.
- <b>ProductsListCard:</b> displays product information with options to add to favorites or cart.
- <b>FavouritesCard:</b> renders a card for displaying favorite items.
- <b>CategoryCard:</b> displays a category card with an option to navigate to the product list for that category.
- <b>Summary:</b> shows a summary of items in the cart with a total price and option to proceed to checkout.
- <b>CartCard:</b> renders a card for displaying items in the cart with a counter component for quantity.
- <b>Badge:</b> displays a badge with a count, typically used for indicating the number of items in the cart.
- <b>API Requests:</b> contains utility functions for making HTTP requests using Axios, including GET, POST, PUT, PATCH, and DELETE methods.

Overall, it is a comprehensive mobile commerce application with essential features for browsing and purchasing products, handling navigation, user authentication, product display, and interaction with a backend API.

<b>Source and password used:</b>

https://fakestoreapi.com/docs 

    username: "mor_2314",
    password: "83r5^_"

Screen gif:

![](commerce-screen.gif)