import React from 'react'

const Table = () => {
  return (
    <>
    <div className='w-full'><h1 className='text-2xl font-bold mb-4 mt-3 text-center font-mono'>Journal Summarizer UTM JAYA</h1></div>
    <table className="min-w-1/2 font-mono mx-auto mt-3 table-auto border-collapse overflow-hidden rounded-md shadow border border-gray-200">
        <thead className="bg-green-200">
            <tr className="border-b">
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">No.</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">Title</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">Author</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">Published Year</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">Sinta</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">Summary</th>
            </tr>
        </thead>
        <tbody>
            <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-300 transition">
                <td className="px-6 py-4 text-sm text-gray-700">1</td>
                <td className="px-6 py-4 text-sm text-gray-700">Sample Journal Entry</td>
                <td className="px-6 py-4 text-sm text-gray-700">John Doe</td>
                <td className="px-6 py-4 text-sm text-gray-700">2024</td>
                <td className="px-6 py-4 text-sm text-gray-700">Sinta 2</td>
                <td className="px-6 py-4 text-sm text-gray-700">This is a brief summary of the journal entry.</td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-00 transition">
                <td className="px-6 py-4 text-sm text-gray-700">2</td>
                <td className="px-6 py-4 text-sm text-gray-700">Another Journal Entry</td>
                <td className="px-6 py-4 text-sm text-gray-700">Jane Smith</td>
                <td className="px-6 py-4 text-sm text-gray-700">2024</td>
                <td className="px-6 py-4 text-sm text-gray-700">Sinta 3</td>
                <td className="px-6 py-4 text-sm text-gray-700">This is a brief summary of the journal entry.</td>
            </tr>
        </tbody>
    </table>
    </>
  )
}

export default Table