import React from 'react'

function OrderSummaryAddressCard({address}) {
  return (
    <div className="  rounded-sm space-y-2 py-6 bg-white px-4 mx-3">
    <h2 className=' font-bold text-xl opacity-90 text-[#1876D1]'>Shipping Address:</h2>

      <div>
        <h2 className=" font-bold opacity-90 text-[#1876D1]">{address?.firstName +" "+ address?.lastName}</h2>
      </div>

      <div>
        <p className=" opacity-50">
          {address?.city}, {address?.streetAddress}
        </p>
        <p className=" opacity-50">{address?.state}  ({address?.zipCode})</p>
      </div>

      <div>
        <h2 className=" font-semibold opacity-70">Phone Number</h2>
        <h3 className=" font-bold opacity-70">+91{address?.mobile}</h3>
      </div>
    </div>
  )
}

export default OrderSummaryAddressCard