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
      <span className={`inline-flex px-2 py-1 rounded-md text-xs font-medium ${
        isActive 
          ? 'bg-green-100 text-green-800 border border-green-900' 
          : 'bg-red-100 text-red-800 border border-red-900'
      }`}>
        {status}
      </span>
    );
  };

  const MobileCard = ({ customer }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow-sm w-full flex-1">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">{customer.name}</h3>
          <p className="text-sm text-gray-600">{customer.company}</p>
        </div>
        <StatusBadge status={customer.status} />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</span>
          <span className="text-sm text-gray-900">{customer.phone}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Email</span>
          <span className="text-sm text-gray-900 truncate ml-2">{customer.email}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Country</span>
          <span className="text-sm text-gray-900">{customer.country}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Desktop */}
      <div className="hidden lg:block bg-white rounded-lg shadow-sm overflow-hidden ">
        <div className="overflow-x-hidden">
          <table className="w-full min-w-[700px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer Name
                </th>
                <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Phone Number
                </th>
                <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                  Email
                </th>
                <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Country
                </th>
                <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customers.map((customer, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-3 lg:px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                      <div className="text-sm text-gray-500 md:hidden">{customer.company}</div>
                    </div>
                  </td>
                  <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900 hidden sm:table-cell md:table-cell">
                    {customer.company}
                  </td>
                  <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900 hidden md:table-cell">
                    {customer.phone}
                  </td>
                  <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900 hidden lg:table-cell">
                    {customer.email}
                  </td>
                  <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900 hidden md:table-cell">
                    {customer.country}
                  </td>
                  <td className="px-3 lg:px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={customer.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile amd tablet Card View */}
      <div className="lg:hidden flex-1">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Customers</h2>
          <p className="text-sm text-gray-600">{customers.length} total customers</p>
        </div>
        {customers.map((customer, index) => (
          <MobileCard key={index} customer={customer} />
        ))}
      </div>
    </div>
  );
}; 

export default CustomerTable;