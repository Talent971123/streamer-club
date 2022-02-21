import React from 'react'
import { Text } from "components/Text";

const PrivacyModal: React.FC = () => {
    return (
      <>
        <Text fSize={0.9375} style={{ cursor: 'pointer' }}>
            <a target="_blank" href="https://www.sevenwestmedia.com.au/privacy-policies/privacy/" rel="noopener noreferrer" style={{color: "inherit"}}> 
              Privacy Policy
            </a>
        </Text>
      </>
    )
}

export default PrivacyModal;
