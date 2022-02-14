import React, { createContext, useContext, useEffect, useRef, useState } from "react";
// import { Input } from "components/Input";
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { Input, LinkInput } from "components/Input";
import { Dropdown } from "components/Dropdown";
//  import Browser
import { ImageBroswer } from "./ImageBrowser";
import { CommonBrowser } from "./CommonBrowser";
// import styled component
import { ProfileWrapper } from "./profile.style";
import { Avatar } from "components/Avatar";
// import assets
import logo from "assets/images/home/team1.png";
import { ClubAdminContext, ClubDetailsContext } from "pages/club/[club_slug]/admin";
import { ImageCrop_Modal } from "components/Modal";
import photo from "assets/images/layout/group.png";

// define the example data
const data = [
  {
    title: "sport1",
    value: "1",
  },
  {
    title: "sport2",
    value: "2",
  },
  {
    title: "sport3",
    value: "4",
  },
  {
    title: "sport4",
    value: "5",
  },
];

export const ProfileImageContext = createContext<any>({});

const Profile: React.FC = () => {
  const club = useContext(ClubAdminContext);
  const {clubDetails, setClubDetails} = useContext(ClubDetailsContext);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState<any>(null);
  const [flag, setFlag] = useState<boolean>(false);
  const [file, setFile] = useState<any>(null);
  const [croppedImage, setCroppedImage] = useState<any>(null);
  // const fileBannerInputRef = useRef<HTMLInputElement>(null);
  // const [filesB, setFilesB] = useState([]);
  // const [bannerImage, setBannerImage] = useState<any>(null);
  // const [bannerCroppedImage, setBannerCroppedImage] = useState<any>(null);
  // const [bannerFiles, setBannerFiles] = useState<any>(null);
  // const [flagBanner, setFlagBanner] = useState<boolean>(false);


  const onChange = (e: any) => {
    console.log(e);
  };

  const saveImage = async (file: File, imageSrc: any) => {
    setFile(file);
    setCroppedImage(imageSrc);
    setClubDetails({...clubDetails, file: file});
  };

  // const saveBannerImage = async (file: File, imageSrc: any) => {
  //   setBannerFiles(file);
  //   setBannerCroppedImage(imageSrc);
  //   setClubDetails({...clubDetails, banner_file: file});
  // };

  useEffect(() => {
    setCroppedImage(club?.logo);
    setClubDetails({
      ...clubDetails,
      name: club?.name,
      logo: club?.logo,
      // banner_image: club?.banner_image,
    })
  }, [club]);

  const onHandleCopy = async (link: string) => {
    await navigator.clipboard.writeText(link);
  };

  const values = {
    image,
    setImage,
    fileInputRef,
    files,
    setFiles,
    flag,
    setFlag,
    // flagBanner, 
    // setFlagBanner,
    // bannerImage,
    // setBannerImage,
    // filesB, 
    // setFilesB,
    // fileBannerInputRef,
  }
 
  return (
    <ProfileImageContext.Provider value={values}>
      <ProfileWrapper>
        <Row flexDirection="column" gap={50}>
          <Col item={24}>
            <Text fSize={1.5} fWeight={700} mode="p" fColor="gray.600">
              {"Profile Details"}
            </Text>
            <Text fSize={0.875} fWeight={500} fColor="gray.300">
              {"This information will appear on your Club Portal."}
            </Text>
          </Col>
          <Col item={24}>
            <Row
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap={30}
            >
              <Row>
                <Col item={12}>
                  <Text fSize={0.9375} fWeight={500} fColor="gray.300">
                    {"Club Name"}
                  </Text>
                </Col>
                <Col item={12}>
                  <Input
                    iColor="primary"
                    iSize="small"
                    iFont="normal"
                    iRadius="small"
                    placeholder="Club Name ..."
                    defaultValue={club?.name}
                    onChange={(e) => setClubDetails({...clubDetails, name: e.target.value})}
                  />
                </Col>
              </Row>
              <Row alignItems="center">
                <Col item={12}>
                  <Text fSize={0.9375} fWeight={500} fColor="gray.300">
                    {"Club Logo"}
                  </Text>
                </Col>
                <Col item={6} />
                <Col item={6}>
                  <Row gap={30} alignItems="center">
                    {croppedImage && 
                    <Avatar
                      src={croppedImage}
                      radius="circle"
                      mode="small"
                    />}
                    <CommonBrowser />
                  </Row>
                </Col>
              </Row>
              <Row alignItems="center">
                <Col item={12}>
                  <Text fSize={0.9375} fWeight={500} fColor="gray.300">
                    {"Club Banner Image"}
                  </Text>
                </Col>
                <Col item={12}>
                  <ImageBroswer />
                </Col>
              </Row>
              <Row>
                <Col item={12}>
                  <Text fSize={0.9375} fWeight={500} fColor="gray.300">
                    {"Club Domain"}
                  </Text>
                </Col>
                <Col item={12}>
                  <LinkInput onCopyLink={onHandleCopy} prefix="streamer.com" />
                </Col>
              </Row>
              <Row>
                <Col item={12}>
                  <Text fSize={0.9375} fWeight={500} fColor="gray.300">
                    {"Sport"}
                  </Text>
                </Col>
                <Col item={12}>
                  <Dropdown data={data} onChange={onChange} />
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </ProfileWrapper>
      <ImageCrop_Modal 
        show={flag}
        meta={image}
        saveImage={saveImage}
        handleClose={() => setFlag(false)}
      />
      {/* <ImageCrop_Modal 
        show={flagBanner}
        meta={bannerCroppedImage}
        saveImage={saveBannerImage}
        handleClose={() => setFlagBanner(false)}
        cropShape="rect"
      /> */}
    </ProfileImageContext.Provider>
  );
};

export default Profile;
