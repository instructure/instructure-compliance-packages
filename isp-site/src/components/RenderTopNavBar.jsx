// Modules
import {
	View,
	TopNavBar,
	IconInstructureLogoSolid,
	Text,
	IconQuestionLine,
	Heading,
	Link,
	IconDiscussionLine,
	Drilldown
} from "@instructure/ui";

import "components/toggle";
import { ParentBrands } from "variables/brands";
import { getStrings, globalLangDetails } from "variables/langs";
import { strings } from "strings/header";
import { Link as Anchor } from "react-router-dom";

// Component
function RenderTopNavBar({ lang }) {
	const l = lang
	const s = getStrings(strings, l);
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
									l === "EN" ? "" : l.toLowerCase().split("_")[0]
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
										children={brand.brandName}
										href={`#${brand.route}${
											l === "EN"
												? ""
												: `/${l.toLowerCase().split("_")[0]}`
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
									showSubmenuChevron={true}
									tooltip={s.language}
									renderIcon={<IconDiscussionLine />}
									customPopoverConfig={{
										on: "click",
										placement: "bottom end",
										shouldContainFocus: true,
										children: (
											<View
												id="language"
												as="div"
												width="10rem"
												role="menu"
												tabIndex={0}
												aria-label={s.contact_info}
												position="relative"
												borderRadius="small"
											>
											<Drilldown rootPageId="root">
											<Drilldown.Page id="root">
											{globalLangDetails.map((language) => (
												<Drilldown.Option
													id={language.lang}
													key={language.code}
													disabled={language.code === l ? true : false}
												>
													{language.code === l
													? language.local										
													: <Anchor class="lang" to={`./${language.code.toLowerCase().split("_")[0]}`}>{language.local}</Anchor>
													}
												</Drilldown.Option>
											))}
											</Drilldown.Page>
											</Drilldown>
											</View>
										),
									}}
								>{s.language}</TopNavBar.Item>
								<TopNavBar.Item
									id="info"
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
