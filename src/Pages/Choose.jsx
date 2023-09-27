import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Choose = () => {
    const cost = 1000
    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(count*cost)
    const notify = () => toast.success("Added to cart!", {
        theme: "colored"
      }) 
  return (
    <div>
        <div class="py-[25px] px-4 mx-auto max-w-screen-xl text-gray-50 h-screen">
    <div class="container mx-auto px-4">
        <h1 class="text-2xl font-semibold mb-4">Select Quantity</h1>
        <div class="flex flex-col md:flex-row gap-4">
                <div class="bg-gray-700 rounded-lg shadow-md p-6 mb-4 w-full">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <th class="text-left font-semibold">Product</th>
                                <th class="text-left font-semibold">Price</th>
                                <th class="text-left font-semibold">Quantity (Kgs)</th>
                                <th class="text-left font-semibold">Total (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <span class="font-semibold">Rice</span>
                                    </div>
                                </td>
                                <td class="py-4">{cost}</td>
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <button class="border rounded-md py-2 px-4 mr-2 hover:bg-gray-500" onClick={() => {
					                        const newCount = count-1<1 ? count : count -1;
                                            setCount(newCount)
                                            setPrice(newCount*cost);
                                        }}>-</button>
                                        <span class="text-center w-8">{count}</span>
                                        <button class="border rounded-md py-2 px-4 ml-2 hover:bg-gray-500" onClick={() => {
                                            const newCount = count+1;
                                            setCount(newCount)
                                            setPrice(newCount*cost)
                                        }}>+</button>
                                    </div>
                                </td>
                                <td class="py-4">{price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
        <a>
            <button  onClick={notify} className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-700'>Add to cart</button>     
            <ToastContainer />
        </a>
    </div>
</div>
    </div>
  )
}

export default Choose