export default function StaticSection() {
	return (
		<div className="w-full shadow-md  m-2 rounded-xl p-2">
			<h2 className="text-3xl font-bold text-gray-800">
				DNS Propagation Checker - How to Check DNS Propagation Globally?
			</h2>
			<p className="text-gray-600">
				Perform a quick DNS propagation lookup for any domain. Our DNS
				Propagation Test tool features a comprehensive list of 100+ global DNS
				servers, which makes global DNS checks more effortless than ever. It is
				designed to collect, parse, and display all the DNS propagation results
				on the map, going beyond text-based propagation reports. It visually
				represents how your DNS changes are propagated across different DNS
				servers in different regions globally. This enhances your understanding
				and makes identifying any regional variations or issues easier. Now
				monitor and manage your DNS records effectively. Here’s how you can use
				our tool for performing a free DNS Propagation Test online:
			</p>
			<br />
			<h2 className="text-3xl font-bold text-gray-800">
				Enter The Domain or Hostname
			</h2>
			<p className="text-gray-600">
				Get started by providing the website domain name for which you want to
				carry out a DNS propagation test.
			</p>
			<br />
			<h2 className="text-3xl font-bold text-gray-800">
				Select DNS Record for Propagation Status Check
			</h2>
			<p className="text-gray-600">
				Select the DNS record whose propagation status you would like to check.
				Click on the drop-down menu right next to the search bar and choose any
				of the following records:
			</p>
			<ul className="list-disc ml-6">
				<li><span className="font-bold"> A record: </span>contains the IPv4 address info of the hostname.</li>

				<li><span className="font-bold">AAAA record: </span>contains the IPv6 address info of the hostname.</li>

				<li>
				<span className="font-bold">	CNAME record: </span> also known as alias record. It points the sub-domain to
					its domain, like pointing www.dnschecker.org to dnschecker.org. Get
					comprehensive insights about the domain’s CNAME records with CNAME
					record lookup.
				</li>

				<li>
				<span className="font-bold">	MX record:</span> contains the info where the domain's email should be routed
					to and mail servers priority. Lookup MX record for more info about the
					domain’s MX records.
				</li>

				<li>
				<span className="font-bold">	NS record: </span> contains information about the authoritative nameservers of
					a domain. NS Checker will provide you with all the name servers
					associated with a domain.
				</li>

				<li>
				<span className="fonr-bold">	PTR record: </span>used in reverse IP lookup to map an IP address to a domain
					name, allowing the identification of the host associated with a
					particular IP address.
				</li>

				<li>
					<span className="font bold">SRV record:</span> specifies the location and configuration of a particular
					service, such as email or voice over IP (VoIP), allowing clients to
					discover and connect to the appropriate server.
				</li>

				<li>
			<span className="font-bold">		SOA record:</span> the start of authority is responsible for holding and
					specifying information about the DNS zone.
				</li>

				<li>
					<span className="font bold">TXT record:</span> is commonly used for other DNS records configurations like
					SPF, DKIM, or DMARC records.
				</li>

				<li>
					<span className="font-bold"> </span> used to assist in SSL validation by highlighting which
					authorities can issue certificates for a domain.
				</li>

				<li>
					<span className="font-bold">CAA record: </span> acts as a delegation signer, maintaining a chain of trust
					between the parent zone and child zone. Use the DS record Lookup tool
					to dig deeper.
				</li>

				<li>
					<span className="font-bold">DNSKEY record:  </span> contains the public signing keys like Zone Signing Key
					(ZSK) and Key Signing Key (KSK). Check the DNSKEY record for more
					info.
				</li>
			</ul>
			<br />
			<h2 className="text-3xl font-bold text-gray-800">Perform Quick DNS Propagation</h2>
			<p className="text-gray-600">
				Once everything is set, click “Search” to run our DNS propagation check
				tool. It will take a moment to display the results, highlighting all
				server locations with their respective propagation statuses.
				<br />
				Here are a few things to keep in mind while checking DNS propagation
				status:
			</p>
			<br />
			<ul className="list-disc ml-6">
				<li>✔️ indicates that the DNS records have been propagated.</li>
				<li>❌ shows that the DNS records haven’t been propagated.</li>
			</ul>
			<br />
			<p className="text-gray-600">
				More clearly - the green tick shows that the requested DNS record is
				available in the DNS server, and the cross shows that it is not. The
				green tick may also mean that the DNS record matches the updated value
				that the user has set in the expected value field. In contrast, the
				cross may denote that the value does not match the expected or updated
				value (the user expects it to be).
			</p>
			<br />
			<h1 className="text-3xl font-bold text-gray-800">How to Add a Custom DNS Server?</h1>
			<br />
			<p className="text-gray-600">
				If you want to add a DNS Server, do it easily with our tool. Simply
				click on the “+” button and enter the following information:
			</p>
			
			<ul className="list-disc ml-6">
				<li>DNS Name</li>
				<li>DNS IP</li>
				<li>DNS Provider</li>
				<li>DNS Map Latitude</li>
				<li>DNS Map Longitude</li>
			</ul>
			<br />
			<p>
				The DNS Name and DNS IP address are compulsory to specify, or else it
				will not work.
				<br />
				Our tool will also allow you to add the custom DNS server to the public
				DNS list as required.
			</p>
			<br />
			<h1 className="text-3xl font-bold text-gray-800">How to Add Expected Value of IP Address?</h1>
			<br />
			<p className="text-gray-600">
				If your IP Address has been changed now, then leverage the smart
				controls to specify the expected value of the new IP address by
				highlighting its “regular expressions,” “containing numbers,” or “exact
				match number.”
			</p>
			<br />
			<h1 className="text-3xl font-bold text-gray-800">Here's What Else You Can Do…</h1>
			<br />
			<p className="text-gray-600">
				If required, you can go to the “DNS Lists” section to leverage our
				tool’s smart search capabilities. It will enable you to check the DNS
				propagation status of your website with respect to a specifi
			</p>
			<br />
			<ul className="list-disc ml-6">
				<li>IP Address</li>
				<li>Continet</li>
				<li>Country</li>
			</ul>
			<br />
			<p className="text-gray-600">
				Simply click on the respective IP address type, continent name, or
				country name (server location). Our DNS status checker will reload,
				allowing you to enter the hostname or IP and validate its propagation
				status accordingly.
				<br />
				Let’s say you would like to check the DNS propagation status of a
				website in Asia (continent). Click on it and then proceed as guided
				earlier. It will show you whether the given hostname DNS has been
				propagated in the Asia continent or not. The same goes for IPv4, IPv6,
				and all countries worldwide.
			</p>
			<br />
			<h1 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h1>

			<p className="text-gray-600">Here’s the insider scope you need to know all about DNS!</p>
			<br />
			<h1 className="text-3xl font-bold text-gray-800">What is Domain Name System?</h1>

			<p className="text-gray-600">
				Domain Name System (DNS) is a hierarchical decentralized system that
				maps domain names to IP addresses. It is the internet's equivalent of a
				phone book, mapping human-readable domain names to IP addresses.
			</p>
			<br />
			<h1 className="text-3xl font-bold text-gray-800">What is DNS resolution?</h1>
			<p className="text-gray-600">
				DNS resolution translates the domain name into its server IP address.
				You need a site's IP address to know where it’s on the Internet.
				<br />
				The four DNS Servers work together (in a chain) to convert a domain name
				to its IP address, enabling the requested web resource to load on the
				user screen.
				<br />
				Here is how the DNS resolution process works:
			</p>
			<ul className="list-disc ml-6">
				<li>
					Recursive DNS server (DNS resolver): These servers are the first in
					the DNS check process. Receive DNS queries from clients and resolve
					the human-readable domain name to an IP address. That server tracks
					the IP address for the searched domain or hostname.
				</li>
				<br />
				<li>
					Root DNS servers: These servers are at the top of the DNS hierarchy
					and provide a list of top-level domain (TLD) servers to resolvers.
				</li>
				<br />
				<li>
					TLD Name Servers: These servers return the authoritative name servers
					for each domain. These are responsible for handling the requests for
					specific top-level domains like .com, org, etc. The .com TLD name
					servers will return results for abc.com but not abc.org.
				</li>
				<br />
				<li>
					Authoritative DNS servers: These servers are the last stop in the DNS
					resolution process. The authoritative nameservers for the searched
					domain hold the actual DNS records and respond to queries with the
					correct IP addresses.
				</li>
				<br />
			</ul>
			<br />
			<h1 className="text-3xl font-bold text-gray-800">How does the DNS process work?</h1>
			<br />
			<p className="text-gray-600">
				Suppose you request to open the URL https://xyz.com in your web
				browser's bar. Here’s how it works:
			</p>
			<br />
			<ol className="list-disc ml-6">
				<li>
					Your browser sends a DNS query to a DNS resolver (recursive Server),
					usually provided by your Internet Service Provider (ISP).
				</li>
			
				<li>
					The recursive resolver checks its cache to see if it already has the
					requested DNS information for the domain name. If it does, it returns
					to your computer, and the process ends.
				</li>
			
				<li>
					If the recursive resolver doesn't have the DNS information in its
					cache, it sends a query to the root DNS servers. These servers
					maintain a database of all the top-level domain names, such as .com,
					.org, .net, etc
				</li>
		
				<li>
					The recursive resolver then contacts the root DNS servers that respond
					to the query with the IP of appropriate TLD (Top-Level Domain) DNS
					servers.
				</li>
			
				<li>
					The TLD DNS servers respond to the query by referring to the
					authoritative DNS servers for the domain name. These servers are
					responsible for maintaining the DNS records for the domain.
				</li>
		
				<li>
					The authoritative DNS servers respond to the query with the requested
					DNS records for the domain name.
				</li>
		
				<li>
					The DNS resolver caches the updated/latest fetched DNS records and
					returns them to your computer, which can now be used for whatever
					purpose those records were requested.
				</li>
				
			</ol>
			<h1 className="text-3xl font-bold text-gray-800">What is DNS propagation?</h1>
			<p className="text-gray-600">
				DNS propagation is the time DNS changes take to be updated across the
				internet over the globe. It can take up to 48 hours to propagate
				worldwide. Use our Global DNS Propagation Checker for free to get a
				quick report on your DNS propagation status.
			</p>
			<br />
			<h1 className="text-3xl font-bold text-gray-800">How do DNS records propagate?</h1>
			<p className="text-gray-600">
				When you update your DNS records, the changes may take up to 48 hours.
				During this period, ISPs worldwide update their DNS cache with new DNS
				information for your domain.
				<br />
				However, DNS records may take some time to propagate due to different
				DNS cache levels. Thus, some visitors might be directed to the old
				server’s IP until the DNS propagation process finishes worldwide.
				However, most visitors see updated DNS records shortly after they
				change. You can look up A, AAAA, CNAME, and additional DNS records
				lookup from our DNS lookup tool
			</p>
			<br />
			<h1 className="text-3xl font-bold text-gray-800">Why DNS propagation takes time?</h1>
			<p className="text-gray-600">
				Suppose you changed your domain's nameservers and requested to open your
				domain on the web browser. Your request will not go to the hosting
				directly. Each ISP node first checks its DNS cache, whether it has the
				DNS information for that domain. If it is not there, it will look it up
				by fetching DNS information from the authoritative DNS server of the
				domain to serve the user’s request. It also saves that info for future
				use to speed up the DNS lookup process. Thus, the new nameservers will
				not propagate instantly. ISPs have different cache refreshing levels
				resulting in some still having the old DNS information in their cache.
			</p>

			<br />
			<h1 className="text-3xl font-bold text-gray-800">What will happen if the domain name does not exist?</h1>
			<p className="text-gray-600">
				The DNS server will return a name error, also known as an NXDomain
				response (for a non-existent domain), to symbolize that the query's
				domain name does not exist
			</p>
			<br />

			<h1 className="text-3xl font-bold text-gray-800">What is the port used by DNS?</h1>
			<p className="text-gray-600">
				DNS uses both TCP and UDP port 53. However, the most frequently used
				port for DNS is UDP 53. That is used when the client's computer
				communicates with the DNS server to resolve the domain name. When using
				the UDP 53 for DNS, the maximum size of the query packet is 512 bytes.
				<br />
				TCP 53 is used primarily for Zone Transfers and when the query packet
				exceeds 512 bytes. That is true when DNSSEC is used, which adds extra
				overhead to the DNS query packet. You can test all the server ports
				using a port scanner online.
			</p>
			<br />
			<h1 className="text-3xl font-bold text-gray-800">What is DNS failure?</h1>
			<p className="text-gray-600">
				DNS failure means that the DNS server cannot convert the domain name
				into an IP address in a TCP/IP network. That failure may occur within
				the company's private network or the internet.
			</p>
			<br />
			<h1 className="text-3xl font-bold text-gray-800">Which are the best DNS servers?</h1>
			<p className="text-gray-600">Some of the best Global DNS servers are as follows:</p>
		</div>
	);
}
