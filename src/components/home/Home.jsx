import React from 'react'
import './home.css'
import 'animate.css'
import App from '../../App'

const Home = () => {
    return (
        <div className="global-container">
            <div className="h-container">
        <div className="home-header">
            <div className="menu">
                <span>Features</span>
                <span>Pricing</span>
                <span>Advertise</span>
                <span>Company</span>
                <span>Learn</span>

            </div>

            {/* <div className="button">
                <span>Login</span>
                <span>Start Free Trial</span>
            </div> */}
        </div>
        <div>
            <p className="title"> Organize youre life <br/> anytime , anywhe<span style={{color:'black'}}>re</span></p>
        </div>


        <div className="animate__pulse animate__animated main-button">
              <p>
              <a href={'/todo'}>Start Free Trial</a>   
              </p>  
        </div>
    </div>
    <div className="container-3d">
    
        {/* <img className="obj1" src={require("./img/img_1.png")}/>
        <img className="obj2" src={require("./img/img.png")}/> */}
         <div className='todo container' >
              <img className='closeIcon' src={require('./../../img/icons8-close-50.png')}/>
              <p className='todoname'>essential</p>
              <p className='tododesc'>monday-22-jun</p>
              <ui>
                  <li>job1</li>
                  <li>job2</li>
                  <li>job3</li>
                  <li>job4</li>
              </ui>
              <hr/>
              <p className='addnewtext' >+ ADD NEW ITEM</p>
              </div>
    </div>
</div>
    )
}

export default Home
