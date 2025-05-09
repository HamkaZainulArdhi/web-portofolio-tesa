import { Metadata } from "next";
import { useTranslations } from "next-intl";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Contact from "@/modules/contact";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Contact ${METADATA.exTitle}`,
  description: `Contact ${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/contact`,
  },
};

const ContactPage = () => {
  const t = useTranslations("ContactPage");

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      {/* <Contact /> */}
      <h1 className="text-5xl font-semibold text-gray-600 mx-auto text-opacity-40">Coming soon yee</h1>
    </Container>
  );
};

export default ContactPage;
