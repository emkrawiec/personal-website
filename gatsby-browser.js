import "./src/css/index.css";
import "./src/css/nord-theme-prismjs.css";
import { fixVh } from "./src/utils/vh-fix";

export const onClientEntry = () => {
  fixVh();
};
