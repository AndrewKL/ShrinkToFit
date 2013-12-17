test("hello test", function () {
    ok(1 == "1", "Passed!");
});

test("shrink to fit", function () {
    $('#qunit-fixture').html('<div style="width:500px;height:50px;" id="area-to-shrink" class="box resize-text"><span>THISTEXTISWAYTOOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAY</span></div>');
    $('.resize-text').shrinkToFit({
        debug: true,
        success: function () { console.log("success"); },
        fail: function () { console.log("fail"); },
        complete: function () { console.log("complete"); }
    });

    $('.resize-text').each(function () {
        var containerWidth = $(this).width();
        var textContainer = $('span:visible:first', this)
        var textWidth = textContainer.width();
        var currentFontSize = parseInt(textContainer.css('font-size').replace("px", ""));
        console.log(containerWidth + " " + textWidth + " " + currentFontSize);
        ok(textWidth<containerWidth || currentFontSize === 6 );
    });
});

test("shrink to fit - shrink to minimum default font size(6px)", function () {
    $('#qunit-fixture').html('<div style="width:500px;height:50px;" id="area-to-shrink" class="box resize-text"><span>THISTEXTISWAYTOOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAYTHISTEXTISWAYTOOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAYTHISTEXTISWAYTOOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAYTHISTEXTISWAYTOOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAY</span></div>');
    $('.resize-text').shrinkToFit({
        debug: true,
    });

    $('.resize-text').each(function () {
        var containerWidth = $(this).width();
        var textContainer = $('span:visible:first', this)
        var textWidth = textContainer.width();
        var currentFontSize = parseInt(textContainer.css('font-size').replace("px", ""));
        console.log(containerWidth + " " + textWidth + " " + currentFontSize);
        ok(currentFontSize === 6);
    });
});

test("shrink to fit - shrink to minimum text size", function () {
    $('#qunit-fixture').html('<div style="width:500px;height:50px;" id="area-to-shrink" class="box resize-text"><span>THISTEXTFITS</span></div>');
    $('.resize-text').shrinkToFit({
        debug: true,
    });

    $('.resize-text').each(function () {
        var containerWidth = $(this).width();
        var textContainer = $('span:visible:first', this)
        var textWidth = textContainer.width();
        var currentFontSize = parseInt(textContainer.css('font-size').replace("px", ""));
        console.log(containerWidth + " " + textWidth + " " + currentFontSize);
        ok(textWidth < containerWidth);
    });
});

test("shrink to fit - ca set minimum text size", function () {
    $('#qunit-fixture').html('<div style="width:500px;height:50px;" id="area-to-shrink" class="box resize-text"><span>THISTEXTISWAYTOOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAYTHISTEXTISWAYTOOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAYTHISTEXTISWAYTOOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAYTHISTEXTISWAYTOOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAY</span></div>');
    $('.resize-text').shrinkToFit({
        debug: true,
        minFontSize: 7
    });

    $('.resize-text').each(function () {
        var containerWidth = $(this).width();
        var textContainer = $('span:visible:first', this)
        var textWidth = textContainer.width();
        var currentFontSize = parseInt(textContainer.css('font-size').replace("px", ""));
        console.log(containerWidth + " " + textWidth + " " + currentFontSize);
        ok(currentFontSize === 7);
    });
});

test("shrink to fit - can call success call back", function () {
    $('#qunit-fixture').html('<div style="width:500px;height:50px;" id="area-to-shrink" class="box resize-text"><span>THISTEXTISWAYTOOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAY</span></div>');
    $('.resize-text').shrinkToFit({
        debug: true,
        success: function (obj) { ok(obj != null); },
    });
});

test("shrink to fit - can call complete call back", function () {
    $('#qunit-fixture').html('<div style="width:500px;height:50px;" id="area-to-shrink" class="box resize-text"><span>THISTEXTISWAYTOOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAYTOBIGFORTHISDIVTHISTEXTISWAY</span></div>');
    $('.resize-text').shrinkToFit({
        debug: true,
        complete: function (obj) { ok(obj != null); },
    });
});