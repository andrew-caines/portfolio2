import Cards from "@cloudscape-design/components/cards";
import { Header } from "@cloudscape-design/components";
import TextContent from "@cloudscape-design/components/text-content";
import Badge from "@cloudscape-design/components/badge";
import { LightgalleryItem } from "react-lightgallery";

const items = [{
    name: '',
    platform: '',
    backend: '',
    details: '',
    notes: '',
    techStack: [
        {
            name: '',
            type: 'front'
        },
        {
            name: '',
            type: 'back'
        },
       
    ],
    images: [
        {
            description: 'image',
            url: null
        },
    ]
}];

export default function Desktop(props) {

    return (
        <Cards
            items={items}
            cardsPerRow={[{ cards: 1 }]}
            header={<Header>Desktop  / System Developement</Header>}
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