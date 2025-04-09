import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function AddEditGrupos({ closeModal }: { closeModal: () => void }) {
    return (
        <View>
            <Text>Add Edit Grupos</Text>
            <Button title="Fechar" onPress={closeModal}></Button>
        </View>
    )
}