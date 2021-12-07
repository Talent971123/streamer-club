// import react
import React from "react";
// import component
import { WithContainer } from "components/Container";
// import views
import { HeadView, ContentView } from "views/Club/admin";

const AdminPage: React.FC = () => {
  return (
    <>
      <WithContainer
        mode="wrapper"
        mWidth={1440}
        SectionView={HeadView}
        cColor="black.200"
      />
      <WithContainer
        mWidth={1440}
        cColor="black.200"
        SectionView={ContentView}
      />
    </>
  );
};

export default AdminPage;
