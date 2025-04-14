import { useTranslations } from "next-intl";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Achievements from "@/modules/achievements";

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
