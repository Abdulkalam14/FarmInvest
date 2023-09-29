import React from 'react'

const ProductTable = (props) => {
  return (
    <div>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity Available (kgs)
                </th>
                <th scope="col" class="px-6 py-3">
                    Price (₹/kg)
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
                
            </tr>
        </thead>
        <tbody>
            {props.harvests.map(harvest => {
                return (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {harvest.crop}
                </th>
                <td class="px-6 py-4">
                    {harvest.quantity}
                </td>
                <td class="px-6 py-4">
                    {harvest.amountPerKg}
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="/select" class="font-medium text-green-500 hover:underline">Buy</a>
                </td>
            </tr>
                )
            })}
            
            
        </tbody>
    </table>
</div>

    </div>
  )
}

export default ProductTable