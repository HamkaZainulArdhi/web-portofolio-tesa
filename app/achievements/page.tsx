import { useTranslations } from "next-intl";
import { Metadata } from "next";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Achievements from "@/modules/achievements";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Achievements ${METADATA.exTitle}`,
  description: `Achievements ${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/achievements`,
  },
};
const AchievementsPage = () => {
  const t = useTranslations("AchievementsPage");

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      {/* <Achievements /> */}
      <h1 className="text-5xl font-semibold text-gray-600 mx-auto text-opacity-40">Coming soon yee</h1>
    </Container>
  );
};

export default AchievementsPage;
