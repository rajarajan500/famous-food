import React from 'react'
import Foodcard from './Foodcard'

function China({name,img,rating}) {
  return (
            <div className="flex justify-center flex-wrap gap-10 p-5">
      <Foodcard rating="9.3" name="Peking Roasted Duck" img="https://images.chinahighlights.com/allpicture/2021/12/d247e7d25b164b77841f6022_cut_750x400_39.webp"/>
      <Foodcard rating="9.0" name="Kung Pao Chicken" img="https://images.chinahighlights.com/allpicture/2019/11/31acb7b302ec4b48b17443ed_cut_750x400_39.webp"/>
      <Foodcard rating="8.8" name="Sweet and Sour Pork" img="https://images.chinahighlights.com/allpicture/2019/11/a4ad4a7fe0cb401cb0be6383_cut_750x400_39.webp"/>
      <Foodcard rating="9.2" name="Hot Pot" img="https://images.chinahighlights.com/allpicture/2019/01/482fb1f829ce4e6496b94fea_cut_750x400_39.webp"/>
      <Foodcard rating="8.9" name="Dim Sum" img="https://images.chinahighlights.com/allpicture/2018/08/16d96371fd2944be86ffbdc1_cut_750x400_39.webp"/>
      <Foodcard rating="9.1" name="Dumplings" img="https://images.chinahighlights.com/allpicture/2019/01/9b7159f6d89449d997eaa5ab_cut_750x400_39.webp"/>
      <Foodcard rating="8.7" name="Ma Po Tofu" img="https://images.chinahighlights.com/allpicture/2019/11/62745d5a726045e4a99a3885_cut_750x400_39.webp"/>
      <Foodcard rating="8.6" name="Char Siu" img="https://images.chinahighlights.com/allpicture/2021/12/a57fdce570494d41b624119d_cut_750x400_39.webp"/>
      <Foodcard rating="8.8" name="Chow Mein" img="https://images.chinahighlights.com/allpicture/2018/03/10725167158a4b8589bf3140_cut_750x400_39.webp"/>
      <Foodcard name="Fried Rice" img="https://images.chinahighlights.com/allpicture/2019/11/62745d5a726045e4a99a3885_cut_750x400_39.webp" rating="	8.9"/>
    </div>
  )
}

export default China