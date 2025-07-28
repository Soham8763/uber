import React, { useState,useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPannel from '../components/LocationSearchPannel'
import VehiclePannel from '../components/VehiclePannel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserDataContext } from '../context/UserContext';

const Home = () => {
    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [pannelOpen, setPannelOpen] = useState(false)
    const [vehiclePannelOpen, setVehiclePannelOpen] = useState(false)
    const [confimRidePannel, setConfimRidePannel] = useState(false)
    const [ vehicleFound, setVehicleFound ] = useState(false)
    const [ waitingForDriver, setWaitingForDriver ] = useState(false)
    const [ pickupSuggestions, setPickupSuggestions ] = useState([])
    const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
    const [ activeField, setActiveField ] = useState(null)
    const [ fare, setFare ] = useState({})
    const [ vehicleType, setVehicleType ] = useState(null)
    const [ ride, setRide ] = useState(null)

    const pannelRef = useRef(null)
    const pannelCloseRef = useRef(null)
    const vehiclePannelRef = useRef(null)
    const confirmRidePannelRef = useRef(null);
    const vehicleFoundRef = useRef(null)
    const waitingForDriverRef = useRef(null)

    const navigate = useNavigate()

    const submitHandler=(e)=>{
        e.preventDefault();
        setPickup('');
        setDestination('');
    }
    useGSAP(()=>{
        if (pannelOpen) {
            gsap.to(pannelRef.current, {
                height: '70%',
                padding: 24
                // opacity:1
            })
            gsap.to(pannelCloseRef.current, {
                opacity: 1
            })
        } else {
            gsap.to(pannelRef.current, {
                height: '0%',
                padding: 0
                // opacity:0
            })
            gsap.to(pannelCloseRef.current, {
                opacity: 0
            })
        }
    }, [ pannelOpen ])
    useGSAP(function () {
        if (vehiclePannelOpen) {
            gsap.to(vehiclePannelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehiclePannelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ vehiclePannelOpen ])
    useGSAP(function () {
        if (confimRidePannel) {
            gsap.to(confirmRidePannelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePannelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ confimRidePannel ])

    useGSAP(function () {
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ vehicleFound ])

    useGSAP(function () {
        if (waitingForDriver) {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ waitingForDriver ])

  return (
    <div className='h-screen relative overflow-hidden'>
        <img className='w-16 absolute left-5 top-5' src="https://imgs.search.brave.com/mqZ2TMeO2R6hJQCG1z0AaA9OxbbmsB5ydQ67hFv0At0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2MTEw/MHViZXItbG9nby1w/bmcucG5n" alt="" />
        <div className='h-screen w-screen'>
            <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
            <div className='h-[30%] p-6 bg-white relative'>
                <h5 ref={pannelCloseRef} onClick={()=>{setPannelOpen(false)}} className='absolute opacity-0 right-6 top-6 text-2xl'><i className="ri-arrow-down-wide-line"></i></h5>
                <h4 className='text-2xl font-semibold'>Find a trip</h4>
                <form onSubmit={(e)=>{
                    submitHandler(e);
                }} action="">
                    <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
                    <input onClick={()=>{setPannelOpen(true)}} value={pickup} onChange={(e)=>{setPickup(e.target.value)}} className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Add a pick-up location'/>
                    <input onClick={()=>{setPannelOpen(true)}} value={destination} onChange={(e)=>{setDestination(e.target.value)}} className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder='Add a destination'/>
                </form>
            </div>
            <div ref={pannelRef} className='h-[0%] bg-white'>
                <LocationSearchPannel pannelOpen={pannelOpen} setPannelOpen={setPannelOpen} vehiclePannel={vehiclePannelOpen} setVehiclePannel={setVehiclePannelOpen}/>
            </div>
        </div>
        <div ref={vehiclePannelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white p-10'>
            <VehiclePannel setConfimRidePannel={setConfimRidePannel} confimRidePannel={confimRidePannel} setVehiclePannelOpen={setVehiclePannelOpen} vehiclePannelOpen={vehiclePannelOpen}/>
        </div>
        <div ref={confirmRidePannelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white p-10'>
            <ConfirmRide createRide={createRide} pickup={pickup} destination={destination} fare={fare} vehicleType={vehicleType} setConfirmRidePanel={setConfimRidePannel} setVehicleFound={setVehicleFound} />
        </div>
        <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
            <LookingForDriver createRide={createRide} pickup={pickup} destination={destination} fare={fare} vehicleType={vehicleType} setVehicleFound={setVehicleFound} />
        </div>
        <div ref={waitingForDriverRef} className='fixed w-full  z-10 bottom-0  bg-white px-3 py-6 pt-12'>
            <WaitingForDriver ride ={ride} setVehicleFound={setVehicleFound} setWaitingForDriver={setWaitingForDriver} waitingForDriver={waitingForDriver} />
        </div>
    </div>
  )
}

export default Home