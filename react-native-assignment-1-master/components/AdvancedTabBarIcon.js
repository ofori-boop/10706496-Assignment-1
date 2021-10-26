import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import tailwind from "tailwind-rn";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const TabBarAdvancedButton = ({ bgColor, ...props }) => (
	<View style={tailwind("relative items-center")} pointerEvents="box-none">
		<TouchableOpacity style={styles.button}>
			<MaterialCommunityIcons
				name="microphone"
				style={styles.buttonIcon}
			/>
		</TouchableOpacity>
	</View>
);

const styles = StyleSheet.create({
	background: {
		position: "absolute",
		top: 0,
	},
	button: {
		top: -22.5,
		justifyContent: "center",
		alignItems: "center",
		width: 55,
		height: 55,
		borderRadius: 30,
		backgroundColor: "black",
	},
	buttonIcon: {
		fontSize: 30,
		color: "#F6F7EB",
	},
});
