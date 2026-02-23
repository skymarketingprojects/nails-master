import React from "react";
import styles from "./FooterChip.module.css";
import type { FooterChipData } from "../../../data/footer";

interface Props {
  chip: FooterChipData;
}

export const FooterChip: React.FC<Props> = ({ chip }) => {
  return <div className={styles.chip}>{chip.label}</div>;
};
