import { openHallidayOnramp } from "halliday-sdk";

import {
    Page,
    Container,
    Card,
    HallidayButton,
    TitleContainer,
    LogoContainer,
    MockExplanationText,
} from "./styled-components";
import WhiteHallidayLogo from "../public/whiteHallidayLogo.svg";
import PurpleHallidayLogo from "../public/purpleHallidayLogo.svg";

export default function App() {
    return (
        <Page>
            <Container>
                <TitleContainer>
                    <img src={PurpleHallidayLogo} width={32} height={28} alt="Halliday logo" />
                    Fiat-to-Crypto Onramp
                </TitleContainer>

                <LogoContainer>
                    <img src={WhiteHallidayLogo} width={60} height={60} alt="Halliday logo" />
                </LogoContainer>
                <Card>
                    <HallidayButton
                        onClick={() => {
                            openHallidayOnramp(
                                "5dd8b090-d810-45ef-ae20-24595e9365dc",
                                "BAsgVtLmBQkTEKZQjJ6FY6EtaccI3TzGnUFhTABUxMmm9WJ97PrwqwfG1a-styfaB4e0tbsG9PvSe7dzZmoTZhI"
                            );
                        }}
                    >
                        Onramp with Halliday
                    </HallidayButton>
                </Card>

                <Card>
                    <MockExplanationText>
                        The real flow above requires you to KYC and provide real payment info in order to send real
                        JEWEL to your Halliday Smart Account. If you would like to simply see the full payment flow,
                        click the button below. You will be asked to log in and enter an amount to onramp. When you
                        reach the &quot;Enter Payment Details&quot; screen, you will automatically be moved on to the
                        next step in 15 seconds. The rest of the flow is mocked; you will not receive JEWEL.
                    </MockExplanationText>
                    <HallidayButton
                        onClick={() => {
                            const width = 480;
                            const height = 638;
                            const windowWidth = window.innerWidth;

                            const left = windowWidth / 2 - width / 2;
                            const top = 70;

                            // open up the user checkout modal in a new window
                            window.open(
                                `https://superapp-l33b8pfx5-halliday.vercel.app/onramp?apiKey=db7764df-c689-4244-ae3a-1406a757ae40&verifierClientId=BAsgVtLmBQkTEKZQjJ6FY6EtaccI3TzGnUFhTABUxMmm9WJ97PrwqwfG1a-styfaB4e0tbsG9PvSe7dzZmoTZhI`,
                                "Halliday Onramp",
                                `popup left=${left} top=${top} width=${width} height=${height}`
                            );
                        }}
                    >
                        Onramp with Halliday - Mocked
                    </HallidayButton>
                </Card>
            </Container>
        </Page>
    );
}
