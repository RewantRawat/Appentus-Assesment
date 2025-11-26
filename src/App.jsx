import { useState } from "react";
import { FaSlidersH, FaPlus, FaInfoCircle } from "react-icons/fa";
import { InfoIcon, SearchIcon, WebIcon } from "./Components/Icons";
import StaticSection from "./Components/StaticSection";
import AddCustomDnsModal from "./Pages/AddCustomDnsModal ";
import mapSrc from "./assets/map.png";

const CountryList = [
	{
		name: "San Francisco CA, United States",
		image: "https://dnschecker.org/themes/common/images/flags/svg/us.svg",
		dnslocation: "Pacific Internet",
		dnsip: "61.8.0.113",
	},
	{
		name: "San Francisco CA, United States",
		image: "https://dnschecker.org/themes/common/images/flags/svg/za.svg",
		dnslocation: "Pacific Internet",
		dnsip: "61.8.0.113",
	},
	{
		name: "San Francisco CA, United States",
		image: "https://dnschecker.org/themes/common/images/flags/svg/us.svg",
		dnslocation: "Pacific Internet",
		dnsip: "61.8.0.113",
	},
	{
		name: "San Francisco CA, United States",
		image: "https://dnschecker.org/themes/common/images/flags/svg/in.svg",
		dnslocation: "Pacific Internet",
		dnsip: "61.8.0.113",
	},
	{
		name: "San Francisco CA, United States",
		image: "https://dnschecker.org/themes/common/images/flags/svg/in.svg",
		dnslocation: "Pacific Internet",
		dnsip: "61.8.0.113",
	},
];

const Lists = {
	ips: ["Public IPv4", "Public IPv6"],
	continents: [
		"Asia",
		"North America",
		"South America",
		"Europe",
		"Antractica",
		"Australia",
		"Africa",
	],

	countries: [
		"United states",
		"Canada",
		"Russia",
		"Germany",
		"Denmark",
		"India",
		"Japan",
		"Malaysia",
		"China",
		"Singapore",
		"Mexico",
		"Brazil",
		"Austria",
		"Portugal",
	],
};

function App() {
	const [showModal, setShowModal] = useState(false);
	const [showSearch, setShowSearch] = useState(false);
	const [lists, setLists] = useState(CountryList);
  const[search,setSearch]=useState("")

	return (
		<>
			<div className="grid grid-cols-6 gap-4  p-2">
				<section className="col-span-2 p-5 shadow-md bg-white rounded-xl">
					<h2 className="text-2xl text-blue-700">DNS CHECK</h2>
					<div className="w-full">
						<form className="flex justify-between gap-2">
							<input
								className="w-full p-2 rounded-md inset-shadow-sm inset-shadow-gray-500 bg-gray-300"
								type="text"
								placeholder="example.com"
							/>
							<select className="h-10 w-20 border rounded-md">
								<option>A</option>
								<option>A</option> <option>A</option> <option>A</option>{" "}
								<option>A</option>
							</select>
							<button className="flex h-10 w-20 bg-[#3099cf] rounded-sm text-white p-1 justify-center items-center">
								<SearchIcon className="w-10 h-10" />
								Search
							</button>
						</form>
						<div>
							<button
								onClick={() => setShowSearch(!showSearch)}
								className={
									showSearch
										? "bg-[#3099cf] p-1 m-1 rounded-sm "
										: "bg-blue-400 p-1 m-1 rounded-sm"
								}
							>
								<FaSlidersH className="text-white" />
							</button>
							<button
								className="bg-gray-400 p-1 m-1 rounded-sm"
								onClick={() => setShowModal(true)}
							>
								<FaPlus />
							</button>
							<AddCustomDnsModal
								onSubmit={(value) => {
									console.log("gfgf", value);
									setLists((prev) => {
										return [
											...prev,
											{
												name: value.dnsName,
												image:
													"https://dnschecker.org/themes/common/images/flags/svg/in.svg",
												dnslocation: "Pacific Internet",
												dnsip: value.dnsIp,
											},
										];
									});
								}}
								isOpen={showModal}
								onClose={() => setShowModal(!showModal)}
							/>
							{showSearch && (
								<form className="bg-gray-200 p-4 rounded-xl shadow-inner space-y-3">
									<div className="flex items-center gap-6 text-gray-700 text-sm font-medium">
										<span>Expected Value:</span>

										<label className="flex items-center gap-1 cursor-pointer">
											<input
												type="radio"
												name="type"
												className="accent-gray-600"
											/>
											<span>RegExp</span>
										</label>

										<label className="flex items-center gap-1 cursor-pointer">
											<input
												type="radio"
												name="type"
												className="accent-gray-600"
											/>
											<span>Contains</span>
										</label>

										<label className="flex items-center gap-1 cursor-pointer">
											<input
												type="radio"
												name="type"
												className="accent-gray-600 h-2"
											/>
											<span>Exact Match</span>
										</label>
									</div>

									<input
										type="text"
										placeholder="1.2.3.4"
										className="w-full p-3 h-8 rounded-lg bg-gray-100 text-gray-700 shadow-inner border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
									/>
								</form>
							)}
						</div>
					</div>
					<ul className="w-full space-y-3">
						{lists.map((c) => {
							return (
								<li
									key={c.id}
									className="w-full hover:bg-gray-200 flex items-center justify-between py-3 border-b border-gray-200"
								>
									<div className="flex flex-col">
										<div className="flex items-center gap-2">
											<img src={c.image} className="w-6 h-6 rounded" />
											<span className="font-medium text-sm">{c.name}</span>
										</div>

										<div className="flex items-center gap-1 text-gray-500 text-xs mt-1">
											<small>{c.dnslocation}</small>
											<InfoIcon className="w-3 h-3" />
										</div>
									</div>
								</li>
							);
						})}

						<button
							type="button"
							onClick={() => setShowModal(!showModal)}
							className=" w-full  bg-[#3099cf] text-white font-medium  flex items-center justify-center gap-2 py-3 rounded-md shadow-sm"
						>
							<span className="text-xl leading-none">+</span>
							<span className="tracking-wide text-sm">
								ADD A CUSTOM DNS SERVER
							</span>
						</button>
					</ul>
				</section>
				<section className="col-span-4 p-1 m-1">
					<div className="max-w-4xl mx-auto mt-6 space-y-3">
						<h2 className="text-3xl font-bold text-gray-800 tracking-wide">
							CHECK DNS PROPAGATION
						</h2>

						<p className="text-gray-600">
							Whether you have recently changed your DNS records, switched web
							host, or started a new website – checking whether the DNS records
							are propagated globally is essential. DNS Checker provides a free
							DNS propagation check service to check Domain Name System records
							against a selected list of DNS servers in multiple regions
							worldwide. Perform a quick DNS propagation lookup for any hostname
							or domain, and check DNS data collected from all available DNS
							Servers to confirm that the DNS records are fully propagated.
						</p>
					</div>

					<div className="w-full shadow-md mt-2 rounded-xl p-2">
						<h2 className="text-2xl font-bold text-gray-800 tracking-wide">
							DNS Propagation Map by DNSChecker.org
						</h2>
            <img src={mapSrc}/>
					</div>
					<div className="min-h-100 w-full shadow-md mt-2 rounded-xl">
						<form className="flex p-2 w-full justify-between">
							<h2 className="text-2xl font-bold">DNS LISTS</h2>
							<div>
                <input
                onChange={(e)=>setSearch(e.currentTarget.value)}
								type="text"
								className = "bg-gray-200 h-10 w-40 border-2 rounded-md p-1"
							/>
							<button type="submit" className="w-12 p-2 border-2 rounded-md" >
								<SearchIcon />
							</button>
              </div>
						</form>
						<div>
							<span className="bg-blue-400 text-white py-1 px-3 rounded-r-md ">
								IPs
							</span>
							<ul className="flex gap-4">
								{Lists.ips.map((l, index) => {
									return (
										<li key={index}>
											<WebIcon className="inline" />
											<span className="inline">{l}</span>
										</li>
									);
								})}
							</ul>
						</div>
						<div className="mt-5">
							<span className="bg-blue-400 text-white py-1 px-3 rounded-r-md">
								Continents
							</span>
							<ul className="flex gap-4">
								{Lists.continents.filter((v)=>{
                  if (v.includes(search)) {
                    return true;
                  }
                  
                  return false;
                }).map((l, index) => {
									return <li key={index}>🌍{l}</li>;
								})}
							</ul>
						</div>
						<div className="mt-5">
							<span className="bg-blue-400 text-white py-1 px-3 rounded-r-md">
								Countries
							</span>
							<ul className="flex gap-4">
								{Lists.countries.filter((v) => {
                  if (v.includes(search)) {
                    return true;
                  }
                  
                  return false;
                }).map((l, index) => {
									return <li key={index}>{l}</li>;
								})}
							</ul>
						</div>
					</div>
				</section>
			</div>
			<StaticSection />
		</>
	);
}

export default App;
