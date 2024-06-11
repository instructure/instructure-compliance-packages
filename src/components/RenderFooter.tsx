import { IconHeartLine, Link, Text, View } from "@instructure/ui";
import strings from "../strings/footer.ts";
import { getStrings } from "../utils/langs.ts";

/**
 * Component that renders the footer.
 *
 * @param language - The language code.
 * @returns A React node representing the footer.
 */
function RenderFooter({ language }: { language: LangCode }): React.ReactNode {
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
        {s.made_with} <IconHeartLine color="error" title={s.love} /> {s.by}{" "}
        Instructure
      </Text>
    </View>
  );
}

export default RenderFooter;
