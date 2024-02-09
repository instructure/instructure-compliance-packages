// Modules
import {
	View,
	Link,
	Text,
	List,
	Heading,
	SourceCodeEditor,
	Byline,
	Avatar,
	Img,
	Table,
	Checkbox,
	Button,
	ToggleDetails,
} from "@instructure/ui";

const filterChildrenProps = (props) => {
	const filteredChildren = props.children.filter(
		(child) => typeof child !== "string",
	);
	return filteredChildren;
};

const mdtoui = {
	a: ({ node, ...props }) => <Link to={node.href} {...props} />,
	button: ({ node, ...props }) => <Button withBackground={false} {...props} />,
	p: ({ node, ...props }) => <Text as={node.tagName} {...props} />,
	em: ({ node, ...props }) => <Text fontStyle="italic" {...props} />,
	strong: ({ node, ...props }) => <Text weight="bold" {...props} />,
	span: ({ node, ...props }) => <Text {...props} />,
	code: ({ node, ...props }) => <Text as={node.tagName} {...props} />,
	del: ({ node, ...props }) => <Text as={node.tagName} {...props} />,
	blockquote: ({ node, ...props }) => {
		props = { ...props, children: filterChildrenProps(props) };
		const quoteArr = props.children[0].props.children[0].split("--", 2);
		const quote = quoteArr[0];
		const author = quoteArr.length > 1 ? quoteArr[1] : false;
		return (
			<Byline description={quote} title={author} margin="medium 0" {...props}>
				{author ? <Avatar name={author} /> : <></>}
			</Byline>
		);
	},
	h1: ({ node, ...props }) => {
		props.level = node.tagName;
		return <Heading margin="none none medium" {...props} />;
	},
	h2: ({ node, ...props }) => {
		props.level = node.tagName;
		return <Heading margin="small none" {...props} />;
	},
	h3: ({ node, ...props }) => {
		props.level = node.tagName;
		return <Heading margin="small none" {...props} />;
	},
	h4: ({ node, ...props }) => {
		props.level = node.tagName;
		return <Heading {...props} />;
	},
	h5: ({ node, ...props }) => {
		props.level = node.tagName;
		return <Heading {...props} />;
	},
	h6: ({ node, ...props }) => {
		props.level = "h5";
		return <Heading as="h6" {...props} />;
	},
	img: ({ node, ...props }) => <Img {...props} />,
	div: ({ node, ...props }) => <View as={node.tagName} {...props} />,
	pre: ({ node, ...props }) => {
		if (node.children.length === 1 && node.children[0].tagName === "code") {
			let preContent = node.children[0].children[0].value;
			if (preContent.endsWith("\n")) {
				preContent = preContent.slice(0, -1);
			}
			return (
				<SourceCodeEditor
					label="editable code editor"
					lineNumbers={true}
					foldGutter={true}
					editable={true}
					readOnly={true}
					defaultValue={preContent}
				/>
			);
		} else {
			return <View as={node.tagName} {...props} />;
		}
	},
	ul: ({ node, ...props }) => {
		props = { ...props, children: filterChildrenProps(props) };
		var { children, ...ulProps } = props;
		var tasklist = props.className === "contains-task-list";
		return (
			<List isUnstyled={tasklist ? true : false} {...ulProps}>
				{children.map((node, i) => {
					if (tasklist) {
						var { children, ...liProps } = node.props;
						children.shift();
						const check = liProps.checked ? true : false;
						return (
							<List.Item key={i} margin="0 0 small small" {...liProps}>
								<Checkbox
									label={children}
									disabled={true}
									defaultChecked={check}
								/>
							</List.Item>
						);
					} else {
						return <List.Item key={i} {...node.props} />;
					}
				})}
			</List>
		);
	},
	ol: ({ node, ...props }) => {
		props = { ...props, children: filterChildrenProps(props) };
		var { children, ...fProps } = props;
		return (
			<List as={node.tagName} {...fProps}>
				{children.map((node, i) => {
					return <List.Item key={i} {...node.props} />;
				})}
			</List>
		);
	},
	li: ({ node, ...props }) => <List.Item {...props} />,
	input: ({ node, ...props }) => {
		switch (props.type) {
			default:
				return <node.tagName {...props} />;
		}
	},
	details: ({ node, ...props }) => {
		props = { ...props, children: filterChildrenProps(props) };
		const label = props.children.shift();
		return (
			<ToggleDetails summary={label}>
				<View display="block" padding="small" {...props} />
			</ToggleDetails>
		);
	},
	table: ({ node, ...props }) => {
		var { children, ...tableProps } = props;
		return (
			<Table margin="medium none" hover={true} caption="" {...tableProps}>
				{children.map((node, i) => {
					var { children, ...thbProps } = node.props;
					if (node.type === "thead") {
						return (
							<Table.Head key={i} {...thbProps}>
								{children.map((node, i) => {
									var { children, ...trProps } = node.props;
									return (
										<Table.Row key={i} {...trProps}>
											{children.map((node, i) => {
												return (
													<Table.ColHeader
														key={i}
														id={i.toString()}
														{...node.props}
													/>
												);
											})}
										</Table.Row>
									);
								})}
							</Table.Head>
						);
					} else {
						return (
							<Table.Body key={i} {...thbProps}>
								{children.map((node, i) => {
									var { children, ...trProps } = node.props;
									return (
										<Table.Row key={i} {...trProps}>
											{children.map((node, i) => {
												if (node.props.hasOwnProperty("style")) {
													var align = "start";
													switch (node.props.style.textAlign) {
														case "left":
															align = "start";
															break;
														case "center":
															align = "center";
															break;
														case "right":
															align = "end";
															break;
														default:
															align = "start";
													}
												}
												return (
													<Table.Cell
														textAlign={align}
														key={i}
														{...node.props}
													/>
												);
											})}
										</Table.Row>
									);
								})}
							</Table.Body>
						);
					}
				})}
			</Table>
		);
	},
};
export default mdtoui;
