import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("INR");

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Dynamic styles based on theme
  const containerStyle = isDarkMode ? styles.darkContainer : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;
  const sectionStyle = isDarkMode ? styles.darkSection : styles.lightSection;
  const buttonStyle = isDarkMode ? styles.darkButton : styles.lightButton;
  const buttonTextStyle = isDarkMode ? styles.darkButtonText : styles.lightButtonText;

  return (
    <ScrollView style={[styles.container, containerStyle]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.headerText, textStyle]}>Settings</Text>
      </View>

      {/* Account Section */}
      <View style={[styles.section, sectionStyle]}>
        <Text style={[styles.sectionTitle, textStyle]}>Account</Text>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingRow}>
            <Ionicons name="person-outline" size={24} color={isDarkMode ? '#fff' : '#000'} style={styles.icon} />
            <Text style={[styles.settingLabel, textStyle]}>Profile Information</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingRow}>
            <Ionicons name="lock-closed-outline" size={24} color={isDarkMode ? '#fff' : '#000'} style={styles.icon} />
            <Text style={[styles.settingLabel, textStyle]}>Change Password</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingRow}>
            <Ionicons name="log-out-outline" size={24} color={isDarkMode ? '#fff' : '#000'} style={styles.icon} />
            <Text style={[styles.settingLabel, textStyle]}>Logout</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>

      {/* Appearance Section */}
      <View style={[styles.section, sectionStyle]}>
        <Text style={[styles.sectionTitle, textStyle]}>Appearance</Text>
        <TouchableOpacity style={[styles.settingItem, buttonStyle]} onPress={toggleTheme}>
          <View style={styles.settingRow}>
            <Ionicons
              name={isDarkMode ? 'moon' : 'sunny'}
              size={24}
              color={isDarkMode ? '#000' : '#fff'}
              style={styles.icon}
            />
            <Text style={[styles.settingLabel, buttonTextStyle]}>
              Switch to {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Notifications Section */}
      <View style={[styles.section, sectionStyle]}>
        <Text style={[styles.sectionTitle, textStyle]}>Notifications</Text>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingRow}>
            <Ionicons name="notifications-outline" size={24} color={isDarkMode ? '#fff' : '#000'} style={styles.icon} />
            <Text style={[styles.settingLabel, textStyle]}>Push Notifications</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingRow}>
            <MaterialIcons name="email" size={24} color={isDarkMode ? '#fff' : '#000'} style={styles.icon} />
            <Text style={[styles.settingLabel, textStyle]}>Email Alerts</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>

      {/* Payment Preferences Section */}
      <View style={[styles.section, sectionStyle]}>
        <Text style={[styles.sectionTitle, textStyle]}>Payment Preferences</Text>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingRow}>
            <FontAwesome name="credit-card" size={24} color={isDarkMode ? '#fff' : '#000'} style={styles.icon} />
            <Text style={[styles.settingLabel, textStyle]}>Manage Payment Methods</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingRow}>
            <MaterialIcons name="money" size={24} color={isDarkMode ? '#fff' : '#000'} style={styles.icon} />
            <Text style={[styles.settingLabel, textStyle]}>Currency: {currency}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>

      {/* Language Section */}
      <View style={[styles.section, sectionStyle]}>
        <Text style={[styles.sectionTitle, textStyle]}>Language</Text>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingRow}>
            <Ionicons name="language-outline" size={24} color={isDarkMode ? '#fff' : '#000'} style={styles.icon} />
            <Text style={[styles.settingLabel, textStyle]}>App Language: {language}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>

      {/* Support Section */}
      <View style={[styles.section, sectionStyle]}>
        <Text style={[styles.sectionTitle, textStyle]}>Support</Text>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingRow}>
            <Ionicons name="help-circle-outline" size={24} color={isDarkMode ? '#fff' : '#000'} style={styles.icon} />
            <Text style={[styles.settingLabel, textStyle]}>Help & Support</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingRow}>
            <Ionicons name="information-circle-outline" size={24} color={isDarkMode ? '#fff' : '#000'} style={styles.icon} />
            <Text style={[styles.settingLabel, textStyle]}>About Us</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingRow}>
            <MaterialIcons name="policy" size={24} color={isDarkMode ? '#fff' : '#000'} style={styles.icon} />
            <Text style={[styles.settingLabel, textStyle]}>Privacy Policy</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>

      {/* App Version */}
      <View style={styles.versionContainer}>
        <Text style={[styles.versionText, textStyle]}>App Version: 1.0.0</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  lightContainer: {
    backgroundColor: "#f5f5f5",
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  section: {
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  darkSection: {
    backgroundColor: "#1e1e1e",
  },
  lightSection: {
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 12,
  },
  settingLabel: {
    fontSize: 16,
  },
  darkText: {
    color: "#fff",
  },
  lightText: {
    color: "#000",
  },
  darkButton: {
    backgroundColor: "#81b0ff",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  lightButton: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  darkButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  lightButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  versionContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  versionText: {
    fontSize: 14,
  },
});

export default SettingsScreen;