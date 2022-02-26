import { useMutation, useSubscription } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0";
import { Form } from "antd";
import { Col, Row } from "components/Layout";
import { mutate, subscribe } from "graphql/user";
import React, { useContext } from "react";
import { UserDetails } from "..";
import {
  CancelButton,
  DetailsContent, DetailsField,
  DetailsWrapper,
  FieldLabel,
  StyledRow,
  SubmitButton
} from "./mydetails.style";
import { toast } from "react-toastify";

const MyDetails: React.FC = () => {
  const { user }: any = useUser();
  const { showDetails } = useContext(UserDetails);
  const [form] = Form.useForm();

  const [update] = useMutation(mutate.USER_UPDATE, {
    onCompleted() {
      toast.success('Success! Changes will take effect on your next Log In')
    },
    onError(e) {
      toast.error("Error Happened.");
    },
  });


  const onFinish = (data: any) => {
    update({
      variables: {
        where: {
          id: { _eq: user.id }
        },
        object: { ...data }
      }
    })
  };

  return (
    <DetailsWrapper>
      <DetailsContent>
        <Form form={form} onFinish={onFinish}>
          <StyledRow>
            <Col item={6} responsive={{ 834: { item: 24 } }}>
              <FieldLabel>{"First Name"}</FieldLabel>
              <Form.Item name="first_name" initialValue={user.first_name}>
                <DetailsField
                  defaultValue={user.given_name}
                  placeholder="Enter first name"
                />
              </Form.Item>
            </Col>
            <Col item={6} responsive={{ 834: { item: 24 } }}>
              <FieldLabel>{"Last Name"}</FieldLabel>
              <Form.Item name="last_name" initialValue={user.last_name}>
                <DetailsField
                  defaultValue={user.family_name}
                  placeholder="Enter last name"
                />
              </Form.Item>
            </Col>


            <Col item={12} responsive={{ 834: { item: 24 } }}>
              <FieldLabel>{"Email"}</FieldLabel>
              <Form.Item name="email" initialValue={user.email}>
                <DetailsField
                  disabled={true}
                  defaultValue={user.email}
                  placeholder="Enter email"
                />
              </Form.Item>
            </Col>

          </StyledRow>
          <StyledRow>
            <Col item={6} responsive={{ 834: { item: 24 } }}>
              {/* <FieldLabel>{"Mobile Number"}</FieldLabel>
              <Form.Item name="phone_number" initialValue={user.phone_number}>
                <DetailsField
                  defaultValue={user.phone_number}
                  placeholder="Enter mobile number"
                />
              </Form.Item> */}
            </Col>
            <Col item={18} responsive={{ 834: { item: 24 } }}>
              <Row gap={15} alignItems="flex-end" justifyContent="flex-end">
                <CancelButton onClick={() => showDetails(false)}>
                  {"Cancel"}
                </CancelButton>
                <SubmitButton bColor="warning" type="submit">
                  {"Save Changes"}
                </SubmitButton>
              </Row>
            </Col>
          </StyledRow>
        </Form>
      </DetailsContent>
    </DetailsWrapper>
  );
};

export default MyDetails;
