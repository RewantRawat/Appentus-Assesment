import React from "react";

const AddCustomDnsModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData(e.currentTarget)
    const data = Object.fromEntries(formdata.entries())
    // console.log("jgdfg",data);
    
    if (onSubmit) onSubmit(data);

  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
  
      <div className="w-full max-w-3xl rounded-xl bg-white shadow-2xl">
      
        <div className="flex items-center justify-between border-b px-8 py-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Add Your Custom DNS
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-2xl leading-none text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="px-8 py-6">
          {/* DNS Name */}
          <div className="mb-4">
            <label className="mb-1 block text-sm font-semibold text-gray-800">
              DNS Name <span className="text-red-500">*</span>
            </label>
            <input
              name="dnsName"
              defaultValue="Mountain View CA, United States"
              className="h-11 w-full rounded border border-gray-300 bg-gray-100 px-3 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* DNS IP */}
            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-800">
                DNS IP <span className="text-red-500">*</span>
              </label>
              <input
                name="dnsIp"
                defaultValue="8.8.8.8"
                className="h-11 w-full rounded border border-gray-300 bg-gray-100 px-3 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>

            {/* DNS Provider */}
            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-800">
                DNS Provider
              </label>
              <input
                name="dnsProvider"
                defaultValue="Sprint"
                className="h-11 w-full rounded border border-gray-300 bg-gray-100 px-3 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>

            {/* DNS Map Latitude */}
            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-800">
                DNS Map Latitude
              </label>
              <input
                name="dnsLat"
                defaultValue="37"
                className="h-11 w-full rounded border border-gray-300 bg-gray-100 px-3 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>

            {/* DNS Map Longitude */}
            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-800">
                DNS Map Longitude
              </label>
              <input
                name="dnsLng"
                defaultValue="-122"
                className="h-11 w-full rounded border border-gray-300 bg-gray-100 px-3 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>
          </div>

          {/* Note */}
          <p className="mt-3 text-xs italic text-red-500">
            * Should not be empty
          </p>

          {/* Checkbox */}
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-800">
            <input
              id="publicDns"
              name="publicDns"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-400"
            />
            <label htmlFor="publicDns">
              Add this DNS server to public DNS List
            </label>
          </div>

          {/* Footer buttons */}
          <div className="mt-8 flex items-center justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded bg-gray-200 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300"
            >
              Close
            </button>
            <button
              type="submit"
              className="rounded bg-green-600 px-6 py-2 text-sm font-medium text-white hover:bg-green-700"
            >
              Yes, Add this DNS
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomDnsModal;
