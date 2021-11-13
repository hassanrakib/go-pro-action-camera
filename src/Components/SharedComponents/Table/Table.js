import React from 'react';

const Table = ({image, name, color, id, cell3, handleButton}) => {

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={image} alt="" />
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{name}</div>
                        <div className="text-sm text-gray-500">{color}</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{id}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {cell3}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                <button onClick={() => handleButton(id)} className="text-indigo-600 hover:text-indigo-900 underline border-0">
                    Confirm
                </button>
            </td>
        </tr>
    );
};

export default Table;