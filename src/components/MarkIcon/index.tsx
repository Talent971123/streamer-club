import { themeGet } from "@styled-system/theme-get";
import ButtonLoading from "components/Loading/ButtonLoading";
import React, { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { setSiteSport } from "redux/actions/site";
import styled from "styled-components";
import _ from 'lodash'

export const RedMarker = styled.div`
  width: 62px;
  height: 62px;
  background-color: ${themeGet("colors.red.100")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconDim = { width: 30, height: 30 }

const MarkIcon: React.FC<{ type?: string }> = ({ type = "default" }) => {
  const dispatch = useDispatch()
  const { site: { currentSport } } = useSelector((state: RootStateOrAny) => state);
  const [icon, setIcon] = useState("");

  useEffect(() => {

    return () => {
      dispatch(setSiteSport(null))
    }

  }, [])


  return <div>
    <RedMarker>
      {type === "mobile" ?
        <HiMenuAlt2 css={IconDim} /> : _.isNull(currentSport) ? <ButtonLoading /> : <img src={currentSport?.icon} css={IconDim} />
      }
    </RedMarker>
  </div>

}

export default MarkIcon;
