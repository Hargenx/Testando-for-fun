import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function App() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const [eventTime, setEventTime] = useState(new Date());
  const [eventDescription, setEventDescription] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onChangeDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || eventDate;
    setShowDatePicker(false);
    setEventDate(currentDate);
  };

  const onChangeTime = (event: any, selectedTime: any) => {
    const currentTime = selectedTime || eventTime;
    setShowTimePicker(false);
    setEventTime(currentTime);
  };

  const handleSubmit = () => {
    Alert.alert(
      "Evento Adicionado",
      `Nome: ${eventName}\nData: ${eventDate.toLocaleDateString()}\nHora: ${eventTime.toLocaleTimeString()}\nDescrição: ${eventDescription}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Evento</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Evento"
        value={eventName}
        onChangeText={setEventName}
      />
      <View>
        <Button
          title="Selecione a Data"
          onPress={() => setShowDatePicker(true)}
        />
        {showDatePicker && (
          <DateTimePicker
            value={eventDate}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}
      </View>
      <View>
        <Button
          title="Selecione a Hora"
          onPress={() => setShowTimePicker(true)}
        />
        {showTimePicker && (
          <DateTimePicker
            value={eventTime}
            mode="time"
            display="default"
            onChange={onChangeTime}
          />
        )}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={eventDescription}
        onChangeText={setEventDescription}
        multiline
      />
      <Button title="Adicionar Evento" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
