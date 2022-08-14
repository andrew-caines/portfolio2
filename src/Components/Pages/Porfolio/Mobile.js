import Cards from "@cloudscape-design/components/cards";
import { Header } from "@cloudscape-design/components";
import TextContent from "@cloudscape-design/components/text-content";
import Badge from "@cloudscape-design/components/badge";
import { LightgalleryItem } from "react-lightgallery";

import DeliveryCustomer from '../../../images/DeliveryCustomer.jpg';
import DeliveryFailure from '../../../images/DeliveryFailure.jpg';
import DeliveryHome from '../../../images/DeliveryHome.jpg';
import DeliveryLanding from '../../../images/DeliveryLanding.jpg';

const items = [{
    name: 'Delivery App',
    platform: 'React Native & Expo',
    backend: 'NodeJS - Exsisting Platform. Dashboard v1.0',
    details: 'This project was started to solve an issue where our Delivery drivers would fail to gather signature or fail to capture who signed for deliveries.  This product would allow for capture of signature, track quanity of items, and capture the GEO-LOCATION at the point of signing for the Meds',
    notes: 'This product ran inside a customer Docker Container, behind a nGinx webserver to offload the TLS decrypt. It would connect to the other in house server (Dashboard) to store and interact and validate permissons.',
    techStack: [
        {
            name: 'NodeJS',
            type: 'back'
        },
        {
            name: 'React',
            type: 'front'
        },
        {
            name: 'React-Native',
            type: 'front'
        },
        {
            name: 'Antd-CSS',
            type: 'front'
        },
        {
            name: 'Nginx',
            type: 'back'
        },
        {
            name: 'Google Play Store',
            type: 'null'
        },
    ],
    images: [
        {
            description: 'This screen shows the information for capture when a delivery was directly to a customers home. Not a long term care facility.',
            url: DeliveryCustomer
        },
        {
            description: 'When there was a delivery failure, the drive was to capture the reasons and remediation. Do they retry or return? After completion it would email thier manager with details.',
            url: DeliveryFailure
        },
        {
            description: 'When doing a delivery to home you could capture the details, and the signature. Or if they refused it could also be noted.',
            url: DeliveryHome
        },
        {
            description: 'This screen was the inital starting postion so each driver could be notified centrally of important information. Such as staff being away or home closures.',
            url: DeliveryLanding
        },
    ]
}];

export default function Mobile(props) {

    return (
        <Cards
            items={items}
            cardsPerRow={[{ cards: 1 }]}
            header={<Header>Mobile Developement</Header>}
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