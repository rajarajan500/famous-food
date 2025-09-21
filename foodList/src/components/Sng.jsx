import React from 'react'
import Foodcard from './Foodcard'

function Sng({name,img,rating}) {
  return (
            <div className="flex justify-center flex-wrap gap-10 p-5">
      <Foodcard rating="9.4" name="Hainanese Chicken Rice" img="https://cdn.sanity.io/images/nxpteyfv/goguides/ce219072bb8051a07897cdfb210c2042c516d3a7-1600x1066.jpg?fp-x=0.5&fp-y=0.5&w=1351&fit=max&auto=format"/>
      <Foodcard rating="9.2" name="Chili crab" img="https://cdn.sanity.io/images/nxpteyfv/goguides/fc1830f4b6c86754fcae59644b2e6f609b13b129-1600x1066.jpg?fp-x=0.5&fp-y=0.5&w=1351&fit=max&auto=format"/>
      <Foodcard rating="9.1" name=" Laksa" img="https://cdn.sanity.io/images/nxpteyfv/goguides/12260853d1bc175d152195fc75b8994e855e0856-1600x1066.jpg?fp-x=0.5&fp-y=0.5&w=1351&fit=max&auto=format"/>
      <Foodcard rating="8.9" name="Char kuay teow" img="https://cdn.sanity.io/images/nxpteyfv/goguides/dfefba0cc241940fcba2682914dd2257f94bb577-1600x1066.jpg?fp-x=0.5&fp-y=0.5&w=1351&fit=max&auto=format"/>
      <Foodcard rating="8.7" name="Hokkien prawn mee" img="https://cdn.sanity.io/images/nxpteyfv/goguides/d17b175a413772f2d09dd0e8d1c7ea7ebd168a4e-1600x1066.jpg?fp-x=0.5&fp-y=0.5&w=1351&fit=max&auto=format"/>
      <Foodcard rating="8.6" name=" Fish head curry" img="https://cdn.sanity.io/images/nxpteyfv/goguides/12260853d1bc175d152195fc75b8994e855e0856-1600x1066.jpg?fp-x=0.5&fp-y=0.5&w=1351&fit=max&auto=format"/>
      <Foodcard rating="9.0" name="Satay" img="https://cdn.sanity.io/images/nxpteyfv/goguides/8e4e9f516675212bf337df67f079e52db57cbb8c-1600x1066.jpg?fp-x=0.5&fp-y=0.5&w=1351&fit=max&auto=format"/>
      <Foodcard rating="8.8" name="Char siew meats on rice" img="https://cdn.sanity.io/images/nxpteyfv/goguides/af1f6c99a8d19a8d42057a0b4290da013cd8235c-1600x1066.jpg?fp-x=0.5&fp-y=0.5&w=1351&fit=max&auto=format"/>
      <Foodcard rating="8.5" name="Oyster omelet" img="https://cdn.sanity.io/images/nxpteyfv/goguides/8e4e9f516675212bf337df67f079e52db57cbb8c-1600x1066.jpg?fp-x=0.5&fp-y=0.5&w=1351&fit=max&auto=format"/>
      <Foodcard name="Kaya toast" img="https://cdn.sanity.io/images/nxpteyfv/goguides/eead92fc1507f44277fbc0ee3d935c60e542b10f-1600x1066.jpg?fp-x=0.5&fp-y=0.5&w=1351&fit=max&auto=format" rating="8.6"/>
    </div>
  )
}

export default Sng