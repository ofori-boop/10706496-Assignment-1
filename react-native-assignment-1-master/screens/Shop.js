import React from "react";
import {
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableOpacity,
	FlatList,
} from "react-native";
import tailwind from "tailwind-rn";
import IonIcon from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

const data = [
	{ title: "All" },
	{ title: "Roadbike" },
	{ title: "Mountain" },
	{ title: "Urban" },
];

const Category = ({ item }) => {
	return (
		<TouchableOpacity
			style={tailwind("bg-gray-100 p-2 rounded-lg mr-3 px-4")}
		>
			<Text
				style={tailwind(
					`text-gray-500 ${item.title === "All" && "text-yellow-500"}`
				)}
			>
				{item.title}
			</Text>
		</TouchableOpacity>
	);
};

const BicycleCard = () => {
	return (
		<TouchableOpacity
			style={{
				...tailwind("bg-gray-100 rounded-xl p-2 items-center"),
				width: "48%",
			}}
		>
			<View style={tailwind("w-full flex items-end")}>
				<View style={tailwind("rounded-full bg-white p-1")}>
					<AntDesign name="hearto" color="orange" />
				</View>
			</View>
			<Image
				source={require("../assets/images/bicycle.png")}
				style={tailwind("w-36 h-36")}
			/>
			<View style={tailwind("mt-3 items-center")}>
				<Text style={tailwind("text-gray-400 text-xl")}>
					Mountain Bike
				</Text>
				<View style={tailwind("flex flex-row")}>
					<Text style={tailwind("text-yellow-500 font-bold text-xl")}>
						$
					</Text>
					<Text style={tailwind("text-black font-bold text-xl")}>
						1,200.00
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default function Shop() {
	return (
		<SafeAreaView style={tailwind("h-full w-full flex bg-white")}>
			<View style={tailwind("px-4")}>
				<View
					style={tailwind(
						"flex flex-row justify-between items-center"
					)}
				>
					<IonIcon name="ios-menu-outline" size={30} />
					<FontAwesome name="motorcycle" size={30} />
					<View style={tailwind("flex flex-row")}>
						<AntDesign name="search1" size={25} color="black" />
						<IonIcon name="notifications-outline" size={25} />
					</View>
				</View>
				<View style={tailwind("mt-3 flex flex-row items-end")}>
					<Text style={tailwind("text-gray-500 text-2xl")}>
						The World's
					</Text>
					<Text
						style={tailwind("text-yellow-500 text-3xl font-bold")}
					>
						{" "}
						Best Bike
					</Text>
				</View>
				<View style={tailwind("mt-3 w-full flex flex-col")}>
					<Text style={tailwind("text-black text-xl font-bold")}>
						Categories
					</Text>
					<FlatList
						horizontal
						data={data}
						renderItem={Category}
						keyExtractor={(item) => item.title}
						showsHorizontalScrollIndicator={false}
						style={tailwind("mt-2")}
					/>
				</View>
				<View style={tailwind("mt-3 w-full")}>
					<FlatList
						data={data}
						renderItem={BicycleCard}
						keyExtractor={(item) => item.title}
						style={tailwind("mt-2")}
						numColumns={2}
						ItemSeparatorComponent={() => (
							<View style={{ height: 14 }} />
						)}
						columnWrapperStyle={{ justifyContent: "space-between" }}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}
