import { useState } from "react"
import Navbar from "./Comp/Navbar"
import News from "./Comp/News"
import backgroundImage from "../src/assets/main_back.jpg";
import techBackground from "../src/assets/tech_back.jpg";
import businessBackground from "../src/assets/business.jpeg";
import healthBackground from "../src/assets/health.jpg";
import sportsBackground from "../src/assets/sports(2).jpg";
import scienceBackground from "../src/assets/science.jpg";
import entertainmentBackground from "../src/assets/ent.jpg";

const App = () =>
  {
    const [category, setCategory] = useState("general");
    const getCategoryBackgroundImage = (category) => {
      switch (category) {
        case "technology":
          return techBackground;
        case "business":
          return businessBackground;
        case "health":
          return healthBackground;
        case "sports":
          return sportsBackground;
        case "science":
          return scienceBackground;
        case "entertainment":
          return entertainmentBackground;
        default:
          return backgroundImage; // Default background image
      }
    };
  
    return (
      <div style={{ backgroundImage: `url(${getCategoryBackgroundImage(category)})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
        <Navbar setCategory={setCategory}/>
        <News category={category}/> 
        

      </div>
    )
  }
export default App
