import React, { useState } from "react";
import {
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableOpacity,
} from "react-native";
import tailwind from "tailwind-rn";
import IonIcon from "react-native-vector-icons/Ionicons";

const Subtotal = () => {
	return (
		<View style={tailwind("bg-gray-100 rounded-xl mt-8 flex flex-col p-4")}>
			<View style={tailwind("flex flex-row justify-between")}>
				<Text style={tailwind("text-gray-400 font-bold text-lg")}>
					Subtotal
				</Text>
				<View style={tailwind("flex flex-row items-center")}>
					<Text style={tailwind("text-yellow-500 font-bold text-lg")}>
						$
					</Text>
					<Text style={tailwind("text-black font-bold text-xl")}>
						{" "}
						3,400.00
					</Text>
				</View>
			</View>
			<View style={tailwind("flex flex-row justify-between mt-3")}>
				<Text style={tailwind("text-gray-400 font-bold text-lg")}>
					Shipping
				</Text>
				<View style={tailwind("flex flex-row items-center")}>
					<Text style={tailwind("text-yellow-500 font-bold text-lg")}>
						$
					</Text>
					<Text style={tailwind("text-black font-bold text-xl")}>
						{" "}
						400.00
					</Text>
				</View>
			</View>
			<View
				style={[{ height: 1, overflow: "hidden", marginVertical: 15 }]}
			>
				<View
					style={[
						{
							height: 2,
							borderWidth: 1,
							borderColor: "black",
							borderStyle: "dashed",
						},
					]}
				></View>
			</View>
			<View style={tailwind("flex flex-row justify-between")}>
				<Text style={tailwind("text-gray-400 font-bold text-lg")}>
					Total
				</Text>
				<View style={tailwind("flex flex-row items-center")}>
					<Text style={tailwind("text-yellow-500 font-bold text-lg")}>
						$
					</Text>
					<Text style={tailwind("text-black font-bold text-xl")}>
						{" "}
						3,800.00
					</Text>
				</View>
			</View>
		</View>
	);
};

const BicycleCard = () => {
	const [amount, setAmount] = useState(1);

	return (
		<View
			style={{
				...tailwind("rounded-xl flex flex-row items-center mb-4"),
			}}
		>
			<View
				style={tailwind(
					"flex flex-row justify-between rounded-lg w-full"
				)}
			>
				<View style={tailwind("flex flex-row")}>
					<View style={tailwind("bg-gray-100 rounded-xl p-2")}>
						<Image
							source={require("../assets/images/bicycle.png")}
							style={tailwind("w-20 h-20")}
						/>
					</View>

					<View
						style={tailwind("flex flex-col justify-between ml-5")}
					>
						<Text style={tailwind("text-black text-xl")}>
							Pinarello Bike
						</Text>
						<Text style={tailwind("text-gray-400 text-sm")}>
							Mountain Bike
						</Text>
						<View style={tailwind("flex flex-row")}>
							<Text
								style={tailwind(
									"text-yellow-500 font-bold text-xl"
								)}
							>
								$
							</Text>
							<Text
								style={tailwind(
									"text-black font-bold text-2xl"
								)}
							>
								{" "}
								{Number(amount * 1200).toFixed(2)}
							</Text>
						</View>
					</View>
				</View>

				<View
					style={tailwind("flex flex-col justify-between items-end")}
				>
					<IonIcon name="ios-trash" color="orange" size={20} />
					<View style={tailwind("flex flex-row items-center")}>
						<TouchableOpacity
							style={tailwind(
								"bg-black rounded-full p-1 w-8 h-8 flex justify-center items-center"
							)}
							onPress={() => {
								if (amount > 0) setAmount(amount - 1);
							}}
						>
							<Text style={tailwind("text-white font-bold")}>
								-
							</Text>
						</TouchableOpacity>
						<Text
							style={tailwind(
								"text-black font-bold text-2xl mx-3"
							)}
						>
							{amount}
						</Text>
						<TouchableOpacity
							style={tailwind(
								"bg-yellow-500 rounded-full p-1 w-8 h-8 flex justify-center items-center"
							)}
							onPress={() => {
								setAmount(amount + 1);
							}}
						>
							<Text style={tailwind("text-white font-bold")}>
								+
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default function Cart() {
	return (
		<SafeAreaView style={tailwind("h-full w-full flex bg-white")}>
			<View style={tailwind("px-4")}>
				<View
					style={tailwind(
						"flex flex-row justify-between items-center"
					)}
				>
					<IonIcon name="ios-arrow-back-outline" size={30} />
					<View style={tailwind("flex flex-col items-center")}>
						<Text style={tailwind("text-xl font-bold")}>
							Cart list
						</Text>
						<Text
							style={tailwind("text-sm font-bold text-gray-400")}
						>
							(3 items)
						</Text>
					</View>
					<View style={tailwind("flex flex-row")}>
						<Text style={tailwind("text-white")}>BLANK</Text>
					</View>
				</View>
				<View style={tailwind("mt-8 flex flex-col")}>
					<BicycleCard />
					<BicycleCard />
					<BicycleCard />
				</View>
				<Subtotal />
				<TouchableOpacity
					style={tailwind(
						"bg-yellow-500 mt-4 p-4 rounded-xl items-center"
					)}
				>
					<Text style={tailwind("text-white font-bold text-xl")}>
						Proceed to Checkout
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
