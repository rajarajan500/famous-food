import React from "react";
import Foodcard from "./Foodcard";

function Ind({name,img,rating}) {
  return (
    <div className="flex justify-center flex-wrap gap-10 p-5">
      <Foodcard rating="4.4" name="puri" img="https://images.slurrp.com/prod/recipe_images/transcribe/dinner/Puri-Recipe.webp"/>
      <Foodcard rating="8.6" name="Vada Pav" img="https://tse2.mm.bing.net/th/id/OIP.EHfG8609DbaNYRW9FHzFwAHaGv?w=2560&h=2333&rs=1&pid=ImgDetMain&o=7&rm=3"/>
      <Foodcard rating="8.3" name="Idli" img="https://static.toiimg.com/photo/68631114.cms"/>
      <Foodcard rating="8.5" name="Paratha" img="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347392/india-food-paratha/india-food-paratha-1120x732.jpg"/>
      <Foodcard rating="8.8" name="Naan" img="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347396/india-food-naan/india-food-naan-1120x732.jpg"/>
      <Foodcard rating="8.2" name="Aloo Gobi" img="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347459/india-food-aloo-gobi/india-food-aloo-gobi-1120x732.jpg"/>
      <Foodcard rating="9.2" name="Butter Chicken" img="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347444/india-food-butter-chicken/india-food-butter-chicken-1120x732.jpg"/>
      <Foodcard rating="8.9" name="Masala Dosa" img="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347401/india-food-masala-dosa/india-food-masala-dosa-1120x732.jpg"/>
      <Foodcard rating="8.7" name=" Tandoori Chicken" img="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347361/india-food-tandoori-chicken/india-food-tandoori-chicken-1120x732.jpg"/>
      <Foodcard name="Biriyani" img="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347449/india-food-biriyani/india-food-biriyani-1120x732.jpg" rating="9.4"/>
    </div>
  );
} 

export default Ind;
