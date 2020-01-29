/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/hana/web/web/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});