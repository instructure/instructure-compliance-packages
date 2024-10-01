import type { AsElementType } from "@instructure/shared-types";
import { List, Table } from "@instructure/ui";
import React, { lazy, Children } from "react";

const LazyAlert = lazy(() =>
  import("@instructure/ui").then((m) => ({ default: m.Alert })),
);
const LazyAvatar = lazy(() =>
  import("@instructure/ui").then((m) => ({ default: m.Avatar })),
);
const LazyButton = lazy(() =>
  import("@instructure/ui").then((m) => ({ default: m.Button })),
);
const LazyByline = lazy(() =>
  import("@instructure/ui").then((m) => ({ default: m.Byline })),
);
const LazyCheckbox = lazy(() =>
  import("@instructure/ui").then((m) => ({ default: m.Checkbox })),
);
const LazyHeading = lazy(() =>
  import("@instructure/ui").then((m) => ({ default: m.Heading })),
);
const LazyImg = lazy(() =>
  import("@instructure/ui").then((m) => ({ default: m.Img })),
);
const LazyLink = lazy(() =>
  import("@instructure/ui").then((m) => ({ default: m.Link })),
);
const LazySourceCodeEditor = lazy(() =>
  import("@instructure/ui").then((m) => ({ default: m.SourceCodeEditor })),
);
const LazyText = lazy(() =>
  import("@instructure/ui").then((m) => ({ default: m.Text })),
);
const LazyToggleDetails = lazy(() =>
  import("@instructure/ui").then((m) => ({ default: m.ToggleDetails })),
);
const LazyView = lazy(() =>
  import("@instructure/ui").then((m) => ({ default: m.View })),
);

const filterChildrenProps = (props: { children: unknown }): unknown => {
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

const Mdtoui: MarkdownCustomRenderer = {
  hr: ({ node, ...props }) => (
    <LazyView
      as={node?.tagName as AsElementType}
      shadow="topmost"
      borderWidth="small"
      margin="small none"
      padding="none"
      borderColor="primary"
      {...props}
    />
  ),
  a: ({ node, ...props }) => <LazyLink to={node.href} {...props} />,
  button: ({ node, ...props }) => (
    <LazyButton withBackground={false} {...props} />
  ),
  p: ({ node, ...props }) => <LazyText as={node.tagName} {...props} />,
  em: ({ node, ...props }) => <LazyText fontStyle="italic" {...props} />,
  strong: ({ node, ...props }) => <LazyText weight="bold" {...props} />,
  span: ({ node, ...props }) => <LazyText as={node.tagName} {...props} />,
  code: ({ node, ...props }) => <LazyText as={node.tagName} {...props} />,
  del: ({ node, ...props }) => <LazyText as={node.tagName} {...props} />,
  blockquote: ({ node, ...props }) => {
    props = {
      ...props,
      children: filterChildrenProps(props),
    };
    const alertRegex = /\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/;

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

    if (React.isValidElement<{ children: string }>(firstChild)) {
      [quote, author] = firstChild.props.children.split("--", 2);
    } else {
      [quote, author] = firstChild.toString().split("--", 2);
    }
    const alert = quote.match(alertRegex);
    if (alert) {
      return (
        <LazyAlert variant={alertTypes[alert[1] as keyof typeof alertTypes]}>
          {quote.replace(`${alert[0]}`, "")}
        </LazyAlert>
      );
    }
    return (
      <LazyByline
        description={quote}
        title={author}
        margin="medium 0"
        {...props}
      >
        {author ? <LazyAvatar name={author} /> : <></>}
      </LazyByline>
    );
  },
  h1: ({ node, ...props }) => (
    <LazyHeading margin="none none medium" level={node.tagName} {...props} />
  ),
  h2: ({ node, ...props }) => (
    <LazyHeading margin="small none" level={node.tagName} {...props} />
  ),
  h3: ({ node, ...props }) => (
    <LazyHeading margin="small none" level={node.tagName} {...props} />
  ),
  h4: ({ node, ...props }) => <LazyHeading level={node.tagName} {...props} />,
  h5: ({ node, ...props }) => <LazyHeading level={node.tagName} {...props} />,
  h6: ({ node, ...props }) => <LazyHeading as="h6" {...props} />,
  img: ({ node, ...props }) => <LazyImg src={node.src} {...props} />,
  div: ({ node, ...props }) => <LazyView as={node.tagName} {...props} />,
  pre: ({ node, ...props }) => {
    if (node.children.length === 1 && node.children[0].tagName === "code") {
      let preContent = node.children[0].children[0].value;
      if (preContent.endsWith("\n")) preContent = preContent.slice(0, -1);
      return (
        <LazySourceCodeEditor
          label="Code"
          lineNumbers={true}
          foldGutter={true}
          editable={true}
          readOnly={true}
          defaultValue={preContent}
        />
      );
    }
    return <LazyView as={node.tagName} {...props} />;
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
                      <LazyCheckbox
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
      <LazyToggleDetails summary={label}>
        <LazyView display="block" padding="small" {...props} />
      </LazyToggleDetails>
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
export default Mdtoui;
