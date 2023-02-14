import React from 'react'

const obj = [
    {
        type:"Saving",
        color:"w-2 h-2 rounded py-3 bg-[#FFC93C]",
        percent:45
    },
    {
        type:"Invesment",
        color:"w-2 h-2 rounded py-3 bg-[#FFC93C]",
        percent:20
    },
    {
        type:"Expense",
        color:"w-2 h-2 rounded py-3 bg-cyan-500",
        percent:10
    }
]

export default function label() {
  return (
    <>
    {obj.map((v,i)=><LabelComponent key={i} data={v}></LabelComponent>)}
    </>
  )
}

function LabelComponent({data}){
    if(!data) return <></>;
    return(
        <div className='labels flex justify-between'>
            <div className='flex gap-2'>
                <div className={data !== ''? data.color :'w-2 h-2 rounded py-3 bg-[#FFC93C]'}></div>
                <h3 className='text-md'>{data.type??''}</h3>
            </div>
            <h3 className='font-bold'>{data.percent??0}%</h3>
        </div>
    )
}
