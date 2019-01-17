# CSS and HTML
1. Website Layout

2. Traditional LAyout
-             Header
-         Navigation Menu
- Content - Main Content - Content
- Footer

3. CSS Box Model
Every Element in HTML is represented as a rectangle. 
```css
  * {
    outline: 1px solid red;
  }
```
Remember the colors when using the console dev tools"

orange is mardin
border is yellow
padding is green
content is blus

4. Margin vs. padding
If you want to add to the item itself, you use padding, if you want space use margin. 

5. Display
Display determines the type of box and how that box should behave in relation to other elements. 

inline: elements in a line next to each other, height not honored.
block: block elements block out each other. Block each other out, no more room. <div>
inline-block: a hybrid, honors height/width but non-blocking
none: hides the element; makes it inaccessible

```css
* {
  display: inline | block | inline-block | 
}
```

6. Position
Determines the position of an elment in the document
```css
* {
  position: static | block | inline-block | fixed | sticky
}
```

static: default position remains static (unchanged)
relative: relative to its default position, but element accepts offsets, you can say top, left, right etc.
absolute: removed from container flow; offsets relative to first positioned ancestor. If one of the ancestors has a relative, 

fixed: removed from all flow, fixed relative to the document.  
sticky: relative that becomes fixed on scroll; experimental - think navbars: browser suports (check)  
inherit: Inherit parents position


7. Floats
Allow us to float elements from side to side within the flow of a container. 

```css
* {
  float: none | right | left | inherit
}
```

### CSS Flexbox
Module designed for one-dimensional layout (rows or columns). You would not be dealing with both!
- Flex container and flex items
- Flex single row and single column
- Grid multi row and multi column

flex-wrap: determines behavior of overflow elements (nowrap | wrap | wrap-reverse)
justify-content: align items horizontally (flex-start | flex-end | center | space-between | space-around | space-evenly)
align-items: aligns single row of items vertically (flex-start | flex-end | center | baseline)
align-content: aligns content, vertical alignment for multi-line rows themselves (flex-start | flex-end | center | space-between | space-around | space-evenly)

order: allow you specify an order of an element
align-self: override default alignment (auto | flex-start | flex-end | center | baseline | stretch)

```css
* {
  display: flex;
  flex-direction: row | row-reverse | column | column-reverse;
}
```

### CSS Grid
Module designed for two-dimensional layout (rows and columns).

```css
* {
  display: grid | inline-grid
}
```

Bootstrap docs to see the architecture. 
CSS Grid: Is a CSS module for organizing your box layouts

Grid container has grid items.
Rows and Columns make the Grid. 

Grid-line-1 starts before the grid on both x and y-axis.
Display a container, then you can add properties below. 

```css
* {
  grid-template-columns: 100px, 100px, 100px, 100px, 100px;
  grid-template-rows: 100px, 100px;
}

/* container */

.grid {
  display: grid;
  grid-template-columns: repeat(4, lfr);
  grid-template-rows: repeat(4, lfr); 
}
```
<!-- 4 equal columns - 4 equal rows - fr is a fractional unit -->

Container Properties: This is for grid-items!!!

grid-gap: gaps between grid items; short hand for row and column gaps.
justify-items: align items horizontally (start | end | center | stretch)
align-items: align items vertically (start | end | center | stretch)

Item Properties:

grid-[column/row]-start
allows you to specify at whioch grid line the item begins.

grid-[column/row]-end
allows you to specify at whioch grid line the item ends.

grid-area
gives a designated name to a grid item
