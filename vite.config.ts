import { defineConfig } from "vite";
import { examplePlugin } from "./example";

export default defineConfig({
  plugins: [examplePlugin()],
});
