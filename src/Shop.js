import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from "./state/index"

const Shop = () => {

  const balance = useSelector(state => state.amount)
  const dispatch = useDispatch()
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch)
  return (
    <div className='container text-center mt-5'>
      <h2>Deposit/Withdraw Money</h2>
      <button style={{height: "40px", width: "40px"}} className="btn btn-primary mx-2 rounded" onClick={()=>{withdrawMoney(100)}}>-</button>
      Update Balance ({balance})
      <button style={{height: "40px", width: "40px"}} className="btn btn-primary mx-2 rounded" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop