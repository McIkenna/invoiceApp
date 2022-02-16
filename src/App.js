import React, { Component } from 'react'
import { dummy } from './DummData'
import {Table, Button} from 'reactstrap'
import {faImage, faThumbsUp, faThumbsDown, faMoneyCheckAlt, faSearchDollar} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default class App extends Component {
  state = {
    isLoading: false,
    invoices : dummy
  }


removeItem = (id)=> {
  let updatedInvoices = [...this.state.invoices].filter (i => i.id !== id)
  this.setState({invoices : updatedInvoices})
}
  render() {
    const isLoading = this.state.isLoading;
    const allInvoices = this.state.invoices;

    let invoices = allInvoices.map(invoice =>
      <tr key={invoice.id}>
        <td>{invoice.vendor}</td>
        <td>{invoice.amount}</td>
        <td>{invoice.date}</td>
        <td>{invoice.date}</td>
        <td><Button className='btn btn-lg btn-success' onClick={() => this.removeItem(invoice.id)}><FontAwesomeIcon icon={faThumbsUp}/>OK</Button></td>
        <td><Button className='btn btn-lg btn-danger' onClick={() => this.removeItem(invoice.id)}><FontAwesomeIcon icon={faThumbsDown}/>NOT OK</Button></td>
        <td><Button className='btn btn-lg btn-info' onClick={() => this.removeItem(invoice.id)}><FontAwesomeIcon icon={faMoneyCheckAlt}/>50%</Button></td>
        <td><Button className='btn btn-lg btn-warning' onClick={() => this.removeItem(invoice.id)}><FontAwesomeIcon icon={faSearchDollar}/>??</Button></td>
        <td><Button className='btn btn-lg btn-info' onClick={() => this.removeItem(invoice.id)}><FontAwesomeIcon icon={faImage}/></Button>Image</td>
      </tr>)
    if(isLoading){
      return(<div>...isLoading</div>);
    }
    return (
      <div className='constainer border border-primary rounded center'>
       
          <div className='row'>
            <div className='col-12'>
            <h4>The Vendor List</h4>
          </div>
          </div>

          <div className='row'>
            <div className='.col-xs-12 center text-center'>
              <Table dark responsive striped bordered hover>
                <thead>
                  <tr>
                  <th>Vendor</th>
                  <th>Amount</th>
                  <th>Invoice Number</th>
                  <th>Date</th>
                  <th colSpan ='4'>Actions</th>
                  <th>Image</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.invoices.length === 0 ? <td colSpan="9">all caught up!</td> : 
                  invoices}
                </tbody>
              </Table>

            </div>

          </div>
      </div>
    )
  }
}

