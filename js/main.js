$('#one').click(function(){
   document.form.textview.value += 1;
});

$('#two').click(function(){
   document.form.textview.value += 2;
});

$('#three').click(function(){
   document.form.textview.value += 3;
});

$('#four').click(function(){
   document.form.textview.value += 4;
});

$('#five').click(function(){
   document.form.textview.value += 5;
});
$('#six').click(function(){
   document.form.textview.value += 6;
});

$('#seven').click(function(){
   document.form.textview.value += 7;
});

$('#eight').click(function(){
   document.form.textview.value += 8;
});

$('#nine').click(function(){
   document.form.textview.value += 9;
});


$('#zero').click(function(){
   document.form.textview.value += 0;
});


$('#divide').click(function(){
   document.form.textview.value += '/';
});

$('#multiply').click(function(){
   document.form.textview.value += '*';
});


$('#point').click(function(){
   document.form.textview.value += '.';
});

$('#plus').click(function(){
   document.form.textview.value += '+';
});

$('#minus').click(function(){
   document.form.textview.value += '-';
});

$('#clean').click(function(){
   document.form.textview.value = "";
});
$('#equal').click(function(){
   if (form.textview.value == '') {
      alert('Plese enter number');
   }
   else{
      document.form.textview.value = eval(document.form.textview.value);
   }
});