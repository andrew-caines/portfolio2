import ProgressBar from "@cloudscape-design/components/progress-bar";
import ColumnLayout from "@cloudscape-design/components/column-layout";

export default function HardwareIT(props) {
    return (
        <ColumnLayout>
            <ProgressBar
                variant="key-value"
                value={98}
                label="PC/Server Building and Configuration"
                description="Capacity Planning / Procurement / Contracts / Physical Assembly"
                additionalInfo="I have hand built no less than 5,000 PC's in my career so far."
            />
            <ProgressBar
                variant="key-value"
                value={95}
                label="Networking Layer Hardware"
                description="Switches / Routers / Wireless "
                additionalInfo="VLANS, QoS, SD-WAN, Radius etc"
            />
            <ProgressBar
                variant="key-value"
                value={95}
                label="Hardware Virtualization"
                description="Xen/XCP-NG, VMware, Hyper-V, iSCSI, SR-IOV"
                additionalInfo="This includes procurement of Licensing/Support/3rd Party Apps"
            />
            <ProgressBar
                variant="key-value"
                value={95}
                label="Network Devices"
                description="SAN / NAS / Printers / Surveillance "
                additionalInfo="I have worked alot with QNAP/Nimble and PureStorage"
            />
            <ProgressBar
                variant="key-value"
                value={80}
                label="Telcommunictions "
                description="PRI / SIP / VOIP / PBX / Handsets"
                additionalInfo="I have worked with Panasonic and Yealink the most"
            />
            <ProgressBar
                variant="key-value"
                value={60}
                label="IOT "
                description="Tessel 1/2, RaspberyPi 1-4"
                additionalInfo="Designed, built and deployed in a few different ways"
            />
        </ColumnLayout>
    )
}