import ProgressBar from "@cloudscape-design/components/progress-bar";
import ColumnLayout from "@cloudscape-design/components/column-layout";
export default function SoftwareIT(props) {
    return (
        <ColumnLayout>
            <ProgressBar
                variant="key-value"
                value={90}
                label="Microsoft Stack"
                description="AD/DNS/DHCP/EXCHANGE/WSUS/WDS/RADIUS"
                additionalInfo="If MS makes it, I have probably used/configured/supported it."
            />
            <ProgressBar
                variant="key-value"
                value={90}
                label="Microsoft Productivity"
                description="Word/Outlook/Excel/PowerPoint/Planner"
            />
            <ProgressBar
                variant="key-value"
                value={80}
                label="SQL DBA"
                description="MSSQL Server/Postgres/MySQL"
                additionalInfo="Including a 17 sites repliction configuration"
            />
            <ProgressBar
                variant="key-value"
                value={75}
                label="Serverless Platforms"
                description="AWS/Azure/GCP"
                additionalInfo="Currently working towards AWS Developer Associate Certifiction"
            />
            <ProgressBar
                variant="key-value"
                value={95}
                label="Windows Common Applications"
                description="Standard Windows Applictions for Administration and use"
                additionalInfo="Examples: VSCode, Notepad++, SSMS, RSAT"
            />
            <ProgressBar
                variant="key-value"
                value={80}
                label="3cx VOIP Platform"
                description="Configuration of Devices as well as Site-Site Topologies"
                additionalInfo="On-Prem deploys, as well as Azure/AWS deploys"
            />
            <ProgressBar
            variant="key-value"
            value={80}
            label="Backup Products"
            description="Virtualization Products as well as On-prem Products (Veeam,NetBak,etc)"
            additionalInfo="This includes hardware backup products like NAS/SAN platforms"
        />
        </ColumnLayout>
    )
}