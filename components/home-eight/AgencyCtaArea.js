import React, { Component } from "react";
import Link from "next/link";
import useTranslation from "../../translation";

export default function AgencyCtaArea() {
  const t = useTranslation;

  return (
    <div className="agency-cta-area ptb-80">
      <div className="container">
        <div className="agency-cta-content">
          <h2>{t("anyQuestions")}</h2>

          <Link href="/contact">
            <a className="btn btn-gradient">{t("contact")}</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
