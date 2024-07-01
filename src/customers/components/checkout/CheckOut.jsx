import React from 'react'
import {useLocation} from 'react-router-dom'
import CheckOutStepsNav from './CheckOutStepsNav'
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';
import { Login } from '@mui/icons-material';
import Address from './Address';

function CheckOut() {
    const location=useLocation()
    const searchParam=new URLSearchParams(location.search);
    const stepNo=searchParam.getAll("steps");
  return (
    <div className="px-10 lg:px-20 py-16">
        <div className=' hidden lg:block'>
        <CheckOutStepsNav/>
        </div>
        {
            stepNo==2 ? (<Address/>) : (<OrderSummary/>)
        }
    </div>
  )
}

export default CheckOut