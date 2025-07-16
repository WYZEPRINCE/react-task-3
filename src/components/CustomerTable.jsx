import React from "react";



const CustomerTable = () => {
  const customers = [
    {
      name: "Jane Cooper",
      company: "Microsoft",
      phone: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "Active"
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive"
    },
    {
      name: "Ronald Richards",
      company: "Adobe",
      phone: "(302) 555-0107",
      email: "ronald@adobe.com",
      country: "Israel",
      status: "Inactive"
    },
    {
      name: "Marvin McKinney",
      company: "Tesla",
      phone: "(252) 555-0126",
      email: "marvin@tesla.com",
      country: "Iran",
      status: "Active"
    },
    {
      name: "Jerome Bell",
      company: "Google",
      phone: "(629) 555-0129",
      email: "jerome@google.com",
      country: "Réunion",
      status: "Active"
    },
    {
      name: "Kathryn Murphy",
      company: "Microsoft",
      phone: "(406) 555-0120",
      email: "kathryn@microsoft.com",
      country: "Curaçao",
      status: "Active"
    },
    {
      name: "Jacob Jones",
      company: "Yahoo",
      phone: "(208) 555-0112",
      email: "jacob@yahoo.com",
      country: "Brazil",
      status: "Active"
    },
    {
      name: "Kristin Watson",
      company: "Facebook",
      phone: "(704) 555-0127",
      email: "kristin@facebook.com",
      country: "Åland Islands",
      status: "Inactive"
    }
  ];

  const StatusBadge = ({ status }) => {
    const isActive = status === "Active";
    return (
      <span className={`px-2 py-1 rounded-sm  text-xs font-medium ${
        isActive 
          ? 'bg-green-100 text-green-800 border-1 border-green-800' 
          : 'bg-red-100 text-red-800 border-1 border-red-800'
      }`}>
        {status}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-400  tracking-wider">
                Customer Name
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-400  tracking-wider">
                Company
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-400  tracking-wider">
                Phone Number
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-400  tracking-wider">
                Email
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-400  tracking-wider">
                Country
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-400  tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {customers.map((customer, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                  {customer.name}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm font-medium  text-gray-700">
                  {customer.company}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                  {customer.phone}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                  {customer.email}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                  {customer.country}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                  <StatusBadge status={customer.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}; 

export default CustomerTable;