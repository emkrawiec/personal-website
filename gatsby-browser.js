import "./src/css/index.css";
import "./src/css/nord-theme-prismjs.css";
import { fixVh } from './src/utils/vh-fix';

const onClientEntry = () => {
  fixVh();
}

export { onClientEntry }