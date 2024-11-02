import { useState } from "react";
import { parseEther } from "viem";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

interface CampaignFormProps {
  onClose: () => void;
  isOpen: boolean;
}

export const CampaignForm = ({ onClose, isOpen }: CampaignFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goal: "",
    durationInDays: 30,
    category: "HEALTH",
    shortUrl: "",
  });

  const { writeAsync: createCampaign, isLoading } = useScaffoldContractWrite({
    contractName: "FundRaiser",
    functionName: "createCampaign",
    args: [
      formData.title,
      formData.description,
      parseEther(formData.goal),
      BigInt(formData.durationInDays),
      ["HEALTH", "EDUCATION", "FINANCE"].indexOf(formData.category),
      formData.shortUrl,
    ],
    onSuccess: () => {
      onClose();
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await createCampaign({
        args: [
          formData.title,
          formData.description,
          parseEther(formData.goal),
          BigInt(formData.durationInDays),
          ["HEALTH", "EDUCATION", "FINANCE"].indexOf(formData.category),
          formData.shortUrl,
        ],
      });
    } catch (error) {
      console.error("Error creating campaign:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-base-100 p-6 rounded-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Create New Campaign</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Campaign Title</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={e => setFormData({ ...formData, title: e.target.value })}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              value={formData.description}
              onChange={e => setFormData({ ...formData, description: e.target.value })}
              className="textarea textarea-bordered w-full h-24"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text">Goal (ETH)</span>
              </label>
              <input
                type="number"
                step="0.01"
                value={formData.goal}
                onChange={e => setFormData({ ...formData, goal: e.target.value })}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Duration (Days)</span>
              </label>
              <input
                type="number"
                value={formData.durationInDays}
                onChange={e => setFormData({ ...formData, durationInDays: parseInt(e.target.value) })}
                className="input input-bordered w-full"
                required
                min="1"
              />
            </div>
          </div>

          <div>
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              value={formData.category}
              onChange={e => setFormData({ ...formData, category: e.target.value })}
              className="select select-bordered w-full"
              required
            >
              <option value="HEALTH">Health</option>
              <option value="EDUCATION">Education</option>
              <option value="FINANCE">Finance</option>
            </select>
          </div>

          <div>
            <label className="label">
              <span className="label-text">Short URL</span>
            </label>
            <input
              type="text"
              value={formData.shortUrl}
              onChange={e => setFormData({ ...formData, shortUrl: e.target.value })}
              className="input input-bordered w-full"
              required
              pattern="[a-zA-Z0-9-]+"
              placeholder="my-campaign"
            />
            <span className="text-xs text-secondary mt-1">Only letters, numbers, and hyphens allowed</span>
          </div>

          <div className="flex gap-2 justify-end mt-6">
            <button type="button" onClick={onClose} className="btn">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Campaign"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
