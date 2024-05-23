import type { Plugin } from "vite";

// The following line causes the error:
//   TypeError [ERR_IMPORT_ATTRIBUTE_MISSING]: Module "file:///.../node_modules/@iconify-json/meteocons/icons.json" needs an import attribute of "type: json"
// because esbuild omits the `with { type: "json" }` part when `target: ["node18"]` is set
import data from "@iconify-json/meteocons/icons.json" with { type: "json" };

export function examplePlugin(): Plugin {
  return {
    name: "example-plugin",
    closeBundle(): void {
      console.log(Object.keys(data.icons));
    }
  };
}
