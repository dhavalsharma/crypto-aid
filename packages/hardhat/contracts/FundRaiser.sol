// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract FundRaiser is Ownable, ReentrancyGuard {
    enum Category { HEALTH, EDUCATION, FINANCE }
    
    struct Campaign {
        string title;
        string description;
        address creator;
        uint256 goal;
        uint256 deadline;
        uint256 amountRaised;
        bool isActive;
        Category category;
        string shortUrl;
        Donor[] donors;
    }
    
    struct Donor {
        address donorAddress;
        uint256 amount;
        string identity;
        uint256 timestamp;
    }
    
    mapping(string => Campaign) public campaigns;
    string[] public campaignUrls;
    
    event CampaignCreated(
        string shortUrl,
        address creator,
        uint256 goal,
        Category category
    );
    
    event DonationReceived(
        string shortUrl,
        address donor,
        uint256 amount,
        string identity
    );
    
    event CampaignStopped(string shortUrl);
    
    function createCampaign(
        string memory _title,
        string memory _description,
        uint256 _goal,
        uint256 _durationInDays,
        Category _category,
        string memory _shortUrl
    ) external {
        require(bytes(_shortUrl).length > 0, "Invalid short URL");
        require(campaigns[_shortUrl].creator == address(0), "URL already exists");
        require(_goal > 0, "Goal must be greater than 0");
        
        Campaign storage newCampaign = campaigns[_shortUrl];
        newCampaign.title = _title;
        newCampaign.description = _description;
        newCampaign.creator = msg.sender;
        newCampaign.goal = _goal;
        newCampaign.deadline = block.timestamp + (_durationInDays * 1 days);
        newCampaign.isActive = true;
        newCampaign.category = _category;
        newCampaign.shortUrl = _shortUrl;
        
        campaignUrls.push(_shortUrl);
        
        emit CampaignCreated(_shortUrl, msg.sender, _goal, _category);
    }
    
    function donate(string memory _shortUrl, string memory _identity) external payable nonReentrant {
        Campaign storage campaign = campaigns[_shortUrl];
        require(campaign.isActive, "Campaign is not active");
        require(block.timestamp <= campaign.deadline, "Campaign has ended");
        require(msg.value > 0, "Donation must be greater than 0");
        
        campaign.amountRaised += msg.value;
        campaign.donors.push(Donor({
            donorAddress: msg.sender,
            amount: msg.value,
            identity: _identity,
            timestamp: block.timestamp
        }));
        
        emit DonationReceived(_shortUrl, msg.sender, msg.value, _identity);
    }
    
    function stopCampaign(string memory _shortUrl) external {
        Campaign storage campaign = campaigns[_shortUrl];
        require(msg.sender == campaign.creator, "Only creator can stop campaign");
        require(campaign.isActive, "Campaign is already stopped");
        
        campaign.isActive = false;
        emit CampaignStopped(_shortUrl);
    }
    
    function getCampaignDonors(string memory _shortUrl) external view returns (Donor[] memory) {
        return campaigns[_shortUrl].donors;
    }
    
    function getAllCampaigns() external view returns (Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](campaignUrls.length);
        for (uint256 i = 0; i < campaignUrls.length; i++) {
            allCampaigns[i] = campaigns[campaignUrls[i]];
        }
        return allCampaigns;
    }

    function getAllCampaignUrls() external view returns (string[] memory) {
        return campaignUrls;
    }

    function getCampaignDetails(string memory _shortUrl) external view returns (Campaign memory) {
        return campaigns[_shortUrl];
    }
    
    function withdrawFunds(string memory _shortUrl) external nonReentrant {
        Campaign storage campaign = campaigns[_shortUrl];
        require(msg.sender == campaign.creator, "Only creator can withdraw");
        require(!campaign.isActive || block.timestamp > campaign.deadline, "Campaign is still active");
        
        uint256 amount = campaign.amountRaised;
        campaign.amountRaised = 0;
        (bool sent, ) = payable(campaign.creator).call{value: amount}("");
        require(sent, "Failed to send funds");
    }
}