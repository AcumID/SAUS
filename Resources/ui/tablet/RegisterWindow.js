function RegisterWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:"white",
		backgroundImage:"images/stslogo.jpg",
		fullscreen: false
	});
	
	var fruit = [ 'Bananas', 'Grapes', 'Blueberries', 'Strawberries' ];
var color = [ 'blue', 'red', 'yellow', 'white' ];

var column1 = Ti.UI.createPickerColumn();

for(var i=0, ilen=fruit.length; i<ilen; i++){
  var row = Ti.UI.createPickerRow({
    title: fruit[i]
  });
  column1.addRow(row);
}

var column2 = Ti.UI.createPickerColumn();

for(var i=0, ilen=color.length; i<ilen; i++){
  var row = Ti.UI.createPickerRow({
    title: color[i]
  });
  column2.addRow(row);
}

var picker = Ti.UI.createPicker({
  columns: [column1, column2],
  selectionIndicator: true,
  useSpinner: true, // required in order to use multi-column pickers with Android
  top:50
});

function pickerDefaults(obj){
  // on iOS, must be after picker has been rendered
  picker.setSelectedRow(0, 2, false);
  picker.setSelectedRow(1, 3, false);
}

	self.add(picker);
	
	
	
	/*
	var welcomeLabel = Ti.UI.createLabel({
		font: {fontSize: 48, fontFamily: "verdana"},
		color: "orange",
		text:"registrer!",
		width: "90%",
		height: "100%"
	});
	self.add(welcomeLabel);
*/
	
	return self;
};

module.exports = RegisterWindow;
