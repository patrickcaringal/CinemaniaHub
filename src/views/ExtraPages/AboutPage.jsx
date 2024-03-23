import { Fragment, memo } from "react";

//components
import TeamSection from "./AboutSections/TeamSection";
import ContactUs from "./AboutSections/ContactUs";
import WorkSection from "./AboutSections/WorkSection";
import BreadcrumbWidget from "../../components/BreadcrumbWidget";

const AboutPage = memo(() => {
  return (
    <Fragment>
      <BreadcrumbWidget title="About Us" />
      <TeamSection></TeamSection>
      <ContactUs></ContactUs>
      <WorkSection></WorkSection>
    </Fragment>
  );
});

AboutPage.displayName = "AboutPage";
export default AboutPage;
