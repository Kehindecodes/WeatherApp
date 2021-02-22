import React, { useContext } from 'react';
import WeatherContext from '../context/weatherContext';
import { Row, Card, Col } from 'react-bootstrap';

function FiveDayInfo() {
  const weatherContext = useContext(WeatherContext);
  const { forecasts } = weatherContext;
  const { list } = forecasts;

  return (
    <>
    <div className='five_day'>
      <Row>
        {
           list 
           ? list.map((info, index) => (
               <Col key={index}>
                 <Card style={{ width: '120px', height: '177px' }}>
                   <Card.Body className='text-center'>
                     <div className=''>
         
                     </div>
                     <div className='mb-3'>
                       <img
                         src={`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}
                         alt='icon'
                         className='m-auto'
                       />
                     </div>
                     <div className='temp'>
                       <p className='d-inline mr-2'>
                         {Math.round(info.main.temp_max)} <span>&#8451;</span>
                       </p>
                       <p className='d-inline' style={{ color: '#a09fb1' }}>
                         {Math.round(info.main.temp_min)} <span>&#8451;</span>
                       </p>
                     </div>
                   </Card.Body>
                 </Card>
               </Col>
             ))
          : ''}
      </Row>
    </div>
    </>
  );
}

export default FiveDayInfo;
