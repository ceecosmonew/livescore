import React from 'react'

import PIC from '../assets/images/googlePic.png'

function Home() {

  return (
    <>
    
{/*     
    <div class="container">
            <h1>ScoreBoard</h1>
            <div class="title-box">
                <p>Local Team</p>
                <p id="elapsed">45'</p>
                <p>Visitor Team</p>
            </div>
            <div class="title-box">
                <div class="team">
                    <img  id="homeLogo" />
                    <p id="homeName">Team name</p>
                </div>
                <p id="goals">3  -  1</p>
                <div class="team">
                    <img id="awayLogo"/>
                    <p id="awayName">Team name</p>
                </div>


         

            </div>
            <hr></hr>
            <div id="matchTable" class="matches-table">

            </div>
            </div> */}
            {/* <script type="module" src=""></script> */}
            {/* style={{width: '150px'}} style={{width: '190px', height: '1190px'}} */}
           
           
            <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1608033519/contentservice/Jara%2060%20off%20banner%20web%203.gif_SyreHXInP.gif" alt="Direct From Samsung" style={{width: '100%'}} />
            
            <img src={PIC} alt="" className='google2' width="100%"/>
          
             
            <div className="container-fluid">
            <div className="row">
       
            <div className="col-md-2">
            <div className='konga'>
            <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1608033519/contentservice/Jara%2060%20off%20banner%20web%203.gif_SyreHXInP.gif" alt="Direct From Samsung"  style={{width: '100%', height: '550px'}} />

                </div>
                </div>
                <div className="col-md-10 pt-4">
              
     <iframe id="iframe-livescore-box" SRC="http://www.fctables.com/livescore_feed/4418925c448c01e6ce77ee63f/" width="100%" scroll="no" frameborder="0" height="650"></iframe>  <a href="http://www.fctables.com" title="Soccer statistics" target="_blank">Football Statistics</a><script>window.addEventListener("DOMContentLoaded",function(){(function(){var a=window.addEventListener?"addEventListener":"attachEvent",b=window[a],c="attachEvent"==a?"onmessage":"message",d=document.getElementById("iframe-livescore-box");b(c,function(a){var b=JSON.parse(a.data);d.style.height=b.height+"px",console.log(b)},!1)})()},!1);</script> 

                </div>
              
                </div>
           
                <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1608033519/contentservice/Jara%2060%20off%20banner%20web%203.gif_SyreHXInP.gif" alt="Direct From Samsung" style={{width: '100%'}}/>
               


               
                </div>
    </>
  )
}

export default Home