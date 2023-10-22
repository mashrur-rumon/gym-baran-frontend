import React from 'react';
import Layout from './Layout';
import image1 from '../image/image1.svg';
import image2 from '../image/image2.svg';
import arrowRight from '../image/arrowRight.svg';

function Home() {
  return (
    <Layout>
        <div className='container-fluid containerPadding'>
          <div className='row'>
            <div className='col-md-6 order-2 order-md-1 order-sm-2 imageMargin'>
              < img src={image1} alt='image1'/>
            </div>
            <div className='col-md-6 order-1 order-md-2 order-sm-1 bestWorkoutConrentDiv'>
              <p className='category-heading customHeading'>
                Best full body workout to lose fat
              </p>
              <p className='text-1'>
                Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. 
              </p>
              <button className='d-flex justify-content-between align-items-center px-3 blue-button'>Get Started
                <img className='rightArrown' src={arrowRight} alt='arrowRight'/>
              </button>
            </div>
          </div>
        </div>
        <div className='container-fluid containerPadding'>
          <div className='row'>
            <div className='col-md-6 dailyWorkoutConrentDiv'>
              <p className='category-heading customHeading'>
                Daily morning workout in home
              </p>
              <p className='text-1'>
                Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. 
              </p>
              <button className='d-flex justify-content-between align-items-center px-3 blue-button'>Get Started
                <img className='rightArrown' src={arrowRight} alt='arrowRight'/>
              </button>
            </div>
            <div className='col-md-6 dailyImageMargin'>
              < img src={image2} alt='image2'/>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Home;