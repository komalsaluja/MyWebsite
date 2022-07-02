import React,{useState} from 'react'
import './studio.css';
import CloseIcon from '@mui/icons-material/Close';
import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.jpeg';
import img4 from '../../assets/img4.jpeg';
import img5 from "../../assets/img5.jpeg";
import img6 from "../../assets/img6.jpeg";
import img7 from "../../assets/img7.jpeg";
import img8 from "../../assets/img8.jpeg";
import img9 from "../../assets/img9.jpeg";
import img10 from "../../assets/img10.jpeg";
import img11 from "../../assets/img11.jpeg";
import img12 from "../../assets/img12.jpeg";
import img13 from "../../assets/img13.jpeg";
import img14 from "../../assets/img14.jpeg";
import img15 from "../../assets/img15.jpeg";
import img16 from "../../assets/img16.jpeg";
import img17 from "../../assets/img17.jpeg";
import img18 from "../../assets/img18.jpeg";
import img19 from "../../assets/img19.jpeg";
import img20 from "../../assets/img20.jpeg";
import img21 from "../../assets/img21.jpeg";
import img22 from "../../assets/img22.png";
import img23 from "../../assets/img23.jpeg";
import imgCard from "../../assets/imgCard.jpeg";
import imgCard1 from "../../assets/imgCard1.jpeg";
import logo from "../../assets/logo.png";

const Studio = () => {

  let data = [
    {
      id:1,
      imgSrc: img1,
    },
    {
      id:2,
      imgSrc: img2,
    },
    {
      id:3,
      imgSrc: img3,
    },
    {
      id:4,
      imgSrc: img4,
    },
    {
      id:5,
      imgSrc: img5,
    },
    {
      id:6,
      imgSrc: img6,
    },
    {
      id:7,
      imgSrc: img7,
    },
    {
      id:8,
      imgSrc: img8,
    },
    {
      id:9,
      imgSrc: img9,
    },
    {
      id:10,
      imgSrc: img10,
    },
    {
      id:11,
      imgSrc: img11,
    },
    {
      id:12,
      imgSrc: img12,
    },
    {
      id:13,
      imgSrc: img13,
    },
    {
      id:14,
      imgSrc: img14,
    },
    {
      id:15,
      imgSrc: img15,
    },
    {
      id:16,
      imgSrc: img16,
    },
    {
      id:17,
      imgSrc: img17,
    },
    {
      id:18,
      imgSrc: img18,
    },
    {
      id:19,
      imgSrc: img19,
    },
    {
      id:20,
      imgSrc: img20,
    },
    {
      id:21,
      imgSrc: img21,
    },
    {
      id:22,
      imgSrc: img22,
    },
    {
      id:23,
      imgSrc: img23,
    },
    {
      id:24,
      imgSrc: imgCard,
    },
    {
      id:25,
      imgSrc: imgCard1,
    },
    {
      id:26,
      imgSrc: logo,
    },
  ]


  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  }

  return (
    <>
    <h1 className='heading' style={{color:'gold',textAlign:'center'}}>D1 STUDIO...</h1>

    <div className={model? "model open" : "model"}>
      <img src={tempimgSrc} alt="bigImg" />
      <CloseIcon onClick={()=> setModel(false)}/>

    </div>
      <div className='gallery'>
        {data.map((item,index) => {
          return (
            <div className='pics' key={index} onClick={()=> getImg(item.imgSrc)} >
              <img src={item.imgSrc} alt="" style={{width:"100%"}}/>

              </div>
          )
          
        })}

      </div>
    </>
   
  )  
}
export default Studio
