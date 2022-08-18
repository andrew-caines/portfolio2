import TextContent from "@cloudscape-design/components/text-content";
import Edmonton from '../../images/Edmonton.webp';

export default function Default(props) {

    return (
        <div style={{
            backgroundImage: `url(${Edmonton})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%'
        }} >
            <TextContent>

                <br />
                <h1 style={{ color: '#e0e0eb' }}>Hello,</h1><br />
                <div style={{ alignItems: 'center', color: '#f0f0f5' }}>
                    <h5 style={{ alignItems: 'center', color: '#f0f0f5', width: '100%' }}>My name is Andrew Caines and I am an Edmonton Area based Technologist, Software Developer and IT veteran.</h5>
                    <p>I have spent the last 25 years developing skills that help organaizations succeed in the modern marketplace!</p>

                    <p>To Learn more about me, please click on either the Side Navigation to review my work history, resume and browse my Porfolio!</p>
                    <br />
                    Thank you,<br />
                    Andrew Caines<br />
                    <p ><small style={{ color: '#e0e0eb' }}>St Albert, T8N 6C8</small></p>
                    <p ><small style={{ color: '#e0e0eb' }}>Alberta,Canada</small></p>
                    <p ><small style={{ color: '#e0e0eb' }}><a href="mailto:andrew.p.caines@gmail.com" style={{ color: '#e0e0eb', backgroundColor: 'black' }}>andrew.p.caines@gmail.com</a></small></p>
                </div>
            </TextContent>
        </div >
    )
}