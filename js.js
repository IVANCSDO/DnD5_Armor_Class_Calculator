function calcular() {
    
    let dex=parseInt(document.getElementById("dex").value);
    let dexMax2=parseInt(document.getElementById("dex").value); //esta variable es como la destreza pero aplicada únicamente a algunos casos (más en línea 19)
    let con=parseInt(document.getElementById("con").value);
    let wis=parseInt(document.getElementById("wis").value);
    let int=parseInt(document.getElementById("int").value);


    if (dexMax2>2){  //esto es porque algunos tipos de armadura suman un máximo de "2" en el valor de destreza, por eso convierto todo valor superior a 2 en 2
        dexMax2=2
    }
    
    //bonuses

    let bonusArmaduraFinal=parseInt(document.getElementById("bonusM").value);
    
    if (document.getElementById("shieldO").checked==true) {
        shieldOBonusFinal=(2)
    }else{
        shieldOBonusFinal=(0)
    }

    if (document.getElementById("shieldFaith").checked==true) {
        shieldFaithFinal=(2)
    }else{
        shieldFaithFinal=(0)
    }
    
    if (document.getElementById("shieldC").checked==true) {
        shieldCBonusFinal=(5)
    }else{
        shieldCBonusFinal=(0)
    }
    
    if (document.getElementById("ringPro").checked==true) {
        ringProFinal=(1)
    }else{
        ringProFinal=(0)
    }

    if (document.getElementById("bracers").checked==true) {
        bracersFinal=(2)
    }else{
        bracersFinal=(0)
    }

    if (document.getElementById("bladesong").checked==true) {
        bladesongFinal=(int)
    }else{
        bladesongFinal=(0)
    }

    if (document.getElementById("haste").checked==true) {
        hasteFinal=(2)
    }else{
        hasteFinal=(0)
    }

    if (document.getElementById("defense").checked==true) {
        defenseFinal=(1)
    }else{
        defenseFinal=(0)
    }

    if (document.getElementById("dualW").checked==true) {
        dualFinal=(1)
    }else{
        dualFinal=(0)
    }

    let bonusExtra1Final=parseInt(document.getElementById("bonusExtra1").value);
    let bonusExtra2Final=parseInt(document.getElementById("bonusExtra2").value);
    let bonusExtra3Final=parseInt(document.getElementById("bonusExtra3").value);


    //variable que aplica todos los bonos
    let bonuses=(bonusArmaduraFinal+shieldOBonusFinal+shieldFaithFinal+shieldCBonusFinal+ringProFinal+bracersFinal+bladesongFinal+hasteFinal+defenseFinal+dualFinal+bonusExtra1Final+bonusExtra2Final+bonusExtra3Final);



    //bases
    document.getElementById("noArmor").value=(10+dex+bonuses);
    document.getElementById("barUnar").value=(10+dex+con+bonuses);
    document.getElementById("monUnar").value=(10+dex+wis+bonuses);
    document.getElementById("mageArm").value=(13+dex+bonuses);
    document.getElementById("dracRes").value=(13+dex+bonuses);

    //armaduras
    document.getElementById("11+dex").value=(11+dex+bonuses);
    document.getElementById("12+dex").value=(12+dex+bonuses);
    document.getElementById("12+dexMax2").value=(12+dexMax2+bonuses);
    document.getElementById("13+dexMax2").value=(13+dexMax2+bonuses);
    document.getElementById("14+dexMax2").value=(14+dexMax2+bonuses);
    document.getElementById("15+dexMax2").value=(15+dexMax2+bonuses);
    document.getElementById("14").value=(14+bonuses);
    document.getElementById("16").value=(16+bonuses);
    document.getElementById("17").value=(17+bonuses);
    document.getElementById("18").value=(18+bonuses);

}
