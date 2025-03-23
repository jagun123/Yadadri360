

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

import image1 from '../src/images/imag1.jpg'
import image2 from '../src/images/imag3.png'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Gallery', href: '#' },
  { name: 'Location', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <div 
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${image1})` }} 
    >
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="Logo" src={image2} className="h-36 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-gray-500"
            >
              Contact Us
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50" />
          <DialogPanel 
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-700 px-6 py-6 sm:max-w-sm bg-cover bg-center"
            style={{ backgroundImage: `url(${image1.src})` }}
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img alt="Logo" src={image2} className="h-44 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="block px-3 py-2 text-base font-semibold text-white hover:bg-gray-50">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="py-6">
              <a href="#" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-gray-500">
                Contact Us
              </a>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Find Your Dream Property in Yadadri
          </h1>
          <p className="mt-8 text-lg font-medium text-white sm:text-xl">
            Your trusted partner in real estate investment and property solutions
          </p>
        </div>
      </div>
      
    </div>
  
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="relative p-6 md:p-16">
    
    <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
      <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
        <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">
         Our Services
        </h2>
        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">We provide all your real-estate needs, including property brokerage and investment. Whether you're looking for open plots, agricultural lands, buildings, or houses, we ensure fair pricing in Yadadri.</span>
        <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist" aria-orientation="vertical">
          <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 active" id="tabs-with-card-item-1" aria-selected="true" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
            <span className="flex gap-x-6">
              <svg className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>
              <span className="grow">
                <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">Property Brokerage</span>
                <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">We help you buy and sell properties with expert guidance.</span>
              </span>
            </span>
          </button>

          <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="tabs-with-card-item-2" aria-selected="false" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
            <span className="flex gap-x-6">
              <svg className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
              <span className="grow">
                <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">Property Investment</span>
                <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">Invest in real estate with the best market insights and deals.</span>
              </span>
            </span>
          </button>

          <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="tabs-with-card-item-3" aria-selected="false" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
            <span className="flex gap-x-6">
              <svg className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
              <span className="grow">
                <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">Open Plots & Lands </span>
                <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">Find the best open plots and agricultural lands at fair prices.</span>
              </span>
            </span>
          </button>
        </nav>
       
      </div>
     

      <div className="lg:col-span-6">
        <div className="relative">
       
          <div>
            <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
              <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80" alt="Features Image"/>
            </div>

            <div id="tabs-with-card-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
              <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80" alt="Features Image"/>
            </div>

            <div id="tabs-with-card-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
              <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80" alt="Features Image"/>
            </div>
          </div>
         
          <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
            <svg className="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
              <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
              <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
            </svg>
          </div>
          
        </div>
      </div>
     
    </div>
   
    <div className="absolute inset-0 grid grid-cols-12 size-full">
      <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800"></div>
    </div>
   
  </div>
</div>

<div className="bg-neutral-900">
  
  <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
    
    <div className="max-w-3xl mb-10 lg:mb-14">
      <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Location Advantages</h2>
      <p className="mt-1 text-neutral-400">             Yadadri is a rapidly developing residential neighborhood in Hyderabad, also known as the "2nd Tirupati." With excellent connectivity to major hospitals and shopping malls just 10-15 minutes away, it is only a 20-minute drive from the Outer Ring Road. Yadadri attracts daily floating pilgrims from all corners of the state, making it a prime location for investment and quality living.</p>
    </div>
   
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
      <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
        <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Features Image"/>
      </div>
     
      <div>
       
        <div className="mb-4">
          <h3 className="text-[#ff0] text-xs font-medium uppercase">
            Steps
          </h3>
        </div>
        

        <div className="flex gap-x-5 ms-1">
         
          <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
            <div className="relative z-10 size-8 flex justify-center items-center">
              <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-3xl uppercase rounded-full">
              📍
              </span>
            </div>
          </div>
          
          <div className="grow pt-0.5 pb-8 sm:pb-12">
            <p className="text-sm lg:text-base text-neutral-400">
              <span className="text-white">Prime Location in Yadadri </span>
             </p>
          </div>
         
        </div>
       
        <div className="flex gap-x-5 ms-1">
      
          <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
            <div className="relative z-10 size-8 flex justify-center items-center">
              <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-3xl uppercase rounded-full">
              🏥
              </span>
            </div>
          </div>
     
          <div className="grow pt-0.5 pb-8 sm:pb-12">
            <p className="text-sm lg:text-base text-neutral-400">
              <span className="text-white">10-15 Min to Hospitals & Malls</span>
             </p>
          </div>
          
        </div>
       
        <div className="flex gap-x-5 ms-1">
          
          <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
            <div className="relative z-10 size-8 flex justify-center items-center">
              <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-3xl uppercase rounded-full">
              🚗
              </span>
            </div>
          </div>
         
          <div className="grow pt-0.5 pb-8 sm:pb-12">
            <p className="text-sm md:text-base text-neutral-400">
              <span className="text-white">20 Min from Outer Ring Road</span>
         
            </p>
          </div>
         
        </div>

       
        <div className="flex gap-x-5 ms-1">
          
          <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
            <div className="relative z-10 size-8 flex justify-center items-center">
              <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-3xl uppercase rounded-full">
              🏡
              </span>
            </div>
          </div>
   
          <div className="grow pt-0.5 pb-8 sm:pb-12">
            <p className="text-sm md:text-base text-neutral-400">
              <span className="text-white">Excellent Living Conditions</span>
      
            </p>
          </div>
         
        </div>
        <div className="flex gap-x-5 ms-1">
          
          <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
            <div className="relative z-10 size-8 flex justify-center items-center">
              <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-3xl uppercase rounded-full">
              🚶‍♂️
              </span>
            </div>
          </div>
   
          <div className="grow pt-0.5 pb-8 sm:pb-12">
            <p className="text-sm md:text-base text-neutral-400">
              <span className="text-white">Daily Floating Pilgrims  </span>
      
            </p>
          </div>
         
        </div>
        

        <a className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-hidden" href="#">
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"></path><path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
          Schedule a call
        </a>
      </div>
    </div>
    
  </div>
</div>
<section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            What our <span class="text-blue-500 ">clients</span> say
        </h1>

        {/* <p class="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error
            alias, adipisci rem similique, at omnis eligendi optio eos harum.
        </p> */}

        <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            <div class="p-8 border rounded-lg dark:border-gray-700">
                <p class="leading-loose text-gray-500 dark:text-gray-400">
                    “The team was amazing! They helped me find the perfect plot at a great price.”
                </p>

                <div class="flex items-center mt-8 -mx-2">
                    {/* <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/> */}

                    <div class="mx-2">
                        <h1 class="font-semibold text-gray-800 dark:text-white">Rahul </h1>
                        {/* <span class="text-sm text-gray-500">CTO, Robert Consultency</span> */}
                    </div>
                </div>
            </div>

            <div class="p-8 border rounded-lg dark:border-gray-700">
                <p class="leading-loose text-gray-500 dark:text-gray-400">
                    “Highly professional service. The entire process was smooth and transparent.”.
                </p>

                <div class="flex items-center mt-8 -mx-2">
                    {/* <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/> */}

                    <div class="mx-2">
                        <h1 class="font-semibold text-gray-800 dark:text-white">Priya</h1>
                        {/* <span class="text-sm text-gray-500">CEO, Jeny Consultency</span> */}
                    </div>
                </div>
            </div>

            <div class="p-8 border rounded-lg dark:border-gray-700">
                <p class="leading-loose text-gray-500 dark:text-gray-400">
                    “Great investment opportunities in Yadadri. I highly recommend them!”.
                </p>

                <div class="flex items-center mt-8 -mx-2">
                    {/* <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/> */}

                    <div class="mx-2">
                        <h1 class="font-semibold text-gray-800 dark:text-white">Vikram </h1>
                        {/* <span class="text-sm text-gray-500">Marketing Manager at Stech</span> */}
                    </div>
                </div>
            </div>
        </section>
    </div>
</section>

<div className="bg-neutral-900">
  <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
  
    <div className="max-w-3xl mb-10 lg:mb-14">
      <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Contact us</h2>
      <p className="mt-1 text-neutral-400">Whatever your goal - we will get you there.</p>
    </div>
   
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
      <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
        <form>
          <div className="space-y-4">
            
            <div className="relative">
              <input type="text" id="hs-tac-input-name" className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              not-placeholder-shown:pt-6
              not-placeholder-shown:pb-2
              autofill:pt-6
              autofill:pb-2" placeholder="Name"/>
              <label form="hs-tac-input-name" className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-not-placeholder-shown:text-xs
                peer-not-placeholder-shown:-translate-y-1.5
                peer-not-placeholder-shown:text-neutral-400">Name</label>
            </div>
           
            <div className="relative">
              <input type="email" id="hs-tac-input-email" className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              not-placeholder-shown:pt-6
              not-placeholder-shown:pb-2
              autofill:pt-6
              autofill:pb-2" placeholder="Email"/>
              <label form="hs-tac-input-email" className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-not-placeholder-shown:text-xs
                peer-not-placeholder-shown:-translate-y-1.5
                peer-not-placeholder-shown:text-neutral-400">Email</label>
            </div>
           
            <div className="relative">
              <input type="text" id="hs-tac-input-company" className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              not-placeholder-shown:pt-6
              not-placeholder-shown:pb-2
              autofill:pt-6
              autofill:pb-2" placeholder="Company"/>
              <label form="hs-tac-input-company" className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-not-placeholder-shown:text-xs
                peer-not-placeholder-shown:-translate-y-1.5
                peer-not-placeholder-shown:text-neutral-400">Company</label>
            </div>
            
            <div className="relative">
              <input type="text" id="hs-tac-input-phone" className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              not-placeholder-shown:pt-6
              not-placeholder-shown:pb-2
              autofill:pt-6
              autofill:pb-2" placeholder="Phone"/>
              <label form="hs-tac-input-phone" className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-not-placeholder-shown:text-xs
                peer-not-placeholder-shown:-translate-y-1.5
                peer-not-placeholder-shown:text-neutral-400">Phone</label>
            </div>
            

            <div className="relative">
              <textarea id="hs-tac-message" className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              not-placeholder-shown:pt-6
              not-placeholder-shown:pb-2
              autofill:pt-6
              autofill:pb-2" placeholder="This is a textarea placeholder" data-hs-textarea-auto-height></textarea>
              <label form="hs-tac-message" className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-not-placeholder-shown:text-xs
                peer-not-placeholder-shown:-translate-y-1.5
                peer-not-placeholder-shown:text-neutral-400">Tell us about your project</label>
            </div>
            
          </div>

          <div className="mt-2">
            <p className="text-xs text-neutral-500">
              All fields are required
            </p>

            <p className="mt-5">
              <a className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-hidden" href="#">
                Submit
                <svg className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </p>
          </div>
        </form>
      </div>
      

      <div className="space-y-14">
        
        <div className="flex gap-x-5">
          <svg className="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <div className="grow">
            <h4 className="text-white font-semibold">Our address:</h4>

            <address className="mt-1 text-neutral-400 text-sm not-italic">
            Yadadri Bhuvanagiri, Yadagiripally, Yadagirigutta, Near, Main Road, <br></br>
            Hyderabad, Telangana 508115
            </address>
          </div>
        </div>
       
        <div className="flex gap-x-5">
          <svg className="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
          <div className="grow">
            <h4 className="text-white font-semibold">Email us:</h4>

            <a className="mt-1 text-neutral-400 text-sm hover:text-neutral-200 focus:outline-hidden focus:text-neutral-200" href="#mailto:example@site.co" target="_blank">
             yadadri.360@gmail.com
            </a>
          </div>
        </div>
        <div className="flex gap-x-5">
          <svg className="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
          <div className="grow">
            <h4 className="text-white font-semibold">Contact us:</h4>

            <a className="mt-1 text-neutral-400 text-sm hover:text-neutral-200 focus:outline-hidden focus:text-neutral-200" href="#mailto:example@site.co" target="_blank">
             9052362639
            </a>
          </div>
        </div>
      
       
        
      </div>
      
    </div>
  
  </div>
</div>



<footer className="bg-white text-black py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-semibold">Yadadri 360</h2>
          <p className="mt-4 text-gray-400">
            Helping you find the perfect property at the right price. Your trusted real estate partner in Yadadri.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="mt-4 space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-indigo-400">Home</a></li>
            <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
            <li><a href="#" className="hover:text-indigo-400">Gallery</a></li>
            <li><a href="#" className="hover:text-indigo-400">Location</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <ul className="mt-4 space-y-3 text-gray-400">
            <li className="flex items-center gap-2"><MapPin className="w-5 h-5 text-indigo-400" /> Yadadri, Hyderabad</li>
            <li className="flex items-center gap-2"><Phone className="w-5 h-5 text-indigo-400" /> +91 9052362639</li>
            <li className="flex items-center gap-2"><Mail className="w-5 h-5 text-indigo-400" /> contact@realestate.com</li>
          </ul>
        </div>

      </div>

      {/* Social Media & Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-indigo-400"><Facebook size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-indigo-400"><Twitter size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-indigo-400"><Instagram size={24} /></a>
        </div>
        <p className="mt-4 text-gray-500">© {new Date().getFullYear()} Yadadri. All rights reserved.</p>
      </div>
    </footer>

    </>
  )
}

