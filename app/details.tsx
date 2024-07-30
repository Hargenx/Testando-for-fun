import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { getEvents, Event } from "./db";

export default function Details() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getEvents();
        setEvents(fetchedEvents as Event[]);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eventos Cadastrados</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.event}>
            <Text>Nome: {item.name}</Text>
            <Text>Data: {item.date}</Text>
            <Text>Hora: {item.time}</Text>
            <Text>Descrição: {item.description}</Text>
          </View>
        )}
      />
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
  event: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});
