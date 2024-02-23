# Markdown to Instructure UI

This page is rendered from [github-flavored markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) and passing the content through [react-markdown](https://github.com/remarkjs/react-markdown) to [Instructure UI](https://instructure.design/).  The result is accessible, well styled, and modular content created simply with markdown.

<hr />

## Tables

### Normal table

| First Header     | Second Header    |
| ---------------- | ---------------- |
| Content Cell A1  | Content Cell B1  |
| Content Cell A2  | Content Cell B2  |

### Table with fancy formatting

| Command | Description |
| --- | --- |
| `git status` | List all *new or modified* files |
| `git diff` | Show file differences that **haven't been** staged |

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

Use `git status` to list all new or modified files that haven't yet been committed.

Some basic Git commands are:
```
git status
git add
git commit
```

```javascript
const msg = `you need to know about ${err}.`
alert(msg)
console.warn("User alerted:", msg)
```

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