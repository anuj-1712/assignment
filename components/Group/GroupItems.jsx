import React from 'react'
import Card from '../Card/Card'

export default function GroupItems({data}) {
  return (
    <div className='flex flex-col gap-6 my-8'>
      {data?.map((ticket,index)=>{
        return(
          <React.Fragment key={index}>
            <Card id={ticket.id} title={ticket.title} tags={ticket.tag} userId={ticket.userId} status={ticket.status} level={ticket.priority} />
          </React.Fragment>
        )
      })}
    </div>
  )
}
