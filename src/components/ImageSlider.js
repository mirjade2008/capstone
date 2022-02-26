import React, {useState} from 'react';
// import { SliderData } from './SliderData';
import { FaArrowAltCircleleft, FaArrowAltCircleRight } from 'react-icons/fa';

import { Slide } from 'react-slideshow-image';

const slideImages = [
    'https://th.bing.com/th/id/R.72ec17c31362a698e386d28c5bb5f342?rik=F6sAtyRdNhbu6g&riu=http%3a%2f%2fcdn-image.travelandleisure.com%2fsites%2fdefault%2ffiles%2fstyles%2f1600x1000%2fpublic%2f1498232864%2fskyline-cincinnati-ohio-CINPOI617.jpg%3fitok%3dIZiNQ_NE&ehk=5jMPo2w7fwJT7ODl6PHHO5G3ADW3DK1T7tt2KKtHs2g%3d&risl=&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/R.b36aef3fe03307a6f6ebf062a74f3ea7?rik=jFQSzt44Dgwi0A&riu=http%3a%2f%2fgoodifitgoes.com%2fwp-content%2fuploads%2f2016%2f08%2fcincinnati-bengals18.jpg&ehk=hrWf8IbbkbAE4rJLc%2fWnCWvm5XHbWjwvEp8x52wmbi0%3d&risl=&pid=ImgRaw&r=0',
    'https://cdn.vox-cdn.com/thumbor/e0tPH-LBzekx78EZzPucx4FuSTs=/0x0:3942x2217/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/55163567/usa_today_8962232.0.jpg',
    'https://instinctmagazine.com/wp-content/uploads/2020/01/cincinnati-e1579847734105.jpg',
    'https://www.21cmuseumhotels.com/cincinnati/wp-content/uploads/sites/3/2019/05/Sing-the-Queen-City-Summer-Skyline.jpg',
    'https://img1.10bestmedia.com/Images/Photos/227844/p-union-station_54_990x660_201406010058.jpg',
    'https://th.bing.com/th/id/R.89dc2b208edf85eb9ce78d30c451af32?rik=CBNUPaRFQ%2fWpAg&riu=http%3a%2f%2fimg2.10bestmedia.com%2fImages%2fPhotos%2f70401%2fgreat-american-ballpark-diamond_54_990x660_201404182124.jpg&ehk=s01vx%2faz%2fFqzpGz9MCO5ljNgW81GklNnZ2ybVLbriJc%3d&risl=&pid=ImgRaw&r=0',
    'https://cincinnatiusa.com/sites/default/files/styles/article_full/public/attractionphotos/CMC%20rotunda_%40photogdslavey.jpg?itok=htQki7m3',
    'https://www.attractionsofamerica.com/images/all_destinations/20190827190125_american-sign-museum.jpg',
    'https://cdn.thecrazytourist.com/wp-content/uploads/2020/04/ccimage-shutterstock_1069227557.jpg',
    'https://www.ohiogirltravels.com/wp-content/uploads/2018/02/20171013_134338.jpg',
    'https://th.bing.com/th/id/R.41421ff7256b2ce13bc29999585370c8?rik=QCsA8E5foOD7kA&riu=http%3a%2f%2fimages.midwestliving.mdpcdn.com%2fsites%2fmidwestliving.com%2ffiles%2f101800298_w.jpg&ehk=ukpGxa6Aa5hhP15ofpagiypGToafd7fUo8KPfXG%2f2ec%3d&risl=&pid=ImgRaw&r=0',
    'https://www.21cmuseumhotels.com/cincinnati/wp-content/uploads/sites/3/2019/05/Sing-the-Queen-City-Summer-Skyline.jpg',
    'https://bloximages.newyork1.vip.townnews.com/herald-dispatch.com/content/tncms/assets/v3/editorial/0/6a/06a0bee8-a46b-50e3-89c5-e47e1a545038/562025bddad32.image.jpg?resize=1200%2C801',
    'https://th.bing.com/th/id/OIP.3NJWDWOTheaTtUQBKp5OLQAAAA?pid=ImgDet&rs=1',
    'https://www.busytourist.com/wp-content/uploads/2019/07/Findlay-Market.jpg',
    'https://ucintlambassadors.files.wordpress.com/2020/03/viptour_rhinegeist-21-1200x800-1.jpg?w=1024',
    'https://www.gulfroyaltravels.com/wp-content/uploads/2018/09/6b1cb342-dd95-11e6-b255-0a6afe88c81b.jpg',
    'https://img2.10bestmedia.com/Images/Photos/289765/p-Newport-Aquarium-shark-tunnel-SOvqiNyGjuUM2IxqhfQbXon-cmyk-l_54_990x660.jpg',
    'https://coneyislandpark.com/wp-content/uploads/2018/08/SWA-3-of-6.jpg',
    'https://www.busytourist.com/wp-content/uploads/2019/07/Kings-Island-696x522.jpg',
    'https://cdn.onlyinyourstate.com/wp-content/uploads/2018/11/45709262_1082030868637828_150168175680421888_n.jpg',
    'https://cincinnatiparent.com/wp-content/uploads/2018/11/CMC-Dinosaur-Hall-7-e1553089827581.jpg',
    'https://www.bing.com/images/search?view=detailV2&ccid=2TFFXYKy&id=4E59EDD5AE30A4B30DDE4DB87180ECFE2E9D0782&thid=OIP.2TFFXYKyPQi4YMt-8KvCcQHaE7&mediaurl=https%3a%2f%2ftrivantis.com%2fwp-content%2fuploads%2f2017%2f01%2fMoerlein-Lager-House-Exterior-489x325.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d931455d82b23d08b860cb7ef0abc271%3frik%3dggedLv7sgHG4TQ%26pid%3dImgRaw%26r%3d0%26sres%3d1%26sresct%3d1%26srh%3d799%26srw%3d1203&exph=325&expw=489&q=cincinnati+restaurant+images&simid=608027847332011739&FORM=IRPRST&ck=B1619E478707C88D251E263B9CE321F4&selectedIndex=91&ajaxhist=0&ajaxserp=0',
    'https://www.bing.com/images/search?view=detailV2&ccid=WjhoqFFf&id=EF0A27C4E77BFAE7A6EA3F9B9586598B03A53D7E&thid=OIP.WjhoqFFfldenXS-dLvGOEAHaEK&mediaurl=https%3a%2f%2fchambermaster.blob.core.windows.net%2fimages%2fcustomers%2f873%2fmembers%2f2765%2flogos%2fMEMBER_PAGE_HEADER%2f17499321_1465059100179625_4518402817816113950_n_copy.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.5a3868a8515f95d7a75d2f9d2ef18e10%3frik%3dfj2lA4tZhpWbPw%26pid%3dImgRaw%26r%3d0&exph=400&expw=711&q=cincinnati+restaurant+images&simid=608025824397691348&FORM=IRPRST&ck=4444FA8CA210D8A2C605605261B37022&selectedIndex=247&ajaxhist=0&ajaxserp=0',
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              {/* <span>Slide 1</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
          </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
           </div>   
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[6]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[7]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[8]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[9]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[10]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[11]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[12]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[13]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[15]})`}}>
             
            </div>
            </div>          
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[15]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[16]})`}}>
              <span>Cinci</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[17]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[18]})`}}>
              </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[19]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[20]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[21]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[22]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[23]})`}}>
              
            </div>
          </div>
          </Slide>
          </div>
          
         
       
        
     
    )
};

export default Slideshow;



 