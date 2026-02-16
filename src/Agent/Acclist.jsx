import React, { useContext } from 'react'
import { Dashboards } from '../Auth/ComDashBoard'

const Acclist = () => {
  const { agents } = useContext(Dashboards)

  return (
    <div className="max-w-3xl mx-auto p-4">
    {agents.map((agent)=>{
      return  <div
            key={agent.Userunqid}
            className="p-4 mb-3 border rounded-lg shadow-sm bg-white"
          >
            <p><strong>Agent Name:</strong> {agent.Agentname}</p>
            <p><strong>Agent Code:</strong> {agent.Agentcode}</p>
            <p><strong>Total Collection:</strong> ₹ {agent.Collamt}</p>
            <p><strong>No. of Receipts:</strong> {agent.Noofrcpts}</p>
          </div>
    })}
    </div>
  )
}

export default Acclist
