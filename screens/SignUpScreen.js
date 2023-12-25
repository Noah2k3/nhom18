import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Xử lý logic đăng ký ở đây
    // Kiểm tra tài khoản, mật khẩu và nhập lại mật khẩu có giống nhau không
    if (username && password && password === confirmPassword) {
      // Đăng ký thành công, chuyển đến màn hình đăng nhập
      alert('Đăng kí thành công')
      navigation.navigate('Login');
    } else {
      alert('Vui lòng điền lại thông tin đăng kí');
    }
  };

  return (
    <View style={styles.container}>
    <Image source={require('../assets/images/logo.png')} style={styles.headerImage} />
    <View style={styles.container}>
      <TextInput
        placeholder="Tài khoản"
        onChangeText={text => setUsername(text)}
        value={username}
        style={styles.input}
      />
      <TextInput
        placeholder="Mật khẩu"
        onChangeText={text => setPassword(text)}
        value={password}
        style={styles.input}
        secureTextEntry
      />
      <TextInput
        placeholder="Nhập lại mật khẩu"
        onChangeText={text => setConfirmPassword(text)}
        value={confirmPassword}
        style={styles.input}
        secureTextEntry
      />
        <Button
          title="Đăng kí"
          buttonStyle={styles.signupButton}
          titleStyle={styles.signupButtonText}
          onPress={handleSignup}
      />

    </View>
    </View>
  );
};

SignupScreen.navigationOptions = {
  title: 'Đăng ký tài khoản CookPad', // Đổi tiêu đề của header ở đây
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom:20,
    width: 300,
    height: 40,
    borderBottomWidth: 2,
    margin: 10,
    borderWidth: 1, // Kích thước viền
    borderColor: 'gray', // Màu viền
    borderRadius: 10, // Độ cong của góc
  },
  signupButton: {
    backgroundColor: '#3498db', // Màu nền của nút
    width: 200, // Điều chỉnh kích thước nút theo ý muốn
    borderRadius: 40, // Điều chỉnh góc bo tròn ở đây
  },
  signupButtonText: {
    fontSize: 18, // Kích thước chữ trong nút
  },
});

export default SignupScreen;
