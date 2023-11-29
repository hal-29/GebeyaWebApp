function CartItem() {
  return (
    <div className="relative max-w-2xl h-48 bg-gray-200 p-3 rounded-xl border shadow-md flex items-strech gap-2">
    <div className="basis-1/4 shrink-0 h-full rounded-lg overflow-hidden">
       <img className="h-full w-full object-cover" src="https://i.pcmag.com/imagery/roundups/07ml3nh3QrzTLZ9UycfQQB2-52..v1696534815.jpg" alt="cart item" />
    </div>

    <div className="flex flex-col justify-evenly">
    <h4 className="text-2xl">Iphone 14 Pro</h4>
    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eos eaque dolores pariatur ullam sint, quasi omnis numquam exercitationem sed?</p>
    <span className="font-bold">$1,099</span>
    </div>
    <span className="absolute z-10 right-2 top-2 px-2 bg-gray-300 rounded-full cursor-pointer">
       <span className="text-lg fa-solid fa-xmark"></span>
    </span>
 </div>
  )
}
export default CartItem