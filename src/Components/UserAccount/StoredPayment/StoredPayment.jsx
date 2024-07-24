import React from 'react'

const StoredPayment = () => {
  return (
    <div className="bg-gray-100 w-full h-full flex items-center justify-center">
      <div className="w-[95%] h-full mt-4 ">
        <div className=" flex justify-between">
          <p className="text-[22px] text-blue-900 font-medium mb-8">
            {" "}
            Stored Payment Methods{" "}
          </p>
        </div>
        <div className="bg-yellow-100 p-4 rounded text-gray-800">
        You have no stored payment methods.
        </div>
      </div>
    </div>
  )
}

export default StoredPayment