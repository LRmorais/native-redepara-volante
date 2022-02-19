import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {Label} from './styles'

interface RadioProps {
	data: [
		{
			key: string;
			text: string;
		}
	]

}

export function RadioButton(props: RadioProps) {

	const [value, setValue] = useState('')
		return (
			<View>
				<Label labelColor='#FFF'>Veiculo:</Label>
				{props.data.map(res => {
					return (
						<View key={res.key} style={styles.container}>
							<Text style={styles.radioText}>{res.text}</Text>
							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									setValue(res.key)
								}}>
                                  {value === res.key && <View style={styles.selectedRb} />}
							</TouchableOpacity>
						</View>
					);
				})}
			</View>
		);
}
const styles = StyleSheet.create({
	container: {
      marginBottom: 25,
      alignItems: 'center',
      flexDirection: 'row',
			justifyContent: 'space-between',
	},
    radioText: {
        marginRight: 35,
        fontSize: 18,
        color: '#EF3C35',
    },
	radioCircle: {
		height: 25,
		width: 25,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#EF3C35',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: '#EF3C35',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});