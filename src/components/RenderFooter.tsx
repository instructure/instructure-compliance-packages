import { IconHeartSolid, Link, Text, View, canvas } from "@instructure/ui";
import strings from "../strings/footer.ts";
import { getBrandDetail } from "../utils/brands.ts";
import { getStrings } from "../utils/langs.ts";

/**
 * Component that renders the footer.
 *
 * @param language - The language code.
 * @returns A React node representing the footer.
 */
function RenderFooter({
  language,
  brandColor = getBrandDetail("color"),
}: {
  language: LangCode;
  brandColor?: BrandDetail["color"];
}): React.ReactNode {
  const l = language;
  const s = getStrings(strings, l);
  return (
    <View
      id="footer"
      as="div"
      textAlign="center"
      padding="small"
      position="absolute"
      insetBlockEnd="0"
      margin="0 auto"
      width="100%"
      borderWidth="small none none"
      background="secondary"
    >
      <Text
        color="secondary"
        transform="uppercase"
        letterSpacing="expanded"
        size="small"
      >
        {s.made_with}{" "}
        <IconHeartSolid
          color="brand"
          title={s.love}
          themeOverride={{ brandColor: brandColor }}
        />{" "}
        {s.by}{" "}
        <Link
          href="https://instructure.com"
          themeOverride={{
            color: canvas.colors.contrasts.grey4570,
            focusOutlineColor: canvas.colors.contrasts.grey4570,
            hoverColor: canvas.colors.contrasts.grey4570,
            textDecorationWithinText: "none",
            hoverTextDecorationWithinText: "underline",
            textDecorationOutsideText: "none",
            hoverTextDecorationOutsideText: "underline",
          }}
        >
          Instructure
        </Link>
      </Text>
    </View>
  );
}

export default RenderFooter;
