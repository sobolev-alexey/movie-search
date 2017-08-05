import React from 'react'
import Description from './Description'
import Title from './Title'
import SubTitle from './SubTitle'
import { Row, Col } from 'react-bootstrap'

const StarInfo = ({ star }) =>
  <div className="info">
    <Row>
      <Title title={star.name} />
    </Row>
    <Row>
      <Col xs={4} className="starInfo">
        <SubTitle title={star.gender === 1 ? 'Female' : 'Male'} />
      </Col>
      <Col xs={8}>
        <SubTitle title={'Birthday ' + star.birthday} />
      </Col>
    </Row>
    <Row>
      <Description category={'Biography'} description={star.biography} />
    </Row>
  </div>

export default StarInfo
