import { useRouter } from "expo-router";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default function Index() {
  const router = useRouter();
  const goToCounter = () => {
    router.push("counter");
  };
  const goToCocktailsList = () => {
    router.push("cocktails-list");
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.h1}>ESD Cocktails</Text>
        <Text style={styles.h3}>Bonjour ESD</Text>
        <TouchableOpacity style={styles.button} onPress={goToCocktailsList}>
          <Text style={styles.buttonText}>Voir tous les cocktails</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToCounter}>
          <Text style={styles.buttonText}>Compteur</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Un cocktail est une boisson obtenue par mélange de plusieurs
          ingrédients, avec ou sans alcool :) ... à vous de voir !
        </Text>
        <View>
          <Text style={styles.h1}>Les meilleurs cocktails</Text>
          <View style={styles.cocktailsContent}>
            <Text style={styles.text}>Tequila Sunrise</Text>
            <Text style={styles.text}>Mojito</Text>
            <Text style={styles.text}>Piña Colada</Text>
          </View>
        </View>
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
    paddingTop: 50,
    backgroundColor: "black",
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    paddingHorizontal: 20,
    flex: 1,
    gap: 40,
  },
  h1: {
    fontSize: 32,
    color: "pink",
  },
  h3: {
    fontSize: 24,
    color: "lightpink",
  },
  text: {
    fontSize: 16,
    color: "white",
  },
  button: {
    backgroundColor: "pink",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
  cocktailsContent: {
    borderLeftColor: "pink",
    borderLeftWidth: 2,
    paddingLeft: 10,
    gap: 10,
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
