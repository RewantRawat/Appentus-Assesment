import React from "react";

const sections = [
  {
    title: "DNS CHECK TOOLS",
    links: [
      "DNS Checker",
      "Complete DNS Health Report",
      "Reverse IP Lookup",
      "DNS Lookup",
      "NS Lookup",
      "MX Lookup",
    ],
  },
  {
    title: "NETWORK TOOLS",
    links: ["Port Checker", "MAC Address Lookup", "ASN WHOIS Lookup"],
  },
  {
    title: "PRODUCTIVITY",
    links: [
      "Binary Translator",
      "Reverse Image Search",
      "CC Checker",
      "Notepad Online",
    ],
  },
  {
    title: "EMAIL TOOLS",
    links: ["SMTP Test", "Trace Email", "SPF Checker"],
  },
  {
    title: "MORE TOOLS",
    links: [
      "QR Code Scanner",
      "Time Card Calculator",
      "Morse Code Translator",
      "Image to Text",
      "Social Media Name Checker",
    ],
  },
  {
    title: "IP TOOLS",
    links: [
      "What is my IP",
      "IP Location Lookup",
      "IP Blacklist Check",
      "IP WHOIS Lookup",
    ],
  },
  {
    title: "DNS SERVER DATABASE",
    links: [
      "Global DNS Providers",
      "Australian DNS Servers",
      "United Kingdom DNS Servers",
      "United States DNS Servers",
    ],
  },
  {
    title: "DEVELOPER TOOLS",
    links: [
      "Password Generator",
      "Check HTTP Headers",
      "Check Website OS",
      "Page rank Checker",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#101821] text-gray-200 px-4 md:px-10 lg:px-16 py-10 border-t border-gray-700">

      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold tracking-widest text-gray-300 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((item) => (
                  <li key={item} className="flex items-start">
                  
                    <span className="mt-1 mr-2 inline-block w-2 h-2 rounded-full bg-[#17a3ff]" />
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-150"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
       
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-gray-300 mb-3">
              APPS AND ADD-ONS
            </h3>
            <div className="flex flex-wrap items-center gap-4">
          
              <button className="flex items-center px-4 py-2 rounded-md bg-black/40 border border-gray-600 text-xs">
                <span className="mr-2 text-lg">▶</span>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase">Get it on</div>
                  <div className="text-xs font-semibold">Google Play</div>
                </div>
              </button>

           
              <button className="flex items-center px-4 py-2 rounded-md bg-black/40 border border-gray-600 text-xs">
                <span className="mr-2 text-lg">🧩</span>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase">Get</div>
                  <div className="text-xs font-semibold">Chrome Extension</div>
                </div>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-start md:justify-end">
            <span className="inline-flex items-center text-2xl font-semibold tracking-wide text-white">
              <span className="mr-2 text-3xl">📍</span>
              <span>
                DNS<span className="text-[#17a3ff]">CHECKER</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
