import React from 'react'

const OtpVerification = () => {
  return (
    <div>
<div class="relative flex min-h-screen flex-col justify-center overflow-hidden py-12 text-white">
  <div class="relative bg-gray-700 px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
    <div class="mx-auto flex w-full max-w-md flex-col space-y-10">
      <div class="flex flex-col items-center justify-center text-center space-y-2">
        <div class="font-semibold text-3xl">
          <p>Email Verification</p>
        </div>
        <div class="flex flex-row text-sm font-medium text-gray-400">
          <p>We have sent a code to your email</p>
        </div>
      </div>

      <div>
        <form action="" method="post">
          <div class="flex flex-col space-y-10">
            <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
              <div class="w-12 h-12 ">
                <input class="font-bold w-full h-full flex  items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-lg bg-gray-500 focus:bg-gray-900 focus:ring-1 " type="text" name="" id="" maxLength={1}/>
              </div>
              <div class="w-12 h-12 ">
                <input class="font-bold w-full h-full flex  items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-lg bg-gray-500 focus:bg-gray-900 focus:ring-1 " type="text" name="" id="" maxLength={1}/>
              </div>
              <div class="w-12 h-12 ">
                <input class="font-bold w-full h-full flex  items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-lg bg-gray-500 focus:bg-gray-900 focus:ring-1 " type="text" name="" id="" maxLength={1}/>
              </div>
              <div class="w-12 h-12">
                <input class="font-bold w-full h-full flex  items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-lg bg-gray-500 focus:bg-gray-900 focus:ring-1 " type="text" name="" id="" maxLength={1}/>
              </div>
              <div class="w-12 h-12 ">
                <input class="font-bold w-full h-full flex  items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-lg bg-gray-500 focus:bg-gray-900 focus:ring-1 " type="text" name="" id="" maxLength={1}/>
              </div>
              <div class="w-12 h-12 ">
                <input class="font-bold w-full h-full flex  items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-lg bg-gray-500 focus:bg-gray-900 focus:ring-1 " type="text" name="" id="" maxLength={1}/>
              </div>
            </div>

            <div class="flex flex-col space-y-5">
              <div>
                <button class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-green-500 border-none text-white shadow-sm">
                  Verify Account
                </button>
              </div>

              <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                <p>Didn't recieve code?</p> <a class="flex flex-row items-center text-green-500" href="" target="_blank" rel="noopener noreferrer">Resend</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default OtpVerification