import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Logo from "../../../assets/images/Logo_1.png";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import SocialSignInButton from "../../components/SocialSignInButton.js/SocialSignInButton";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    // validate user
    navigation.navigate("Home");
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ padding: 20 }}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <View style={styles.root}>
          <CustomInput placeholder="email" value={email} setValue={setEmail} />
          <CustomInput
            placeholder="password"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
          <CustomButton onPress={onSignInPressed} text="Sign In" />
          <CustomButton
            onPress={onForgotPasswordPressed}
            text="Forgot password"
            type="TERTIARY"
          />
          <SocialSignInButton />
          <CustomButton
            onPress={onSignUpPressed}
            text="Don't have an account, create one"
            type="TERTIARY"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
  },
  logo: {
    alignItems: "baseline",
    width: "40%",
    maxHeight: 300,
    maxWidth: 300,
  },
});

export default SignInScreen;
