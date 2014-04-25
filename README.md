ShrinkToFit 
===========

jquery.shrinktofit was designed to solve the problem where there are lots of big numbers that have to be stuffed into small places. This plug in is designed for slow enviorments such as IE8 where repeated optimization loops are a performance burden.  

The idea behind the plug in is to use linear extrapolation to guess the right size.  The formula used has the benefit of the minimum step size being 1px and the max size of the the current font size minus the minimum font size.
```
var estimatedFontSize = Math.floor(containerWidth / currentWidth * currentFontSize);
currentFontSize = Math.max(estimatedFontSize, options.minFontSize);
```

Example/How to use

for a fully working example see example.html file in the repo.
html:
```
<div style="width:500px;height:50px;" class="resize-text">
    <span>THISTEXTISWAYTOOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTY</span>
</div>
```
js:
```
$('.resize-text').shrinkToFit({
    debug: true, 
    success:function(){console.log("success");}, 
    fail: function(){console.log("fail");},
    complete: function(){console.log("complete");}
});
```

options/defaults
```
var defaults = {
    debug: false,
    maxIterationsPerElement: 10,
    minFontSize: 6,
    innerTag: 'span',       // contains the text to be resized
    success: null,          // callback when a resizing is done
    fail: null,             // callback when a resizing is failed
    complete: null,         // callback when all is done
};
```

 
