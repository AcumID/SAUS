function ApplicationTabGroup(Window, Window2) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var win1 = new Window("Velkommen"),
		win2 = new Window2('Registrering'),
		win3 = new Window("Indstillinger");
	
	var tab1 = Ti.UI.createTab({
		title: "Velkommen",
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	win1.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: 'Registrering',
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	win2.containingTab = tab2;
	
	var tab3 = Ti.UI.createTab({
		title: "Indstillinger",
		icon: "/images/KS_nav_ui.png",
		window: win2
	});
	win3.containingTab = tab3;
	
	self.addTab(tab1);
	self.addTab(tab2);
	self.addTab(tab3);
	
	return self;
};

module.exports = ApplicationTabGroup;
