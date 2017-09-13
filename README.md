# Check elements overlapping
Check if 2 given elements overlap

## Usage
```html
<style>
.elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 50px;
}
.element-2 {
  top: 20px;
  left: 80px;
}
.element-3 {
  top: 50px;
  left: 80px;
}
</style>
<body>
  <div class="elements element-1"></div>
  <div class="elements element-2"></div>
  <div class="elements element-3"></div>
</body>
```
```javascript
const overlap12 = checkOverlap(document.querySelector('.element-1'), document.querySelector('element-2'));
// overlap12 === true
const overlap13 = checkOverlap(document.querySelector('.element-1'), document.querySelector('element-3'));
// overlap13 === false
```
