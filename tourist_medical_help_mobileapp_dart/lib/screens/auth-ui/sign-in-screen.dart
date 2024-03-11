// ignore_for_file: sort_child_properties_last, prefer_const_constructors, prefer_const_literals_to_create_immutables, unused_field, unused_local_variable

import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:lottie/lottie.dart';
import 'package:tourist_medical_help_mobileapp/controllers/google-sign-in-controller.dart';
import 'package:tourist_medical_help_mobileapp/controllers/sign-in-controller.dart';
import 'package:tourist_medical_help_mobileapp/screens/auth-ui/forget-password-screen.dart';
import 'package:tourist_medical_help_mobileapp/screens/auth-ui/sign-up-screen.dart';
import 'package:tourist_medical_help_mobileapp/screens/user-panel/home-screen.dart';
import 'package:tourist_medical_help_mobileapp/utils/app-constant.dart';

class SignInScreen extends StatefulWidget {
  const SignInScreen({super.key});

  @override
  State<SignInScreen> createState() => _SignInScreenState();
}

class _SignInScreenState extends State<SignInScreen> {
  final GoogleSignInController _googleSignInController =
      Get.put(GoogleSignInController());

  final SignInController signInController = Get.put(SignInController());
  TextEditingController userEmail = TextEditingController();
  TextEditingController userPassword = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          iconTheme: IconThemeData(color: Colors.white),
          backgroundColor: AppConstant.appMainColor,
          centerTitle: true,
          title: Text("Sign In", style: TextStyle(color: Colors.white)),
        ),
        body: SingleChildScrollView(
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 40),
            height: MediaQuery.of(context).size.height - 50,
            width: double.infinity,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                Column(
                  children: <Widget>[
                    Column(
                      children: [
                        Lottie.asset('assets/images/sign-in-icon.json'),
                      ],
                    ),
                    const SizedBox(
                      height: 2,
                    ),
                    Text(
                      "Your health, your journey, log in for travel care.",
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 17.0,
                        fontWeight: FontWeight.bold,
                      ),
                    )
                  ],
                ),
                Column(
                  children: <Widget>[
                    TextField(
                      controller: userEmail,
                      decoration: InputDecoration(
                          hintText: "Email",
                          border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(18),
                              borderSide: BorderSide.none),
                          fillColor: Colors.blue.withOpacity(0.1),
                          filled: true,
                          prefixIcon: const Icon(Icons.email)),
                    ),
                    const SizedBox(height: 20),
                    TextField(
                      controller: userPassword,
                      decoration: InputDecoration(
                        hintText: "Password",
                        border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(18),
                            borderSide: BorderSide.none),
                        fillColor: Colors.blue.withOpacity(0.1),
                        filled: true,
                        prefixIcon: const Icon(Icons.password),
                      ),
                      obscureText: true,
                    ),
                  ],
                ),
                Container(
                  margin: EdgeInsets.symmetric(horizontal: 10.0),
                  alignment: Alignment.centerRight,
                  child: GestureDetector(
                    onTap: () {
                      Get.to(() => ForgetPasswordScreen());
                    },
                    child: Text(
                      "Forget Password?",
                      style: TextStyle(
                          color: AppConstant.appMainColor,
                          fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
                Container(
                    padding: const EdgeInsets.only(top: 3, left: 3),
                    child: ElevatedButton(
                      onPressed: () async {
                        String email = userEmail.text.trim();
                        String password = userPassword.text.trim();

                        if (email.isEmpty || password.isEmpty) {
                          Get.snackbar(
                            "Error",
                            "Please enter all details",
                            snackPosition: SnackPosition.BOTTOM,
                            backgroundColor: AppConstant.appScendoryColor,
                            colorText: Colors.black,
                          );
                        } else {
                          UserCredential? userCredential =
                              await signInController.signInMethod(
                                  email, password);

                          if (userCredential != null) {
                            if (userCredential.user!.emailVerified) {
                              Get.snackbar(
                                "Success",
                                "Login successfully!",
                                snackPosition: SnackPosition.BOTTOM,
                                backgroundColor: AppConstant.appScendoryColor,
                                colorText: Colors.black,
                              );
                              Get.offAll(() => HomeScreen());
                            } else {
                              Get.snackbar(
                                "Error",
                                "Please verify your email before login",
                                snackPosition: SnackPosition.BOTTOM,
                                backgroundColor: AppConstant.appScendoryColor,
                                colorText: Colors.black,
                              );
                            }
                          } else {
                            Get.snackbar(
                              "Error",
                              "Please try again",
                              snackPosition: SnackPosition.BOTTOM,
                              backgroundColor: AppConstant.appScendoryColor,
                              colorText: Colors.black,
                            );
                          }
                        }
                      },
                      child: const Text(
                        "Sign In",
                        style: TextStyle(fontSize: 20),
                      ),
                      style: ElevatedButton.styleFrom(
                        shape: const StadiumBorder(),
                        padding: const EdgeInsets.symmetric(vertical: 16),
                        backgroundColor: AppConstant.appMainColor,
                      ),
                    )),
                Row(
                  children: [
                    Expanded(
                      child: Divider(
                        color: AppConstant.appMainColor,
                        thickness: 1.5,
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 8.0),
                      child: Text('Or'),
                    ),
                    Expanded(
                      child: Divider(
                        color: AppConstant.appMainColor,
                        thickness: 1.5,
                      ),
                    ),
                  ],
                ),
                Container(
                  height: 45,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(25),
                    border: Border.all(
                      color: AppConstant.appMainColor,
                    ),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.white.withOpacity(0.5),
                        spreadRadius: 1,
                        blurRadius: 1,
                        offset:
                            const Offset(0, 1), // changes position of shadow
                      ),
                    ],
                  ),
                  child: TextButton(
                    onPressed: () {
                      _googleSignInController.signInWithGoogle();
                    },
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Container(
                          height: 30.0,
                          width: 30.0,
                          decoration: const BoxDecoration(
                            image: DecorationImage(
                                image: AssetImage('assets/images/google.png'),
                                fit: BoxFit.cover),
                            shape: BoxShape.circle,
                          ),
                        ),
                        const SizedBox(width: 18),
                        const Text(
                          "Sign In with Google",
                          style: TextStyle(
                            fontSize: 16,
                            color: AppConstant.appMainColor,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    const Text("Don't have an account?"),
                    TextButton(
                        onPressed: () {
                          Get.to(() => SignUpScreen());
                        },
                        child: const Text(
                          "Sign Up",
                          style: TextStyle(
                              color: AppConstant.appMainColor,
                              fontWeight: FontWeight.bold),
                        ))
                  ],
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
