import React, { useContext, useEffect, useState } from 'react'
import { useAxios } from '../hook/useAxios'
import { Context } from '../Context/Context'

function Main() {
  const [allData, setAllData] = useState([])
  const { savedProds, setSavedprods, dispatch, ACTIONS } = useContext(Context)
  const axiosInstance = useAxios()

  useEffect(() => {
    async function renderData() {
      try {
        const response = await axiosInstance.get('/products')
        setAllData(response.data)
      } catch (error) {
        console.log('Error fetching data:', error)
      }
    }

    renderData()
  }, [axiosInstance])

  return (
    <div className="py-6 px-[120px]">
      <div className="w-full mx-auto flex flex-wrap items-center gap-3 p-3">
        {allData.length > 0 &&
          allData.slice(1, 49).map((product) => (
            <div
              className="w-[300px] text-center mx-auto mt-[10px] shadow-2xl rounded-lg"
              key={product.id}
            >
              <div className="overflow-hidden">
                <img
                  className="mx-auto rounded-md mb-[8px] hover:scale-110 "
                  src={product.images[0]}
                  alt="images"
                  width={350}
                  height={250}
                />
              </div>
              <h2 className="text-center"> {product.title} </h2>
              <h3 className="rounded-full  pt-[14px] pb-[12px] pl-[26px] pr-[26px] mt-[20px]">
                {' '}
                Price : {product.price} ${' '}
              </h3>
              <button
                onClick={() =>
                  dispatch({ type: ACTIONS.ADD_PRODUCT, payload: product.id })
                }
                className="bg-[#703BF7] pt-[12px] pb-[12px] pl-[21px] pr-[21px] rounded-2xl text-white mb-[20px] font-semibold"
              >
                {' '}
                Save Card{' '}
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Main
