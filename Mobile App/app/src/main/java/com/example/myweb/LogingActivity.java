package com.example.myweb;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class LogingActivity extends AppCompatActivity {


    EditText edUsername, edPassword;
    Button btn;
    TextView tv;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_loging);

        edUsername = findViewById(R.id.editTextLoggingUsername);
        edPassword = findViewById(R.id.editTextLoggingPassword);
        btn = findViewById(R.id.buttonLogging);
        tv = findViewById(R.id.textViewNewUser);

        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //startActivity(new Intent(LogingActivity.this,HomeActivity.class));
                String username = edUsername.getText().toString();
                String password = edPassword.getText().toString();
                DataBase db = new DataBase(getApplicationContext(),"helthcare",null,1);
                if (username.length() == 0 || password.length() == 0) {
                    Toast.makeText(getApplicationContext(), "Please Fill All Details", Toast.LENGTH_SHORT).show();
                } else {
                    if (db.loging(username,password)==1){
                        Toast.makeText(getApplicationContext(), "Login Success", Toast.LENGTH_SHORT).show();
                        SharedPreferences sharedpreferences = getSharedPreferences("shared_prefs", Context.MODE_PRIVATE);
                        SharedPreferences.Editor editor = sharedpreferences.edit();
                        editor.putString("username",username);
                        //to save our data with key and value
                        editor.apply();
                        startActivity(new Intent(LogingActivity.this,HomeActivity.class));

                    }else {

                        Toast.makeText(getApplicationContext(), "Invalid Username and Password", Toast.LENGTH_SHORT).show();
                    }
                }
            }
        });

        tv.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
               startActivity(new Intent(LogingActivity.this,RegisterActivity.class));
            }
        });


    }
}