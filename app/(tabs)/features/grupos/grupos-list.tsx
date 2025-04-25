import React, { useState } from "react";
import { Modal, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddEditGrupos from "./add-edit-grupos";

const ListGrupos: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView>
            <Pressable
                onPress={() => setModalVisible(true)}>
                    <Text>Adicionar Grupos</Text>
                </Pressable>
                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setModalVisible(false)}>
                    <AddEditGrupos closeModal={() => setModalVisible(false)}/>
                </Modal>
        </SafeAreaView>
    )
}

export default ListGrupos;