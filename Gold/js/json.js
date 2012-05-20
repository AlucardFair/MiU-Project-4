/*
Zachery Hernandez
VFW 1205
Project 4
5/24/2012
Body Health & Fitness
https://github.com/AlucardFair/MiU-Project-4
*/

/*Dummy Data*/
var json = {
	"workout1": {
		"training": ["Training Style: ", "Cardio"],
		"wname": ["Workout Name: ", "Running"],
		"favorite": ["Favorite: ", "No"],
		"howlong": ["How Long: ", "30" + " minutes"],
		"timeofday": ["Preferred Time: ", "Morning"],
		"completiondate": ["Completion Date: ", "2012-4-26"],
		"comments": ["Self-Motivation: ", "You can do it!!!"]
	},
	"workout2": {
		"training": ["Training Style: ", "Strength"],
		"wname": ["Workout Name: ", "Free Weights"],
		"favorite": ["Favorite: ", "Yes"],
		"howlong": ["How Long: ", "60" + " minutes"],
		"timeofday": ["Preferred Time: ", "Morning"],
		"completiondate": ["Completion Date: ", "2012-4-26"],
		"comments": ["Self-Motivation: ", "OH YEAH!!!"]
	},
	"workout3": {
		"training": ["Training Style: ", "Agility"],
		"wname": ["Workout Name: ", "Squat Thrusts"],
		"favorite": ["Favorite: ", "Yes"],
		"howlong": ["How Long: ", "10" + " minutes"],
		"timeofday": ["Preferred Time: ", "Afternoon"],
		"completiondate": ["Completion Date: ", "2012-5-3"],
		"comments": ["Self-Motivation: ", "Feel that body burn!"]
	},
	"workout4": {
		"training": ["Training Style: ", "Flexibility"],
		"wname": ["Workout Name: ", "Lunges"],
		"favorite": ["Favorite: ", "No"],
		"howlong": ["How Long: ", "10" + " minutes"],
		"timeofday": ["Preferred Time: ", "Evening"],
		"completiondate": ["Completion Date: ", "2012-5-3"],
		"comments": ["Self-Motivation: ", "Bring it on!"]
	},
	"workout5": {
		"training": ["Training Style: ", "Cardio"],
		"wname": ["Workout Name: ", "Elliptical Machine"],
		"favorite": ["Favorite: ", "No"],
		"howlong": ["How Long: ", "45" + " minutes"],
		"timeofday": ["Preferred Time: ", "Morning"],
		"completiondate": ["Completion Date: ", "2012-5-3"],
		"comments": ["Self-Motivation: ", "Don't panic, you got this!"]
	},
	"workout6": {
		"training": ["Training Style: ", "Agility"],
		"wname": ["Workout Name: ", "Stepping Stones"],
		"favorite": ["Favorite: ", "No"],
		"howlong": ["How Long: ", "10" + " minutes"],
		"timeofday": ["Preferred Time: ", "Evening"],
		"completiondate": ["Completion Date: ", "2012-5-3"],
		"comments": ["Self-Motivation: ", "Get your balance on!!"]
	},
	"workout7": {
		"training": ["Training Style: ", "Strength"],
		"wname": ["Workout Name: ", "Calf Raises"],
		"favorite": ["Favorite: ", "Yes"],
		"howlong": ["How Long: ", "15" + " minutes"],
		"timeofday": ["Preferred Time: ", "Morning"],
		"completiondate": ["Completion Date: ", "2012-5-3"],
		"comments": ["Self-Motivation: ", "Go for 300lbs today!"]
	},
	"workout8": {
		"training": ["Training Style: ", "Tone"],
		"wname": ["Workout Name: ", "Speed Walking"],
		"favorite": ["Favorite: ", "Yes"],
		"howlong": ["How Long: ", "30" + " minutes"],
		"timeofday": ["Preferred Time: ", "Evening"],
		"completiondate": ["Completion Date: ", "2012-5-4"],
		"comments": ["Self-Motivation: ", "Get those legs moving!"]
	},
	"workout9": {
		"training": ["Training Style: ", "Strength"],
		"wname": ["Workout Name: ", "Bench Press (Machine)"],
		"favorite": ["Favorite: ", "Yes"],
		"howlong": ["How Long: ", "30" + " minutes"],
		"timeofday": ["Preferred Time: ", "Afternoon"],
		"completiondate": ["Completion Date: ", "2012-5-4"],
		"comments": ["Self-Motivation: ", "Pump it!!"]
	},
	"workout10": {
		"training": ["Training Style: ", "Strength"],
		"wname": ["Workout Name: ", "Squats (Free Weights)"],
		"favorite": ["Favorite: ", "No"],
		"howlong": ["How Long: ", "10" + " minutes"],
		"timeofday": ["Preferred Time: ", "Afternoon"],
		"completiondate": ["Completion Date: ", "2012-5-4"],
		"comments": ["Self-Motivation: ", "Get 'em done!"]
	},
	"workout11": {
		"training": ["Training Style: ", "Strength"],
		"wname": ["Workout Name: ", "Weighted Sit-ups"],
		"favorite": ["Favorite: ", "Yes"],
		"howlong": ["How Long: ", "25" + " minutes"],
		"timeofday": ["Preferred Time: ", "Evening"],
		"completiondate": ["Completion Date: ", "2012-5-4"],
		"comments": ["Self-Motivation: ", "You can do it!!!"]
	},
	"workout12": {
		"training": ["Training Style: ", "Flexibility"],
		"wname": ["Workout Name: ", "Toe Touches"],
		"favorite": ["Favorite: ", "No"],
		"howlong": ["How Long: ", "15" + " minutes"],
		"timeofday": ["Preferred Time: ", "Morning"],
		"completiondate": ["Completion Date: ", "2012-5-5"],
		"comments": ["Self-Motivation: ", "Get those hamstrings loose!"]
	},
	"workout13": {
		"training": ["Training Style: ", "Agility"],
		"wname": ["Workout Name: ", "Balance Beam"],
		"favorite": ["Favorite: ", "Yes"],
		"howlong": ["How Long: ", "5" + " minutes"],
		"timeofday": ["Preferred Time: ", "Morning"],
		"completiondate": ["Completion Date: ", "2012-5-5"],
		"comments": ["Self-Motivation: ", "Stay up on it!"]
	},
	"workout14": {
		"training": ["Training Style: ", "Flexibility"],
		"wname": ["Workout Name: ", "Butterflies"],
		"favorite": ["Favorite: ", "Yes"],
		"howlong": ["How Long: ", "15" + " minutes"],
		"timeofday": ["Preferred Time: ", "Afternoon"],
		"completiondate": ["Completion Date: ", "2012-5-5"],
		"comments": ["Self-Motivation: ", "Put the nose to the toes!"]
	},
	"workout15": {
		"training": ["Training Style: ", "Cardio"],
		"wname": ["Workout Name: ", "Sprints"],
		"favorite": ["Favorite: ", "Yes"],
		"howlong": ["How Long: ", "25" + " minutes"],
		"timeofday": ["Preferred Time: ", "Afternoon"],
		"completiondate": ["Completion Date: ", "2012-5-5"],
		"comments": ["Self-Motivation: ", "Get the heart beating!"]
	},
	"workout16": {
		"training": ["Training Style: ", "Strength"],
		"wname": ["Workout Name: ", "Leg Extensions"],
		"favorite": ["Favorite: ", "No"],
		"howlong": ["How Long: ", "20" + " minutes"],
		"timeofday": ["Preferred Time: ", "Evening"],
		"completiondate": ["Completion Date: ", "2012-5-5"],
		"comments": ["Self-Motivation: ", "Get those legs in shape!"]
	},
	"workout17": {
		"training": ["Training Style: ", "Agility"],
		"wname": ["Workout Name: ", "Zig Zag Ladder"],
		"favorite": ["Favorite: ", "Yes"],
		"howlong": ["How Long: ", "55" + " minutes"],
		"timeofday": ["Preferred Time: ", "Evening"],
		"completiondate": ["Completion Date: ", "2012-5-5"],
		"comments": ["Self-Motivation: ", "Set a new record time!"]
	},
	"workout18": {
		"training": ["Training Style: ", "Tone"],
		"wname": ["Workout Name: ", "Sit-ups"],
		"favorite": ["Favorite: ", "No"],
		"howlong": ["How Long: ", "10" + " minutes"],
		"timeofday": ["Preferred Time: ", "Morning"],
		"completiondate": ["Completion Date: ", "2012-5-6"],
		"comments": ["Self-Motivation: ", "Start the day off strong!"]
	},
	"workout19": {
		"training": ["Training Style: ", "Strength"],
		"wname": ["Workout Name: ", "Decline Sit-ups"],
		"favorite": ["Favorite: ", "Yes"],
		"howlong": ["How Long: ", "15" + " minutes"],
		"timeofday": ["Preferred Time: ", "Morning"],
		"completiondate": ["Completion Date: ", "2012-5-6"],
		"comments": ["Self-Motivation: ", "Keep those abs tight!"]
	},
	"workout20": {
		"training": ["Training Style: ", "Cardio"],
		"wname": ["Workout Name: ", "Swimming"],
		"favorite": ["Favorite: ", "Yes"],
		"howlong": ["How Long: ", "60" + " minutes"],
		"timeofday": ["Preferred Time: ", "Afternoon"],
		"completiondate": ["Completion Date: ", "2012-5-6"],
		"comments": ["Self-Motivation: ", "Time to cool off!"]
	}
};