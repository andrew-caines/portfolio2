import React from 'react';
import Container from "@cloudscape-design/components/container";
import { Header } from '@cloudscape-design/components';

const FooterContent = () => {

    return (
        <>
            Andrew Caines <a href='mailto:andrew.p.caines@gmail.com+REMOVETHIS'>andrew.p.caines@gmail.com</a>
            <p>St Albert, T8N 6C8, Alberta, Canada</p>
        </>
    )
}

export default function ToolsContent(props) {

    return (
        <Container
            header={
                <Header variant="h2">Contact & Links</Header>
            }
            footer={<FooterContent />}
        >
            <ol>
                <li><a href="#TODO">Download Developer Resume</a></li>
                <li><a href="#TODO">Download IT Resume</a></li>
                <li><a href="https://www.linkedin.com/in/andrew-caines-b6a4611b" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/andrew-caines" target="_blank" rel="noreferrer">Github</a></li>
            </ol>
        </Container>
    )
}