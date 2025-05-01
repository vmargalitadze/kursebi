



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
    <main className="mt-5 text-white" >
    <div className="container d-flex align-items-center flex-column justify-content-center min-vh-100">
      <div className="row">
        <div className="col-md-5">
            <img
              src={data.image}
              alt={data.name}
             
            />
        
        </div>
        <div className="col-md-7">
          <div className="text-center">
            <h1>{gameData?.name}</h1>
            <h3> {gameData?.creator} </h3>
            <h3> Price:{gameData?.price}$ </h3>
            <hr />
            <h3> {gameData?.description} </h3>
          </div>
          <div className='d-flex align-items-center'>
            { user && (

            <button onClick={handleAddToCart} type="button" className="btn btn-success">add to cart </button>
            ) }
          { user && user.isAdmin && (

            <button onClick={deleteGame}  type="button" className="btn btn-success mx-3"> delete  </button>
          )}
          </div>
        </div>
      </div>
    </div>
 
  </main>
  )
}

export default Page