import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Modal } from "antd";


export const ButtonWrapper = styled.div`
display: flex;
flex-direction: row-reverse;
`

export const StyledModal = styled(Modal)`
.bullet{
  padding: 0 0 0 30px;
  li {
    list-style-type: circle;
    padding: 0 0 5px 0;
  }
}
.ordered{
  li {
    list-style-type: lower-alpha;
    padding: 0 0 5px 0;
  }
}
`