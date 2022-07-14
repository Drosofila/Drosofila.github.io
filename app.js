
function getUsrData(){
    var getFltLvl = document.getElementById("fltlvl").value;
    var getDepElev = document.getElementById("depElev").value;

    var getArrElev = document.getElementById("arrElev").value;
    var getTtlDist = document.getElementById("ttlDis").value;
    var userData = [getFltLvl, getArrElev, getDepElev, getTtlDist];
    return userData;
} 





function Fpcalc(){
    let browserData = getUsrData();

    let fltLvl = browserData[0];
    let depElev = browserData[1];
    let ttlDist = browserData[3];
    let arrElev = browserData[2];

    let mca = (((fltLvl*100 - depElev)/2)+depElev)/100;

    let mda = (((fltLvl*100 - arrElev)/2)+arrElev)/100;

    let Vi = [];
    Vi.push(90, 120, 145);

    let clbVi = Vi[0];
    let crzVi = Vi[1];
    let desVi = Vi[2];

    let clbVa = (((mca/10)*0.02)+1)*Vi[0];
    let tocDist = ((fltLvl*100)-depElev)/600;
    let tocTime =  (clbVa/60)*tocDist;

    let desVa = (((mda/10)*0.02)+1)*Vi[2];
    let desTime = ((fltLvl*100)-arrElev)/600;
    let desDist= (desVa/60)*desTime;

    let crzVa = ((fltLvl*0.02)+1)*Vi[1];
    let crzDist = ttlDist - (tocDist+desDist);
    let crzTime = (60*crzDist)/crzVa;

    let usrDist = [12,23,15];
    let usrTime = [];

    for (i=0; i<usrDist.length; i++){
        usrTime[i] = (60*usrDist[i])/crzVa;
        // console.log(usrTime[i].toFixed(2)," min");
    }

    let clbTable = {Phase:'Climb', 'IAS(kt)': clbVi.toFixed(2),'TAS(kt)': clbVa.toFixed(2), 'Distance(NM)': tocDist.toFixed(2), 'Time(min)': tocTime.toFixed(2)}
    let desTable = {Phase:'Descent','IAS(kt)': desVi.toFixed(2), 'TAS(kt)': desVa.toFixed(2), 'Distance(NM)': desDist.toFixed(2), 'Time(min)': desTime.toFixed(2)}
    let crzTable = {Phase:'Cruise', 'IAS(kt)': crzVi.toFixed(2), 'TAS(kt)': crzVa.toFixed(2), 'Distance(NM)': crzDist.toFixed(2), 'Time(min)': crzTime.toFixed(2)} 

    let usrTableInfo=[];
    for (i=0;i<usrDist.length;i++){
        usrTableInfo[i] = {Phase: 'User Leg '  + (i+1), 'Distance(NM)': usrDist[i], 'Time(min)': usrTime[i].toFixed(2)} 
    }

    // console.table([clbTable]);
    // console.table([crzTable]);
    // console.table([desTable]);

    // console.table(usrTableInfo);
}





