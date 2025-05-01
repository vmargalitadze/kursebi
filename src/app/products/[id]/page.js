



async function Page({params}) {
    const { id } = await params
 
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await res.json()
  

    // const fetchProducts = async () => {
    //     const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)  
    //     const data = await res.json()
    //     setInfo(data)
    //    }
    
    // useEffect(() => {
    // if (id)  fetchProducts()
    // }, [id])

   
    
  return (
    <>
<div className="mt-16">
  <div className="container">
    <div className="mx-auto flex justify-between flex-col lg:flex-row gap-4 lg:gap-6">
      
   
      <div className="w-full lg:w-[40rem]">
        <div className="w-full">
          <div className="flex flex-col md:grid md:grid-cols-[1fr_auto] gap-2 items-start">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src={data.image}
                alt={data.name}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:max-w-[42%]">
        <div className="pb-4 sm:pb-6 ">
          <h2 className=" pb-4 text-2xl leading-tight tracking-tight text-black">
          სახელი:   {data.name}
          </h2>
        <p className="pb-4 text-2xl leading-tight">სქესი: {data.gender} </p>
        <p className="pb-4 text-2xl leading-tight">რასა: {data.species} </p>
        <p className="pb-4 text-2xl leading-tight">სტატუსი: {data.status} </p>
        <p className="pb-4 text-2xl leading-tight">წარმოშობა: {data.origin.name} </p>
        </div>
      </div>

    </div>
  </div>
</div>

</>
  )
}

export default Page