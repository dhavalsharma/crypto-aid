import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { formatEther, parseUnits } from "viem";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const CampaignPage = () => {
  const router = useRouter();
  const { shortUrl } = router.query;
  const [campaign, setCampaign] = useState(null);
  const [donationAmount, setDonationAmount] = useState("");
  const [identity, setIdentity] = useState("");

  const { data, isLoading, error } = useScaffoldContractRead({
    contractName: "FundRaiser",
    functionName: "getCampaignDetails",
    args: [Array.isArray(shortUrl) ? shortUrl[0] : shortUrl],
  });

  const { writeAsync: donate, isLoading: isDonating } = useScaffoldContractWrite({
    contractName: "FundRaiser",
    functionName: "donate",
    args: [Array.isArray(shortUrl) ? shortUrl[0] : shortUrl, donationAmount],
    onSuccess: () => {
      alert("Donation successful!");
    },
  });

  useEffect(() => {
    if (data) {
      setCampaign(data);
    }
  }, [data]);

  const handleDonate = async () => {
    try {
      await donate({
        args: [Array.isArray(shortUrl) ? shortUrl[0] : shortUrl, identity],
        value: parseUnits(donationAmount, "wei"),
      });
    } catch (error) {
      console.error("Error donating:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!campaign) {
    return <div>No campaign found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Link href="/fundraiser">
        <span className="text-blue-500 mb-4 inline-block">← Back to Campaign Dashboard</span>
      </Link>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{campaign.title}</h1>
        <div className="bg-base-100 rounded-lg p-6 shadow-lg">
          <p className="text-lg mb-6">{campaign.description}</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-bold">Goal</h3>
              <p>{formatEther(campaign.goal)} ETH</p>
            </div>
            <div>
              <h3 className="font-bold">Raised</h3>
              <p>{formatEther(campaign.amountRaised)} ETH</p>
            </div>
            <div>
              <h3 className="font-bold">Category</h3>
              <p>{campaign.category}</p>
            </div>
            <div>
              <h3 className="font-bold">Duration</h3>
              <p>{campaign.durationInDays} days</p>
            </div>
          </div>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Donation Amount (wei)"
              value={donationAmount}
              onChange={e => setDonationAmount(e.target.value)}
              className="input input-bordered w-full mb-4"
            />
            <input
              type="text"
              placeholder="Your Identity (optional)"
              value={identity}
              onChange={e => setIdentity(e.target.value)}
              className="input input-bordered w-full mb-4"
            />
            <button onClick={handleDonate} className="btn btn-primary w-full" disabled={isDonating}>
              {isDonating ? "Donating..." : "Donate"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPage;
