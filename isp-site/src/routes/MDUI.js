// Modules
import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkGemoji from 'remark-gemoji'
import rehypeRaw from 'rehype-raw'
import { View, Link, Text, List, Heading, SourceCodeEditor, Byline, Avatar, ToggleGroup, Img, Table, Checkbox, Grid } from '@instructure/ui'

// Components
import allowedElements from 'components/allowedElements'
import markdownSample from 'components/markdownSample.md'

// Page
function MDUI() {
  let md = markdownSample

  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(md)
      .then((response) => {
        if (response.ok) return response.text()
        else return Promise.reject("Didn't fetch text correctly")
      })
      .then((text) => {
        setContent(text)
      })
      .catch((error) => console.error(error))
  })

  const filterChildrenProps = (props) => {
    const filteredChildren = props.children.filter(
      (child) => typeof child !== "string",
    )
    return filteredChildren
  }

  const filterChildrenNode = (node) => {
    const filteredChildren = node.children.filter(
      (child) => child.type !== "text"
    )
    return filteredChildren
  }


  return (<>
		<style>
			{`#main: width: 100%!important;`}
		</style>
    <Grid startAt="large">
    	<Grid.Row>
    		<Grid.Col>
            <ReactMarkdown
                children={content}
                remarkPlugins={[remarkGfm, remarkGemoji]}
                rehypePlugins={[rehypeRaw]}
                allowedElements={allowedElements}
                components={{
                a: ({node, ...props}) => <Link to={node.href} {...props} />,
                p: ({node, ...props}) => <Text as={node.tagName} {...props} />,
                em: ({node, ...props}) => <Text fontStyle="italic" {...props} />,
                strong: ({node, ...props}) => <Text weight="bold" {...props} />,
                span: ({node, ...props}) => <Text {...props} />,
                code: ({node, ...props}) => <Text as={node.tagName} {...props} />,
                del: ({node, ...props}) => <Text as={node.tagName} {...props} />,
                blockquote: ({node, ...props}) => { 
                    node = {...node, children: filterChildrenNode(node)}
                    props = { ...props, children: filterChildrenProps(props) }
                    const quoteArr = props.children[0].props.children[0].split("--", 2)
                    const quote = quoteArr[0]
                    const author = (quoteArr.length > 1) ? quoteArr[1] : false
                    return(
                        <Byline description={quote}  title={author} margin="medium 0" {...props}  >
                        <>{ author ? <Avatar name={author} /> : null}</>
                        </Byline>
                    )
                },
                h1: ({node, ...props}) => {
                    props.level = node.tagName
                    return <Heading margin="none none medium" {...props} />
                },
                h2: ({node, ...props}) => {
                    props.level = node.tagName;
                    return <Heading margin="small none" {...props} />
                },
                h3: ({node, ...props}) => {
                    props.level = node.tagName
                    return <Heading margin="small none" {...props} />
                },
                h4: ({node, ...props}) => {
                    props.level = node.tagName
                    return <Heading {...props} />
                },
                h5: ({node, ...props}) => {
                    props.level = node.tagName
                    return <Heading {...props} />
                },
                h6: ({node, ...props}) => {
                    props.level = 'h5'
                    return <Heading as="h6" {...props} />
                },
                img: ({node, ...props}) => <Img {...props} />,
                div: ({node, ...props}) => <View as={node.tagName} {...props} />,
                pre: ({node, ...props}) => {
                    if (node.children.length === 1 && node.children[0].tagName === 'code') {
                    let preContent = node.children[0].children[0].value
                    if (preContent.endsWith("\n")) {
                        preContent = preContent.slice(0, -1)
                    }
                    return (
                        <SourceCodeEditor
                        label='editable code editor'
                        lineNumbers={true}
                        foldGutter={true}
                        editable={true}
                        readOnly={true}
                        defaultValue={preContent}
                        />
                    )
                    } else {
                    return <View as={node.tagName} {...props} />
                    }
                },
                ul: ({node, ...props}) => {
                    node = {...node, children: filterChildrenNode(node)}
                    props = { ...props, children: filterChildrenProps(props) }
                    var {children, ...ulProps} = props
                    var tasklist = (props.className === "contains-task-list")
                    return (
                    <List isUnstyled={(tasklist) ? true : false} {...ulProps} >
                        {children.map((node, i) => {
                        if (tasklist) {
                            var {children, ...liProps} = node.props
                            children.shift()
                            const check = (liProps.checked) ? true : false
                            return(
                            <List.Item key={i} margin="0 0 small small" {...liProps} >
                                <Checkbox label={children} disabled={true} defaultChecked={check} />
                            </List.Item>
                            )
                        } else {
                            return <List.Item key={i} {...node.props} />
                        }
                        })}
                    </List>
                    )
                },
                ol: ({node, ...props}) => {
                    node = {...node, children: filterChildrenNode(node)}
                    props = { ...props, children: filterChildrenProps(props) }
                    var {children, ...fProps} = props
                    return (
                    <List as={node.tagName} {...fProps} >
                        {children.map((node, i) => {
                        return <List.Item key={i}  {...node.props} />
                        })}
                    </List>
                    )
                },
                li: ({node, ...props}) => <List.Item {...props} />,
                input:  ({node, ...props}) => {
                    switch(props.type) {
                    default:
                        return <node.tagName {...props} />
                    }
                },
                details: ({node, ...props}) => {
                    node = {...node, children: filterChildrenNode(node)}
                    props = {...props, children: filterChildrenProps(props)}
                    const label = props.children.shift()
                    return(
                    <ToggleGroup
                        toggleLabel="Click for details"
                        summary={label}
                    >
                        <View display="block" padding="small" {...props} />
                    </ToggleGroup>
                    )
                },
                table: ({node, ...props}) => {
                    var {children, ...tableProps} = props
                    return(
                    <Table margin="medium none" hover={true} caption="" {...tableProps}>
                        {children.map((node, i) => {
                        var {children, ...thbProps} = node.props
                        if (node.type === "thead") {
                            return (
                            <Table.Head key={i} {...thbProps}>
                                {children.map((node, i) => {
                                var {children, ...trProps} = node.props
                                return (
                                    <Table.Row key={i} {...trProps}>
                                    {children.map((node, i) => {

                                        return <Table.ColHeader key={i} id={i.toString()} {...node.props} />
                                    })}
                                    </Table.Row>
                                )
                                })}
                            </Table.Head>
                            )
                        } else {
                            return (
                            <Table.Body key={i} {...thbProps}>
                                {children.map((node, i) => {
                                var {children, ...trProps} = node.props
                                return (
                                    <Table.Row key={i} {...trProps}>
                                    {children.map((node, i) => {
                                        if(node.props.hasOwnProperty("style")) {
                                        var align = "start"
                                        switch (node.props.style.textAlign) {
                                            case "left":
                                            align = "start"
                                            break;
                                            case "center":
                                            align = "center"
                                            break;
                                            case "right":
                                            align = "end"
                                            break;
                                            default:
                                                align = "start"
                                        }
                                        }
                                        return <Table.Cell textAlign={align} key={i} {...node.props} />
                                    })}
                                    </Table.Row>
                                )
                                })}
                            </Table.Body>
                            )
                        }
                        })}
                    </Table>
                    )
                }
                }}
            />
</Grid.Col>
<Grid.Col>
<SourceCodeEditor
          label='Markdown Source'
          language="markdown"
					readOnly={true}
					editable={true}
          lineNumbers={true}
          foldGutter={true}
          highlightActiveLineGutter={true}
          highlightActiveLine={true}
					lineWrapping={true}
					/* TODO figure out why ${content} isn't carrying through. */
          defaultValue={`
# Markdown to Instructure UI Components

This page is rendered from [github-flavored markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) and passing the content through [react-markdown](https://github.com/remarkjs/react-markdown) to [Instructure UI](https://instructure.design/).  The result is accessible, well styled, and modular content created simply with markdown.

## Tables

### Normal table

| First Header     | Second Header    |
| ---------------- | ---------------- |
| Content Cell A1  | Content Cell B1  |
| Content Cell A2  | Content Cell B2  |

### Table with fancy formatting

| Command | Description |
| --- | --- |
| \`git status\` | List all *new or modified* files |
| \`git diff\` | Show file differences that **haven't been** staged |

### Table with columnar alignment
| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |

## Details

<details><summary>CLICK ME</summary>

#### We can hide anything

Hello world!

</details>

## Quotes

> Text that is a quote -- Author Name

> Long quote w/ no attribution, and linebreaks in MD. Bacon ipsum dolor amet biltong pastrami shankle venison jowl meatloaf.
> Ham jowl leberkas salami fatback sausage chuck pancetta short loin meatball, filet mignon chislic. 
> Tri-tip ham hock ball tip, frankfurter bacon buffalo hamburger chuck turkey filet mignon andouille rump ground round doner short ribs. 
> Fatback short ribs bresaola, turducken ball tip drumstick meatloaf t-bone venison pork belly pig landjaeger chicken salami hamburger. 
> Jowl pork shank t-bone short loin.

## Code

Use \`git status\` to list all new or modified files that haven't yet been committed.

Some basic Git commands are:
\`\`\`
git status
git add
git commit
\`\`\`

\`\`\`javascript
const msg = \`you need to know about \${err}.\`
alert(msg)
console.warn("User alerted:", msg)
\`\`\`

<pre>This is some preformatted text, but it is NOT code</pre>

## Lists

1. James Madison
2. James Monroe
3. John Quincy Adams

* George Washington
* John Adams
* Thomas Jefferson

- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:

## Text

Emoji: @octocat :+1: This PR looks great - it's ready to merge!

Text style: *italic* **bold** ~struck~

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

**Bacon** ipsum dolor amet beef ribs porchetta shank prosciutto burgdoggen sirloin pork belly pancetta picanha drumstick shoulder meatloaf. Sausage ground round flank shank venison, turducken frankfurter sirloin landjaeger jerky bresaola swine picanha. Buffalo shank short ribs rump swine tail, meatloaf capicola venison pork loin cupim. Buffalo spare ribs ribeye sausage. Ground round porchetta cow, landjaeger pork belly jowl picanha salami. Pork belly pancetta spare ribs swine t-bone, meatloaf bresaola kielbasa pastrami burgdoggen turkey sausage ham hock. Ribeye shank tenderloin beef ribs tail venison drumstick tongue pastrami.

Shank spare ribs sausage landjaeger strip steak jerky, fatback salami tenderloin ball tip pastrami pork. Meatball tri-tip ham tongue, beef ribs chuck boudin short ribs pork burgdoggen spare ribs shankle bacon picanha. Burgdoggen pork meatball boudin venison tenderloin tail pork loin short loin chicken. Salami pork loin shankle bresaola, ground round pork pork belly beef ribs flank tongue biltong pastrami cow. Hamburger cupim sausage tri-tip. Ham rump shoulder, ground round sausage flank hamburger spare ribs picanha bacon chuck strip steak.
`}
					/>
        </Grid.Col>
				</Grid.Row>
    </Grid>
		</>)
}

export default MDUI
