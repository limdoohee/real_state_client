import ReactToPrint from "react-to-print";
import React, { useRef } from "react";
import ContractContents from "./ContractContents";

class ComponentToPrint extends React.Component {
  render() {
    return <ContractContents />;
  }
}

const Contract = () => {
  let componentRef = useRef();

  return (
    <>
      {/* button to trigger printing of target component */}
      <ReactToPrint
        trigger={() => <input type="button" value="인쇄" />}
        content={() => componentRef}
      />

      {/* component to be printed */}
      <div style={{ display: "none" }}>
        <ComponentToPrint ref={(el) => (componentRef = el)} />
      </div>
      <ContractContents />
    </>
  );
};

export default Contract;
