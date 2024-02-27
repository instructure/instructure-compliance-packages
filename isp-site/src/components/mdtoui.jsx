import { Children } from "react";

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
	return Children.map(props.children, (child) =>
		typeof child !== "string" ? child : null,
	);
};

const mdtoui = {
	hr: ({ node, ...props }) => (
		<View
			as={node.tagName}
			shadow="topmost"
			borderWidth="small"
			margin="small none"
			padding="none"
			borderColor="primary"
			{...props}
		/>
	),
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
		const [quote, author] =
			props.children[0].props.children.split("--", 2) || false;
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
					label="Code"
					lineNumbers={true}
					foldGutter={true}
					editable={true}
					readOnly={true}
					defaultValue={preContent}
				/>
			);
		}
		return <View as={node.tagName} {...props} />;
	},
	ul: ({ node, ...props }) => {
		props = { ...props, children: filterChildrenProps(props) };
		const { children, ...ulProps } = props;
		const tasklist = props.className === "contains-task-list";
		return (
			<List isUnstyled={tasklist ? true : false} {...ulProps}>
				{children.map((node, i) => {
					if (tasklist) {
						const label = [...node.props.children];
						const { children, ...liProps } = node.props;
						return (
							<List.Item
								key={i.toString()}
								margin="0 0 small small"
								{...liProps}
							>
								<Checkbox
									label={label.shift()}
									disabled={true}
									defaultChecked={liProps.node.children[0].properties.checked}
								/>
							</List.Item>
						);
					}
					return <List.Item key={i.toString()} {...node.props} />;
				})}
			</List>
		);
	},
	ol: ({ node, ...props }) => {
		props = { ...props, children: filterChildrenProps(props) };
		const { children, ...fProps } = props;
		return (
			<List as={node.tagName} {...fProps}>
				{children.map((node, i) => {
					return <List.Item key={i.toString()} {...node.props} />;
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
		const { children, ...tableProps } = props;
		return (
			<Table margin="medium none" hover={true} caption="" {...tableProps}>
				{Children.map(children, (child) => {
					const { children, ...tProps } = child.props;
					if (child.type === "thead") {
						return (
							<Table.Head {...tProps}>
								{Children.map(children, (child) => {
									const { children, ...thrProps } = child.props;
									return (
										<Table.Row {...thrProps}>
											{Children.map(children, (child) => {
												return (
													<Table.ColHeader
														key={child.toString()}
														id={child.toString()}
														{...child.props}
													/>
												);
											})}
										</Table.Row>
									);
								})}
							</Table.Head>
						);
					}
					return (
						<Table.Body {...tProps}>
							{Children.map(children, (child) => {
								const { children, ...tbrProps } = child.props;
								return (
									<Table.Row {...tbrProps}>
										{Children.map(children, (child) => {
											return <Table.Cell {...child.props} />;
										})}
									</Table.Row>
								);
							})}
						</Table.Body>
					);
				})}
			</Table>
		);
	},
};
export default mdtoui;
