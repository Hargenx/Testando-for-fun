import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import { createTable, addEvent } from "./db";

export default function Home() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const [eventTime, setEventTime] = useState(new Date());
  const [eventDescription, setEventDescription] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const router = useRouter();

  useEffect(() => {
    createTable();
  }, []);

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

  const handleSubmit = async () => {
    try {
      await addEvent(
        eventName,
        eventDate.toLocaleDateString(),
        eventTime.toLocaleTimeString(),
        eventDescription
      );
      Alert.alert(
        "Evento Adicionado",
        `Nome: ${eventName}\nData: ${eventDate.toLocaleDateString()}\nHora: ${eventTime.toLocaleTimeString()}\nDescrição: ${eventDescription}`
      );
      setEventName("");
      setEventDate(new Date());
      setEventTime(new Date());
      setEventDescription("");
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao adicionar o evento.");
    }
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
        <Text>Data Selecionada: {eventDate.toLocaleDateString()}</Text>
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
        <Text>Hora Selecionada: {eventTime.toLocaleTimeString()}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={eventDescription}
        onChangeText={setEventDescription}
        multiline
      />
      <Button title="Adicionar Evento" onPress={handleSubmit} />
      <Button title="Ver Eventos" onPress={() => router.push("/details")} />
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
