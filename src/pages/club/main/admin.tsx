// import react
import React from "react";
// import component
import { WithContainer } from "components/Container";
// import views
import { ContentView, HeadView } from "sections/club/admin";

const AdminPage: React.FC = () => {
  return (
    <>
      <WithContainer mode="wrapper" SectionView={HeadView} cColor="black.200" />
      <WithContainer cColor="black.200" SectionView={ContentView} />
    </>
  );
};

export default AdminPage;
