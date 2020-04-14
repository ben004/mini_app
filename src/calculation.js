import React, { Component } from 'react'

export default class calculation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          riskvalue: '',
          emi : '',
          status : ''
        }
      }
    findRisk(){
        let income=document.getElementById('salary').value
        let dept=document.getElementById('dept').value
        let cost=document.getElementById('property').value
        let time=document.getElementById('year').value
        let rent=document.getElementById('rent').value
        let risk=(cost)/(income-dept)
        let interest;
        interest= 8 / (12*100)
        time=time * 12;
        let emi,status = [];
        emi=(cost * interest * Math.pow(1 + interest, time)) / (Math.pow(1 + interest, time) - 1);
        emi=Math.round(emi)
        if((rent-emi)>0 ) 
            status.push('profit') 
        else
            status.push('loss')
        this.setState({
            riskvalue : risk,
            emi : emi,
            status : status
        })  
    
    }
    render() {
        return (
            <div>
                <b><h2>Please enter the following details to find property risk</h2><br/>(including your <b>EMI</b> amont and profit or loss Status)</b><br/><br/><br/>
                Anual income : <input type="text" id='salary' required/><br/><br/>
                Anual Dept : <input type="text" id='dept'/><br/><br/>
                Property cost : <input type="text" id='property' required/><br/><br/>
                Property Rent : <input type="text" id='rent'/><br/><br/>
                Times to pay loan: <input type="text" id='year'/>(in months)<br/><br/>
                <button onClick={(e)=>this.findRisk(e) } >CalculateRisk</button><br/>
                <h2>Result of your data:</h2><br/><br/>
                <br/><b>{"Property Risk out of ten is "+this.state.riskvalue+" %"}</b><br/><br/>
                your monthly emi is <b>{this.state.emi}</b><br/><br/>
                And you got <b>{this.state.status}</b> for buying this property
            </div>
        )
    }
}
  