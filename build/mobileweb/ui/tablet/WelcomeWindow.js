function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:"white"
	});
	
	var welcomeLabel = Ti.UI.createLabel({
		font: {fontSize: 48},
		color: "orange",
		text:"Hej <i>Pedersen</i> og <i>Findus</i> <br> I dag arbejder I på <i>renovering af ruder på Stærevej 23</i>. <br> Skulle I have nogle spørgsmål til dagens gøren og laden, kan I med fordel se på projektbeskrivelsen nederst i fanevælgeren. ",
		width: "90%",
		height: "100%"
	});
	self.add(welcomeLabel);
	
	var correctionLabel = Ti.UI.createLabel({
		font: {fontSize: 30},
		text: "stemmer dette ikke? tryk her",
		top: "90%"
	});
	self.add(correctionLabel);

	
	return self;
};

module.exports = ApplicationWindow;
