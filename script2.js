// CGPA

function calculate1() {
  var x1;
  var y1;
  var x2;
  var y2;
  var x3;
  var y3;
  var x4;
  var y4;
  var x5;
  var y5;
  var x6;
  var y6;
  var x7;
  var y7;
  var x8;
  var y8;
  x1 = document.querySelector("#sem1c").defaultValue = "0";
  x2 = document.querySelector("#sem1gpa").defaultValue = "0";
  x3 = document.querySelector("#sem2c").defaultValue = "0";
  x4 = document.querySelector("#sem2gpa").defaultValue = "0";
  x5 = document.querySelector("#sem3c").defaultValue = "0";
  x6 = document.querySelector("#sem3gpa").defaultValue = "0";
  x7 = document.querySelector("#sem4c").defaultValue = "0";
  x8 = document.querySelector("#sem4gpa").defaultValue = "0";
  y1 = document.querySelector("#sem5c").defaultValue = "0";
  y2 = document.querySelector("#sem5gpa").defaultValue = "0";
  y3 = document.querySelector("#sem6c").defaultValue = "0";
  y4 = document.querySelector("#sem6gpa").defaultValue = "0";
  y5 = document.querySelector("#sem7c").defaultValue = "0";
  y6 = document.querySelector("#sem7gpa").defaultValue = "0";
  y7 = document.querySelector("#sem8c").defaultValue = "0";
  y8 = document.querySelector("#sem8gpa").defaultValue = "0";
  x1 = parseFloat(document.querySelector("#sem1c").value);

  y1 = parseFloat(document.querySelector("#sem1gpa").value);
  x2 = parseFloat(document.querySelector("#sem2c").value);
  y2 = parseFloat(document.querySelector("#sem2gpa").value);

  x3 = parseFloat(document.querySelector("#sem3c").value);
  y3 = parseFloat(document.querySelector("#sem3gpa").value);

  x4 = parseFloat(document.querySelector("#sem4c").value);
  y4 = parseFloat(document.querySelector("#sem4gpa").value);

  x5 = parseFloat(document.querySelector("#sem5c").value);
  y5 = parseFloat(document.querySelector("#sem5gpa").value);

  x6 = parseFloat(document.querySelector("#sem6c").value);
  y6 = parseFloat(document.querySelector("#sem6gpa").value);
  x7 = parseFloat(document.querySelector("#sem7c").value);
  y7 = parseFloat(document.querySelector("#sem7gpa").value);

  x8 = parseFloat(document.querySelector("#sem8c").value);
  y8 = parseFloat(document.querySelector("#sem8gpa").value);

  var c = parseFloat(x1 * y1 + x2 * y2 + x3 * y3 + x4 * y4 + x5 * y5 + x6 * y6 + x7 * y7 + x8 * y8);
  var d = parseFloat(x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8);
  var e = parseFloat(c / d);
  var n = e.toFixed(2);
  document.querySelector("#result1").innerHTML = "YOUR CGPA IS :   " + n;
}



// GPA
function calculate2() {
  var n1;
  var m1;
  var n2;
  var m2;
  var n3;
  var m3;
  var n4;
  var m4;
  var n5;
  var m5;
  var n6;
  var m6;
  var n7;
  var m7;
  var n8;
  var m8;
  var n9;
  var m9;
  var n10;
  var m10;
  var n11;
  var m11;



  n1 = document.querySelector("#g1").defaultValue = "0";
  m1 = document.querySelector("#c1").defaultValue = "0";
  n2 = document.querySelector("#g2").defaultValue = "0";
  m2 = document.querySelector("#c2").defaultValue = "0";
  n3 = document.querySelector("#g3").defaultValue = "0";
  m3 = document.querySelector("#c3").defaultValue = "0";
  n4 = document.querySelector("#g4").defaultValue = "0";
  m4 = document.querySelector("#c4").defaultValue = "0";
  n5 = document.querySelector("#g5").defaultValue = "0";
  m5 = document.querySelector("#c5").defaultValue = "0";
  n6 = document.querySelector("#g6").defaultValue = "0";
  m6 = document.querySelector("#c6").defaultValue = "0";
  n7 = document.querySelector("#g7").defaultValue = "0";
  m7 = document.querySelector("#c7").defaultValue = "0";
  n8 = document.querySelector("#g8").defaultValue = "0";
  m8 = document.querySelector("#c8").defaultValue = "0";
  n9 = document.querySelector("#g9").defaultValue = "0";
  m9 = document.querySelector("#c9").defaultValue = "0";
  n10 = document.querySelector("#g10").defaultValue = "0";
  m10 = document.querySelector("#cr10").defaultValue = "0";
  n11 = document.querySelector("#g10").defaultValue = "0";
  m11 = document.querySelector("#cr11").defaultValue = "0";
  n11 = document.querySelector("#g11").defaultValue = "0";

  n1 = document.querySelector("#g1").value;
  m1 = document.querySelector("#c1").value;
  n2 = document.querySelector("#g2").value;
  m2 = document.querySelector("#c2").value;
  n3 = document.querySelector("#g3").value;
  m3 = document.querySelector("#c3").value;
  n4 = document.querySelector("#g4").value;
  m4 = document.querySelector("#c4").value;
  n5 = document.querySelector("#g5").value;
  m5 = document.querySelector("#c5").value;
  n5 = document.querySelector("#g6").value;
  m6 = document.querySelector("#c6").value;
  n7 = document.querySelector("#g7").value;
  m7 = document.querySelector("#c7").value;
  n8 = document.querySelector("#g8").value;
  m8 = document.querySelector("#c8").value;
  n9 = document.querySelector("#g9").value ;
  m9 = document.querySelector("#c9").value ;
  n10 = document.querySelector("#g10").value ;
  m10 = document.querySelector("#cr10").value ;
  n11 = document.querySelector("#g10").value ;
  m11 = document.querySelector("#cr11").value;
  n11 = document.querySelector("#g11").value;

  var l1 = [n1, n2, n3, n4, n5, n6, n7, n8,n9,n10,n11];
  var l2 = [m1, m2, m3, m4, m5, m6, m7, m8,m9,m10,m11];
  var l3 = [];
  var j = 0;
  var k = 0;
  var sum2 = 0;
  var sum = 0;

  var ar1 = [];
  var i = 0;
  var p1=0;
  var p2=0;


  for (i = 0; i <l1.length; i++) {
    if (l1[i] == "S") {
      if (l2[i] == "four") {
         p1 = 10 * 4;
      } else if (l2[i] == "three") {
        p1 = 10 * 3;
      } else if (l2[i] == "two") {
         p1 = 10 * 2;
      } else if (l2[i] == "one") {
        p1 = 10 * 1;
      }

    } else if (l1[i] == "A") {
      if (l2[i] == "four") {
         p1 = 9 * 4;
      } else if (l2[i] == "three") {
         p1 = 9 * 3;
      } else if (l2[i] == "two") {
       p1 = 9 * 2;
      } else if (l2[i] == "one") {
         p1 = 9 * 1;
      }

    } else if (l1[i] == "B") {
      if (l2[i] == "four") {
        p1 = 8 * 4;
      } else if (l2[i] == "three") {
        p1 = 8 * 3;
      } else if (l2[i] == "two") {
         p1 = 8 * 2;
      } else if (l2[i] == "one") {
       p1 = 8 * 1;
      }

    } else if (l1[i] == "C") {
      if (l2[i] == "four") {
         p1 = 7 * 4;
      } else if (l2[i] == "three") {
         p1 = 7 * 3;
      } else if (l2[i] == "two") {
         p1 = 7 * 2;
      } else if (l2[i] == "one") {
         p1 = 7 * 1;
      }

    } else if (l1[i] == "D") {
      if (l2[i] == "four") {
         p1 = 6 * 4;
      } else if (l2[i] == "three") {
         p1 = 6 * 3;
      } else if (l2[i] == "two") {
       p1 = 6 * 2;
      } else if (l2[i] == "one") {
        p1 = 6 * 1;
      }

    } else if (l1[i] == "E") {
      if (l2[i] == "four") {
         p1 = 5 * 4;
      } else if (l2[i] == "three") {
         p1 = 5 * 3;
      } else if (l2[i] == "two") {
         p1 = 5 * 2;
      } else if (l2[i] == "one") {
         p1 = 5 * 1;
      }

    } else if (l1[i] == "N") {
      if (l2[i] == "four") {
         p1 = 0 * 4;
      } else if (l2[i] == "three") {
         p1 = 0 * 3;
      } else if (l2[i] == "two") {


        p1 = 0 * 2;
      } else if (l2[i] == "one") {
         p1 = 0 * 1;
      }



    }else{
       p1=0*0;
    }
    ar1.push(p1);
  }
  for (i = 0; i <l2.length; i++) {

    if (l2[i] == "four") {

       p2 = 4;
    } else if (l2[i] == "three") {
       p2 = 3;
    } else if (l2[i] == "two") {
       p2 = 2;

    } else if (l2[i] == "one") {
       p2 = 1;
    }else{
       p2=0;
    }




    l3.push(p2);


  }



  for (k = 0; k < ar1.length; k++) {

    sum = parseFloat(sum + ar1[k]);





  }
  for (j = 0; j <l3.length; j++) {

    sum2 = parseFloat(sum2 + l3[j]);


  }



  var h1 = parseFloat(sum / sum2);
  var h2 = h1.toFixed(2);


  document.querySelector("#result2").innerHTML = "YOUR GPA IS  " + h2;







}
