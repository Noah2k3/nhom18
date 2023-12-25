import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Switch, ScrollView, StyleSheet, Pressable } from 'react-native';

const Settings = () => {
  const [receiveNotifications, setReceiveNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogout = () => {
    // logout(); // Ensure that the logout function clears the user information
    // Reset email and password to empty strings
    setEmail('');
    setPassword('');

    // Navigate back to the login screen
    navigation.navigate('Login'); // Replace 'Login' with the name of your login screen
  };

  return (
    <ScrollView style={{ padding: 16, backgroundColor: 'white' }}>
      <View style={styles.settingItem}>
        <Text style={styles.label}>Receive Notifications</Text>
        <Switch
          value={receiveNotifications}
          onValueChange={(value) => setReceiveNotifications(value)}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={(value) => setDarkMode(value)}
        />
      </View>

      <Text style={styles.title}>Chính sách bảo mật</Text>
      <Text style={styles.content}>
        {/* Nội dung của chính sách bảo mật */}
      </Text>

      <Text style={styles.title}>Điều khoản dịch vụ</Text>
      <Text style={styles.content}>
        {/* Nội dung của điều khoản dịch vụ */}
      </Text>

      <Text style={styles.title}>Những câu hỏi thường gặp</Text>
      <Text style={styles.content}>
        {/* Nội dung của những câu hỏi thường gặp */}
      </Text>

      <Text style={styles.title}>Góp ý</Text>
      <Text style={styles.content}>
        {/* Nội dung của phần góp ý */}
      </Text>

      <Text style={styles.title}>Cảm ơn</Text>

      <Pressable
        onPress={handleLogout}
          style={{
            width: 200,
            backgroundColor: "#66dede",
            padding: 15,
            borderRadius: 7,
            marginTop: 30,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Thoát
          </Text>
        </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 18,
    // fontWeight: 'bold',
    marginVertical: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 20,
  },
  thankYou: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
  },
});

export default Settings;
