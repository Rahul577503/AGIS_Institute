import React from "react";
import styles from '../../styles/Wrapper.module.css'
interface WrapperProps {
  children: React.ReactNode; 
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
