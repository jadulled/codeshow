﻿(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/fragment/fragment.html", {
        ready: function (element, options) {
            
            //fragment section
            WinJS.UI.Fragments.render("/pages/fragment/li.html", q(".fragmentPage #fragment > ul"));
            
            WinJS.UI.Fragments.render("http://www.microsoft.com", q(".fragmentPage #fragment2"));
            
            //page section
            WinJS.UI.Pages.render("/pages/flexbox/flexbox.html", q(".fragmentPage #page > div"));
        }
    });
})();
