import React from "react";
import CustomButton from "../CustomButton";

const SocialSignInButton = () => {
  const onSignInFacebook = () => {
    console.warn("Facebook");
  };

  const onSignInGoogle = () => {
    console.warn("Google");
  };

  const onSignInApple = () => {
    console.warn("Apple");
  };
  return (
    <>
      <CustomButton
        onPress={onSignInFacebook}
        text="Sign In with Facebook"
        bgColor="#E7EAFA"
        fgColor="#4765A9"
      />
      <CustomButton
        onPress={onSignInGoogle}
        text="Sign In with Google"
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        onPress={onSignInApple}
        text="Sign In with Apple"
        bgColor="#E3E3E3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButton;
