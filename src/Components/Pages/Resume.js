import Cards from "@cloudscape-design/components/cards";
import { Header } from "@cloudscape-design/components";
const items = [
    {
        company: 'OFX Canada',
        title: 'Systems and Database Administrator',
        startDate: 'Sept 2021',
        endDate: 'CURRENT',
        description: 'Formally Firma Foreign exchange: As a currency exchange they are required to operate in a Zero-Trust model. My resonsiblities involve managing and supporting several server clusters in Canada, UK, AUS, NZ. This includes supporting the hardware, monitoring and end users of all these connected services. My primary responsiblities include SQL Server Management, and upgrading and deploying in-house product FXo. This includes working with the internal Enterprise Systems department for CI/CD tasks.',
        achievements: []
    },
    {
        company: 'CareRX Canada',
        title: 'Western Canada, I.T Manager',
        startDate: 'March 2019',
        endDate: 'September 2021',
        description: 'Working in the Pharmacy and Long term care service industry presented several challenges. Following and complying with strict HIPA/College of Pharmacist standards, working within the fixed operational windows and being able to extend support to remote workers and remote customers. All the while being production forward and striving for maximum uptime at all 11 locations I was responsible for.',
        achievements: []
    },
    {
        company: 'BD Engine Brake Ltd.',
        title: 'Western Canada, I.T Manager',
        startDate: 'Nov 2010',
        endDate: 'Jan 2019',
        description: 'When BD first hired me, they were in the process of trying to adapt to growing pains. The company had grown organically, and was doing very well. This had created many challenges that required an evolution to all their I.T and Phone systems. My background in helping companies transition from small shops to the Enterprise helped BD reach their full potential. I was also able to design all new systems when the company moved and consolidated several facilities into one location. This included helping design the low voltage floor plan, and server room design for 38,000sqr/ft facility.',
        achievements: []
    }
];
export default function Resume(props) {

    return (
        <Cards
            header={<Header>Work History</Header>}
            cardsPerRow={[{ cards: 1 }]}
            items={items}
            cardDefinition={{
                header: e => e.name,
                sections: [
                    {
                        id: "company",
                        header: "Company",
                        content: e => (<h1>{e.company}</h1>)
                    },
                    {
                        id: "title",
                        header: "Position",
                        content: (e) => {
                            return (
                                <span><strong>{e.title}</strong> &#916; {e.startDate} - {e.endDate} </span>
                            )
                        }
                    },
                    {
                        id: "description",
                        header: "",
                        content: (e) => {
                            return (
                                <p>{e.description}</p>
                            )
                        }
                    }
                ]
            }}
        />
    )
}