import React, { useState, useEffect, useContext } from 'react';
import {
  Container,
  Row,
  Col,
   ProgressBar,
  Button,
  Card,
  Form
} from 'react-bootstrap';
import WeatherContext from '../context/weatherContext';
import FiveDayInfo from './FiveDayInfo';
import './weatherInfo.css';

function WeatherInfo() {
  const weatherContext = useContext(WeatherContext);
  const {
    weatherInfo,
    currentLocation,
    fiveDayForeCast,
    
  } = weatherContext;
  const { visibility, main, weather,wind } = weatherInfo;
  const [city,setCity] = useState('ibadan')
//  make the search button work
  const [isActive, setActive] = useState('false')
 
  const handleToggle = () => {
    setActive(!isActive)

   
  }

 const onChange  = (e) =>{
    setCity(e.target.value)

 }
 

 const onSubmit = (e) =>{
   e.preventDefault()

  currentLocation(city)
  fiveDayForeCast(city)

setTimeout(() => {
  setActive('false')
  
  console.log('done')
},1500);
   
  
 }

  useEffect(() => {
  currentLocation(city);
   fiveDayForeCast(city);
 
    // eslint-disable-next-line
  }, []);
 
  const options = {
    weekday: 'short',
    // year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  // format date
  const date = new Date(
    weatherInfo.dt * 1000 - weatherInfo.timezone * 1000
  ).toLocaleDateString('en-US', options);

  // icon image
  const iconImg = weather && weather[0].icon;

  return (
    <div>
      <Row>
        <Col md={4} className='side'>
        <div className="search mt-4 pl-5">
              <Button variant="secondary"   onClick={handleToggle}>Search for places</Button>
              </div>
          <Container className='cont'>
         
            <div id='form-layer' className={ !isActive?'active':'close'}>

            <span className="menuBtn" onClick={ handleToggle}>
          <span className="lines"></span>
        </span>
              <Container className='pt-5'>
              <Form inline onSubmit={onSubmit}>
                 <Form.Control type='text' name="text" placeholder="Search Location" className="ml-4"  onChange={onChange}/>
                 <input  type="submit" className="ml-3 btn btn-primary" value="Search"/>
              </Form>
              </Container>
            </div>
           
           
            <div className='icon mb-4'>
              <img
                src={`http://openweathermap.org/img/wn/${iconImg}@2x.png`}
                alt='icon'
              />
            </div>
            <div>
              <h1 className='info text-center mb-4'>
                {main && Math.round(main.temp)}{' '}
                <span className='units'>&#8451;</span>
              </h1>
            </div>
            <div className='mb-5'>
              <p className='description text-center '>
                {weather && weather[0].description}
              </p>
            </div>
            <div className='date text-center mt-4'>
              <p>
                Today <span className='format'>{date}</span>
              </p>
            </div>
            <div className='location text-center'>
              <p>
                <i className='fas fa-map-marker-alt mr-3'></i>
                {weatherInfo && weatherInfo.name}
              </p>
            </div>
          </Container>
        </Col>


          {/* Main */}
        
        <Col md={8} className='main'>
          <Container className='pt-4'>
            <div className='text-right mb-4 mr-5'>
              <Button className='btn-c mr-2'> <span>&#8451;</span></Button>
              <Button className='btn-f' >
                <span>&#8457;</span></Button>
            </div>
          <FiveDayInfo />

            
            <div className='highlight mt-5'>
              <h2 className="mb-4">Today's Highlights</h2>
              <Row>
                <Col md={6} className="mr-4 mb-4">
                   <Card style={{width:'323px',height:'204px'}}>
                     <Card.Body className="text-center">
                     <p>Wind Status</p>
                     <p className="desc">{wind && Math.round(wind.speed)} <span className="unit">mph</span></p>
                     </Card.Body>
                   </Card>
                </Col>
                <Col md={6} className="mb-4">
                <Card style={{width:'323px',height:'204px'}}>
                     <Card.Body className="text-center">
                        <p>Humidity</p>
                        <p className="desc">
                          {main && main.humidity}
                          <span className="percent">&#37;</span>
                        </p>
                        <ProgressBar now={main && main.humidity} style={{width:'185px',height:'8px',margin:'auto'
                      }}/>
                     </Card.Body>
                   </Card>
                </Col>
                <Col md={6} className="mr-4 lastCard">
                <Card style={{width:'323px',height:'159px'}}>
                     <Card.Body className="text-center">
                       <p>Visibility</p>
                       <p className="desc">
                         {weatherInfo && visibility}
                       </p>
                     </Card.Body>
                   </Card>
                </Col>
                <Col md={6} className='lastCard'>
                <Card style={{width:'323px',height:'159px'}}>
                     <Card.Body className="text-center">
                       <p>Pressure</p>
                       <p className="desc">
                       {main && main.pressure} <span className="unit">mb</span>
                       </p>
                        
                     </Card.Body>
                   </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default WeatherInfo;
