import Cards from "@cloudscape-design/components/cards";
import { Header } from "@cloudscape-design/components";
import TextContent from "@cloudscape-design/components/text-content";
import Badge from "@cloudscape-design/components/badge";
import { LightgalleryItem } from "react-lightgallery";
//Images
import AuctionAuth0 from '../../../images/AuctionAuth0.PNG';
import AuctionBid from '../../../images/AuctionBid.PNG';
import AuctionLanding from '../../../images/AuctionLandingPage.PNG';
import AuctionList from '../../../images/AuctionList.PNG';
import AuctionCreate from '../../../images/CreateNewAuction.PNG';
import AuctionHighestBidderBUYER from '../../../images/HighestBidder.PNG';
import AuctionHighestBidderSELLER from '../../../images/HighestBidderASSeller.PNG';

const items = [{
    name: 'Auction App -  https://auction.caines.biz',
    platform: 'AWS / Serverless.com',
    backend: 'AWS',
    details: 'As part of my training/learning I built an auction service that allows users to signup/register, add auctions with images, bid on auctions, and be notified when they have won/expired. This entire process is 100% on AWS.',
    notes: 'This appliction uses Simple Notification, Simple Message Queue,DynamoDB, Lifecycle hooks, Auth0 and just about every other AWS feature available! ',
    techStack: [
        {
            name: 'React',
            type: 'front'
        },
        {
            name: 'Serverless.com',
            type: 'back'
        },
        {
            name: 'AWS',
            type: 'back'
        },
        {
            name: 'SES',
            type: 'back'
        },
        {
            name: 'SNS',
            type: 'back'
        },
        {
            name: 'Auth0',
            type: null
        },
    ],
    images: [
        {
            description: 'Authentication Screen',
            url: AuctionAuth0
        },
        {
            description: 'What users are greeted with on successful login!',
            url: AuctionLanding
        },
        {
            description: 'Creating an Auction',
            url: AuctionCreate
        },
        {
            description: 'A list of all open Auctions',
            url: AuctionList
        },
        {
            description: 'An example of a user placing a bid!',
            url: AuctionBid
        },
        {
            description: 'The Highest Bid, as Bidder.',
            url: AuctionHighestBidderBUYER
        },
        {
            description: 'The Highest Bid, as Seller',
            url: AuctionHighestBidderSELLER
        },

    ]
}];

export default function Serverless(props) {

    return (
        <Cards
            items={items}
            cardsPerRow={[{ cards: 1 }]}
            header={<Header>Cloud AWS/Azure/GCP Projects</Header>}
            cardDefinition={{
                header: item => (item.name),
                sections: [
                    {
                        id: "platform",
                        header: "Platform & Technology",
                        content: item => item.platform
                    },
                    {
                        id: "backend",
                        header: "Backend Technology",
                        content: item => item.backend
                    },
                    {
                        id: "details",
                        header: "Project Details",
                        content: item => (
                            <TextContent>
                                <p>{item.details}</p>
                                <p><small>{item.notes}</small></p>
                            </TextContent>
                        )
                    },
                    {
                        id: "techStack",
                        header: "Tech Stack",
                        content: item => {
                            return (
                                item.techStack.map(item => {
                                    switch (item.type) {
                                        case 'back':
                                            return (<Badge color="green" key={item.name}> {item.name} </Badge>)
                                        case 'front':
                                            return (<Badge color="blue" key={item.name}> {item.name} </Badge>)
                                        default:
                                            return (<Badge key={item.name}> {item.name} </Badge>)
                                    }

                                })
                            )
                        }
                    },
                    {
                        id: "images",
                        header: 'ScreenShots / Captures',
                        content: item => {
                            const content = item.images.map(item => (<LightgalleryItem src={item.url}><img src={item.url} width={32} height={32} /></LightgalleryItem>));
                            return content;
                        }
                    }
                ]
            }}
        />
    )
}