import ProgressBar from "@cloudscape-design/components/progress-bar";
import ColumnLayout from "@cloudscape-design/components/column-layout";

export default function Developement(props) {
    return (
        <ColumnLayout>
            <ProgressBar
                variant="key-value"
                value={85}
                label="Javascript"
                description="ES5 & ES6. Worked with it in several Frameworks and Vanilla"
            />
            <ProgressBar
                variant="key-value"
                value={85}
                label="NodeJS"
                description="Built REST, GraphQL, webSocket and IO based applications."
            />
            <ProgressBar
                variant="key-value"
                value={90}
                label="Front End Frameworks"
                description="React, Angular1.5, Aurelia and Vue"
                additionalInfo="I work primarly with React currently."
            />
            <ProgressBar
                variant="key-value"
                value={90}
                label="HTML (5) / CSS / WebAPI's "
                description="CSS is my weakess skill, but my Google-Fu is excellent :)"
            />
            <ProgressBar
                variant="key-value"
                value={80}
                label="Mobile Apps"
                description="React Native, Ionic and Cardova"
                additionalInfo="React Native is my go to tool"
            />
            <ProgressBar
                variant="key-value"
                value={40}
                label="Systems Programming"
                description="Electron, Tauri (Rust) and WPF / .NET applictions. (C#), limited C/C++ Experince"
                additionalInfo="Focusing on RUST currently"
            />
        </ColumnLayout>
    )
}