import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function CocktailsList() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.h1}>Liste des cocktails</Text>
        <ScrollView style={styles.cocktailsContent}>
          <Text style={styles.cocktailItem}>Tequila Sunrise</Text>
          <Text style={styles.cocktailItem}>Mojito</Text>
          <Text style={styles.cocktailItem}>Piña Colada</Text>
          <Text style={styles.cocktailItem}>Daiquiri</Text>
          <Text style={styles.cocktailItem}>Margarita</Text>
          <Text style={styles.cocktailItem}>Caipirinha</Text>
          <Text style={styles.cocktailItem}>Old Fashioned</Text>
          <Text style={styles.cocktailItem}>Negroni</Text>
          <Text style={styles.cocktailItem}>Cosmopolitan</Text>
          <Text style={styles.cocktailItem}>Martini</Text>
          <Text style={styles.cocktailItem}>Bloody Mary</Text>
          <Text style={styles.cocktailItem}>Espresso Martini</Text>
          <Text style={styles.cocktailItem}>Moscow Mule</Text>
          <Text style={styles.cocktailItem}>Aperol Spritz</Text>
          <Text style={styles.cocktailItem}>Mai Tai</Text>
          <Text style={styles.cocktailItem}>Whiskey Sour</Text>
          <Text style={styles.cocktailItem}>Gin Tonic</Text>
          <Text style={styles.cocktailItem}>Dark and Stormy</Text>
          <Text style={styles.cocktailItem}>Pisco Sour</Text>
          <Text style={styles.cocktailItem}>French 75</Text>
          <Text style={styles.cocktailItem}>Paloma</Text>
        </ScrollView>
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
    paddingTop: 30,
    backgroundColor: "black",
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    paddingHorizontal: 20,
    flex: 1,
    gap: 30,
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
    color: "white",
    textAlign: "center",
  },
  h1: {
    fontSize: 32,
    color: "pink",
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
