import React, { useEffect, useState } from "react";
import Modal from "./Modal";

function PortalDemo() {
  const [model, createModal] = useState(false);
  const CloseModal = () => createModal(false);
  const OpenModal = () => createModal(true);
  return (
    <div>
      <Modal />
    </div>
  );
}

export default PortalDemo;
