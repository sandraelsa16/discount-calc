import { Col,Row } from 'react-bootstrap'
import './App.css'
import { useState } from 'react'
function App() {
   const[amount,setAmount]=useState(0)
   const[discpercent,setDiscpercent]=useState(0)
   const[discamount,setDiscamount]=useState(0)
   const[saved,setSaved]=useState(0)

   const calculate=(e)=>{
    const output = amount*(1-discpercent/100)
    setDiscamount(output)

    const balance = amount - output
    setSaved(balance)
   }

   const reset=(e)=>{
    setAmount('')
    setDiscpercent('')
    setDiscamount(0)
    setSaved(0)
   }

  return (
    
    <>
      <div className="app">
        <div className='container'>
          <h1 className='heading'>Real-time discount calculator</h1>
          <p className='desc'>Use the discount calculator to find out the exact amount you will save!</p>
          <Row className='w-100'>
            <Col>
            <div className='inputarea d-flex flex-column'>
              <label className='fw-bold fs-4'>Amount &#40;&#8377;&#41;</label>
              <input required type="text" placeholder="Enter Amount" className='p-3 inputfield' value={amount||""} onChange={(e)=>setAmount(e.target.value)} />
              <label className='fw-bold mt-5 fs-4'>Discount  &#40;&#37;&#41;</label>
              <input required type="text" placeholder="Enter Discount %" className='p-3 inputfield' value={discpercent||""} onChange={(e)=>setDiscpercent(e.target.value)}  />
             <div className='btnholder d-flex justify-content-evenly mt-3'>
                <button className='btn1' onClick={(e)=>calculate(e)}>Calculate</button>
                <button className='btn1' onClick={(e)=>reset(e)}>Reset</button>
             </div>
              </div>
            </Col>
            <Col>
             <div className="container1 mt-5">
                <h2 className='text-center py-3 head'>Amount Paid</h2>  
                <div className='mt-5 text-center'>
                  <h3>New Price</h3>
                  <p className=' price'>&#8377; {discamount}.00</p>
                  </div> 
                  <div className='d-flex justify-content-evenly mt-5'>
                    <div>
                      <h5 className='fw-semibold'>Amount Saved</h5>
                      <p className='text-center fs-3'>&#8377; {saved}.00</p>
                    </div>
                    <div>
                      <h5 className='fw-semibold'>Price Difference</h5>
                      <p className='text-center fs-3'>&#8377; {saved}.00</p>
                    </div>
                  </div>
             </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default App
