
const Skeleton = () => {
  return (
    <>
     <div className="w-full p-10 flex justify-center flex-col">
    <p className="h-4 bg-gray-200 w-[80%] rounded-full" ></p>
<ul className="mt-5 space-y-3">
  <li className="w-full h-4 bg-gray-200 rounded-full"></li>
  <li className="w-full h-4 bg-gray-200 rounded-full"></li>
  <li className="w-full h-4 bg-gray-200 rounded-full"></li>
  <li className="w-full h-4 bg-gray-200 rounded-full"></li>
</ul>
    </div></>
  )
}

export default Skeleton