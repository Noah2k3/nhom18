import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
  Image
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import accountManager from '../data/AccountManager';

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  // Nhận danh sách tài khoản từ trang quản lý tài khoản
  const accounts = accountManager.getAccounts();

  const handleLogin = () => {
    const matchedAccount = accounts.find((account) => account.email === email && account.password === password);

    if (matchedAccount) {
      console.log('Đăng nhập thành công');
      navigation.navigate('Main');
      // Thực hiện các tác vụ khác sau khi đăng nhập thành công
    } else {
      console.log('Đăng nhập thất bại');
      alert('Email hoặc mật khẩu sai');
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}
    >
              <Image
              style={{ width: 200, height: 50, resizeMode: "cover",marginLeft:0,marginTop:30,alignItems:"center" }}
              source={{
                uri: "https://computertechpro.net/wp-content/uploads/2020/12/Cookpad.jpg",
              }}
      />
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 70,
          }}
        >
          <Text style={{ color: "#003580", fontSize: 17, fontWeight: "700" }}>
            Đăng nhập
          </Text>

          <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>
            Đăng nhập vào tài khoản
          </Text>

          <View style={{ marginTop: 50 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Email
            </Text>

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email ID"
              placeholderTextColor={"black"}
              style={{
                fontSize: password ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
                height: 60,
                
                padding: 16,
                paddingTop: 24,
                backgroundColor: 'white',               
              }}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Mật khẩu
            </Text>

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Mật khẩu"
              placeholderTextColor={"black"}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
                height: 60,              
                padding: 16,
                paddingTop: 24,
                backgroundColor: 'white',
              }}
            />
          </View>
        </View>
        <Pressable
        onPress={handleLogin}
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
            Đăng nhập
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 20 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 17 }}>
            Không có tài khoản? Đăng kí
          </Text>
          
        </Pressable>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
