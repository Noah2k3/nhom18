import { StyleSheet, Text, View ,SafeAreaView,KeyboardAvoidingView,Pressable,TextInput, Alert,Image} from 'react-native'
import React ,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import accountManager from '../data/AccountManager';

const RegisterScreen = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const navigation = useNavigation();

  const register = () => {
    if (email === "" || password === "" || phone === "") {
      Alert.alert(
        "Sai thông tin",
        "Vui lòng nhập lại thông tin",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    } else {
      // Gọi hàm thêm tài khoản từ trang quản lý tài khoản
      accountManager.addAccount(email, password, phone);

      // Hiển thị thông báo hoặc thực hiện các tác vụ khác liên quan đến đăng kí
      Alert.alert("Đăng kí thành công", "Bạn đã đăng kí tài khoản thành công");
    }
  };
  
  return (
    <SafeAreaView  style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}>
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
            marginTop: 30,
          }}
        >
          <Text style={{ color: "#003580", fontSize: 17, fontWeight: "700" }}>
            Đăng kí
          </Text>

          <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>
           Đăng kí tài khoản
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Email
            </Text>

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Nhập Email"
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
                // borderWidth: 2,
                // borderRadius: 8,
                // outline: 'none',
                // transition: 'all 0.3s', // C
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
                fontSize: password ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
                height: 60,               
                padding: 16,
                paddingTop: 24,
                backgroundColor: 'white',
                // borderWidth: 2,
                // borderRadius: 8,
                // outline: 'none',
                // transition: 'all 0.3s', // C
              }}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Số điện thoại
            </Text>

            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="Nhập số điện thoại"
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
                // borderWidth: 2,
                // borderRadius: 8,
                // outline: 'none',
                // transition: 'all 0.3s', // C
              }}
            />
          </View>
        </View>

        <Pressable
        onPress={register}
          style={{
            width: 200,
            backgroundColor: "#66dede",
            padding: 15,
            borderRadius: 7,
            marginTop: 50,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text style={{textAlign:"center",color:"white",fontSize:17,fontWeight:"bold"}}>Đăng kí</Text>
        </Pressable>

        <Pressable onPress={() => navigation.goBack()} style={{marginTop:20}}>
            <Text style={{textAlign:"center",color:"gray",fontSize:17}}>Đã có tài khoản? Đăng nhập</Text>
        </Pressable>

        
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})