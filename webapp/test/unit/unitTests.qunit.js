/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"logaliigroups/invoicess/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
