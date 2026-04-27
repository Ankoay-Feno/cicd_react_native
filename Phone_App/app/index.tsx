import { Linking, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const releaseGuideUrl = 'https://github.com';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.label}>Android APK</Text>
          <Text style={styles.title}>Phone App</Text>
          <Text style={styles.subtitle}>
            A minimal Android-focused React Native app ready for GitHub Release distribution.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Release flow</Text>
          <Text style={styles.cardText}>Push a version tag such as v1.0.0.</Text>
          <Text style={styles.cardText}>GitHub Actions builds the APK automatically.</Text>
          <Text style={styles.cardText}>Download the APK from the repository Releases tab.</Text>
        </View>

        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
          onPress={() => Linking.openURL(releaseGuideUrl)}>
          <Text style={styles.buttonText}>Open GitHub</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f7f8fb',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 22,
    padding: 24,
  },
  header: {
    gap: 10,
  },
  label: {
    color: '#047857',
    fontSize: 13,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  title: {
    color: '#111827',
    fontSize: 36,
    fontWeight: '800',
  },
  subtitle: {
    color: '#4b5563',
    fontSize: 17,
    lineHeight: 25,
  },
  card: {
    backgroundColor: '#ffffff',
    borderColor: '#e5e7eb',
    borderRadius: 8,
    borderWidth: 1,
    gap: 8,
    padding: 18,
  },
  cardTitle: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '800',
  },
  cardText: {
    color: '#374151',
    fontSize: 15,
    lineHeight: 22,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#111827',
    borderRadius: 8,
    minHeight: 52,
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
  },
});

