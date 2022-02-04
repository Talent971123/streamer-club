import { useUser } from "@auth0/nextjs-auth0";
import React, { useContext } from "react";
import {
  CancelButton,
  DetailsContent,
  DetailsDivider,
  DetailsField,
  DetailsWrapper,
  FieldLabel,
  StyledRow,
  SubmitButton,
} from "./mydetails.style";
import { Image } from "components/Image";
import ProfileImage from "assets/images/layout/profile.png";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { UserDetails } from "..";
import { Input } from "components/Input";
import { Form } from "antd";
import { Col, Row } from "components/Layout";
import themeGet from "@styled-system/theme-get";

const MyDetails: React.FC = () => {
  const { user }:any = useUser();
  const { showDetails } = useContext(UserDetails);
  const [form] = Form.useForm();

  const onFinish = () => {
    //TODO - update user_metadata in auth0
  }
  
  return (
    <DetailsWrapper>
      <DetailsContent>
        <Form form={form} onFinish={onFinish}>
          <StyledRow gap={70}>
            <Col item={6}>
              <FieldLabel>{"First Name"}</FieldLabel>
              <Form.Item name="first_name" initialValue={user.given_name}>
                <DetailsField defaultValue={user.given_name} placeholder="Enter first name" />
              </Form.Item>
            </Col>
            <Col item={6}>
              <FieldLabel>{"Last Name"}</FieldLabel>
              <Form.Item name="last_name" initialValue={user.family_name}>
                <DetailsField defaultValue={user.family_name} placeholder="Enter last name" />
              </Form.Item>
            </Col>
            <Col item={12}>
              <FieldLabel>{"Email"}</FieldLabel>
              <Form.Item  name="email" initialValue={user.email}>
                <DetailsField defaultValue={user.email} placeholder="Enter email" />
              </Form.Item>
            </Col>
          </StyledRow>
          <StyledRow gap={140}>
            <Col item={6}>
              <FieldLabel>{"Mobile Number"}</FieldLabel>
              <Form.Item name="phone_number" initialValue={user.phone_number}>
                <DetailsField defaultValue={user.phone_number} placeholder="Enter mobile number" />
              </Form.Item>
            </Col>
            <Col item={18}>
              <Row gap={15} alignItems="flex-end" justifyContent="flex-end">
                <CancelButton onClick={() => showDetails(false)}>{"Cancel"}</CancelButton>
                <SubmitButton bColor="warning" type="submit">{"Save Changes"}</SubmitButton>
              </Row>
            </Col>
          </StyledRow>
        </Form>
      </DetailsContent>
    </DetailsWrapper>
  );
};

export default MyDetails;
