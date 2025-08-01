import { registryItemSchema, type Registry } from "shadcn/registry"
import { z } from "zod"

import { examples } from "@/registry/registry-examples"
import { hooks } from "@/registry/registry-hooks"
import { lib } from "@/registry/registry-lib"
import { ui } from "@/registry/registry-ui"

export const registry = {
  name: "shadcn/ui",
  homepage: "https://ui.shadcn.com",
  items: z.array(registryItemSchema).parse(
    [
      {
        name: "index",
        type: "registry:style",
        dependencies: ["class-variance-authority", "lucide-react"],
        devDependencies: ["tw-animate-css"],
        registryDependencies: ["utils"],
        cssVars: {},
        files: [],
      },
      ...ui,
      ...examples,
      ...lib,
      ...hooks,
    ].map((item) => {
      // Temporary fix for dashboard-01.
      if (item.name === "dashboard-01") {
        item.dependencies?.push("@tabler/icons-react")
      }

      if (item.name === "accordion" && "tailwind" in item) {
        delete item.tailwind
      }

      return item
    })
  ),
} satisfies Registry
