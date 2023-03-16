import React from 'react'

const Form = () => {
  return (
    <div>
      <div id="form" className='bg-[#000131]'>
        <div className="w-full text-5xl xl:text-6xl text-center py-10 font-semibold text-[#f4cb33] uppercase">
          Register Now
        </div>
        <div className="py-10 flex flex-col justify-center items-center px-8">
          <form>
            <div className="flex flex-col xl:flex-row gap-10 justify-center">
              <div className="shadow sm:overflow-hidden sm:rounded-md mb-4">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-[#f4cb33]">Profile</h3>
                  <p className="mt-1 text-sm text-white mb-4">This information will be displayed publicly so be careful what you share.</p>
                </div>
                <div className="space-y-6 rounded-md bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="teamName" className="block text-sm font-medium text-gray-700">Team Name</label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">#AD</span>
                        <input type="text" name="teamName" id="teamName" required className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Team Name" value=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden shadow sm:rounded-md mb-8"><div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-[#f4cb33]">Team Leader</h3>
                <p className="mt-1 text-sm text-white mb-4">Please fill the correct information for futher communication</p>
              </div>
              <div className="rounded-md bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label htmlFor="teamLeader" className="block text-sm font-medium text-gray-700">Full name</label>
                    <input type="text" name="teamLeader" id="teamLeader" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">+91</span>
                      <input type="text" name="phone" id="phone" required  className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                    </div>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">+91</span>
                      <input type="text" name="whatsapp" id="whatsapp" required  className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                    <input type="email" name="email" id="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                  </div>
                  <div className="col-span-6">
                    <label htmlFor="college" className="block text-sm font-medium text-gray-700">College</label>
                    <input type="text" name="college" id="college" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:block" aria-hidden="true"><div className="py-5">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 items-center gap-10">
          <div className="overflow-hidden shadow sm:rounded-md mb-8">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-[#f4cb33]">Team Member 1</h3>
              <p className="mt-1 text-sm text-white mb-4"></p>
              </div>
            <div className="rounded-md bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label htmlFor="name_1" className="block text-sm font-medium text-gray-700">Full name</label>
                  <input type="text" name="name_1" id="name_1" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="phone_1" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">+91</span>
                    <input type="text" name="phone_1" id="phone_1" className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="whatsapp_1" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">+91</span>
                    <input type="text" name="whatsapp_1" id="whatsapp_1" className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                  </div>
                </div>
                <div className="col-span-6">
                  <label htmlFor="email_1" className="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="email" name="email_1" id="email_1" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                </div>
                <div className="col-span-6">
                  <label htmlFor="college_1" className="block text-sm font-medium text-gray-700">College</label>
                  <input type="text" name="college_1" id="college_1" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden shadow sm:rounded-md mb-8">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-[#f4cb33]">Team Member 2</h3>
              <p className="mt-1 text-sm text-white mb-4"></p>
              </div>
            <div className="rounded-md bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label htmlFor="name_1" className="block text-sm font-medium text-gray-700">Full name</label>
                  <input type="text" name="name_1" id="name_1" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="phone_1" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">+91</span>
                    <input type="text" name="phone_1" id="phone_1" className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="whatsapp_1" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">+91</span>
                    <input type="text" name="whatsapp_1" id="whatsapp_1" className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                  </div>
                </div>
                <div className="col-span-6">
                  <label htmlFor="email_1" className="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="email" name="email_1" id="email_1" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                </div>
                <div className="col-span-6">
                  <label htmlFor="college_1" className="block text-sm font-medium text-gray-700">College</label>
                  <input type="text" name="college_1" id="college_1" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden shadow sm:rounded-md mb-8">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-[#f4cb33]">Team Member 3</h3>
              <p className="mt-1 text-sm text-white mb-4"></p>
              </div>
            <div className="rounded-md bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label htmlFor="name_1" className="block text-sm font-medium text-gray-700">Full name</label>
                  <input type="text" name="name_1" id="name_1" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="phone_1" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">+91</span>
                    <input type="text" name="phone_1" id="phone_1" className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="whatsapp_1" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">+91</span>
                    <input type="text" name="whatsapp_1" id="whatsapp_1" className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                  </div>
                </div>
                <div className="col-span-6">
                  <label htmlFor="email_1" className="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="email" name="email_1" id="email_1" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                </div>
                <div className="col-span-6">
                  <label htmlFor="college_1" className="block text-sm font-medium text-gray-700">College</label>
                  <input type="text" name="college_1" id="college_1" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden shadow sm:rounded-md mb-8">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-[#f4cb33]">Team Member 4</h3>
              <p className="mt-1 text-sm text-white mb-4"></p>
              </div>
            <div className="rounded-md bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label htmlFor="name_1" className="block text-sm font-medium text-gray-700">Full name</label>
                  <input type="text" name="name_1" id="name_1" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="phone_1" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">+91</span>
                    <input type="text" name="phone_1" id="phone_1" className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="whatsapp_1" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">+91</span>
                    <input type="text" name="whatsapp_1" id="whatsapp_1" className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                  </div>
                </div>
                <div className="col-span-6">
                  <label htmlFor="email_1" className="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="email" name="email_1" id="email_1" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                </div>
                <div className="col-span-6">
                  <label htmlFor="college_1" className="block text-sm font-medium text-gray-700">College</label>
                  <input type="text" name="college_1" id="college_1" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="flex flex-col items-center"><button type="submit" className="w-1/2 md:w-1/5 lg:w-[12%] inline-flex justify-center items-center border border-transparent bg-[#f4cb33] py-3 px-6 text-lg font-medium text-black shadow-sm  hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 uppercase">Register</button></div></form></div></div>
    </div>
  )
}

export default Form
