import React from 'react'

const VehiclePannel = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => { props.setVehiclePannelOpen(!props.vehiclePannelOpen) }}>
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
            <div onClick={() => { props.setConfimRidePannel(true) }} className='flex w-full border-2 mb-2 active:border-black bg-gray-100 rounded-xl  items-center justify-between p-5'>
                <img className='h-15' src="https://imgs.search.brave.com/wtpH-N99a8_OkMZ2p-swZAHAYVRzIqz00GPla9gMrYk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/OTE0LzczMy9zbWFs/bC93aGl0ZS1jaXR5/LWNhci1pc29sYXRl/ZC1vbi10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kLTNkLXJlbmRl/cmluZy1pbGx1c3Ry/YXRpb24tZnJlZS1w/bmcucG5n" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>₹193.20</h2>
            </div>
            <div onClick={() => { props.setConfimRidePannel(true) }} className='flex w-full border-2 mb-2 active:border-black bg-gray-100 rounded-xl  items-center justify-between p-5'>
                <img className='h-10' src="https://imgs.search.brave.com/NPnjha4FsZZJeVCH6RoCCnI1wZvuo0TXrKkAjP-nASo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dWJlci1hc3NldHMu/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8s/cV9hdXRvOmVjbyxj/X2ZpbGwsaF8zNjgs/d181NTIvdjE2NDky/MzEwOTEvYXNzZXRz/LzJjLzdmYTE5NC1j/OTU0LTQ5YjItOWM2/ZC1hM2I4NjAxMzcw/ZjUvb3JpZ2luYWwv/VWJlcl9Nb3RvX09y/YW5nZV8zMTJ4MjA4/X3BpeGVsc19Nb2Jp/bGUucG5n" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>₹193.20</h2>
            </div>
            <div onClick={() => { props.setConfimRidePannel(true) }} className='flex w-full border-2 mb-2 active:border-black bg-gray-100 rounded-xl  items-center justify-between p-5'>
                <img className='h-15' src="https://imgs.search.brave.com/nf8BaJ2DzS-3XVL3_VQzPJo-Z0UYemmBssGvlLIkyEg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dWJlci1hc3NldHMu/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8s/cV9hdXRvOmVjbyxj/X2ZpbGwsaF8zNjgs/d181NTIvdjE2NDg0/MzE3NzMvYXNzZXRz/LzFkL2RiOGM1Ni0w/MjA0LTRjZTQtODFj/ZS01NmExMWEwN2Zl/OTgvb3JpZ2luYWwv/VWJlcl9BdXRvXzU1/OHgzNzJfcGl4ZWxz/X0Rlc2t0b3AucG5n" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Auto <span><i className="ri-user-3-fill"></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>₹193.20</h2>
            </div>
        </div>
    )
}

export default VehiclePannel