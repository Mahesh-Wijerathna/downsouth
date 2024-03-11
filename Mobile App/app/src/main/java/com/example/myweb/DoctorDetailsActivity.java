package com.example.myweb;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.ListView;
import android.widget.SimpleAdapter;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.HashMap;

public class DoctorDetailsActivity extends AppCompatActivity {

    private String[][]doctor_details1={
            {"Doctor Name : AAAAAAA", "Hospital Address : BBBBBB", "Exp : 5yrs", "Mobile NO : 0000000000","1600"},
            {"Doctor Name : AAAAAAA1", "Hospital Address : BBBBBB1", "Exp : 10yrs", "Mobile NO : 00000000001","16001"},
            {"Doctor Name : AAAAAAA2", "Hospital Address : BBBBBB2", "Exp : 15yrs", "Mobile NO : 00000000002","16002"},
            {"Doctor Name : AAAAAAA3", "Hospital Address : BBBBBB3", "Exp : 20yrs", "Mobile NO : 00000000003","16003"},
            {"Doctor Name : AAAAAAA4", "Hospital Address : BBBBBB4", "Exp : 25yrs", "Mobile NO : 00000000004","16004"},
    };

    private String[][]doctor_details2={
            {"Doctor Name : AAAAAAA5", "Hospital Address : BBBBBB5", "Exp : 5yrs", "Mobile NO : 00000000005","16005"},
            {"Doctor Name : AAAAAAA6", "Hospital Address : BBBBBB6", "Exp : 10yrs", "Mobile NO : 00000000006","16006"},
            {"Doctor Name : AAAAAAA7", "Hospital Address : BBBBBB7", "Exp : 15yrs", "Mobile NO : 00000000007","16007"},
            {"Doctor Name : AAAAAAA8", "Hospital Address : BBBBBB8", "Exp : 20yrs", "Mobile NO : 00000000008","16008"},
            {"Doctor Name : AAAAAAA9", "Hospital Address : BBBBBB9", "Exp : 25yrs", "Mobile NO : 00000000009","16009"},
    };

    private String[][]doctor_details3={
            {"Doctor Name : AAAAAAA11", "Hospital Address : BBBBBB11", "Exp : 10yrs", "Mobile NO : 000000000011","160011"},
            {"Doctor Name : AAAAAAA10", "Hospital Address : BBBBBB10", "Exp : 5yrs", "Mobile NO : 000000000010","160010"},
            {"Doctor Name : AAAAAAA12", "Hospital Address : BBBBBB12", "Exp : 15yrs", "Mobile NO : 000000000012","160012"},
            {"Doctor Name : AAAAAAA13", "Hospital Address : BBBBBB13", "Exp : 20yrs", "Mobile NO : 000000000013","160013"},
            {"Doctor Name : AAAAAAA14", "Hospital Address : BBBBBB14", "Exp : 25yrs", "Mobile NO : 000000000014","160014"},
    };

    private String[][]doctor_details4={

            {"Doctor Name : AAAAAAA15", "Hospital Address : BBBBBB15", "Exp : 10yrs", "Mobile NO : 000000000015","160015"},
            {"Doctor Name : AAAAAAA16", "Hospital Address : BBBBBB16", "Exp : 15yrs", "Mobile NO : 000000000016","160016"},
            {"Doctor Name : AAAAAAA17", "Hospital Address : BBBBBB17", "Exp : 20yrs", "Mobile NO : 000000000017","160017"},
            {"Doctor Name : AAAAAAA18", "Hospital Address : BBBBBB18", "Exp : 25yrs", "Mobile NO : 000000000018","160018"},
            {"Doctor Name : AAAAAAA19", "Hospital Address : BBBBBB19", "Exp : 5yrs", "Mobile NO : 000000000019","160019"},
    };

    private String[][]doctor_details5={
            {"Doctor Name : AAAAAAA20", "Hospital Address : BBBBBB20", "Exp : 5yrs", "Mobile NO : 000000000020","160020"},
            {"Doctor Name : AAAAAAA21", "Hospital Address : BBBBBB21", "Exp : 10yrs", "Mobile NO : 000000000021","160021"},
            {"Doctor Name : AAAAAAA22", "Hospital Address : BBBBBB22", "Exp : 15yrs", "Mobile NO : 000000000022","160022"},
            {"Doctor Name : AAAAAAA23", "Hospital Address : BBBBBB23", "Exp : 20yrs", "Mobile NO : 000000000023","160023"},
            {"Doctor Name : AAAAAAA24", "Hospital Address : BBBBBB24", "Exp : 25yrs", "Mobile NO : 000000000024","160024"},
    };
    TextView tv;
    Button btn;

    String[][] doctor_details = {};
    HashMap<String,String> item;
    ArrayList list;

    @SuppressLint("SuspiciousIndentation")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_doctor_details);

        tv = findViewById(R.id.textViewDDtitle);
        btn = findViewById(R.id.buttonLTBack);

        Intent it = getIntent();
        String title = it.getStringExtra("title");
        tv.setText(title);

        if (title.compareTo("Family Physiciant")==0)
            doctor_details=doctor_details1;
        else
        if (title.compareTo("Dietician")==0)
            doctor_details=doctor_details2;
        else
        if (title.compareTo("Dentist")==0)
            doctor_details=doctor_details3;
        else
        if (title.compareTo("Surgon")==0)
            doctor_details=doctor_details4;
        else
            doctor_details=doctor_details5;



            btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(DoctorDetailsActivity.this,FindDoctorActivity1.class));

            }
        });
            list= new ArrayList();
            for (int i=0;i<doctor_details.length;i++){
                item = new HashMap<String,String>();
                item.put("line1",doctor_details[i][0]);
                item.put("line2",doctor_details[i][1]);
                item.put("line3",doctor_details[i][2]);
                item.put("line4",doctor_details[i][3]);
                item.put("line5","Coin Fees: " +doctor_details[i][4]+"/=");
                list.add(item);
            }
        SimpleAdapter sa = new SimpleAdapter(this, list,
                R.layout.multi_lines, new String[]{"line1", "line2", "line3", "line4", "line5"},
                new int[]{R.id.line_a, R.id.line_b, R.id.line_c, R.id.line_d, R.id.line_e}
        );
        ListView lst = findViewById(R.id.listViewLD);
        lst.setAdapter(sa);


        lst.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                Intent it= new Intent(DoctorDetailsActivity.this,BookAppointmentActivity.class);
                it.putExtra("text1",title);
                it.putExtra("text2",doctor_details[i][0]);
                it.putExtra("text3",doctor_details[i][1]);
                it.putExtra("text4",doctor_details[i][3]);
                it.putExtra("text5",doctor_details[i][4]);
                startActivity(it);
            }
        });



    }
}