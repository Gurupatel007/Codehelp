import React from 'react'

function FilterTask({ setFilter }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <div className="max-w-md mx-auto mt-8">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskName">
              Search Task
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              type="text" 
              id="taskName" 
              name="taskName"
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default FilterTask