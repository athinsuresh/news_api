NewsArt is a responsive web application that displays the latest news articles across various categories such as technology, business, health, sports, science, and entertainment. The application fetches data from the News API and allows users to filter news by category.

## Features

- Responsive design across a wide range of devices and screen sizes.
- Displays news articles in different categories.
- Dynamic background images that change based on the selected category.
- Hover effects on news cards for an enhanced user experience.
- Client-side caching mechanisms to minimize redundant API calls.
- Advanced filtering functionality.

## Technologies Used

- React
- Bootstrap
- Tailwind CSS
- News API

## Project Structure
news-art/
├── public/
│   ├── index.html
├── src/
│   ├── assets/
│   │   ├── main_back.jpg
│   │   ├── tech_back.jpg
│   │   ├── business.jpeg
│   │   ├── health.jpg
│   │   ├── sports(2).jpg
│   │   ├── science.jpg
│   │   ├── entertainment.jpg
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── News.jsx
│   │   ├── NewsCard.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .env
├── package.json
├── README.md

## Important Files
- App.jsx component sets up a responsive news application that changes its background image based on the selected news category. It uses a useState hook to manage the current category and switches the background image accordingly. It includes a Navbar for selecting categories and a News component to display news articles.
- News.jsx component fetches and displays news articles based on the selected category. It uses useState to manage articles, errors, and loading states, and useEffect to fetch news from the NewsAPI when the category changes. Articles are displayed in a responsive grid layout, with a styled heading that includes a bottom border for visual emphasis.
- The NewsCard.jsx component displays individual news articles with a title, description, image, and a link to read more. It features a hover effect that changes the card's background to white, text color to black, and adds a border. The hover effect also includes a smooth transition.
- The Navbar.jsx component renders a responsive navigation bar with various categories (Technology, Business, Health, Sports, Science, Entertainment). When a category link is clicked, it calls the setCategory function passed as a prop to update the current news category. The navbar uses Bootstrap classes for styling and responsiveness.
- 'assets' folder contains the necessary images.
- .env file contains the API key.

## Running
- Clone the repository:
   https://github.com/athinsuresh/news_api
- Install dependencies:
  npm install
- Set up your News API key:
- Create a .env file in the root of your project and add your News API key:
  VITE_API_KEY=your_news_api_key_here
- Start the development server:
  npm run dev







