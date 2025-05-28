import React, { useState } from "react";

function Dropdown({ data }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Disposition");

  const handleLeafClick = (topLevelLabel) => {
    setSelectedOption(topLevelLabel);
    setShowDropdown(false);
  };

  const MenuItem = ({ item, label }) => {
    const [showSub, setShowSub] = useState(false);
    const hasSub = item?.children?.length > 0;

    const handleClick = () => {
      if (!hasSub) {
        handleLeafClick(label);
      }
    };

    return (
      <div
        className="menu-item"
        onMouseEnter={() => setShowSub(true)}
        onMouseLeave={() => setShowSub(false)}
      >
        <div className="menu-label" onClick={handleClick}>
          <p>{item.label}</p>
          <p>{hasSub ? "▶" : ""}</p>
        </div>

        {hasSub && showSub && (
          <div className="submenu">
            {item.children.map((child, idx) => (
              <MenuItem key={idx} item={child} label={label} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="menu-container">
      <button
        className="main-button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {selectedOption} <span style={{ marginLeft: "20px" }}>▼</span>
      </button>

      {showDropdown && (
        <div className="dropdown">
          {data.map((item, i) => (
            <MenuItem key={i} item={item} label={item.label} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
