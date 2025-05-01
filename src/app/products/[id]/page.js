



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
<div>
      <h1>{data.name}</h1>
      <img src={data.image} alt={data.name} />
      <p>Status: {data.status}</p>
      <p>Species: {data.species}</p>
    </div>
  )
}

export default Page