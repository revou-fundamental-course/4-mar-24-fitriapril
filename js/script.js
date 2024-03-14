let btn = document.getElementById('btn');
btn .addEventListener ('click',() => {
  const height = parseInt(document.getElementById ('height').value);
  const weight = parseInt(document.getElementById ('weight').value);
  const result = parseInt(document.getElementById ('output'));
  let height_status=false, weight_status=false;


  if(height === ''||isNaN(height) ||(height <= 0)){
    document.getElementById('height_error').innerHTML='Tinggi badan Error,ulangi dengan benar';
  }else{
    document.getElementById('height_error').innerHTML='';
    height_status=true;
  }
  if(weight === ''||isNaN(weight) ||(weight <= 0)){
    document.getElementById('weight_error').innerHTML='Berat badan Error,ulangi dengan benar';
  }else{
    document.getElementById('weight_error').innerHTML='';
    weight_status=true;
  }
  if(height_status && weight_status){
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
  
    if (bmi < 18.5) {
      result.innerHTML = "Underweight" + bmi;
    } else if (bmi >=18.5 && bmi < 25) {
      result.innerHTML = "Normal weight" + bmi;
    } else if (bmi < 30) {
      result.innerHTML = "Overweight"+ bmi;
    } else {
      alert('Hasil Error,Ulangi!');
      result.innerHTML ='';
    }
  
  }
});

