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
	Drilldown,
	InlineList,
} from "@instructure/ui";

import "utils/toggle";
import { ParentBrands } from "variables/brands";
import { globalLangDetails } from "variables/langs";
import strings from "strings/header";
import { getStrings } from "utils/langs";
import { Link as Anchor } from "react-router-dom";

// Component
function RenderTopNavBar({ language }) {
	const l = language;
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
								href={`#/${l === "EN" ? "" : l.toLowerCase().split("_")[0]}`}
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
											l === "EN" ? "" : `/${l.toLowerCase().split("_")[0]}`
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
									renderSubmenu={
										<Drilldown id="language" rootPageId="language">
											<Drilldown.Page id="language">
												{globalLangDetails.map((language) => (
													<Drilldown.Option
														id={language.lang}
														key={language.code}
														disabled={language.code === l}
													>
														{language.code === l ? (
															language.local
														) : (
															<Anchor
																className="lang"
																to={`./${
																	language.code !== "EN"
																		? language.code.toLowerCase().split("_")[0]
																		: ""
																}`}
															>
																{language.local}
															</Anchor>
														)}
													</Drilldown.Option>
												))}
											</Drilldown.Page>
										</Drilldown>
									}
								>
									{s.language}
								</TopNavBar.Item>
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
													<Text>{s.contact_general} </Text>
												</View>
												<View
													as="hr"
													shadow="topmost"
													borderWidth="small"
													margin="small none"
													padding="none"
													borderColor="primary"
												/>
												<InlineList delimiter="pipe" size="small">
													<InlineList.Item>
														<Link
															href={`#/links${
																l !== "EN"
																	? `/${l.toLowerCase().split("_")[0]}`
																	: ""
															}`}
														>
															{s.redirects}
														</Link>
													</InlineList.Item>
													<InlineList.Item>
														<Link
															href={`#/releases${
																l !== "EN"
																	? `/${l.toLowerCase().split("_")[0]}`
																	: ""
															}`}
														>
															{s.releases}
														</Link>
													</InlineList.Item>
													<InlineList.Item>
														<Link
															href={`#/mdui${
																l !== "EN"
																	? `/${l.toLowerCase().split("_")[0]}`
																	: ""
															}`}
														>
															MDUI
														</Link>
													</InlineList.Item>
													<InlineList.Item>
														<Link href="mailto:info@instructure.com">
															{s.contact}
														</Link>
													</InlineList.Item>
												</InlineList>
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
