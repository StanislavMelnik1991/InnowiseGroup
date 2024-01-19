import { NavigationElement } from "@entities/NavigationElement/NavigationElement";
import { CalendarIcon } from "@shared/uiComponents/icons/Calendar/Calendar";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <div className={styles.wrapper}>
      <NavigationElement href={"/calendar"}>
        <CalendarIcon />
        <h2>Calendar</h2>
      </NavigationElement>
    </div>
  );
};
