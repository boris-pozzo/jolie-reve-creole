import React, { Component } from 'react';
import glamorous from 'glamorous';

// COMPONENTS
import Slider from '../commons/components/Slider';
import DatePicker from './DatePicker';

const MyDiv = glamorous.div({
  width: '100%',
  height: '60px',
  background: '#FFFFFF',
  fontSize: '13px',
  textTransform: 'uppercase',
  color: '#7f8c8d',
  padding: 0,
  letterSpacing: '0.05em',
})

class Home extends Component {
    render() {
        return (
            <div>
                <MyDiv>
                    Yolo
                </MyDiv>
								<Slider />
								<DatePicker />
            </div>
        );
    }
}

export default Home;