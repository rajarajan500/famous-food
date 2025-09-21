import React from 'react'
import Foodcard from './Foodcard'

function Usa({name,img,rating}) {
  return (
        <div className="flex justify-center flex-wrap gap-10 p-5">
      <Foodcard rating="8.6" name="Hot Dogs" img="https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Hot-Dogs.jpg"/>
      <Foodcard rating="9.0" name=" French Fries" img="https://insanelygoodrecipes.com/wp-content/uploads/2023/01/French-Fries.jpg"/>
      <Foodcard rating="8.7" name=" Chicken Tenders" img=" https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Chicken-Tenders.jpg"/>
      <Foodcard rating="9.5" name="Pizza" img="https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Pizza.jpg"/>
      <Foodcard rating="9.3" name="Burgers" img="https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Burgers.jpg"/>
      <Foodcard rating="8.9" name="Apple Pie" img="https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Apple-Pie.jpg"/>
      <Foodcard rating="7.9" name="Meatloaf" img="https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Meatloaf.jpg"/>
      <Foodcard rating="8.5" name="Macaroni and Cheese" img="https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Macaroni-and-Cheese.jpg"/>
      <Foodcard rating="8.7" name="  Grilled Cheese Sandwiches" img="https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Grilled-Cheese-Sandwiches.jpg"/>
      <Foodcard name="Tater Tots" img="https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Tater-Tots.jpg" rating="8.3"/>
    </div>
  )
}

export default Usa