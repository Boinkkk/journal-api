import React from 'react'
import useFetch from '../hooks/journal.js';

const Table = () => {
    const { data, loading, error } = useFetch('http://localhost:3000/api/journals');

    if (loading) return <p className="text-center mt-5 font-mono">Loading...</p>;
    if (error) return <p className="text-center mt-5 font-mono">Error: {error.message}</p>;

  return (
    <>
    <div className='w-full'><h1 className='text-2xl font-bold mb-4 mt-3 text-center font-mono'>Journal Summarizer UTM JAYA</h1></div>
    <table className="min-w-1/2 max-w-3/4 font-mono mx-auto mt-3 table-auto border-collapse overflow-hidden rounded-md shadow border border-gray-200">
        <thead className="bg-green-200">
            <tr className="border-b">
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">No.</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">Title</th> 
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">Author</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">Published Year</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">Sinta</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">Summary</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">Url</th>

            </tr>
        </thead>
        <tbody>
            {data && data.map((journal, index) => (
                <tr key={journal.id} className="odd:bg-white even:bg-gray-100 hover:bg-gray-300 transition">
                    <td className="px-6 py-4 text-sm text-gray-700">{index + 1}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{journal.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{journal.authors}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{journal.publication_year}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{journal.sinta_level}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{journal.summary_text}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{journal.pdf_url}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}

export default Table