import React from 'react';

function Footer() {
  return (
    <div className="fullFooter align-items-center d-flex justify-content-center">
  <div className="container">
    <div className="footer__logo row">
      <div className="col-md-4 col-sm-4 col-xs-4">
      <div>
        <span className="footerLogoFirstPart">Gym</span>
        <span className="footerLogoSecondPart">baran</span>
      </div>
      </div>
      <div className="col-md-8 col-sm-4 col-xs-4"></div>
    </div>
    <div className="row">
      <div className="col-md-3 col-sm-4 col-xs-4">
        <p className="card-text">We take care of your health with regular and fun exercise</p>
      </div>
      <div className="col-md-9 col-sm-12 col-xs-4"> 
        <div className="footer__info">
          <div className="comapany__column">
            <h5 className="heading">Program</h5>
            <ul>
              <li>Workout</li>
              <li>Gym</li>
              <li>Cardio</li>
              <li>Zumba</li>
          </ul>
          </div>
          {/* <div className="influencer__part d-flex"> */}
            <div className="influencer__div">
              <h5 className="heading">Blog</h5>
              <ul>
                <li>Daily Stretch</li>
                <li>Daily Workout</li>    
              </ul>
            </div>
            <div className="advisor__div">
              <h5 className="heading">About Us</h5>
              <ul>
                <li>Support</li>
                <li>Contact</li>
                <li>Address</li>
             </ul>
            </div>
          {/* </div> */}
          <div>            
          </div>
        </div>     
      </div>
  </div>
</div>
</div>
    // <div className='container-fluid fullFooter'>
    //   <div className='row'>
    //     <div className='col-lg-4 footerFirstPartDiv'>
    //       <div>
    //         <span className="logoFirstPart">Gym</span>
    //         <span className="logoSecondPart">baran</span>
    //       </div>
    //       <span>We take care of your health with regular and fun exercise</span>
    //     </div>
    //     <div className='col-lg-8'>
    //       <ul>
    //         <li> 
    //           <span>Program</span>
    //           <span>Workout</span>
    //           <span>Gym</span>
    //           <span>Cardio</span>
    //           <span>Zumba</span>
    //         </li>
    //         <li>
    //           <span>Blog</span>
    //           <span>Faily Stretch</span>
    //           <span>Daily Workout</span>
    //         </li>
    //         <li>
    //           <span>About Us</span>
    //           <span>Support</span>
    //           <span>Contact</span>
    //           <span>Address</span>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Footer;