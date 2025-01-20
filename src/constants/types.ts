type Mode = "light" | "dark";

import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type MuiIconType = OverridableComponent<SvgIconTypeMap<{}, "svg">>;

interface ProjectInterface {
  title: string;
  category: string;
  description: string;
  image: string;
  frameworks: string[];
  externalLink: string;
  internalLink: string;
}
interface SkillInterface {
  title: string;
  icon: string;
  level: number;
  color: string;
}

interface Social {
  title: string;
  link: string;
  icon: MuiIconType;
}

export type { Mode, ProjectInterface, SkillInterface, Social };
