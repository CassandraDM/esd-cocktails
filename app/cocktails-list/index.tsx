import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import cocktails from "../cocktails.json";

export default function CocktailsList() {
  const router = useRouter();

  const goToCocktailDetailsScreen = (id: number) => {
    router.push(`/cocktails-list/${id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.h1}>Liste des cocktails</Text>
        <FlatList
          data={cocktails}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.cocktailItem}
              onPress={() => goToCocktailDetailsScreen(item.id)}
            >
              <Text style={styles.cocktailName}>{item.name}</Text>
              <Text style={styles.cocktailComposition}>{item.composition}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>© ESD Cocktails 2024</Text>
        <Text style={styles.warning}>
          L'abus d'alcool est dangereux pour la santé
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    paddingHorizontal: 20,
    flex: 1,
    width: "100%",
  },
  h1: {
    fontSize: 32,
    color: "pink",
    marginBottom: 10,
    textAlign: "center",
  },
  cocktailsContent: {
    flex: 1,
    width: "100%",
  },
  cocktailItem: {
    backgroundColor: "#333",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderColor: "pink",
    borderWidth: 1,
  },
  cocktailName: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  cocktailComposition: {
    fontSize: 14,
    color: "lightgrey",
    textAlign: "center",
    marginTop: 5,
  },
  text: {
    fontSize: 16,
    color: "white",
  },
  footer: {
    padding: 10,
    backgroundColor: "pink",
    alignItems: "center",
  },
  warning: {
    fontSize: 14,
    color: "grey",
  },
});
