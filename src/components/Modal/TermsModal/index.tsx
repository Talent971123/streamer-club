import React, { useState } from "react";

import { StyledModal, ButtonWrapper } from "./styled.style";
import { Text } from "components/Text";
import { Button } from "components/Button";

const TermsModal: React.FC = () => {
    const [show, setShow] = useState(false);


    return (
        <>
            <Text
                fSize={0.9375}
                style={{ cursor: "pointer" }}
                onClick={() => setShow(true)}
            >
                Terms and Condition
            </Text>

            <StyledModal
                centered
                visible={show}
                onCancel={() => setShow(false)}
                footer={null}
                title="Terms and Conditions"
                width={1000}
            >
                <Text fSize={0.875} fWeight={600}>
                    1. The Streamer digital content service
                </Text>
                <Text fSize={0.813}>
                    <br />
                    <p>
                        Streamer is a digital content service owned and operated by West
                        Australian Newspapers Limited, and is accessible via{" "}
                        <a href="/">streamer.com.au</a> (“the Website”) (“the Service”).
                    </p>
                    <br />
                    <p>These Terms govern the supply of the Service.</p>
                    <br />
                    <p>
                        Your use of the Service indicates your understanding and acceptance
                        of these Terms, and has the same force and effect as if you had
                        actually signed these Terms.
                    </p>
                    <br />
                    <p>
                        In these Terms: 'you' and 'your' mean the customer, and includes
                        members of your household; we, our and us mean West Australian
                        Newspapers Limited (“WAN”).
                    </p>
                    <br />
                    <br />
                </Text>
                <Text fSize={0.875} fWeight={600}>
                    2. Accessing the Service – minimum requirements
                </Text>
                <Text fSize={0.813}>
                    <br />
                    <p>
                        To be eligible to access the Service you must be located in
                        Australia and be over the age of 15, or otherwise have your parent’s
                        permission to use the Service.
                    </p>
                    <br />
                    <p>
                        You can access the Service by going to the Website at{" "}
                        <a href="/">www.streamer.com.au.</a>
                    </p>
                    <br />
                    <p>
                        You must be using a supported device, as listed in our FAQs on the
                        Website.
                    </p>
                    <br />
                    <p>
                        You must have a broadband plan with minimum speed of 0.8Mbps
                        (however at least 3Mbps is recommended).
                    </p>
                    <br />
                    <br />
                </Text>
                <Text fSize={0.875} fWeight={600}>
                    3. Signing up
                </Text>
                <Text fSize={0.813}>
                    <br />
                    <p>Signing up is mandatory.</p>
                    <br />
                    <p>Sign up is via your Google account or email and password.</p>
                    <br />
                    <p>
                        You must provide us with accurate and complete information when you
                        access the Service. You must keep all your identification and user
                        information required to access the Service strictly confidential.
                        You should not reveal your password to anyone nor use anyone else’s
                        password. You are entirely responsible for all activities that occur
                        through your password, and you agree to immediately notify us in the
                        event you become aware of any unauthorised use or breach of
                        security.
                    </p>
                    <br />
                    <br />
                </Text>
                <Text fSize={0.875} fWeight={600}>
                    4. Intellectual Property
                </Text>
                <Text fSize={0.813}>
                    <br />
                    <p>
                        You acknowledge that the audio-visual content that you are able to
                        access, view and display via the Service (“Content”) contains
                        proprietary information and material that is owned by us and our
                        licensors, and is protected by intellectual property and other laws
                        including copyright. You agree you will not use such proprietary
                        information or materials in any way whatsoever except for use of the
                        Service in accordance with these Terms of Use. No part of the
                        Service may be reproduced in any form or means except as expressly
                        permitted in these Terms.
                    </p>
                    <br />
                    <p>
                        Your use of any Content streamed using the Service is conditional
                        upon your acceptance of these Terms of Use. If you do not agree with
                        them, do not use the Service.
                    </p>
                    <br />
                    <p>
                        You are authorised to use the Content only for your personal,
                        non-commercial use, and you may not copy, download, redistribute,
                        transfer, sell, rent, lease or otherwise assign or sublicense them
                        to any other person or device, nor in any way alter such Content nor
                        use it in any advertising or promotional materials.
                    </p>
                    <br />
                    <p>
                        You acknowledge that the Content we provide to you is by way of
                        licence only, and that the Content you access through the Service
                        includes technology that protects digital information and our rights
                        and those of our licensors.
                    </p>
                    <br />
                    <p>
                        You agree that you will not attempt to, nor encourage or assist any
                        other person to, circumvent or modify any digital rights management
                        or security technology or software that is part of the Service, nor
                        interfere with, remove or alter any rights management information
                        nor proprietary notices or labels on the Content.
                    </p>
                    <br />
                    <p></p>We may monitor your compliance with these Terms from time to
                    time, and in the event of breach by you, we may terminate your use of
                    the Service and take advantage or any available remedies at law.
                    <br />
                    <br />
                </Text>
                <Text fSize={0.875} fWeight={600}>
                    5. Subtitles and commentary
                </Text>
                <Text fSize={0.813}>
                    <br />
                    <p>
                        Subtitles and closed captions are not available for Content on this
                        Website.
                    </p>
                    <br />
                    <br />
                </Text>
                <Text fSize={0.875} fWeight={600}>
                    6. Availability and accuracy of the Service
                </Text>
                <Text fSize={0.813}>
                    <br />
                    <p>
                        We will provide the Service to you in accordance with these Terms,
                        within a reasonable time and using due care and skill, and (with
                        respect to some Content) according to your geographic location.
                    </p>
                    <br />
                    <p>
                        We want to give you the best service possible, but sometimes
                        availability of the Service may be affected by factors outside our
                        control. For this reason we cannot guarantee that:
                    </p>
                    <br />
                    <ul className="bullet">
                        <li>the Service will be available to you at all times;</li>
                        <li>the Service will always be accurate; or</li>
                        <li>streaming speeds of the Service won't vary from time to time.</li>
                    </ul>
                    <br />
                    <p>
                        In using the Service, you acknowledge that your use of the Service
                        may not be uninterrupted, timely, secure or error free. You also
                        acknowledge that the Service and the servers that provide you with
                        data and third party content and third party services may not be
                        free of viruses or other harmful components.
                    </p>
                    <br />
                    <p>
                        On occasion, technical problems or file sizes may delay or prevent
                        Content from being streamed. It may also be necessary for us to
                        interrupt the Service (or parts of it) occasionally in order to
                        upgrade or maintain it. Should we need to interrupt the Service we
                        will, whenever possible, conduct maintenance or upgrades at times
                        that would minimize inconvenience to our customers and restore the
                        Service as soon as possible.
                    </p>
                    <br />
                    <br />
                </Text>
                <Text fSize={0.875} fWeight={600}>
                    7. Changes to the Service{" "}
                </Text>
                <Text fSize={0.813}>
                    <br />
                    <p>
                        We may at our discretion and from time to time change, add, or
                        remove features and functionality of the Service or discontinue one
                        or some of the features of the Service without notice.{" "}
                    </p>
                    <br />
                    <br />
                </Text>
                <Text fSize={0.875} fWeight={600}>
                    8. Third Party Links
                </Text>
                <Text fSize={0.813}>
                    <br />
                    <p>
                        From time to time the App or Website may display links to third
                        party websites. You understand that you may be required to agree to
                        third party terms and conditions before being provided such access
                        through the Service and that you access and use third party services
                        at your own risk.
                    </p>
                    <br />
                    <br />
                </Text>
                <Text fSize={0.875} fWeight={600}>
                    9. Your personal broadband usage
                </Text>
                <Text fSize={0.813}>
                    <br />
                    <p>
                        To use the Service you need a minimum speed of 0.8Mbps (however at
                        least 3Mbps is recommended). You are responsible for checking with
                        your internet service provider as to whether your plan is suitable.
                    </p>
                    <br />
                    <p>
                        You are responsible for paying for your personal broadband
                        connection, including any data charges (even if you are able to
                        receive the Service free of charge).
                    </p>
                    <br />
                    <p>
                        The content you stream via the Service may be metered by your
                        internet service provider, and counted towards any usage allowance
                        you have and/or be charged to you by your provider.{" "}
                    </p>
                    <br />
                    <p>
                        Streaming quality varies depending on broadband connection speed.
                        The App uses an adaptive bitrate system that automatically adjusts
                        the quality of the stream based on the device capability and quality
                        of your broadband connection to start the streams as quickly as
                        possible and to minimize buffering to the extent possible in the
                        context of all the various broadband plans our customers have.
                        However, we are not responsible for buffering which may occur if
                        your broadband plan is not suitable (ie: does not have the minimum
                        speed of 0.8Mbps, or if buffering occurs for other reasons beyond
                        our reasonable control).
                    </p>
                    <br />
                    <br />
                </Text>
                <Text fSize={0.875} fWeight={600}>
                    10. Advertising
                </Text>
                <Text fSize={0.813}>
                    <br />
                    <p>
                        You acknowledge that there may be advertising displayed as part of
                        the Service, providing you information regarding products and
                        services.
                    </p>
                    <br />
                    <p>
                        You acknowledge that there may be advertising displayed as part of
                        the Service, providing you information regarding products and
                        services.
                    </p>
                    <br />
                    <p>
                        You acknowledge that the Service is primarily advertising-funded,
                        and that use of ad blocking software on your device will not block
                        all advertising served by us or on our behalf.
                    </p>
                    <br />
                    <br />
                </Text>
                <Text fSize={0.875} fWeight={600}>
                    11. Customer support
                </Text>
                <Text fSize={0.813}>
                    <br />
                    <p>
                        For customer support in relation to your use of the Service go to
                        our Support page where you will find FAQs and an online email form
                        to submit queries. You are required to provide us with complete and
                        accurate information regarding any customer service query you
                        submit.{" "}
                    </p>
                    <br />
                    <br />
                </Text>
                <Text fSize={0.875} fWeight={600}>
                    12. Changes to these Terms and effect of these Terms
                </Text>
                <Text fSize={0.813}>
                    <br />
                    <p>
                        We may vary these Terms or any information contained on the Service
                        at any time. However, if a variation is likely to have a detrimental
                        impact on you, and that impact is more than a minor impact, we will
                        notify you of the change no later than when the change becomes
                        effective.
                    </p>
                    <br />
                    <p>
                        In the event these Terms are inconsistent with any other Terms you
                        have agreed to in relation to your ongoing use of these Terms will
                        prevail to the extent of that inconsistency.{" "}
                    </p>
                    <br />
                    <br />
                </Text>
                <Text fSize={0.875} fWeight={600}>
                    13. Privacy
                </Text>
                <Text fSize={0.813}>
                    <br />
                    <p>
                        If you are under 15 years old, you must give this Privacy Statement
                        to your parent and get their permission for you to use the Service.
                    </p>
                    <br />
                    <p>
                        WAN and its Associated Entities is collecting your personal
                        information and other data for the purpose of establishing and
                        administering your access to the Service (along with any future
                        service we provide and which requires logging in) (where
                        applicable), processing any request you make when you contact us via
                        the Service, and for the purpose of understanding our audiences.{" "}
                    </p>
                    <br />
                    <p>
                        WAN will handle your personal information and other data in
                        accordance with our Privacy Policy which is available at{" "}
                        <a href="https://www.sevenwestmedia.com.au/privacy-policies/privacy/">
                            www.sevenwestmedia.com.au/privacy
                        </a>
                        , and which contains information regarding how you can access your
                        personal information, correct it and/ or make a complaint about our
                        handling of your personal information.{" "}
                    </p>
                    <br />
                    <p>
                        Our Privacy Policy also contains information regarding cookies and
                        other technologies we use in order to improve and personalise your
                        experience by identifying and displaying content which may be of
                        interest to you, referring you to products and services that may be
                        of benefit or interest to you and displaying targeted advertising
                        based on those interests. To learn more and for information on how
                        to opt out of such activities, see our Cookies Guide at{" "}
                        <a href="https://www.sevenwestmedia.com.au/cookies-guide/">
                            http://www.sevenwestmedia.com.au/cookies-guide/
                        </a>
                        .
                    </p>
                    <br />
                    <p>
                        Where you use our products and services, you agree to the terms of
                        the Privacy Policy. Without limiting the foregoing:
                    </p>
                    <br />
                    <ul className="bullet">
                        <li>
                            you consent to WAN disclosing your personal information and other
                            data to its related entities, business partners and external
                            service providers for research and profiling purposes as well as
                            other purposes reasonably related to your relationship with WAN;
                        </li>
                        <li>
                            you consent to WAN using your personal information for the purpose
                            of WAN and its related entities sending you information regarding
                            programs, products and services available through them and/ or
                            through their business partners. We will always provide you with
                            the ability to opt out of those communications;
                        </li>
                        <li>
                            you consent to our use of cookies and other technologies to
                            improve and personalise your experience by identifying and
                            displaying content which may be of interest to you, referring you
                            to products and services that may be of benefit or interest to you
                            and displaying targeted advertising based on those interests. To
                            learn more and for information on how to opt out of targeted
                            advertising, see our Cookies Guide at{" "}
                            <a href="https://www.sevenwestmedia.com.au/cookies-guide/">
                                http://www.sevenwestmedia.com.au/cookies-guide/
                            </a>
                        </li>
                        <li>
                            you consent to WAN, via the streamer app, collecting and using
                            data such as your mobile operating network or system, device
                            manufacturer, language preference you have set on your browser or
                            device operating system, apps you have installed on your phone,
                            age, gender, postcode, IP address and business locations you visit
                            or are in proximity to, to collect insights about our audience and
                            display content and advertising which may be of interest to you.
                            To learn more and for information on how to opt out of targeted
                            advertising, see our Cookies Guide at{" "}
                            <a href="https://www.sevenwestmedia.com.au/cookies-guide/">
                                http://www.sevenwestmedia.com.au/cookies-guide/
                            </a>
                        </li>
                        <li>
                            you consent to our use of proprietary measurement software in the
                            Service which will allow users to contribute to market research or
                            audience ratings services; and
                        </li>
                        <li>
                            you consent to us sharing your personal information in connection
                            with your use of the Service with our content licensors in
                            connection with the enforcement of their intellectual property
                            rights.
                        </li>
                    </ul>
                    <br />
                    <br />
                </Text>
                <Text fSize={0.875} fWeight={600}>
                    14. Supplier Liability
                </Text>
                <Text fSize={0.813}>
                    <br />
                    <p>
                        Except as expressly set forth herein, you expressly acknowledge that
                        this Service is provided ‘as is’ and any use by you of the Service
                        is at your own risk.
                    </p>
                    <br />
                    <p>
                        To the maximum extent permitted by law, in no event will WAN or its
                        Associated Entities nor its third party licensors be liable for any
                        loss or damage, including without limitation direct or indirect,
                        special, incidental, or consequential damages, losses or expenses
                        arising in connection with the Service, any linked site, the
                        streaming of any Content or in connection with any failure of
                        performance, error, omission, interruption, defect, delay in
                        operation or transmission, computer virus or line or system failure,
                        even if WAN or its Associated Entities are advised of the
                        possibility of such damages, losses or expenses.{" "}
                    </p>
                    <br />
                    <p>
                        To the extent permissible by law, we will not be liable under these
                        Terms for any loss of income, loss of profits, loss of contracts,
                        loss of data or for any indirect or consequential loss or damage of
                        any kind howsoever arising and whether caused by tort (including
                        negligence), breach of contract or otherwise.
                    </p>
                    <br />
                    <p>
                        To the extent permissible by law, our maximum aggregate liability
                        under these Terms whether in contract, tort (including negligence)
                        or otherwise shall in no circumstances exceed the amount payable by
                        you to us in respect of the product(s) in question.{" "}
                    </p>
                    <br />
                    <p>
                        If you are a consumer under the Consumer and Competition Act 2010
                        (Cth) (Australian Consumer Law) the Service comes with consumer
                        guarantees that cannot be excluded under that Law.{" "}
                    </p>
                    <br />
                    <p>
                        We exclude to the fullest extent permitted by law all terms implied
                        by statute, at law, in fact or otherwise. We also exclude to the
                        fullest extent permitted by law all liability for any liabilities,
                        losses, damages, costs or expenses (whether arising in contract,
                        tort (including negligence) or under any other cause of action)
                        suffered or incurred by any person in connection with this contract
                        or an act or omission of our or any of our suppliers' personnel in
                        connection with this contract:
                    </p>
                    <br />
                    <ol className="ordered">
                        <li>on behalf of and for the benefit of our suppliers; and</li>
                        <li>
                            for ourselves, to the extent permitted by the Australian Consumer
                            Law.
                        </li>
                    </ol>
                    <p>
                        Nothing in these Terms shall limit or exclude our liability for
                        death or personal injury caused by our negligence.
                    </p>
                    <br />
                    <br />
                </Text>
                <Text fSize={0.875} fWeight={600}>
                    15. Assignment
                </Text>
                <Text fSize={0.813}>
                    <br />
                    <p>
                        We may transfer all or part of our rights and obligations under
                        these Terms to our business partners or related bodies corporate.
                        However, if assignment is likely to have a detrimental impact on
                        you, and that impact is more than a minor impact, we will notify you
                        about this.
                    </p>
                    <br />
                    <p>
                        The Service is provided for your personal, non-commercial use, and
                        may not be resold, in whole or in part.{" "}
                    </p>
                    <br />
                    <br />
                </Text>
                <Text fSize={0.875} fWeight={600}>
                    16. Indemnity
                </Text>
                <Text fSize={0.813}>
                    <br />
                    <p>
                        You agree to indemnify and hold us harmless from and against any and
                        all claims, proceedings, injuries, liabilities, losses, costs and
                        expenses (including reasonable attorneys’ charges on an indemnity
                        basis), including but not limited to claims against us or our
                        related companies alleging negligence, copyright infringement and/or
                        trademark infringement, relating to or arising out of your breach of
                        our agreement with you (as contained in these Terms) or your misuse
                        of the Service.{" "}
                    </p>
                    <br />
                    <br />
                </Text>
                <Text fSize={0.875} fWeight={600}>
                    17. Term, suspension and termination of the Service{" "}
                </Text>
                <Text fSize={0.813}>
                    <br />
                    <p>
                        Our agreement with you (as contained in these Terms) commences on
                        the date you first access the Service, and ends once terminated
                        earlier in accordance with these Terms. We retain the absolute right
                        to immediately suspend or terminate your Service, and terminate this
                        agreement with you (as contained in these Terms), if:
                    </p>
                    <br />
                    <ol className="ordered">
                        <li>you breach these Terms in a material way;</li>
                        <li>
                            you misuse (or we can establish you have attempted to misuse) the
                            Service or your use of the Service is reasonably considered by us
                            to be fraudulent or to adversely affect the integrity of the
                            Service or other customers' use of or access to the Service;
                        </li>
                        <li>
                            you use the Service in such a manner as to infringe upon our
                            intellectual property rights or those of our suppliers or any
                            third party;
                        </li>
                        <li>
                            we cease to provide the Service, or any part of it, for example in
                            order to comply with our legal obligations (including legislative
                            changes) or Court orders; or{" "}
                        </li>
                        <li>
                            we have reasonable grounds to believe that a threat or risk of
                            security, injury or damage exists.
                        </li>
                    </ol>
                    <p>
                        We may monitor your use of the Service to ensure that you are
                        complying with these Terms. We will comply with our Privacy Policy
                        if we do.{" "}
                    </p>
                    <br />
                    <p>
                        We may investigate any alleged misuse of the Service and may involve
                        or assist police or other law enforcement agencies in doing so
                        without notice to you.
                    </p>
                    <br />
                    <br />
                </Text>
                <Text fSize={0.875} fWeight={600}>
                    18. Applicable Law
                </Text>
                <Text fSize={0.813}>
                    <br />
                    <p>
                        These Terms are governed by the laws in force in New South Wales,
                        Australia, and you irrevocably and unconditionally submit to the
                        non-exclusive jurisdiction of the courts of New South Wales,
                        Australia, and any courts which may hear appeals form those courts.
                    </p>
                    <br />
                    <br />
                </Text>

                <ButtonWrapper>
                    <Button
                        bColor="gray"
                        bSize="small"
                        type="button"
                        onClick={() => setShow(false)}
                    >
                        {"Close"}
                    </Button>
                </ButtonWrapper>

            </StyledModal>
        </>
    );
};

export default TermsModal;
