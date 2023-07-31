import React, { useState } from 'react';
import { View, Pressable, Image, Modal, TextInput, Text, TouchableHighlight, TouchableWithoutFeedback, Alert } from 'react-native'
import { colors } from '../theme/colors';
import { globaStyles } from '../theme/global.style';
import { useTaskContext } from '../context/taskcontext/taskContext';
import { guidGenerator } from '../hooks/useTaskForm';
import CustomButton from './CustomButton';


const AddCategoryModal = () => {

    const { addCategory, modalCatVisible, setModalCatVisible } = useTaskContext()
    const [newCatName, setNewCatName] = useState('')

    return (
        <Modal
            transparent
            visible={modalCatVisible}>
            <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => setModalCatVisible(false)}>
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.4)', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableWithoutFeedback style={{ flex: 1 }} >
                        <View style={{ width: '95%', backgroundColor: colors.background, alignItems: 'center', borderRadius: 5, padding: 10 }}>
                            <Text style={globaStyles.title}>New Category</Text>
                            <View style={globaStyles.textInput}>
                                <TextInput
                                    value={newCatName}
                                    onChangeText={(text) => setNewCatName(text)}
                                    style={{ color: colors.primaryDark }}
                                    placeholder='Category name' />
                            </View>
                            <CustomButton
                                onPress={() => {
                                    if (newCatName == '') return
                                    addCategory({ title: newCatName, id: guidGenerator() })
                                    setNewCatName('')
                                    Alert.alert('', 'Category added', [{ text: "OK", onPress: () => setModalCatVisible(false) }])
                                }}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback >
        </Modal >
    )
}

export default AddCategoryModal