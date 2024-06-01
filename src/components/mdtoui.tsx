import React, { ReactNode } from "react";
import { Children } from "react";
import {
  Alert,
  Avatar,
  Button,
  Byline,
  Checkbox,
  Heading,
  Img,
  Link,
  List,
  SourceCodeEditor,
  Table,
  Text,
  ToggleDetails,
  View,
} from "@instructure/ui";
import type { AsElementType } from "@instructure/shared-types";

const filterChildrenProps = (props: { children: unknown }) => {
  return Children.map(props.children, (child) =>
    typeof child !== "string" ? child : null,
  );
};

const alignStr = (p: { style?: { textAlign?: string } }): string => {
  return (
    p?.style?.textAlign?.replace(/\b(left|right)\b/, (s) =>
      s === "left" ? "start" : "end",
    ) ?? "start"
  );
};

const mdtoui: MarkdownCustomRenderer = {
  hr: ({ node, ...props }) => (
    <View
      as={node?.tagName as AsElementType}
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
  span: ({ node, ...props }) => <Text as={node.tagName} {...props} />,
  code: ({ node, ...props }) => <Text as={node.tagName} {...props} />,
  del: ({ node, ...props }) => <Text as={node.tagName} {...props} />,
  blockquote: ({ node, ...props }) => {
    props = {
      ...props,
      children: filterChildrenProps(props),
    };
    const alertRegex = /\[\!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/;

    const alertTypes: Record<string, "info" | "success" | "warning" | "error"> =
      {
        NOTE: "info",
        TIP: "success",
        IMPORTANT: "info",
        WARNING: "warning",
        CAUTION: "error",
      };
    const firstChild = Children.toArray(props.children)[0];
    let quote: string;
    let author: string;

    if (React.isValidElement(firstChild)) {
      [quote, author] = firstChild.props.children.toString().split("--", 2);
    } else {
      [quote, author] = firstChild.toString().split("--", 2);
    }
    const alert = quote.match(alertRegex);
    if (alert) {
      return (
        <Alert variant={alertTypes[alert[1] as keyof typeof alertTypes]}>
          {quote.replace(`${alert[0]}`, "")}
        </Alert>
      );
    }
    return (
      <Byline description={quote} title={author} margin="medium 0" {...props}>
        {author ? <Avatar name={author} /> : <></>}
      </Byline>
    );
  },
  h1: ({ node, ...props }) => (
    <Heading margin="none none medium" level={node.tagName} {...props} />
  ),
  h2: ({ node, ...props }) => (
    <Heading margin="small none" level={node.tagName} {...props} />
  ),
  h3: ({ node, ...props }) => (
    <Heading margin="small none" level={node.tagName} {...props} />
  ),
  h4: ({ node, ...props }) => <Heading level={node.tagName} {...props} />,
  h5: ({ node, ...props }) => <Heading level={node.tagName} {...props} />,
  h6: ({ node, ...props }) => <Heading as="h6" {...props} />,
  img: ({ node, ...props }) => <Img src={node.src} {...props} />,
  div: ({ node, ...props }) => <View as={node.tagName} {...props} />,
  pre: ({ node, ...props }) => {
    if (node.children.length === 1 && node.children[0].tagName === "code") {
      let preContent = node.children[0].children[0].value;
      if (preContent.endsWith("\n")) preContent = preContent.slice(0, -1);
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
    /**
     * @todo: cast { children, ...ulProps } type to match { node, ...props } type
     */
    const tasklist: boolean =
      // @ts-ignore
      ulProps?.className === "contains-task-list" || false;
    return (
      <List isUnstyled={tasklist} {...ulProps}>
        {Children.map(children, (child) => {
          const { children, ...liProps } = child.props;
          if (tasklist && children) {
            let checked = false;
            return (
              <List.Item key={child.key} margin="0 0 small small" {...liProps}>
                {Children.map(children, (child) => {
                  if (child?.props?.type === "checkbox")
                    checked = child?.props?.checked ?? false;

                  if (
                    child?.props?.type !== "checkbox" &&
                    child !== " " &&
                    child !== "[ ]" &&
                    child !== "[X]"
                  ) {
                    return (
                      <Checkbox
                        label={child}
                        disabled={true}
                        defaultChecked={checked}
                      />
                    );
                  }
                })}
              </List.Item>
            );
          }
          return <List.Item key={child.key} {...child.props} />;
        })}
      </List>
    );
  },
  ol: ({ node, ...props }) => {
    props = { ...props, children: filterChildrenProps(props) };
    const { children, ...fProps } = props;
    return (
      <List as={node.tagName} {...fProps}>
        {Children.map(children, (child) => {
          return <List.Item key={child.key} {...child.props} />;
        })}
      </List>
    );
  },
  input: ({ node, ...props }) => <node.tagName {...props} />,
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
                            key={child.key}
                            id={child.key}
                            textAlign={alignStr(child.props)}
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
                      return (
                        <Table.Cell
                          textAlign={alignStr(child.props)}
                          {...child.props}
                        />
                      );
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
