import React from 'react'

const BuyingPage = () => {
  const product = "Rice"
  const price = 1000
  const quantity = 5
  const taxes = 100;
  const ship = 250;
  const total = price*quantity
  const final = total + taxes + ship
  return (
    <div>
    <div class="py-[25px] px-4 mx-auto max-w-screen-xl text-gray-50">
    <div class="container mx-auto px-4">
        <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div class="flex flex-col md:flex-row gap-4">
            <div class="md:w-3/4">
                <div class="bg-gray-700 rounded-lg shadow-md p-6 mb-4">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <th class="text-left font-semibold">Product</th>
                                <th class="text-left font-semibold">Price</th>
                                <th class="text-left font-semibold">Quantity (kgs)</th>
                                <th class="text-left font-semibold">Total (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <span class="font-semibold">{product}</span>
                                    </div>
                                </td>
                                <td class="py-4">{price}</td>
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <span class="text-center w-8">{quantity}</span>
                                    </div>
                                </td>
                                <td class="py-4">{total}</td>
                            </tr>
                            {/* <!-- More product rows --> */}
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="md:w-1/4">
                <div class="bg-gray-700 rounded-lg shadow-md p-6">
                    <h2 class="text-lg font-semibold mb-4">Summary</h2>
                    <div class="flex justify-between mb-2">
                        <span>Subtotal (₹)</span>
                        <span>{total}</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span>Taxes</span>
                        <span>{taxes}</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>{ship}</span>
                    </div>
                    <hr class="my-2"/>
                    <div class="flex justify-between mb-2">
                        <span class="font-semibold">Total (₹)</span>
                        <span class="font-semibold">{final}</span>
                    </div>
                    <button class="bg-green-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default BuyingPage