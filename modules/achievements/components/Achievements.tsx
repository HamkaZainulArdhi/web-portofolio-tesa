"use client";

import { mockAchievements } from "@/modules/achievements/components/dataachievements";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

import EmptyState from "@/common/components/elements/EmptyState";
import { AchievementItem } from "@/common/types/achievements";

import AchievementCard from "./AchievementCard";
import FilterHeader from "./FilterHeader";
import { useState, useEffect } from "react";

const Achievements = () => {
  const t = useTranslations("AchievementsPage");
  const params = useSearchParams();

  const [filter, setFilter] = useState({
    category: "",
    search: "",
  });

  // Sync with query params when they change
  useEffect(() => {
    setFilter({
      category: params.get("category") || "",
      search: params.get("search") || "",
    });
  }, [params]);

  const filteredAchievements: AchievementItem[] = mockAchievements
    .filter((item) => {
      const matchCategory =
        !filter.category || item.category === filter.category;
      const matchSearch =
        !filter.search ||
        item.name.toLowerCase().includes(filter.search.toLowerCase()) ||
        item.issuing_organization
          .toLowerCase()
          .includes(filter.search.toLowerCase());
      return item.is_show && matchCategory && matchSearch;
    })
    .sort((a, b) => b.id - a.id);

  return (
    <section className="space-y-4">
      <FilterHeader totalData={mockAchievements.length} />

      {filteredAchievements.length === 0 ? (
        <EmptyState message={t("no_data")} />
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {filteredAchievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <AchievementCard {...item} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Achievements;
