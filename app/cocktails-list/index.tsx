import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const cocktails = [
  {
    id: 1,
    name: "Tequila Sunrise",
    composition: "Tequila, Orange Juice, Grenadine",
  },
  {
    id: 2,
    name: "Mojito",
    composition: "White Rum, Sugar, Lime Juice, Soda Water, Mint",
  },
  {
    id: 3,
    name: "Piña Colada",
    composition: "White Rum, Coconut Cream, Pineapple Juice",
  },
  { id: 4, name: "Daiquiri", composition: "White Rum, Sugar, Lime Juice" },
  { id: 5, name: "Margarita", composition: "Tequila, Lime Juice, Cointreau" },
  { id: 6, name: "Caipirinha", composition: "Cachaça, Sugar, Lime" },
  {
    id: 7,
    name: "Old Fashioned",
    composition: "Bourbon or Rye Whiskey, Sugar, Bitters",
  },
  { id: 8, name: "Negroni", composition: "Gin, Vermouth Rosso, Campari" },
  {
    id: 9,
    name: "Cosmopolitan",
    composition: "Vodka, Triple Sec, Cranberry Juice, Lime Juice",
  },
  { id: 10, name: "Martini", composition: "Gin, Dry Vermouth" },
  {
    id: 11,
    name: "Bloody Mary",
    composition:
      "Vodka, Tomato Juice, Lemon Juice, Worcestershire Sauce, Tabasco",
  },
  {
    id: 12,
    name: "Espresso Martini",
    composition: "Vodka, Coffee Liqueur, Espresso",
  },
  {
    id: 13,
    name: "Moscow Mule",
    composition: "Vodka, Ginger Beer, Lime Juice",
  },
  {
    id: 14,
    name: "Aperol Spritz",
    composition: "Aperol, Prosecco, Soda Water",
  },
  {
    id: 15,
    name: "Mai Tai",
    composition:
      "White Rum, Dark Rum, Lime Juice, Orgeat Syrup, Orange Curaçao",
  },
  {
    id: 16,
    name: "Whiskey Sour",
    composition: "Bourbon, Lemon Juice, Sugar, Egg White",
  },
  { id: 17, name: "Gin Tonic", composition: "Gin, Tonic Water" },
  { id: 18, name: "Dark and Stormy", composition: "Dark Rum, Ginger Beer" },
  {
    id: 19,
    name: "Pisco Sour",
    composition: "Pisco, Lemon Juice, Sugar, Egg White",
  },
  {
    id: 20,
    name: "French 75",
    composition: "Gin, Champagne, Lemon Juice, Sugar",
  },
  { id: 21, name: "Paloma", composition: "Tequila, Grapefruit Soda" },
];

export default function CocktailsList() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.h1}>Liste des cocktails</Text>
        <ScrollView style={styles.cocktailsContent}>
          {cocktails.map((cocktail) => (
            <View key={cocktail.id} style={styles.cocktailItem}>
              <Text style={styles.cocktailName}>{cocktail.name}</Text>
              <Text style={styles.cocktailComposition}>
                {cocktail.composition}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
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
});
