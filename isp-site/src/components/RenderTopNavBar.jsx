// Modules
import {
	View,
	TopNavBar,
	IconInstructureLogoSolid,
	Text,
	IconQuestionLine,
	Heading,
	Link,
	IconSettingsLine,
} from "@instructure/ui";

import "components/toggle";
import { ParentBrands } from "variables/brands";
import { getStrings } from "variables/langs";
import { strings } from "strings/header";
import { Link as Anchor } from "react-router-dom";

// Component
function RenderTopNavBar({ lang }) {
	const s = getStrings(strings, lang);
	const Brands = [...ParentBrands];
	Brands.shift();

	return (
		<View id="nav" as="div" tabIndex={0}>
			<TopNavBar inverseColor={true}>
				{() => (
					<TopNavBar.Layout
						navLabel="main"
						desktopConfig={{
							hideActionsUserSeparator: false,
						}}
						smallViewportConfig={{
							dropdownMenuToggleButtonLabel: s.toggle_menu,
							dropdownMenuLabel: s.main_menu,
						}}
						themeOverride={{
							desktopBackground: "#287A9F",
							smallViewportBackground: "#287A9F",
						}}
						renderBrand={
							<TopNavBar.Brand
								screenReaderLabel="Instructure"
								renderIcon={
									<IconInstructureLogoSolid
										size="small"
										color="primary-inverse"
										height="2.5rem"
										width="2.5rem"
									/>
								}
								iconBackground="#287A9F"
								href={`#/${
									lang === "EN" ? "" : lang.toLowerCase().split("_")[0]
								}`}
							/>
						}
						renderMenuItems={
							<TopNavBar.MenuItems
								listLabel={s.page_navigation}
								currentPageId=""
								renderHiddenItemsMenuTriggerLabel={(hiddenChildrenCount) =>
									`${hiddenChildrenCount} ${s.more}`
								}
							>
								{Brands.map((brand) => (
									<TopNavBar.Item
										id={brand.title}
										key={brand.title}
										href={`#${brand.route}${
											lang === "EN"
												? ""
												: `/${lang.toLowerCase().split("_")[0]}`
										}`}
										themeOverride={{ activeIndicatorColor: brand.color }}
									>
										{brand.brandName}
									</TopNavBar.Item>
								))}
							</TopNavBar.MenuItems>
						}
						renderActionItems={
							<TopNavBar.ActionItems
								listLabel={s.actions}
								renderHiddenItemsMenuTriggerLabel={(hiddenChildrenCount) =>
									`${hiddenChildrenCount} ${s.more_actions}`
								}
							>
								<TopNavBar.Item
									id="langSwitcher"
									variant="icon"
									showSubmenuChevron={false}
									tooltip={s.language}
									renderIcon={<IconSettingsLine />}
									customPopoverConfig={{
										on: "click",
										placement: "bottom end",
										shouldContainFocus: true,
										children: (
											<View
												id="language"
												as="div"
												padding="small"
												width="auto"
												role="dialog"
												tabIndex={0}
												aria-label={s.language}
												position="relative"
												borderRadius="small"
											>
												<Text as="p">
													<Anchor to={"./"}>English</Anchor>
												</Text>
												<Text as="p">
													<Anchor to={"./es"}>Español</Anchor>
												</Text>
												<Text as="p">
													<Anchor to={"./pt"}>Português</Anchor>
												</Text>
												<Text as="p">
													<Anchor to={"./de"}>Deutsch</Anchor>
												</Text>
											</View>
										),
									}}
								/>
								<TopNavBar.Item
									id="itemPopoverExample"
									variant="icon"
									showSubmenuChevron={false}
									tooltip={s.help}
									renderIcon={<IconQuestionLine />}
									customPopoverConfig={{
										on: "click",
										placement: "bottom end",
										shouldContainFocus: true,
										children: (
											<View
												id="help"
												as="div"
												padding="medium"
												width="25rem"
												role="dialog"
												tabIndex={0}
												aria-label={s.contact_info}
												position="relative"
												borderRadius="small"
											>
												<Heading level="h3">{s.contact_info}</Heading>
												<Text>{s.info_overview}</Text>
												<hr />

												<View as="div" margin="medium 0 0">
													<Text weight="bold">{s.current_customers}</Text>
													<br />
													<Text>{s.contact_csm}</Text>
												</View>

												<View as="div" margin="medium 0 0">
													<Text weight="bold">{s.prospects}</Text>
													<br />
													<Text>{s.contact_sales}</Text>
													<br />
													<Text>
														{s.contact_general}{" "}
														<Link href="mailto:info@instructure.com">
															info@instructure.com
														</Link>
													</Text>
												</View>
											</View>
										),
									}}
								>
									{s.help}
								</TopNavBar.Item>
							</TopNavBar.ActionItems>
						}
					/>
				)}
			</TopNavBar>
		</View>
	);
}

export default RenderTopNavBar;
