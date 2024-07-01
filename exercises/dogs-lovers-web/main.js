import data from "./data.js";
import { renderItems } from "./view.js";

const mainElement = document.querySelector("main");
mainElement.append(renderItems(data.dogs));
