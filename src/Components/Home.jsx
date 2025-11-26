import React, { useState } from "react";
import { FaSlidersH, FaPlus, FaInfoCircle } from "react-icons/fa";
import { useServers } from "../Context/ServerContext";
import AddCustomDnsModal from "../Pages/AddCustomDnsModal ";

const Home = () => {
const{servers} = useServers()
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="dns-page">

        <section className="dns-left-panel">
          <h2 className="dns-left-title">DNS CHECK</h2>


          <div className="dns-options-row">
            <button className="dns-option-btn">
              <FaSlidersH />
            </button>
            <button
              className="dns-option-btn dns-option-btn-blue"
              onClick={() => setShowModal(true)}  
            >
              <FaPlus />
            </button>

         
          </div>
        </section>

    
      </div>

      <AddCustomDnsModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default Home;
