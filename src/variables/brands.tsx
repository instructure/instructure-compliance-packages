import {
  IconCanvasLogoLine,
  IconElevateLogoLine,
  IconImpactLogoLine,
  IconInstructureLogoLine,
  IconMasteryLogoLine,
  SVGIcon,
} from "@instructure/ui";
import global from "./globals.ts";

const readmePrefix = `${global.raw}/${global.owner}/${global.repo}/${global.branch}/README`;

export const globalBrands: GlobalBrand[] = [
  "Instructure",
  "Canvas",
  "Mastery",
  "Elevate",
  "Impact",
  "LearnPlatform",
  "Intelligent Insights",
  "Parchment",
] as const;

export const globalSubBrands: GlobalSubBrand[] = [
  ...globalBrands,
  "Canvas LMS",
  "Canvas Mobile",
  "Canvas Studio",
  "Canvas Credentials",
  "Canvas Catalog",
  "Canvas Commons",
  "Canvas Data",
  "Mastery Connect",
  "Mastery Item Bank",
  "Mastery View Assessments",
  "Elevate Data Quality",
  "Elevate Data Sync",
  "Elevate Standards Alignment",
  "LearnPlatform",
] as const;

export const ParentBrands: BrandDetail[] = [
  {
    brandName: "Instructure",
    get title() {
      return this.brandName.toLowerCase();
    },
    route: "/",
    readme: `${readmePrefix}.md`,
    color: "#287A9F",
    Icon: IconInstructureLogoLine,
  },
  {
    brandName: "Canvas",
    get title() {
      return this.brandName.toLowerCase();
    },
    get route() {
      return `/${this.title}`;
    },
    get readme() {
      return `${readmePrefix}-${this.brandName}.md`;
    },
    color: "#E72429",
    Icon: IconCanvasLogoLine,
  },
  {
    brandName: "Mastery",
    get title() {
      return this.brandName.toLowerCase();
    },
    get route() {
      return `/${this.title}`;
    },
    get readme() {
      return `${readmePrefix}-${this.brandName}.md`;
    },
    color: "#24A159",
    Icon: IconMasteryLogoLine,
  },
  {
    brandName: "Elevate",
    get title() {
      return this.brandName.toLowerCase();
    },
    get route() {
      return `/${this.title}`;
    },
    get readme() {
      return `${readmePrefix}-${this.brandName}.md`;
    },
    color: "#0097D3",
    Icon: IconElevateLogoLine,
  },
  {
    brandName: "Impact",
    get title() {
      return this.brandName.toLowerCase();
    },
    get route() {
      return `/${this.title}`;
    },
    get readme() {
      return `${readmePrefix}-${this.brandName}.md`;
    },
    color: "#F76400",
    Icon: IconImpactLogoLine,
  },
  {
    brandName: "LearnPlatform",
    get title() {
      return this.brandName.toLowerCase();
    },
    get route() {
      return `/${this.title}`;
    },
    get readme() {
      return `${readmePrefix}-${this.brandName}.md`;
    },
    color: "#0077CC",
    Icon: () => (
      <SVGIcon
        viewBox="0 0 300 300"
        size="small"
        color="primary-inverse"
        height="2.5rem"
        width="2.5rem"
      >
        <path d="M191.431 212.736H205.086C204.961 212.34 204.846 211.974 204.738 211.63C204.404 210.567 204.135 209.713 203.834 208.81C199.852 198.417 195.964 187.986 192.171 177.517C181.493 149.012 170.872 120.497 160.309 91.9733C159.911 90.214 158.223 89.0597 156.44 89.3276C151.091 89.4698 145.743 89.5267 140.423 89.3276C138.432 89 136.546 90.3293 136.184 92.3147C121.657 131.422 107.129 170.519 92.6017 209.607C92.414 210.136 92.2467 210.686 92.0507 211.329C91.9201 211.759 91.7767 212.23 91.606 212.765C93.7973 212.765 95.9464 212.748 98.0664 212.732C102.222 212.701 106.265 212.67 110.297 212.765C112.402 212.935 113.17 211.94 113.824 210.091C115.474 205.226 117.167 200.375 118.859 195.525C120.552 190.675 122.245 185.824 123.895 180.959C124.199 179.276 125.788 178.141 127.479 178.399H168.729C170.418 178.138 172.011 179.255 172.342 180.931C173.799 185.14 175.307 189.334 176.814 193.524C178.251 197.519 179.687 201.511 181.076 205.51C182.365 209.107 183.012 210.914 184.295 211.821C185.589 212.736 187.531 212.736 191.431 212.736ZM148.417 109.213C154.145 126.092 159.977 143.351 165.913 160.989H131.121L148.417 109.213Z" />
        <path d="M225 110.209V114.191H207.931V133.707H203.522V114.191H186.453V110.209H203.522V90.8069H207.732V110.209H225Z" />
        <path d="M219.488 246.567C178.123 277.109 121.739 277.405 80.0539 247.301L86.1316 238.9C47.7742 211.418 31.5805 162.32 46.069 117.435L55.9454 119.307C69.5589 79.1029 107.372 52.0989 149.847 52.2484V13C90.0696 13.0663 37.1326 51.5854 18.7192 108.414C0.305744 165.242 20.6036 227.455 68.998 262.519C117.392 297.583 182.877 297.523 231.207 262.37C279.537 227.218 299.72 164.967 281.203 108.173L272.111 111.134C289.714 164.146 271.022 222.449 225.87 255.373" />
        <path d="M219.488 246.567C178.123 277.109 121.739 277.405 80.0539 247.301L86.1316 238.9C47.7742 211.418 31.5805 162.32 46.069 117.435L55.9454 119.307C69.5589 79.1029 107.372 52.0989 149.847 52.2484V13C90.0696 13.0663 37.1326 51.5854 18.7192 108.414C0.305744 165.242 20.6036 227.455 68.998 262.519C117.392 297.583 182.877 297.523 231.207 262.37C279.537 227.218 299.72 164.967 281.203 108.173L272.111 111.134C289.714 164.146 271.022 222.449 225.87 255.373" />
      </SVGIcon>
    ),
  },
  {
    brandName: "Intelligent Insights",
    get title() {
      return this.brandName.toLowerCase();
    },
    get route() {
      return `/${this.title.replace(/ /g, "-")}`;
    },
    get readme() {
      return `${readmePrefix}-${this.brandName.replace(/ /g, "-")}.md`;
    },
    color: "#287A9F",
    Icon: IconInstructureLogoLine,
  },
  {
    brandName: "Parchment",
    get title() {
      return this.brandName.toLowerCase();
    },
    get route() {
      return `/${this.title}`;
    },
    get readme() {
      return `${readmePrefix}-${this.brandName}.md`;
    },
    color: "#0093b2",
    Icon: () => (
      <SVGIcon
        viewBox="0 -3 29 31.68"
        size="small"
        color="primary-inverse"
        height="2.5rem"
        width="2.5rem"
      >
        <polygon points="26.87 21.98 2.44 21.98 2.44 2.44 19.54 2.44 19.54 0 0 0 0 24.43 29.31 24.43 29.31 9.77 26.87 9.77" />
        <rect x="26.87" y="4.89" width="2.44" height="2.44" />
        <rect x="21.98" width="2.44" height="2.44" />
        <rect x="26.87" width="2.44" height="2.44" />
        <g>
          <path d="M9.38,13.2c-.5,0-.62.37-.62.71v1.53c0,.4.23.69.66.69.36,0,.55-.21.55-.69v-1.53c0-.42-.13-.71-.58-.71Z" />
          <path d="M9.15,11.01c-2.36,0-4.27,1.91-4.27,4.27s1.91,4.27,4.27,4.27,4.27-1.91,4.27-4.27-1.91-4.27-4.27-4.27ZM10.86,15.4c0,.81-.54,1.44-1.27,1.44-.31,0-.84-.14-.84-.38v1.87c0,.14-.18.23-.3.23h-.3c-.13,0-.31-.08-.31-.23v-5.53c0-.14.18-.28.31-.28h.31c.13,0,.29.13.29.28v.05c0-.18.44-.36.8-.36.8,0,1.31.5,1.31,1.48v1.43Z" />
        </g>
      </SVGIcon>
    ),
  },
] as const;
