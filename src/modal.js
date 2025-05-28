import React, { useState } from "react";

function Modal() {
  const [showModal, setShowModal] = useState(false);

  const handleSave = () => {
    alert("Saving...");
    setShowModal(false);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <button className="modal_btn" onClick={() => setShowModal(true)}>
        Open Modal
      </button>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <h3>Add lead</h3>
              <button className="close-btn" onClick={() => setShowModal(false)}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="label_input_div">
                <label>Name</label>
                <input placeholder="Name" />
              </div>
              <div className="label_input_div">
                <label>Mobile</label>
                <input placeholder="Name" />
              </div>
              <div className="label_input_div">
                <label>Email</label>
                <input placeholder="Name" />
              </div>
              <div className="label_input_div">
                <label>Source</label>
                <input placeholder="Name" />
              </div>
              <div className="label_input_div">
                <label>Date</label>
                <input placeholder="Name" />
              </div>
            </div>
            <div className="modal-footer">
              {[
                { label: "Cancel", onClick: () => setShowModal(false) },
                { label: "Save & add new", onClick: handleSave, primary: true },
              ].map((btn, i) => (
                <button
                  key={i}
                  className={btn.primary ? "btn-primary" : "btn-secondary"}
                  onClick={btn.onClick}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
