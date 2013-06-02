function alreadyIncluded(){
	return true;
}

function bootstrap(Bouvardiaversion){
	
	game_information = [];
	
	game_information["fancy_introduction"] = true;
	game_information["name"] = "Bouvardia Game Template"
	game_information["publisher"] = "Bouvardia Team"
	game_information["copyright"] = "Copyright TDLive.org Incorporated"
	game_information["version"] = "1.0"
	
	game_information["introduction"] = "This is a game template for Bouvardia."
	
	room_zero = [];
	
	room_0["name"] = "Room Zero";
	room_0["description"] = "This. Is. Room. Zero.";
	room_0["connectsWest"] = undefined;
	room_0["connectsEast"] = 1;
	room_0["connectsNorth"] = undefined;
	room_0["connectsSouth"] = undefined;
	room_0["item"] = 0;
	room_0["requiredItem"] = undefined;
	
	addRoom(room_zero);
	
	room_1 = []
	
	room_1["name"] = "Room One";
	room_1["description"] = "This. Is. Room. One.";
	room_1["connectsWest"] = 0;
	room_1["connectsEast"] = undefined;
	room_1["connectsNorth"] = undefined;
	room_1["connectsSouth"] = undefined;
	room_1["item"] = undefined;
	room_1["requiredItem"] = 0;
	
	addRoom(room_1);
	
	item_0 = []
	item_0["name"] = "Room One Key";
	
	addItem(item_0);
	return true;
}