import { useParams } from "react-router-dom";
import Layout from "./Layout/Layout";

const ContractDetail = () => {
  const params = useParams();

  return (
    <>
      <Layout></Layout>
      <div>ContractDetail</div>
      <div>{params.contractID}</div>
    </>
  );
};

export default ContractDetail;
