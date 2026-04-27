import { Image, Linking, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const releasesUrl = 'https://github.com/Ankoay-Feno/cicd_react_native/releases';

const benefits = [
  {
    title: 'Free distribution',
    text: 'Share Android builds without a Play Store developer account.',
  },
  {
    title: 'Simple updates',
    text: 'Create a new version tag and GitHub Actions publishes the APK.',
  },
  {
    title: 'Easy testing',
    text: 'Download the APK from Releases and install it on Android devices.',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <View style={styles.iconWrap}>
            <Image source={require('../assets/images/icon.png')} style={styles.icon} />
          </View>

          <View style={styles.header}>
            <Text style={styles.label}>Android APK delivery</Text>
            <Text style={styles.title}>Phone App</Text>
            <Text style={styles.subtitle}>
              A clean React Native starter focused on Android builds, GitHub Releases, and quick
              app sharing.
            </Text>
          </View>

          <Pressable
            style={({ pressed }) => [styles.primaryButton, pressed && styles.buttonPressed]}
            onPress={() => Linking.openURL(releasesUrl)}>
            <Text style={styles.primaryButtonText}>Open Releases</Text>
          </Pressable>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>0 USD</Text>
            <Text style={styles.statLabel}>store cost</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>1 tag</Text>
            <Text style={styles.statLabel}>to release</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>APK</Text>
            <Text style={styles.statLabel}>output</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Built for a simple Android launch</Text>
          {benefits.map((benefit) => (
            <View key={benefit.title} style={styles.card}>
              <Text style={styles.cardTitle}>{benefit.title}</Text>
              <Text style={styles.cardText}>{benefit.text}</Text>
            </View>
          ))}
        </View>

        <View style={styles.releaseBox}>
          <Text style={styles.releaseTitle}>Release flow</Text>
          <Text style={styles.releaseText}>1. Push a tag like v1.0.0.</Text>
          <Text style={styles.releaseText}>2. GitHub Actions builds the Android APK.</Text>
          <Text style={styles.releaseText}>3. Install the APK from the Releases tab.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f7f8fb',
  },
  content: {
    gap: 20,
    padding: 22,
    paddingBottom: 34,
  },
  hero: {
    backgroundColor: '#ffffff',
    borderColor: '#e5e7eb',
    borderRadius: 8,
    borderWidth: 1,
    gap: 22,
    padding: 22,
  },
  iconWrap: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#ecfdf5',
    borderColor: '#bbf7d0',
    borderRadius: 8,
    borderWidth: 1,
    height: 88,
    justifyContent: 'center',
    width: 88,
  },
  icon: {
    borderRadius: 8,
    height: 64,
    width: 64,
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
  primaryButton: {
    alignItems: 'center',
    backgroundColor: '#111827',
    borderRadius: 8,
    minHeight: 52,
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  stat: {
    backgroundColor: '#ffffff',
    borderColor: '#e5e7eb',
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    minHeight: 82,
    justifyContent: 'center',
    padding: 12,
  },
  statValue: {
    color: '#047857',
    fontSize: 20,
    fontWeight: '800',
  },
  statLabel: {
    color: '#6b7280',
    fontSize: 13,
    marginTop: 4,
  },
  section: {
    gap: 10,
  },
  sectionTitle: {
    color: '#111827',
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 28,
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
  releaseBox: {
    backgroundColor: '#064e3b',
    borderRadius: 8,
    gap: 8,
    padding: 18,
  },
  releaseTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '800',
  },
  releaseText: {
    color: '#d1fae5',
    fontSize: 15,
    lineHeight: 22,
  },
  buttonPressed: {
    opacity: 0.8,
  },
});
