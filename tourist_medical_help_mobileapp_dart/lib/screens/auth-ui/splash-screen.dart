// ignore_for_file: file_names, prefer_const_constructors, avoid_unnecessary_containers, sized_box_for_whitespace

import 'dart:async';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:lottie/lottie.dart';
import 'package:tourist_medical_help_mobileapp/screens/auth-ui/sign-in-screen.dart';
import 'package:tourist_medical_help_mobileapp/utils/app-constant.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    Timer(Duration(seconds: 3), () {
      Get.offAll(() => SignInScreen());
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: AppConstant.appScendoryColor,
        appBar: AppBar(
          backgroundColor: AppConstant.appScendoryColor,
          elevation: 0,
        ),
        body: Container(
          child: Column(children: [
            Container(
              margin: EdgeInsets.only(top: 50.0),
              width: Get.width,
              alignment: Alignment.bottomCenter,
              child: Lottie.asset('assets/images/splash-icon.json'),
            )
          ]),
        ));
  }
}
