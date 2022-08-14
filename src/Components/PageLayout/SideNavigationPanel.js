import React, { useState } from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import { useNavigate } from "react-router-dom";

export default function SideNavigationPanel(props) {
    const [activeHref, setActiveHref] = useState("/resume");
    let navigate = useNavigate();
    const handleMobile = props.handleMobile;

    return (
        <SideNavigation
            activeHref={activeHref}
            header={{ href: "/", text: "Andrew P Caines" }}
            onFollow={event => {
                if (!event.detail.external) { 
                    event.preventDefault();
                    setActiveHref(event.detail.href);
                    navigate(event.detail.href);
                    if (window.innerWidth <= 686) { 
                        //This is being viewed on mobile, after navigate event, close drawer!
                        handleMobile();
                     }
                }
            }}
            items={[
                { type: "link", text: "Resume", href: "/resume" },
                {
                    type: "link",
                    text: "Details",
                    href: "/details"
                },
                {
                    type: "section",
                    text: "Portfolio",
                    items: [
                        {
                            type: "link",
                            text: "Desktop",
                            href: "/desktop"
                        },
                        {
                            type: "link",
                            text: "Mobile",
                            href: "/mobile"
                        },
                        {
                            type: "link",
                            text: "Serverless - Cloud",
                            href: "/serverless"
                        },
                        {
                            type: "link",
                            text: "Backend - Node/GraphQL",
                            href: "/backend"
                        }
                    ]
                }
            ]}
        />
    );
}