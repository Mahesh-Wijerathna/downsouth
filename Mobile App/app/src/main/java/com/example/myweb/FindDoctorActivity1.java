package com.example.myweb;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;

public class FindDoctorActivity1 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_find_doctor1);

        CardView exit = findViewById(R.id.cardFDBack);
        exit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(FindDoctorActivity1.this,HomeActivity.class));
            }
        });

        CardView familyphysician = findViewById(R.id.cardFDFamilyPhysician);
        familyphysician.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent it =new Intent(FindDoctorActivity1.this,DoctorDetailsActivity.class);
                it.putExtra("title","Family Physicians");
                startActivity(it);
            }
        });

        CardView diticiant = findViewById(R.id.cardFDDieticiant);
        diticiant.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent it =new Intent(FindDoctorActivity1.this,DoctorDetailsActivity.class);
                it.putExtra("title","Ditician");
                startActivity(it);
            }
        });

        CardView dentist = findViewById(R.id.cardFDDentist);
        dentist.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent it =new Intent(FindDoctorActivity1.this,DoctorDetailsActivity.class);
                it.putExtra("title","Dentist");
                startActivity(it);
            }
        });

        CardView surgon = findViewById(R.id.cardFDSurgon);
        surgon.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent it =new Intent(FindDoctorActivity1.this,DoctorDetailsActivity.class);
                it.putExtra("title","Surgon");
                startActivity(it);
            }
        });

        CardView cardiologist = findViewById(R.id.cardFDCardiologist);
        cardiologist.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent it =new Intent(FindDoctorActivity1.this,DoctorDetailsActivity.class);
                it.putExtra("title","Cardiologist");
                startActivity(it);
            }
        });


    }
}