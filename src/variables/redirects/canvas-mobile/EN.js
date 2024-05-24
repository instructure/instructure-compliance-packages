const EN = [
  {
    title: "Mobile Apps (Android)",
    from: "/canvas/mobile/android",
    to: "https://play.google.com/store/apps/developer?id=Instructure",
  },
  {
    title: "Mobile Apps (iOS)",
    from: "/canvas/mobile/ios",
    to: "https://apps.apple.com/us/developer/instructure-inc/id418441198",
  },
  {
    title: "Release Notes",
    from: "/canvas/mobile/releases",
    to: "https://community.canvaslms.com/t5/Canvas-Mobile-Releases/tkb-p/CanvasMobileReleases",
  },
  {
    title: "Guides",
    from: "/canvas/mobile/guides",
    to: "https://community.canvaslms.com/t5/Canvas-Mobile-Users/gh-p/mobile",
  },
];

export default EN.map((links) => ({ ...links, lang: "EN" }));
