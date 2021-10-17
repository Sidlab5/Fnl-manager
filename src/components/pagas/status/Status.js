import React, {useState} from 'react';
import { Row,Col} from 'antd';
import { connect } from 'react-redux';
import "./status.css"


const Status = () => {

   
    return (
         
            <div className="operationactivated">

                    <p><span className="span">Total seats: </span> 5</p>   
                    <p><span className="span">Avaliable seats:</span> 3</p>               
                    <p><span className="span">Borrowed seats:</span> 1</p>               
                

                <div className="table">
               

                <Col className="tHeader">
               
                <Row className="tHeaderCell numcell"></Row>
                <Row className="tHeaderCell">MAC Address</Row>
                <Row className="tHeaderCell">Computer Name</Row>
                <Row className="tHeaderCell">IP Address</Row>
                <Row className="tHeaderCell">active/ borrowed</Row>
                <Row className="tHeaderCell">borrow date</Row>
                <Row className="tHeaderCell">number of days</Row>
                <Row className="tHeaderCell">last seen</Row>

                </Col>

                <Col className="tRow">
                <Row className="tRowCell numcell">1</Row>
                <Row className="tRowCell"> 00-D0-56-F2-B5-12 or 00-26-DD-14-C4-EE</Row>
                <Row className="tRowCell">LAPTOP-8R17ET3M</Row>
                <Row className="tRowCell">129.144.50.56.</Row>
                <Row className="tRowCell">borrowed</Row>
                <Row className="tRowCell"> 23/10/2021</Row>
                <Row className="tRowCell">25 days</Row>
                <Row className="tRowCell">last seen</Row>
               

                </Col>
                <Col className="tRow">
                <Row className="tRowCell numcell"> 2</Row>
               <Row className="tRowCell"> 00-D0-56-F2-B5-12 or 00-26-DD-14-C4-EE</Row>
               <Row className="tRowCell">LAPTOP-8R17ET3M</Row>
               <Row className="tRowCell">129.144.50.56.</Row>
               <Row className="tRowCell">borrowed</Row>
               <Row className="tRowCell"> 23/10/2021</Row>
               <Row className="tRowCell">25 days</Row>
               <Row className="tRowCell">last seen</Row>
              

               </Col>
             
               
            
              
               
              

                </div>
   
              
          </div>
            
            
       
       
    )
}
function mapStateToProps({LicenseManager}) {
    
    return {
        user:LicenseManager.userData,
        ActivatedLicenses:LicenseManager.userData?(LicenseManager.userData.licenses.
            filter((License)=>License.id===LicenseManager.activeLicenseid))[0]:null
    }
}


export default connect(mapStateToProps)(Status);