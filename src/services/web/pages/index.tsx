import React from "react";
import { Container } from "@fredrikkadolfsson/ui";
import { useTranslation } from "../lib/i18n";

const Index = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t("welcome")}</h1>
    </Container>
  );
};

export default React.memo(Index);
