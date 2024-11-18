import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const cocktails = [
  { name: "Tequila Sunrise", composition: "Tequila, Orange Juice, Grenadine" },
  {
    name: "Mojito",
    composition: "White Rum, Sugar, Lime Juice, Soda Water, Mint",
  },
  {
    name: "Piña Colada",
    composition: "White Rum, Coconut Cream, Pineapple Juice",
  },
  { name: "Daiquiri", composition: "White Rum, Sugar, Lime Juice" },
  { name: "Margarita", composition: "Tequila, Lime Juice, Cointreau" },
  { name: "Caipirinha", composition: "Cachaça, Sugar, Lime" },
  {
    name: "Old Fashioned",
    composition: "Bourbon or Rye Whiskey, Sugar, Bitters",
  },
  { name: "Negroni", composition: "Gin, Vermouth Rosso, Campari" },
  {
    name: "Cosmopolitan",
    composition: "Vodka, Triple Sec, Cranberry Juice, Lime Juice",
  },
  { name: "Martini", composition: "Gin, Dry Vermouth" },
  {
    name: "Bloody Mary",
    composition:
      "Vodka, Tomato Juice, Lemon Juice, Worcestershire Sauce, Tabasco",
  },
  { name: "Espresso Martini", composition: "Vodka, Coffee Liqueur, Espresso" },
  { name: "Moscow Mule", composition: "Vodka, Ginger Beer, Lime Juice" },
  { name: "Aperol Spritz", composition: "Aperol, Prosecco, Soda Water" },
  {
    name: "Mai Tai",
    composition:
      "White Rum, Dark Rum, Lime Juice, Orgeat Syrup, Orange Curaçao",
  },
  {
    name: "Whiskey Sour",
    composition: "Bourbon, Lemon Juice, Sugar, Egg White",
  },
  { name: "Gin Tonic", composition: "Gin, Tonic Water" },
  { name: "Dark and Stormy", composition: "Dark Rum, Ginger Beer" },
  { name: "Pisco Sour", composition: "Pisco, Lemon Juice, Sugar, Egg White" },
  { name: "French 75", composition: "Gin, Champagne, Lemon Juice, Sugar" },
  { name: "Paloma", composition: "Tequila, Grapefruit Soda" },
];

export default function CocktailsList() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.h1}>Liste des cocktails</Text>
        <ScrollView style={styles.cocktailsContent}>
          {cocktails.map((cocktail, index) => (
            <View key={index} style={styles.cocktailItem}>
              <Text style={styles.cocktailName}>{cocktail.name}</Text>
              <Text style={styles.cocktailComposition}>
                {cocktail.composition}
              </Text>
            </View>
          ))}
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
