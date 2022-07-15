function usrWaypointCalc(){
    var wp1 = document.getElementById("wp1").value;
    var wp2 = document.getElementById("wp2").value;
    var wp3 = document.getElementById("wp3").value;
    var wp4 = document.getElementById("wp4").value;
    var wp5 = document.getElementById("wp5").value;
    var wp6 = document.getElementById("wp6").value;
    var wp7 = document.getElementById("wp7").value;
    var wp8 = document.getElementById("wp8").value;
    var wpArray = [wp1, wp2, wp3, wp4, wp5, wp6, wp7, wp8];

    var usrDist = wpArray;
    var usrTime = [];

    for (i=0; i<usrDist.length; i++){
        usrTime[i] = (60*usrDist[i])/crzVa;
    }


    function usrTb(){
        var usrTableInfo=[];
        for (i=0;i<usrDist.length;i++){
        usrTableInfo[i] = {Phase: 'User Leg '  + (i+1), 'Distance(NM)': usrDist[i], 'Time(min)': usrTime[i].toFixed(2)} 
        }
        return(usrTableInfo);
    }
    

    function displayUsrTable(){
        console.table([usrTb()]);
    }
    
    return(displayUsrTable());
}

//--------------------------------------------------------------------------


   


function Fpcalc(){
    var Vi = [];
    Vi.push(90, 120, 145);

    var clbVi = Vi[0];
    var crzVi = Vi[1];
    var desVi = Vi[2];

    var clbVa
    var crzVa
    var desVa

    var tocDist
    var crzDist
    var desDist

    var tocTime
    var crzTime
    var desTime

    var mca
    var mda

    var getFltLvl = document.getElementById("fltlvl").value;
    var getDepElev = document.getElementById("depElev").value;
    var getArrElev = document.getElementById("arrElev").value;
    var getTtlDist = document.getElementById("ttlDis").value;
    var userData = [getFltLvl, getArrElev, getDepElev, getTtlDist];

    var fltLvl = userData[0];
    var depElev = userData[1];
    var ttlDist = userData[3];
    var arrElev = userData[2];

    mca = (((fltLvl*100 - depElev)/2)+depElev)/100;

    mda = (((fltLvl*100 - arrElev)/2)+arrElev)/100;

    clbVa = ((((mca/10)*0.02)+100)/100)*Vi[0];
    tocDist = ((fltLvl*100)-depElev)/600;
    tocTime =  (clbVa/60)*tocDist;

    desVa = ((((mda/10)*0.02)+100)/100)*Vi[2];
    desTime = ((fltLvl*100)-arrElev)/600;
    desDist= (desVa/60)*desTime;

    crzVa = (((fltLvl*0.02)+100)/100)*Vi[1];
    crzDist = ttlDist - (tocDist+desDist);
    crzTime = (60*crzDist)/crzVa;
    
    function clbTb(){
        var clbTable = {Phase:'Climb', 'IAS(kt)': clbVi.toFixed(2),'TAS(kt)': clbVa.toFixed(2), 'Distance(NM)': tocDist.toFixed(2), 'Time(min)': tocTime.toFixed(2)}
        return(clbTable);
    }

    function desTb(){
        var desTable = {Phase:'Descent','IAS(kt)': desVi.toFixed(2), 'TAS(kt)': desVa.toFixed(2), 'Distance(NM)': desDist.toFixed(2), 'Time(min)': desTime.toFixed(2)}
        return(desTable);
    }

    function crzTb(){
        var crzTable = {Phase:'Cruise', 'IAS(kt)': crzVi.toFixed(2), 'TAS(kt)': crzVa.toFixed(2), 'Distance(NM)': crzDist.toFixed(2), 'Time(min)': crzTime.toFixed(2)} 
        return(crzTable);
    }

    function printTables(){
        console.table([clbTb()]);
        console.table([desTb()]);
        console.table([crzTb()]);
    }
    document.getElementById("TAS").innerHTML = crzVa;
    return(printTables());
}





