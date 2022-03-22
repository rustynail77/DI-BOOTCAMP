//1 loop
for (i=1; i<=6; i++) {
    if (i==1) {console.log('*');}
    if (i==2) {console.log('**');}
    if (i==3) {console.log('***');}
    if (i==4) {console.log('****');}
    if (i==5) {console.log('*****');}
    if (i==6) {console.log('******');}
}

//nested loops
for (i=1; i<=6; i++) {
    let star = "";
    for (j=1; j<=i; j++) {
        star+="*";
    }
    console.log(star);
}