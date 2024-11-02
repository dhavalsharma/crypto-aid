import scaffoldConfig from "~~/scaffold.config";
import { ContractName, contracts } from "~~/utils/scaffold-eth/contract";

export function getContractNames() {
  console.log("contracts", contracts);
  const contractsData = contracts?.[scaffoldConfig.targetNetwork.id]?.[0]?.contracts;
  console.log("contractsData", contractsData);
  return contractsData ? (Object.keys(contractsData) as ContractName[]) : [];
}
